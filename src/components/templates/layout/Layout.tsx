// Libs
import React, { FC, memo, ReactNode, useEffect } from 'react'
import styles from './layout.module.scss'
import { BurgerMenu, Footer, Header } from '@components/templates'
import { useRouter } from 'next/router'
import { useAppContext } from '@stores/context'
import { ButtonScrollToTop } from '@components/ui'

// Interface
interface ILayout {
  children: ReactNode
}

// Component
const Layout: FC<ILayout> = ({ children }) => {
  // Context
  const { burgerMenu, setBurgerMenu } = useAppContext()
  // Router
  const { route } = useRouter()
  // Watch from scroll
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [route])

  // Return
  return (
    <>
      {route !== '/404' && <Header />}

      <main className={styles.layout}>{children}</main>

      {route !== '/404' && <Footer />}

      <BurgerMenu active={burgerMenu} setActive={(e) => setBurgerMenu(e)} />

      <ButtonScrollToTop />
    </>
  )
}

export default memo(Layout)
