import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProductsPage } from "./pages/ProductsPage"
import { FrontPage } from "./pages/FrontPage"
import { MainLayout } from "./layout/MainLayout"
import { CategoryPage } from "./pages/CategoryPage"
import './App.css'
import { ProductPageDetails } from "./pages/ProductPageDetails"
import { LoginPage } from "./pages/LoginPage"
import { AnnouncePage } from "./pages/AnnouncePage"
import { MyAccountPage } from "./pages/MyAccountPage"
import { UserContextProvider } from "./context/userContext"
import { SignUpPage } from "./pages/SignUpPage"
import { MyAnnouncePage } from "./pages/MyAnnouncePage"


function App() {
 
  return (
    <UserContextProvider>
    <Router>
    <Routes>
    <Route path="/" element={<MainLayout />}>
    <Route index element={<FrontPage />} />
    <Route path="products" element={<ProductsPage/>} />
    <Route path="products/:slug" element={<ProductPageDetails />} />
    <Route path="products/category/:slug" element={<CategoryPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/announce" element={<AnnouncePage />} />
    <Route path="/myaccount" element={<MyAccountPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/myannounce" element={<MyAnnouncePage />} />
    </Route>
    </Routes>
  </Router>
  </UserContextProvider>
  )
}

export default App
