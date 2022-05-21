import React from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, FormStatus, Input } from '@/presentatition/components'

const Login: React.FC = () => {
  return (
    <div className = { Styles.login } >
      <LoginHeader />
      <form className={Styles.form} action="">
        <h2>Login</h2>
        <Input type="email" name='email' placeholder='Digite seu e-mail' />
        <Input type="password" name='email' placeholder='Digite sua senha' />
        <button className={Styles.submit} type='submit'>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}
export default Login
