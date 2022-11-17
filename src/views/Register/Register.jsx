import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import "./Register.css"

const Register = () => {
return (
  <div className='registerContainer'>
      <div className='containerRegistro'>
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
      onSubmit={(values) => {
      }}
      >
      <Form className='form'>
          <label htmlFor="email" className='label'>Correo</label>
          <Field name="email" type="email" className="field" />
          <EmailOutlinedIcon className='emailIconRegister'/>
          <div className='text'>
              <ErrorMessage name="email" />
          </div>
  
          <label htmlFor="password" className='label'>Contraseña</label>
          <Field name="password" type="password" className="field" />
          <HttpsOutlinedIcon className='passwordIconRegister'/>
          <div className='text'>
              <ErrorMessage name="password"/>
          </div>
          <span className='text-xs text-rose-500'>
          </span>

          <button type="submit" className="button">
            Ingresar
          </button>
          <p className='text'>¿Ya tienes cuenta? <Link to='/login'><span className='text-pink-700'>Iniciar Sesion</span></Link></p>
      </Form>
      </Formik>

      </div>  
  </div>
);
};

export default Register