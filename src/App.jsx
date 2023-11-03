
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./components/styled_components/Global"
import ProductList from "./components/ProductListContainer"

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
    <ProductList />
    </>
    </ThemeProvider>
  )
}

export default App
