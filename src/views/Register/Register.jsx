import React from 'react'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const Register = (props) => {

    const [registerForm, setRegisterForm] = useState({
        email: "",
        password: ""
      })
    const form = useRef(null)

    function signMeIn(event) {
        console.log(registerForm)
        axios({
          method: "POST",
          url:"/signIn",
          data:{
            email: registerForm.email,
            password: registerForm.password
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
  
      }

    function handleSubmit(event){
      const formData = new FormData(form.current)
      setRegisterForm({
        'email':formData.get('email'),
        'password':formData.get('password')
      })
      //console.log(loginForm)
      signMeIn(event)
    }

return (
  <div className='registerContainer'>
      <div className='container2'>
          <h3 className='title'>
              Registrate
          </h3>
          <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('El correo es requerido'),
          password: Yup.string()
          .max(15, 'Máximo 20 caracteres')
          .required('La contraseña es requerida')
      })}
      onSubmit={handleSubmit}
      >

      <Form className='form' ref={form}>
          <label htmlFor="email" className='label'>Correo</label>
          <Field name="email" type="email" className="field" />
          <div className='text'>
              <ErrorMessage name="email" />
          </div>
  
          <label htmlFor="password" className='label'>Contraseña</label>
          <Field name="password" type="password" className="field" />
          <div className='text'>
              <ErrorMessage name="password"/>
          </div>
          <span className='text-xs text-rose-500'>
          </span>

          <button type="submit" className="button">
            Ingresar
          </button>
          <p className='text'>¿
            Ya tienes cuenta? 
            <Link to='/login'>
                <span className='text-pink-700'>
                    Iniciar Sesion
                </span>
            </Link>
          </p>
      </Form>
      </Formik>

      </div>  
  </div>
);
};

export default Register