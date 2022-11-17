import React from 'react'
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useRef } from 'react';
import axios from "axios";
import "./Login.css"

export const Login = (props) => {

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
        <div className='container2'>
            <h3 className='title'>
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
            <Form className='form' ref={form}>
                <label htmlFor="email" className='label'>Correo</label>
                <Field
                    name="email" 
                    type="email" 
                    className="field" />
                <div className='text'>
                    <ErrorMessage name="email" />
                </div>
        
                <label htmlFor="password" className='label'>Contraseña</label>
                <Field
                    name="password" 
                    type="password"
                    className="field" />
                <div className='text'>
                    <ErrorMessage name="password" className='text-white'/>
                </div>

                <button type='submit' className="button">Ingresar</button>
                <p className='text'>¿No tienes cuenta? <Link to='/register'><span className='text-pink-700'>Crear Cuenta</span></Link></p>
            </Form>
        </Formik>

        </div>  
    </div>
  );
};