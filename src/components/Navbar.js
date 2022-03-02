import React, {useContext} from 'react'
import { UserContext } from '../context/userContext'
import {Link} from 'react-router-dom'

export default function Navbar() {

    const {toggleModals} = useContext(UserContext)

  return (
    <nav className='navbar navbar-light bg-light px-4'>
        <Link to="/" className='navbar-brand'>Kévin</Link>
        <div>
            <button 
            onClick={()=> toggleModals('signIn')} 
            className='btn btn-primary'>Connexion</button>
            
            <button 
            onClick={()=> toggleModals('signUp')} 
            className='btn btn-primary ms-2'>Inscription</button>

            <button            
             
            className='btn btn-danger ms-2'>Déconnexion</button>
        </div>
    </nav>
  )
}
