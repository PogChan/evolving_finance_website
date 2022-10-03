// Libs
import React, { FC, memo } from 'react'
import styles from './nav-link.module.scss'
import { useRouter } from 'next/router'

// Interface
interface INavLink {
  navLinks:
    | {
        name: string
        href: string
      }[]
    | null
    | undefined
  variant?: 'row' | 'column'
}

// Component
const NavLink: FC<INavLink> = ({ navLinks, variant = 'row' }) => {
  // Router
  const { push, pathname } = useRouter()
  // Return
  return (
    <ul className={`${styles.nav_link} ${variant === 'column' ? styles.column : ''}`}>
      {navLinks &&
        navLinks?.map((item, i) => (
          <li
            key={`${item.name} ${i}`}
            className={`${styles.nav_link__item} ${variant === 'column' ? styles.column : ''} ${
              pathname === item.href ? styles.active : ''
            }`}
            onClick={() => push(item.href)}
          >
            {item.name}
          </li>
        ))}
    </ul>
  )
}

export default memo(NavLink)
