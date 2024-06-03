import 'bootstrap/dist/css/bootstrap.css'
import buildClient from '../api/buildClient'
import Header from '../components/header/header'

const AppComponent = ({ Component, currentUser, pageProps }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  )
}

AppComponent.getInitialProps = async (context) => {
  const { Component, ctx: { req } } = context

  const client = buildClient({ req })
  const  { data: { currentUser } } = await client.get('/api/users/currentuser')

  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = Component.getInitialProps(context)
  }

  return {
    currentUser,
    pageProps
  }
}

export default AppComponent