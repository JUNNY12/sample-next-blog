import '@/styles/globals.css'
import Container from '@/component/Container'
import NavBar from '@/component/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <NavBar />
      <Component {...pageProps} />
    </Container>
  )
}
