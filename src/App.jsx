import React ,{useState} from 'react'
import Login from './Login'
import Products from './Products'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route,Link,Navigate } from 'react-router-dom'

const App = () => {

  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const handlelogin=()=>{
    setIsAuthenticated(true)
  }
  const handleLogout=()=>{
    setIsAuthenticated(false)
  }

  return (
    <Router>
<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

<div className='container-fluid'>
  <ul className='navbar-nav'>
    <li className="nav-item">
     <Link className='nav-link' to="/">home</Link>

    </li>
    <li className="nav-item">
     <Link className='nav-link' to="/products">product</Link>

    </li>

    {!isAuthenticated?(<li className="nav-item">
     <Link className='nav-link' to="/login">login</Link></li>)
     :(<button onClick={handleLogout} className='nav-link'>Logout</button>)}

    
    




  </ul>


</div>
</nav>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/login' element={<Login onLogin={handlelogin} />} />
  <Route path='/products' element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
        <Products onLogout={handleLogout} />
    </ProtectedRoute>
  }/>
</Routes>

    </Router>
  )
}

function ProtectedRoute({isAuthenticated,children}){
  return isAuthenticated?children:<Navigate to="/login" />
}
export default App