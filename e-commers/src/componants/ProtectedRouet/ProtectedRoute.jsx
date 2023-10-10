import React from 'react'
import { Navigate } from 'react-router';

export default function ProtectedRoute(props) {

    if(localStorage.getItem('userToken') !== null){
        
        return props.children
    }else{
        return <Navigate to={'/login'}/>
    }

  
}
