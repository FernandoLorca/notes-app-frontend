import { Card } from '@nextui-org/card'
import { useContext, useState } from 'react'

import { HaveAccountContext } from '../../contexts/HomePageContexts/HaveAccountContext'
import { InputHandlersContext } from '../../contexts/HomePageContexts/InputsHandlersContext'
import { RegisterLoginContext } from '../../contexts/ApiConnectionsContext/RegisterLoginContext'
import { formHandlers } from './utils/formHandlers'

import Form from '../BasicComponents/Forms/Form'
import HaveAccount from './HaveAccount'
import RegisterInputs from './RegisterInputs'
import LoginInputs from './LoginInputs'

export default function HomePageForms() {
  const { login, loginState } = useContext(HaveAccountContext)
  const { registerInputsStates, setRegisterInputsStates } =
    useContext(InputHandlersContext)
  const { registerUser, loginUser, user } = useContext(RegisterLoginContext)
  const [loading, setLoading] = useState(false)

  console.log(user)
  console.log(localStorage.getItem('token'))

  return (
    <>
      <Card
        className={`p-3 w-full md:max-w-lg h-fit ${login ? 'hidden' : 'block'}`}
      >
        <h2 className="mb-4 ml-3 text-lg font-bold">Register new account</h2>
        <Form
          onSubmit={event =>
            formHandlers.registerFormHandler(
              event,
              registerInputsStates,
              setRegisterInputsStates,
              registerUser,
              setLoading
            )
          }
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
          onSubmit={event =>
            formHandlers.loginFormHandler(
              event,
              registerInputsStates,
              setRegisterInputsStates,
              loginUser,
              setLoading
            )
          }
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
