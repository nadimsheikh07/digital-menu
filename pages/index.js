import ResMenu from '../component/menu'
import Layout from '../component/layout'
import React from 'react'
import { apiConfig } from '../utils/apiconfig'

const Home = () => {

  const [menuData, setMenuData] = React.useState([])

  const getMenu = async () => {
    await apiConfig.get('/json/menu.json').then((response) => {
      if (response.status = 200) {
        setMenuData(response.data)
      }
    })
  }

  React.useEffect(() => {
    getMenu()
  }, [])

  return (
    <Layout title={process.env.NEXT_PUBLIC_APP_NAME}>
      <ResMenu menuData={menuData} />
    </Layout>
  )
}


export default Home