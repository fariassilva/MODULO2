import Head from 'next/head'

import '../src/Styles.css'
function App({Component,pageProps}){

  return(
  <>


  <Head>
 <title>titulo padrao</title>
  </Head>
  <Component {...pageProps}/>

  </>


  )

}
export default App