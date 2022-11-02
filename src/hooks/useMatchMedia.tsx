// Libs
import { useState, useEffect, useRef } from 'react'

// Match media hook
export const useMatchMedia = () => {
  // Watch from media query
  const mediaQuery = (width = 600): boolean => {
    // Const
    const [toggleChange, setToggleChange] = useState<boolean>(false)
    // Ref
    const matchMediaRef = useRef<MediaQueryList | null>(null)
    // Watch from width
    useEffect(() => {
      matchMediaRef.current = window.matchMedia(`(min-width: ${width}px)`)
      const initialMatch = matchMediaRef.current.matches
      // Watch from initial match
      if (initialMatch) {
        setToggleChange(true)
      } else {
        setToggleChange(false)
      }
      // Test event
      const test = (event: MediaQueryListEvent) => {
        if (event.matches) {
          setToggleChange(true)
        } else {
          setToggleChange(false)
        }
      }
      // Match media listener
      matchMediaRef.current.addListener(test)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // Return
      return () => matchMediaRef.current.removeListener(test)
    }, [width])

    // Return
    return toggleChange
  }

  // Params
  const isMobile = mediaQuery(0)
  const isTablet = mediaQuery(768)
  const isLaptop = mediaQuery(1024)
  const isDesktop = mediaQuery(1440)

  // Return
  return {
    isMobile: isMobile && !isTablet,
    isTablet: isTablet && !isLaptop,
    isLaptop: !isDesktop && isLaptop,
    isDesktop,
  }
}
