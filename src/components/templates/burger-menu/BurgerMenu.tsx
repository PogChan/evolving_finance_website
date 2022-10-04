// Libs
import React, { FC, memo, useEffect } from 'react'
import styles from './burger-menu.module.scss'
import { useGetHeaderQuery } from '@generated/graphql'
import { useRouter } from 'next/router'
import { Button } from '@components/ui'
import { NavLink } from '@components/templates'

// Interface
interface IBurgerMenu {
  active: boolean
  setActive: (e: boolean) => void
}

// Component
const BurgerMenu: FC<IBurgerMenu> = ({ active = false, setActive }) => {
  // Router
  const { push } = useRouter()
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

        <div
          className={styles.burger_menu__link_btn}
          onClick={() => push(data?.getHeader?.data[0]?.loginBtn.href || '')}
        >
          <Button className={styles.burger_menu__btn}>
            {data?.getHeader?.data[0]?.loginBtn.name}
          </Button>
        </div>

        <div
          className={styles.burger_menu__link_btn}
          onClick={() => push(data?.getHeader?.data[0]?.loginBtn.href || '')}
        >
          <Button className={styles.burger_menu__btn} variant={'secondary'}>
            {data?.getHeader?.data[0]?.startHereBtn.name}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(BurgerMenu)
