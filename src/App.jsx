import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProductPage } from "./pages/ProductPage"
import { FrontPage } from "./pages/FrontPage"
import { MainLayout } from "./layout/MainLayout"
import { CategoryPage } from "./pages/CategoryPage"
import './App.css'

function App() {
 
  return (
    <Router>
    <Routes>
    <Route path="/" element={<MainLayout />}>
    <Route index element={<FrontPage />} />
    <Route path="products" element={<ProductPage />} />
    <Route path="category" element={<CategoryPage />} />
    </Route>
    </Routes>
  </Router>
  )
}

export default App
