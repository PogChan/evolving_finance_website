// Libs
import React, { FC, memo } from 'react'
import styles from './client-card.module.scss'
import { LazyImage } from '@components/elements'

// Interface
interface IClientCard {
  icon: string
  text: string
  title: string
}

// Component
const ClientCard: FC<IClientCard> = ({ icon, text, title }) => {
  // Return
  return (
    <div className={styles.client_card}>
      <div className={styles.client_card__photo}>
        <LazyImage src={icon} width={89} height={89} />
      </div>

      <p className={styles.client_card__text}>{text}</p>

      <h3 className={styles.client_card__title}>{title}</h3>
    </div>
  )
}

export default memo(ClientCard)