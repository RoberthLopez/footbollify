import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import "./Login.css"

export const Login = () => {

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
                onSubmit={(values) => {
                }}
            >
            <Form className='form'>
                <label htmlFor="email" className='label'>Correo</label>
                <Field name="email" type="email" className="field" />
                <div className='text'>
                    <ErrorMessage name="email" />
                </div>
        
                <label htmlFor="password" className='label'>Contraseña</label>
                <Field name="password" type="password" className="field" />
                <div className='text'>
                    <ErrorMessage name="password" className='text-white'/>
                </div>

                <button type="submit" className="button">Ingresar</button>
                <p className='text'>¿No tienes cuenta? <Link to='/register'><span className='text-pink-700'>Crear Cuenta</span></Link></p>
            </Form>
        </Formik>

        </div>  
    </div>
  );
};