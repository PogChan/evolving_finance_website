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
import Link from 'next/link'

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

  // Return
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${data?.mainBlock.bgImg})`,
        }}
        className={`${container.container_main} ${styles.home_page}`}
      >
        <div
          className={`${container.container_top} ${container.container_100vh} ${styles.home_page__main_block}`}
        >
          <div className={styles.home_page__main_block__description}>
            <h5
              className={`${text.h_5} ${text.color_gold} ${text.uppercase} ${text.font_montserrat}`}
            >
              {parse(data?.mainBlock.subTitle || '')}
            </h5>

            <h2 className={`${text.h_2}`}>{parse(data?.mainBlock.title || '')}</h2>

            <p className={`${text.p_m} ${text.font_montserrat}`}>
              {parse(data?.mainBlock.underTitle || '')}
            </p>

            <div className={styles.home_page__main_block__btns}>
              <Link href={data?.mainBlock.primaryBtn.href || ''}>
                <a target={'_blank'} rel={'noopener noreferrer'}>
                  <Button variant={'secondary'} size={'large'}>
                    {data?.mainBlock.primaryBtn.name}
                  </Button>
                </a>
              </Link>

              <Link href={data?.mainBlock.secondaryBtn.href || ''}>
                <a target={'_blank'} rel={'noopener noreferrer'}>
                  <Button size={'large'}>{data?.mainBlock.secondaryBtn.name}</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${container.container_main} ${styles.home_page__center_block_a}`}
        id={'block-a'}
      >
        <div className={styles.home_page__center_block_a__content}>
          <div className={styles.home_page__center_block_a__description}>
            <h2 className={text.h_2}>{parse(data?.centerBlockA.title || '')}</h2>

            <p className={`${text.p_m} ${text.font_montserrat}`}>
              {parse(data?.centerBlockA.underTitle || '')}
            </p>
          </div>

          <div className={styles.home_page__center_block_a__info_list}>
            {data?.centerBlockA.infoList.map((el, i) => (
              <InfoCard
                key={`${el.title} ${i}`}
                icon={parse(el.icon)}
                title={parse(el.title)}
                text={parse(el.text)}
              />
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
          <h3 className={`${text.h_1} ${styles.home_page__center_block_c__title}`}>
            {parse(data?.centerBlockC.title || '')}

            <span className={styles.home_page__center_block_c__line}>
              <LineIco />
            </span>
          </h3>

          <div className={styles.home_page__center_block_c__info_list}>
            {data?.centerBlockC.infoList.map((el, i) => (
              <div
                key={`${el.title} ${i}`}
                className={`${styles.home_page__center_block_c__info_item} ${
                  i % 2 !== 0 ? styles.revers : ''
                }`}
              >
                <LazyImage src={el.img} width={578} height={350} objectFit={'contain'} />

                <div className={styles.home_page__center_block_c__description}>
                  <p className={`${text.p_m} ${text.color_gold} ${text.font_montserrat}`}>
                    {parse(el.subTitle)}
                  </p>

                  <div className={text.h_3} style={{ maxWidth: '455px' }}>
                    {parse(el.title)}
                  </div>

                  <p className={text.p_m}>{parse(el.text)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${container.container_main} ${styles.home_page}`}>
        <div className={styles.home_page__bottom_block}>
          <h3 className={`${text.h_1} ${styles.home_page__bottom_block__title}`}>
            {parse(data?.blockBottom.title || '')}

            <span className={styles.home_page__bottom_block__line}>
              <LineIco />
            </span>
          </h3>

          <div className={styles.home_page__bottom_block__list_clients}>
            {data?.blockBottom.listClients.map((el, i) => (
              <ClientCard
                icon={el.icon}
                title={parse(el.title)}
                text={parse(el.text)}
                key={`${el.title} ${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
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
