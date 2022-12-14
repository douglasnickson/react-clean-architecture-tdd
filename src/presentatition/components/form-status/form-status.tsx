import React from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '@/presentatition/components/spinner/spinner'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>E-mail ou senha incorretos</span>
    </div>
  )
}

export default FormStatus
