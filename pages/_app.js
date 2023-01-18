import { Provider } from 'react-redux'
import store from '../src/store'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
