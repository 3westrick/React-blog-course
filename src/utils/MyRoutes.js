import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home";
import Login from '../pages/Login';
import NotFound from "../pages/NotFound.js";
import Register from '../pages/Register';

const routes = [
    {path: '/',           element:<Home/> ,     need_auth: false},
    {path: '/login',      element:<Login/>,     need_auth: false, any:true},
    {path: '/register',   element:<Register/>,       need_auth: false, any:true},
    {path: '/*',          element:<NotFound/>,  need_auth: false},
]

const MyRoutes = () => {
  const auth = false

  return (
    <Routes>
        {routes.map((r,i)=>{
            if(r.need_auth && auth){
                console.log(r.path)
                return <Route key={i} path={r.path} element={r.element} />
            }else if (r.any && auth){
                return <Route key={i} path={r.path} element={<Navigate to={'/'} />} />
            }else if (!r.need_auth){
                return <Route key={i} path={r.path} element={r.element} />
            }
        })}
    </Routes>
  )
}

export default MyRoutes
