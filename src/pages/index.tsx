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
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { LazyImage } from '@components/elements'
import { LineIco } from '@constants/icons'
import { ClientCard } from '@components/templates'

// Page
const Home: NextPage = () => {
  // Router
  const { push } = useRouter()
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
      <div className={`${container.container_main} ${styles.home_page}`}>
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
              <Button
                onClick={() => push(data?.mainBlock.primaryBtn.href || '')}
                variant={'secondary'}
                size={'large'}
              >
                {data?.mainBlock.primaryBtn.name}
              </Button>

              <Button onClick={() => push(data?.mainBlock.secondaryBtn.href || '')} size={'large'}>
                {data?.mainBlock.secondaryBtn.name}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${container.container_main} ${styles.home_page__center_block_a}`}>
        <div className={styles.home_page__center_block_a__content}>
          <div className={styles.home_page__center_block_a__description}>
            <h2 className={text.h_2}>{parse(data?.centerBlockA.title || '')}</h2>

            <p className={`${text.p_m} ${text.font_montserrat}`}>
              {parse(data?.centerBlockA.underTitle || '')}
            </p>
          </div>

          <div className={styles.home_page__center_block_a__info_list}>
            {data?.centerBlockA.infoList.map((el, i) => (
              <div key={`${el.title} ${i}`} className={styles.home_page__center_block_a__list_item}>
                <div className={styles.home_page__center_block_a__list_svg}>{parse(el.icon)}</div>

                <h4 className={`${text.h_4} ${text.font_montserrat}`}>{parse(el.title)}</h4>

                <p className={`${text.p_m} ${text.font_montserrat}`}>{parse(el.text)}</p>
              </div>
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
              <ClientCard icon={el.icon} text={el.text} title={el.title} key={`${el.title} ${i}`} />
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
