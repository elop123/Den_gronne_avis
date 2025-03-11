import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProductsPage } from "./pages/ProductsPage"
import { FrontPage } from "./pages/FrontPage"
import { MainLayout } from "./layout/MainLayout"
import { CategoryPage } from "./pages/CategoryPage"
import './App.css'
import { ProductPageDetails } from "./pages/ProductPageDetails"


function App() {
 
  return (
    <Router>
    <Routes>
    <Route path="/" element={<MainLayout />}>
    <Route index element={<FrontPage />} />
    <Route path="products" element={<ProductsPage/>} />
    <Route path="products/:slug" element={<ProductPageDetails />} />
    <Route path="products/category/:slug" element={<CategoryPage />} />
    
    </Route>
    </Routes>
  </Router>
  )
}

export default App
