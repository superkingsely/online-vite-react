import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Login from "./pages/LoginPage"
import PageNotFound from "./pages/PageNotFound"
import Register from "./pages/Register"

const App = () => {
  const user=true
  const auth=useLocation()
  console.log(auth.pathname,auth)
  return (
   <>
   {
      auth.pathname==='/login' ||auth.pathname==='/register'||auth.pathname==='*'?(
        <Routes>
              <>
              {
                user?(   <Route  path='/login' element={<Login/>}/>):(<Route  path='/register'  element={<Register/>}/>)
              }
              </>
              <Route path='/register' element={<Register/>} />
              <Route path='*' element={<PageNotFound/>} />
   </Routes>
      ):(
        <Layout/>
      )
   }
   
    
   </>
  )
}

export default App