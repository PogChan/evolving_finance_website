// Interface
interface IClientLocalStore {
  params: 'get' | 'set' | 'remove'
  name: 'theme' | 'lang' | 'route' | 'token'
  data?: string | null
}

// Client local store
export const clientLocalStore = ({ params, name, data }: IClientLocalStore) => {
  // Server side
  if (typeof window === undefined) return null
  // Client side
  if (params === 'get') {
    const value = window.localStorage.getItem(name)
    return value ? value : null
  }
  if (params === 'set') window.localStorage.setItem(name, `${data}`)
  if (params === 'remove') window.localStorage.removeItem(name)
}
