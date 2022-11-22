import React from 'react'
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import "./Login.css"

export const Login = (props) => {

    const navigate = useNavigate()

    const [loginForm, setloginForm] = useState({
        email: "",
        password: ""
      })
    const form = useRef(null)

    function logMeIn(event) {
        console.log(loginForm)
        axios({
          method: "POST",
          url:"/token",
          data:{
            email: loginForm.email,
            password: loginForm.password
           }
        })
        .then((response) => {
          props.setToken(response.data.access_token)
          localStorage.setItem('email',loginForm.email)
          navigate('/profile')
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
  
        // setloginForm(({
        //   email: "",
        //   password: ""}))
  
        //event.preventDefault()
      }

    function handleSubmit(event){
      const formData = new FormData(form.current)
      setloginForm({
        'email':formData.get('email'),
        'password':formData.get('password')
      })
      //console.log(loginForm)
      logMeIn(event)
    }

    
  return (
    <div className='loginContainer'>
        <div className='container'>
            <h3 className='titleLogin'>
                Inicia Sesión
            </h3>
            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('El correo es requerido'),
                password: Yup.string()
                .min(7, 'Tienes que escribir mas de 10 caracteres')
                .max(15, 'Máximo 20 caracteres')
                .required('La contraseña es requerida')
                })}
                onSubmit={handleSubmit}
                
            >
            <Form className='formLogin' ref={form}>
                <label htmlFor="email" className='labelLogin'>Correo</label>
                <Field
                    name="email" 
                    type="email" 
                    className="field" />
                <EmailOutlinedIcon className='emailIconLogin'/>    
                <div className='text'>
                    <ErrorMessage name="email" />
                </div>
        
                <label htmlFor="password" className='labelLogin'>Contraseña</label>
                <div style={{position: "relative"}}>
                  <Field
                      name="password" 
                      type="password"
                      className="field" />
                  <HttpsOutlinedIcon className='passwordIconLogin'/>
                </div>
                <div className='text'>
                    <ErrorMessage name="password" className='text-white'/>
                </div>

                <button type="submit" className="buttonLogin">Ingresar</button>
                <p className='text'>¿No tienes cuenta? <Link className='text' to='/register'><span className='text-pink-700'>Crear Cuenta</span></Link></p>
            </Form>
        </Formik>

        </div>  
    </div>
  );
};