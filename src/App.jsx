import { Header } from "./components/Header"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./components/styled_components/Global"
import ProductList from "./components/ProductListContainer"
import { SidebarLayout } from "./components/Sidebar"

const theme = {
  colors:{
    header:'#ac7777'
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>

    <>
    <GlobalStyle />
    <Header />
    <SidebarLayout />
    <ProductList />
    </>
    </ThemeProvider>
  )
}

export default App
