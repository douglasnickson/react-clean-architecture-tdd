import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentatition/components/spinner/spinner'
import Header from '@/presentatition/components/login-header/login-header'
import Footer from '@/presentatition/components/footer/footer'

const Login: React.FC = () => {
  return (
    <div className = { Styles.login } >
      <Header />
      <form className={Styles.form} action="">
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name='email' placeholder='Digite seu e-mail' />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name='email' placeholder='Digite sua senha' />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type='submit'>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>E-mail ou senha incorretos</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}
export default Login
