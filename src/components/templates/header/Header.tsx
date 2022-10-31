// Libs
import React, { FC, memo } from 'react'
import styles from './header.module.scss'
import container from '@styles/modules/container.module.scss'
import { useGetHeaderQuery } from '@generated/graphql'
import { Button, ButtonBurgerMenu } from '@components/ui'
import { NavLink } from '@components/templates'
import { useAppContext } from '@stores/context'
import Link from 'next/link'

// Component
const Header: FC = () => {
  // Context
  const { burgerMenu, setBurgerMenu } = useAppContext()
  // Get header data
  const { data } = useGetHeaderQuery()

  // Return
  return (
    <header
      className={`${container.container_main} ${styles.header}`}
      onClick={() => burgerMenu && setBurgerMenu(false)}
    >
      <div className={styles.header__content}>
        <div
          className={styles.header__header_logo}
          style={{ backgroundImage: `url(${data?.getHeader?.data[0]?.headerLogo})` }}
        />

        <div className={styles.header__nav_link}>
          <NavLink navLinks={data?.getHeader?.data[0]?.headerNavMenu} />
        </div>

        <Link href={data?.getHeader?.data[0]?.headerBtnA.href || ''}>
          <a className={styles.header__log_in} target={'_blank'} rel={'noopener noreferrer'}>
            {data?.getHeader?.data[0]?.headerBtnA.name}
          </a>
        </Link>

        <Link href={data?.getHeader?.data[0]?.headerBtnB.href || ''}>
          <a
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={styles.header__start_here_btn}
          >
            <Button variant={'secondary'}>{data?.getHeader?.data[0]?.headerBtnB?.name}</Button>
          </a>
        </Link>

        <div className={styles.header__burger_menu_btn} onClick={(e) => e.stopPropagation()}>
          <ButtonBurgerMenu value={burgerMenu} onChange={() => setBurgerMenu(!burgerMenu)} />
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
