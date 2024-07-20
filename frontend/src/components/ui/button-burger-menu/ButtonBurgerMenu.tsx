// Libs
import { FC } from 'react'
import styles from './button-burger-menu.module.scss'

// Interface
interface IButtonBurgerMenu {
  value: boolean
  onChange: () => void
}

// Component
const ButtonBurgerMenu: FC<IButtonBurgerMenu> = ({ value = false, onChange }) => {
  // Return
  return (
    <div className={styles.button_burger_menu} onClick={onChange}>
      <div className={`${styles.button_burger_menu__item} ${value ? styles.active : ''}`} />
      <div className={`${styles.button_burger_menu__item} ${value ? styles.active : ''}`} />
      <div className={`${styles.button_burger_menu__item} ${value ? styles.active : ''}`} />
    </div>
  )
}

export default ButtonBurgerMenu
