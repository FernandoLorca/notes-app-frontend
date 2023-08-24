import { Card } from '@nextui-org/card'
import { useContext, useState } from 'react'

import { HaveAccountContext } from '../../contexts/HomePageContexts/HaveAccountContext'
import { InputHandlersContext } from '../../contexts/HomePageContexts/InputsHandlersContext'
import { RegisterLoginContext } from '../../contexts/ApiConnectionsContext/RegisterLoginContext'
import { formHandler } from './utils/formHandler'

import Form from '../BasicComponents/Forms/Form'
import HaveAccount from './HaveAccount'
import RegisterInputs from './RegisterInputs'
import LoginInputs from './LoginInputs'

export default function HomePageForms() {
  const { login, loginState } = useContext(HaveAccountContext)
  const { registerInputsStates, setRegisterInputsStates } =
    useContext(InputHandlersContext)
  const { registerUser, userData } = useContext(RegisterLoginContext)
  const [loading, setLoading] = useState(false)

  console.log(userData)

  return (
    <>
      <Card
        className={`p-3 w-full md:max-w-lg h-fit ${login ? 'hidden' : 'block'}`}
      >
        <h2 className="mb-4 ml-3 text-lg font-bold">Register new account</h2>
        <Form
          onSubmit={event =>
            formHandler(
              event,
              registerInputsStates,
              setRegisterInputsStates,
              registerUser,
              userData,
              setLoading
            )
          }
          textButton="Register"
          inputs={<RegisterInputs />}
          loading={loading}
          registerUser={registerUser}
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
          onSubmit={event => formHandler(event)}
          textButton="Login"
          inputs={<LoginInputs />}
        />
        <HaveAccount
          login={login}
          loginState={loginState}
        />
      </Card>
    </>
  )
}
