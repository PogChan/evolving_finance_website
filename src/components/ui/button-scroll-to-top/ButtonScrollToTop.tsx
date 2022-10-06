// Libs
import React, { FC, memo, useEffect, useState } from 'react'
import styles from './button-scroll-to-top.module.scss'
import { getDeviceType } from '@services'
import { useRouter } from 'next/router'

// Component
const ButtonScrollToTop: FC = () => {
  // Router
  const { route } = useRouter()
  // Device type
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile' | null>(null)
  // Button active
  const [buttonActive, setButtonActive] = useState<boolean>(false)
  // Go to top
  const handleGoToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  // Watch from scroll
  useEffect(() => {
    // Header
    const header = document.querySelector('header')
    // Prev position
    let prevScrollPosition = window.scrollY
    // On scroll
    window.onscroll = () => {
      // Current position
      const currentScrollPosition = window.scrollY
      // Button to top control
      if (prevScrollPosition > currentScrollPosition && currentScrollPosition > 200) {
        setButtonActive(true)
      } else setButtonActive(false)
      // Header control
      if (header) {
        if (
          prevScrollPosition < currentScrollPosition &&
          currentScrollPosition >
            (getDeviceType() === 'desktop' ? header.clientHeight * 2 : header.clientHeight * 0.5)
        )
          header.style.top = `-${header.clientHeight}px`
        else header.style.top = `0`
      }

      // Return
      prevScrollPosition = currentScrollPosition
    }
  }, [route])
  // Watch from device type
  useEffect(() => {
    if (deviceType !== getDeviceType()) {
      setDeviceType(getDeviceType())
    }
  }, [])

  // Return
  return (
    <div
      className={`${styles.button_scroll_tot_top} ${
        deviceType && deviceType !== 'desktop' ? styles.mobile_type : ''
      } ${buttonActive ? styles.active : ''}`}
      onClick={handleGoToTop}
    />
  )
}

export default memo(ButtonScrollToTop)
