import ResMenu from '../component/menu'
import Layout from '../component/layout'
import React from 'react'
import { apiConfig } from '../lib/apiconfig'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const [menuData, setMenuData] = React.useState([])
  const [orgName, setOrgName] = React.useState("")

  const getMenu = async (org_code) => {
    let url = ''
    if (org_code) {
      url = `/json/${org_code}.json`
    } else {
      url = '/json/menu.json'
    }

    await apiConfig.get(url).then((response) => {
      if (response.status = 200) {
        const { org_name, menu } = response.data
        setOrgName(org_name)
        setMenuData(menu)
      }
    })
  }

  React.useEffect(() => {
    const { org_code } = router.query
    getMenu(org_code)
  }, [router, router.query])

  return (
    <Layout title={orgName}>
      <ResMenu menuData={menuData} />
    </Layout>
  )
}


export default Home