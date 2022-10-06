import dynamic from 'next/dynamic'

export { default as Button } from './button/Button'
export const ButtonBurgerMenu = dynamic(() => import('./button-burger-menu/ButtonBurgerMenu'), {
  ssr: false,
})
export const ButtonScrollToTop = dynamic(() => import('./button-scroll-to-top/ButtonScrollToTop'), {
  ssr: false,
})
