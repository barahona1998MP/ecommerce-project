import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'
 
function App() {
/*   useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users
    `
    const data = {
      firstName: 'Marcos',
      lastName: 'Plata',
      email: 'mplata98@gmail.com',
      password: 'marcos123',
      phone: '1234531346',
      role: 'admin'
    }
    axios.post(URL, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }) */
  
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<ProductId />}/>
          <Route path='/login' element={<LoginScreen />}/>

          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/purchases' element={<Purchases />}/>
          </Route>        
      </Routes>

      </div>

    </div>
  )
}

export default App
