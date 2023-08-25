import { Card } from '@nextui-org/card'
import { useContext } from 'react'

import { HaveAccountContext } from '../../contexts/HomePageContexts/HaveAccountContext'
import { RegisterLoginContext } from '../../contexts/ApiConnectionsContext/RegisterLoginContext'

import Form from '../BasicComponents/Forms/Form'
import HaveAccount from './HaveAccount'
import RegisterInputs from './RegisterInputs'
import LoginInputs from './LoginInputs'

export default function HomePageForms() {
  const { login, loginState } = useContext(HaveAccountContext)
  const { registerFormHandler, loginFormHandler, loading } =
    useContext(RegisterLoginContext)

  return (
    <>
      <Card
        className={`p-3 w-full md:max-w-lg h-fit ${login ? 'hidden' : 'block'}`}
      >
        <h2 className="mb-4 ml-3 text-lg font-bold">Register new account</h2>
        <Form
          onSubmit={e => registerFormHandler(e)}
          textButton="Register"
          inputs={<RegisterInputs />}
          loading={loading}
        />
        <HaveAccount
          login={login}
          loginState={loginState}
        />
      </Card>
      <Card
        className={`p-3 w-full md:max-w-lg h-fit ${login ? 'block' : 'hidden'}`}
      >
        <h2 className="mb-4 ml-3 text-lg font-bold">Login to your account</h2>
        <Form
          onSubmit={e => loginFormHandler(e)}
          textButton="Login"
          inputs={<LoginInputs />}
          loading={loading}
        />
        <HaveAccount
          login={login}
          loginState={loginState}
        />
      </Card>
    </>
  )
}
