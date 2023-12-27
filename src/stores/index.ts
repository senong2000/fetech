import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(createPersistedState({
  storage: window ? window.sessionStorage : undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeRestore: () => { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterRestore: () => { },
  serializer: {
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  },
}))

export default pinia
