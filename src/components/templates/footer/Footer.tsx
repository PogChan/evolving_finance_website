// Libs
import React, { FC, memo } from 'react'
import styles from './footer.module.scss'
import container from '@styles/modules/container.module.scss'
import parse from 'html-react-parser'
import { useGetFooterQuery } from '@generated/graphql'
import { useRouter } from 'next/router'

// Component
const Footer: FC = () => {
  // Router
  const { push } = useRouter()
  // Get footer data
  const { data } = useGetFooterQuery()

  // Return
  return (
    <div className={`${container.container_main} ${styles.footer}`}>
      <div className={styles.footer__content}>
        {data?.getFooter?.data[0]?.footerLinks?.map((item, i) => (
          <div key={`${item.name} ${i}`}>
            <div className={styles.footer__title}>{item.name}</div>

            {item.links?.map((el) => (
              <div key={el.name} className={styles.footer__links} onClick={() => push(el.href)}>
                {el.name}
              </div>
            ))}
          </div>
        ))}

        <div>
          <div className={`${styles.footer__title}`}>
            {data?.getFooter?.data[0]?.footerSocialTitle}
          </div>

          <div className={styles.footer__social_links}>
            {data?.getFooter?.data[0]?.footerSocialIcons?.map((el, i) => (
              <div key={`${el.href} ${i}`} onClick={() => window.open(el.href, '_ blank')}>
                {parse(el.icon)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom_links}>
        {data?.getFooter?.data[0]?.footerBottomLinks?.map((el, i) => (
          <div
            key={`${el.name} ${i}`}
            className={`${el.href.length > 0 ? styles.active : ''}`}
            onClick={() => push(el.href)}
          >
            {el.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Footer)
