// Libs
import React, { FC, memo } from 'react'
import styles from './client-card.module.scss'
import { LazyImage } from '@components/elements'

// Interface
interface IClientCard {
  icon: string
  title: string | JSX.Element | JSX.Element[]
  text: string | JSX.Element | JSX.Element[]
}

// Component
const ClientCard: FC<IClientCard> = ({ icon, text, title }) => {
  // Return
  return (
    <div className={styles.client_card}>
      <div className={styles.client_card__photo}>
        <LazyImage src={icon} width={300} height={300} />
      </div>

      <p className={styles.client_card__text}>{text}</p>

      <h3 className={styles.client_card__title}>{title}</h3>
    </div>
  )
}

export default memo(ClientCard)
