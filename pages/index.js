import ResMenu from '../component/menu'
import Layout from '../component/layout'

const Home = () => {
  return (
    <Layout title={process.env.NEXT_PUBLIC_APP_NAME}>
      <ResMenu />
    </Layout>
  )
}


export default Home