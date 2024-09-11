import Routerr from './router/Routerr'
import Provider from './contexto/Provider'

export const Home = () => {
  return (
    <>
      <Provider>
        <Routerr/>
      </Provider>
    </>
  )
}
