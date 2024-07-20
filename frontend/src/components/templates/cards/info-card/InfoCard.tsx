// Libs
import React, { FC, memo } from 'react'
import styles from './info-card.module.scss'

// Interface
interface IInfoCard {
  icon: string | JSX.Element | JSX.Element[]
  title: string | JSX.Element | JSX.Element[]
  text: string | JSX.Element | JSX.Element[]
}

// Component
const InfoCard: FC<IInfoCard> = ({ icon, title, text }) => {
  // Return
  return (
    <div className={styles.info_card}>
      <div className={styles.info_card__svg}>{icon}</div>

      <div className={styles.info_card__title}>{title}</div>

      <p className={styles.info_card__text}>{text}</p>
    </div>
  )
}

export default memo(InfoCard)
