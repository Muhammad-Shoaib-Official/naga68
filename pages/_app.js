import { Provider } from 'react-redux'
import Layout from '../src/components/layout'
import store from '../src/store'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
