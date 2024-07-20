// Libs
import type { NextPage } from 'next'
import text from '@styles/modules/text.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Component
const ErrorPage: NextPage = () => {
  // Router
  const { push } = useRouter()
  // Redirect
  useEffect(() => {
    // Interval
    const interval = setInterval(() => {
      return push('/')
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Return
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        color: 'var(--font-color)',
      }}
    >
      <h3 className={text.h_3}>404</h3>

      <div
        style={{
          height: '40px',
          width: '2px',
          margin: '-4px 10px 0',
          backgroundColor: 'var(--font-color-white)',
        }}
      />

      <p className={text.p_l}>Page not found</p>
    </div>
  )
}

export default ErrorPage
