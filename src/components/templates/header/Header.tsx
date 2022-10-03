// Libs
import React, { FC, memo } from 'react'
import styles from './header.module.scss'
import container from '@styles/modules/container.module.scss'
import { LazyImage } from '@components/elements'
import { useGetHeaderQuery } from '@generated/graphql'
import { Button, ButtonBurgerMenu } from '@components/ui'
import { NavLink } from '@components/templates'
import { useAppContext } from '@stores/context'

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
        <div className={styles.header__header_logo}>
          <LazyImage width={'228px'} height={'67px'} src={`${data?.getHeader?.data[0]?.headerLogo}` || ''} />
        </div>

        <div className={styles.header__nav_link}>
          <NavLink navLinks={data?.getHeader?.data[0]?.headerNavMenu} />
        </div>

        <div className={styles.header__log_in}>{data?.getHeader?.data[0]?.loginBtn.name}</div>

        <div className={styles.header__start_here_btn}>
          <Button variant={'secondary'}>{data?.getHeader?.data[0]?.startHereBtn?.name}</Button>
        </div>

        <div className={styles.header__burger_menu_btn} onClick={(e) => e.stopPropagation()}>
          <ButtonBurgerMenu value={burgerMenu} onChange={() => setBurgerMenu(!burgerMenu)} />
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
