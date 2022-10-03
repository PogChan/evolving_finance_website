// Libs
import { FC, memo } from 'react'
import Head from 'next/head'

// Interface
interface ISeo {
  title?: string
  locale?: string
  keywords?: string
  description?: string
  themeColor?: string
  backgroundColor?: string
  siteName?: string
  pageUrl?: string
  image?: string
}

// Component
const Seo: FC<ISeo> = ({
  title = 'Evolving finance',
  locale = 'en-US',
  keywords = 'Trading Terminal, Traders, Forex',
  description = 'The Most Advanced Trading Terminal for all Traders',
  themeColor = '#030303',
  backgroundColor = '#030303',
  siteName = 'Evolving finance',
  image = '/logo.png',
}) => {
  // Default title
  const defaultTitle = 'Evolving'

  // Return
  return (
    <Head>
      <title>{title && title !== 'undefined' ? title : defaultTitle}</title>

      <link rel='icon' href='/favicon.ico' />
      <meta name='robots' content='index,follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='display' content='standalone' />
      <meta charSet='utf-8' />
      <meta property='og:type' content='website' />

      <meta name='locale' content={locale} />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='theme-color' content={themeColor} />
      <meta name='background-color' content={backgroundColor} />

      <meta property='og:site_name' content={siteName} />
      <meta property='og:title' content={title} />
      <meta property='og:locale' content={locale} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${process.env.SITE_URL}${image}`} />
    </Head>
  )
}

export default memo(Seo)
