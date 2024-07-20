// Params
const durationIn = 0.25
const durationOut = 0.25
const delay = 0.15
const stiffness = 50
const amount = 0.1
const margin = '0px 0px -15% 0px'

// Controls
export const appearanceAnim = {
  // Left
  left: {
    initial: {
      opacity: 0,
      x: '-50%',
    },

    animate: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * delay,
        default: { type: 'spring', stiffness: stiffness },
      },
    }),

    exit: (custom = 0) => ({
      opacity: 0,
      x: '-50%',
      transition: {
        delay: custom * delay,
        default: { duration: durationOut },
      },
    }),

    viewport: {
      amount,
      once: true,
      margin,
    },
  },
  // Right
  right: {
    initial: {
      opacity: 0,
      x: '50%',
    },

    animate: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * delay,
        default: { type: 'spring', stiffness: stiffness },
      },
    }),

    exit: (custom = 0) => ({
      opacity: 0,
      x: '50%',
      transition: {
        delay: custom * delay,
        default: { duration: durationOut },
      },
    }),

    viewport: {
      amount,
      once: true,
      margin,
    },
  },
  // Top
  top: {
    initial: {
      opacity: 0,
      y: '-50%',
    },

    animate: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * delay,
        default: { type: 'spring', stiffness: 100, duration: durationIn },
      },
    }),

    exit: (custom = 0) => ({
      opacity: 0,
      y: '-50%',
      transition: {
        delay: custom * delay,
        default: { duration: durationOut },
      },
    }),

    viewport: {
      amount,
      once: true,
      margin,
    },
  },
  topHidden: {
    initial: {
      opacity: 0,
      y: '-50%',
    },

    animate: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * delay,
        default: { duration: durationIn },
      },
    }),

    exit: (custom = 0) => ({
      opacity: 0,
      y: '-50%',
      transition: {
        delay: custom * delay,
        default: { duration: durationOut },
      },
    }),

    viewport: {
      amount,
      once: true,
      margin,
    },
  },
  // Bottom
  bottom: {
    initial: {
      opacity: 0,
      y: '50%',
    },

    animate: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * delay,
        default: { type: 'spring', stiffness: stiffness },
      },
    }),

    exit: (custom = 0) => ({
      opacity: 0,
      y: '50%',
      transition: {
        delay: custom * delay,
        default: { duration: durationOut },
      },
    }),

    viewport: {
      amount,
      once: true,
      margin: margin,
    },
  },
  bottomHidden: {
    initial: {
      opacity: 0,
      y: '50%',
    },

    animate: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * delay,
        default: { duration: durationIn },
      },
    }),

    exit: (custom = 0) => ({
      opacity: 0,
      y: '50%',
      transition: {
        delay: custom * delay,
        default: { duration: durationOut },
      },
    }),

    viewport: {
      amount,
      once: true,
      margin: margin,
    },
  },
  // Center
  center: {
    initial: {
      opacity: 0,
    },

    animate: (custom = 0) => ({
      opacity: 1,
      transition: {
        delay: custom * delay,
        default: { duration: durationIn },
      },
    }),

    exit: (custom = 0) => ({
      opacity: 0,
      transition: {
        delay: custom * delay,
        default: { duration: durationOut },
      },
    }),

    viewport: {
      amount,
      once: true,
      margin,
    },
  },
  // Scale
  scale: {
    initial: {
      scale: 0,
    },

    animate: (custom = 0) => ({
      scale: 1,
      transition: {
        delay: custom * delay,
        default: { duration: durationIn, type: 'spring', stiffness: stiffness },
      },
    }),

    exit: (custom = 0) => ({
      scale: 0,
      transition: {
        delay: custom * delay,
        default: { duration: durationOut },
      },
    }),

    viewport: {
      amount,
      once: true,
      margin,
    },
  },
  // Custom viewport
  viewportCustom: ({ amount = 0.2, margin = '0px 0px -15% 0px' }) => ({
    amount: amount,
    once: true,
    margin: margin,
  }),
}
