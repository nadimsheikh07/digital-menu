import ResMenu from '../component/menu'
import Layout from '../component/layout'
import React from 'react'
import { apiConfig } from '../config/apiConfig'
import { useRouter } from 'next/router'
import AppFooter from '../component/layout/footer'
import { List, ListItem, ListItemText, Popover } from '@material-ui/core';
import { getCart, initCart } from '../utils/cart'

const Home = () => {
  const router = useRouter()
  const [menuData, setMenuData] = React.useState([])
  const [orgName, setOrgName] = React.useState("")
  const [orgCode, setOrgCode] = React.useState(null)
  const [scrollId, setScrollId] = React.useState(undefined)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [carts, setCarts] = React.useState([])
  const [updateCart, setUpdateCart] = React.useState(false)
  const [phone, setPhone] = React.useState(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)
  const [table, setTable] = React.useState(null)


  React.useEffect(() => {
    const { table } = router.query
    setTable(table)
  }, [router.query])

  React.useEffect(async () => {
    const { org_code } = router.query
    const carts = await getCart(org_code)
    setCarts(carts)
    setUpdateCart(false)
  }, [updateCart])

  const openMenu = (event) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getMenu = async (orgCode) => {
    let url = ''
    if (orgCode) {
      url = `/json/${orgCode}.json`
    }

    await apiConfig.get(url).then((response) => {
      if (response.status = 200) {
        const { org_name, phone, menu } = response.data
        setPhone(phone)
        setOrgName(`${org_name} (${phone})`)
        setMenuData(menu)
      }
    })
  }

  React.useEffect(async () => {
    const { org_code } = router.query
    if (org_code) {
      await initCart(org_code)
      await getMenu(org_code)
      setOrgCode(org_code)
    }
  }, [router, router.query])

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const scrollTo = (id) => {
    setScrollId(id)
    handleClose()
  }

  return (
    <Layout title={orgName}>
      <ResMenu menuData={menuData} scrollId={scrollId} carts={carts} setUpdateCart={setUpdateCart} orgCode={orgCode} />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >

        <List>
          {menuData && menuData.map((menu) => (
            <ListItem key={`list-${menu.id}`} onClick={() => scrollTo(menu.id)}>
              <ListItemText primary={menu.name} />
            </ListItem>
          ))}
        </List>
      </Popover>

      <AppFooter openMenu={openMenu} phone={phone} carts={carts} table={table} />
    </Layout>
  )
}


export default Home