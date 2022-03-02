import React, {useContext, useRef, useState} from 'react'
import {UserContext} from '../context/userContext'


export default function Inscription() {

    const {toggleModals, modalState, signUp} = useContext(UserContext)
    console.log(signUp)

    const [validation, setValidation] = useState("");

    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
            
        }
    }

    const handleForm = e => {
        e.preventDefault()
        
        if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation('Veuillez insérer 6 caractères minimum')
            return
        }
        if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation('Veuillez insérer les mêmes mots de passes')
            return
            
        }
    }

    return (
    <>
        {modalState.signUpModal && (
        <div className='position-fixed top-0 vw-100 vh-100'>
            <div 
            onClick={()=> toggleModals('close')}
            className='w-100 h-100 bg-dark bg-opacity-75'>
            </div>
            <div className='position-absolute top-50 start-50 translate-middle' style={{minWidth:"400px"}}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>S'inscrire</h5>
                            <button
                                onClick={()=> toggleModals('close')}
                                className='btn-close'>   
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form 
                            onSubmit={handleForm}
                            className='sign-up-form'>
                                <div className='mb-3'>
                                    <label htmlFor='signUpEmail'className='form-label'>Adresse e-mail</label>
                                    <input 
                                    ref={addInputs}
                                    type="email" 
                                    name='email' 
                                    required 
                                    id="signUpEmail" 
                                    className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='signUpPassword'className='form-label'>Mot de passe</label>
                                    <input 
                                    ref={addInputs} 
                                    type="password" 
                                    name='password' 
                                    required 
                                    id="signUpPassword" 
                                    className='form-control'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='signUpPassword2'className='form-label'>Vérification du mot de passe</label>
                                    <input 
                                    ref={addInputs} 
                                    type="password" 
                                    name='password' 
                                    required 
                                    id="signUpPassword2" 
                                    className='form-control'/>
                                    <p className='text-danger mt-1'>
                                    {validation}
                                    </p>
                                </div>
                                <button className='btn btn-primary'>Envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
  )
}
