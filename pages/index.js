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
  const [scrollId, setScrollId] = React.useState(undefined)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [carts, setCarts] = React.useState([])
  const [updateCart, setUpdateCart] = React.useState(false)
  const [phone, setPhone] = React.useState(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)

  React.useEffect(async () => {
    const carts = await getCart()
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

  const getMenu = async (org_code) => {
    let url = ''
    if (org_code) {
      url = `/json/${org_code}.json`
    } else {
      url = '/json/menu.json'
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

  React.useEffect(() => {
    const { org_code } = router.query
    getMenu(org_code)
  }, [router, router.query])

  React.useEffect(async () => {
    const cart = await getCart()
    if (!cart) {
      await initCart()
    }
  }, [])

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const scrollTo = (id) => {
    setScrollId(id)
    handleClose()
  }

  return (
    <Layout title={orgName}>
      <ResMenu menuData={menuData} scrollId={scrollId} carts={carts} setUpdateCart={setUpdateCart} />

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

      <AppFooter openMenu={openMenu} phone={phone} carts={carts} />
    </Layout>
  )
}


export default Home