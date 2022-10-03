// Libs
import React, { CSSProperties, FC, memo, ReactNode } from 'react'
import styles from './button.module.scss'

// Interface
interface IButton {
  svg?: ReactNode
  type?: 'button' | 'submit'
  size?: 'small' | 'large'
  variant?: 'primary' | 'secondary' | 'svg-primary' | 'svg-secondary'
  children?: string
  onClick?: () => void
  loading?: boolean
  disable?: boolean
  style?: CSSProperties
}

// Component
const Button: FC<IButton> = ({
  svg,
  type = 'button',
  size,
  variant = 'primary',
  children,
  onClick,
  loading,
  disable,
  style,
}) => {
  // Return
  return (
    <button
      type={type}
      className={`${styles.button} 
      ${size === 'large' ? styles.large : ''}
      ${variant === 'secondary' ? styles.secondary : ''}
      ${variant === 'svg-primary' ? styles.svg_primary : ''}
      ${variant === 'svg-secondary' ? styles.svg_secondary : ''}
      ${disable ? styles.disable : ''}
      ${loading ? styles.loading : ''}
      ${svg ? styles.svg : ''}`}
      onClick={onClick}
      disabled={disable}
      style={style}
    >
      {svg ? (
        <div className={styles.button__svg}>
          <div>{svg}</div>
          <div> {children}</div>
        </div>
      ) : (
        children
      )}

      <div
        className={`${styles.button__preloader} 
        ${loading ? styles.loading : ''} 
        ${disable ? styles.disable : ''}`}
      >
        <div className={styles.loader} />
      </div>
    </button>
  )
}

export default memo(Button)
