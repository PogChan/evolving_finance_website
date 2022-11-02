// Libs
import type { NextPage } from 'next'
import styles from './index.module.scss'
import container from '@styles/modules/container.module.scss'
import text from '@styles/modules/text.module.scss'
import { addApolloState, initializeApollo } from '@graphql/client/connect'
import {
  GetFooterDocument,
  GetHeaderDocument,
  GetHomePageDocument,
  useGetHomePageQuery,
} from '@generated/graphql'
import parse from 'html-react-parser'
import { Button } from '@components/ui'
import { useMemo } from 'react'
import { LazyImage } from '@components/elements'
import { LineIco } from '@constants/icons'
import { ClientCard, InfoCard } from '@components/templates'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { appearanceAnim } from '@constants/framer-motion'
import { useMatchMedia } from '@hooks'

// Page
const Home: NextPage = () => {
  // Get home page
  const { data: dataServer } = useGetHomePageQuery({
    variables: {
      input: {
        search: '',
      },
    },
  })
  // Data
  const data = useMemo(() => dataServer?.getHomePage?.data[0], [dataServer])
  // Match media
  const { isMobile } = useMatchMedia()

  // Return
  return (
    <LazyMotion features={domAnimation}>
      <div
        style={{
          backgroundImage: `url(${data?.mainBlock.bgImg})`,
        }}
        className={`${container.container_main} ${styles.home_page}`}
      >
        <div
          className={`${container.container_top} ${container.container_100vh} ${styles.home_page__main_block}`}
        >
          <m.div
            className={styles.home_page__main_block__description}
            initial={'initial'}
            whileInView={'animate'}
            viewport={appearanceAnim.left.viewport}
          >
            <m.h5
              className={`${text.h_5} ${text.color_gold} ${text.uppercase} ${text.font_montserrat}`}
              variants={appearanceAnim.left}
            >
              {parse(data?.mainBlock.subTitle || '')}
            </m.h5>

            <m.h2 className={text.h_2} custom={1} variants={appearanceAnim.left}>
              {parse(data?.mainBlock.title || '')}
            </m.h2>

            <m.p
              className={`${text.p_m} ${text.font_montserrat}`}
              custom={2}
              variants={appearanceAnim.left}
            >
              {parse(data?.mainBlock.underTitle || '')}
            </m.p>

            <m.div
              className={styles.home_page__main_block__btns}
              initial={'initial'}
              whileInView={'animate'}
              viewport={appearanceAnim.left.viewport}
            >
              <m.div custom={4} variants={appearanceAnim.scale}>
                <Button
                  variant={'secondary'}
                  size={'large'}
                  onClick={() => window.open(data?.mainBlock.primaryBtn.href || '', '_ blank')}
                >
                  {data?.mainBlock.primaryBtn.name}
                </Button>
              </m.div>

              <m.div custom={5} variants={appearanceAnim.scale}>
                <Button
                  size={'large'}
                  onClick={() => window.open(data?.mainBlock.secondaryBtn.href || '', '_ blank')}
                >
                  {data?.mainBlock.secondaryBtn.name}
                </Button>
              </m.div>
            </m.div>
          </m.div>
        </div>
      </div>

      <div
        className={`${container.container_main} ${styles.home_page__center_block_a}`}
        id={'block-a'}
      >
        <div className={styles.home_page__center_block_a__content}>
          <m.div
            className={styles.home_page__center_block_a__description}
            initial={'initial'}
            whileInView={'animate'}
            viewport={appearanceAnim.viewportCustom({ amount: 0.6 })}
          >
            <div className={text.hidden}>
              <m.h2 className={text.h_2} variants={appearanceAnim.bottomHidden} custom={1}>
                {parse(data?.centerBlockA.title || '')}
              </m.h2>
            </div>

            <div className={text.hidden}>
              <m.p
                className={`${text.p_m} ${text.font_montserrat}`}
                variants={appearanceAnim.topHidden}
                custom={2}
              >
                {parse(data?.centerBlockA.underTitle || '')}
              </m.p>
            </div>
          </m.div>

          <div className={styles.home_page__center_block_a__info_list}>
            {data?.centerBlockA.infoList.map((el, i) => (
              <m.div
                key={`${el.title} ${i}`}
                variants={appearanceAnim.right}
                custom={isMobile ? 0 : i % 2 ? 1 : 0}
                initial={'initial'}
                whileInView={'animate'}
                viewport={appearanceAnim.viewportCustom({ amount: 0.2 })}
                style={{ display: 'flex' }}
              >
                <InfoCard icon={parse(el.icon)} title={parse(el.title)} text={parse(el.text)} />
              </m.div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${container.container_main} ${styles.home_page} ${styles.home_page__center_block_b}`}
      >
        <div>
          <div className={styles.home_page__center_block_b__content}>
            <LazyImage src={data?.centerBlockB || ''} width={184} height={194} />
          </div>
        </div>
      </div>

      <div className={`${container.container_main} ${styles.home_page}`} id={'block-c'}>
        <div className={styles.home_page__center_block_c}>
          <m.h3
            className={`${text.h_1} ${styles.home_page__center_block_c__title}`}
            variants={appearanceAnim.top}
            initial={'initial'}
            whileInView={'animate'}
            viewport={appearanceAnim.viewportCustom({ amount: 0.75 })}
          >
            {parse(data?.centerBlockC.title || '')}

            <span className={styles.home_page__center_block_c__line}>
              <LineIco />
            </span>
          </m.h3>

          <div className={styles.home_page__center_block_c__info_list}>
            {data?.centerBlockC.infoList.map((el, i) => (
              <div
                key={`${el.title} ${i}`}
                className={`${styles.home_page__center_block_c__info_item} ${
                  i % 2 !== 0 ? styles.revers : ''
                }`}
              >
                <m.div
                  variants={i % 2 ? appearanceAnim.right : appearanceAnim.left}
                  initial={'initial'}
                  whileInView={'animate'}
                  viewport={appearanceAnim.viewportCustom({ amount: 0.25 })}
                >
                  <LazyImage src={el.img} width={578} height={350} objectFit={'contain'} />
                </m.div>

                <m.div
                  className={styles.home_page__center_block_c__description}
                  initial={'initial'}
                  whileInView={'animate'}
                  viewport={appearanceAnim.viewportCustom({ amount: 0.25 })}
                >
                  <m.p
                    className={`${text.p_m} ${text.color_gold} ${text.font_montserrat}`}
                    variants={i % 2 ? appearanceAnim.left : appearanceAnim.right}
                  >
                    {parse(el.subTitle)}
                  </m.p>

                  <m.div
                    className={text.h_3}
                    style={{ maxWidth: '455px' }}
                    custom={1}
                    variants={i % 2 ? appearanceAnim.left : appearanceAnim.right}
                  >
                    {parse(el.title)}
                  </m.div>

                  <m.p
                    className={text.p_m}
                    custom={2}
                    variants={i % 2 ? appearanceAnim.left : appearanceAnim.right}
                  >
                    {parse(el.text)}
                  </m.p>
                </m.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${container.container_main} ${styles.home_page}`}>
        <div className={styles.home_page__bottom_block}>
          <m.h3
            className={`${text.h_1} ${styles.home_page__bottom_block__title}`}
            variants={appearanceAnim.top}
            initial={'initial'}
            whileInView={'animate'}
            viewport={appearanceAnim.viewportCustom({ amount: 0.75 })}
          >
            {parse(data?.blockBottom.title || '')}

            <span className={styles.home_page__bottom_block__line}>
              <LineIco />
            </span>
          </m.h3>

          <div className={styles.home_page__bottom_block__list_clients}>
            {data?.blockBottom.listClients.map((el, i) => (
              <m.div
                key={`${el.title} ${i}`}
                custom={isMobile ? 0 : i % 2 ? 1 : i % 3 ? 2 : i % 4 ? 3 : 0}
                variants={appearanceAnim.bottom}
                initial={'initial'}
                whileInView={'animate'}
                viewport={appearanceAnim.viewportCustom({ amount: 0.2 })}
                style={{ display: 'flex' }}
              >
                <ClientCard icon={el.icon} title={parse(el.title)} text={parse(el.text)} />
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}

export default Home

// Ssr
// export async function getStaticProps() {
//   const apolloClient = initializeApollo()
//   // Home page data
//   await apolloClient.query({
//     query: GetHomePageDocument,
//     variables: {
//       input: {
//         search: '',
//       },
//     },
//   })
//   // Header data
//   await apolloClient.query({ query: GetHeaderDocument })
//   // Footer data
//   await apolloClient.query({ query: GetFooterDocument })
//
//   // Return
//   return addApolloState(apolloClient, {
//     props: {},
//     revalidate: 1,
//   })
// }
