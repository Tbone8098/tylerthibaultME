import '../styles/globals.css'
// import { motion } from "framer-motion"
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

export default MyApp
