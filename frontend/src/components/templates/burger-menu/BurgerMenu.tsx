// Libs
import React, { FC, memo, useEffect } from 'react'
import styles from './burger-menu.module.scss'
import { useGetHeaderQuery } from '@generated/graphql'
import { Button } from '@components/ui'
import { NavLink } from '@components/templates'
import Link from 'next/link'

// Interface
interface IBurgerMenu {
  active: boolean
  setActive: (e: boolean) => void
}

// Component
const BurgerMenu: FC<IBurgerMenu> = ({ active = false, setActive }) => {
  // Change active
  const handleSetActive = () => setActive(!active)
  // Get header data
  const { data } = useGetHeaderQuery()
  // Watch from burger active
  useEffect(() => {
    const html = document.querySelector('html')

    if (active && html) {
      html.style.overflow = 'hidden'
    } else if (!active && html) html.style.overflow = 'auto'
  }, [active])

  // Return
  return (
    <div
      className={`${styles.burger_menu} ${active ? styles.active : ''}`}
      onClick={handleSetActive}
    >
      <div className={styles.burger_menu__content}>
        <div className={styles.burger_menu__nav_link}>
          <NavLink variant={'column'} navLinks={data?.getHeader?.data[0]?.headerNavMenu} />
        </div>

        <Link href={data?.getHeader?.data[0]?.headerBtnA.href || ''}>
          <a className={styles.burger_menu__link_btn} target={'_blank'} rel={'noopener noreferrer'}>
            <Button className={styles.burger_menu__btn}>
              {data?.getHeader?.data[0]?.headerBtnA.name}
            </Button>
          </a>
        </Link>

        <Link href={data?.getHeader?.data[0]?.headerBtnB.href || ''}>
          <a className={styles.burger_menu__link_btn} target={'_blank'} rel={'noopener noreferrer'}>
            <Button className={styles.burger_menu__btn} variant={'secondary'}>
              {data?.getHeader?.data[0]?.headerBtnB.name}
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default memo(BurgerMenu)
