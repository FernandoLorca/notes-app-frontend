import { Card } from '@nextui-org/card'
import { useContext, useState } from 'react'

import { HaveAccountContext } from '../../contexts/HomePageContexts/HaveAccountContext'
import { InputHandlersContext } from '../../contexts/HomePageContexts/InputsHandlersContext'
import { formHandler } from './utils/formHandler'

import Form from '../BasicComponents/Forms/Form'
import HaveAccount from './HaveAccount'
import RegisterInputs from './RegisterInputs'
import LoginInputs from './LoginInputs'

export default function HomePageForms() {
  const { login, loginState } = useContext(HaveAccountContext)
  const {
    registerInputsStates,
    setRegisterInputsStates,
    registerUser,
    saveUser,
  } = useContext(InputHandlersContext)
  const [loading, setLoading] = useState(false)

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
              saveUser,
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
