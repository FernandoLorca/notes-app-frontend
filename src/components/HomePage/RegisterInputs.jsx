import { Input } from '@nextui-org/input'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useContext } from 'react'

import { InputHandlersContext } from '../../contexts/HomePageContexts/InputsHandlersContext'

export default function HaveFormInputs() {
  const {
    isVisible,
    toggInputPassVisibility,
    registerInputsStates,
    clearInput,
    inputTextHandler,
    inputEmailHandler,
    inputPasswordHandler,
  } = useContext(InputHandlersContext)

  return (
    <>
      <Input
        isClearable
        type="text"
        label="Name"
        onClear={() => clearInput(registerInputsStates.inputName, 'inputName')}
        validationState={
          registerInputsStates.inputName.errorState ? 'invalid' : ''
        }
        errorMessage={registerInputsStates.inputName.errorMessage}
        value={registerInputsStates.inputName.value}
        onChange={e => inputTextHandler(e)}
      />
      <Input
        isClearable
        type="email"
        label="Email"
        onClear={() =>
          clearInput(registerInputsStates.inputEmail, 'inputEmail')
        }
        validationState={
          registerInputsStates.inputEmail.errorState ? 'invalid' : ''
        }
        errorMessage={registerInputsStates.inputEmail.errorMessage}
        value={registerInputsStates.inputEmail.value}
        onChange={e => inputEmailHandler(e)}
      />
      <Input
        type={isVisible.inputPassword ? 'text' : 'password'}
        label="Password"
        value={registerInputsStates.inputPassword.value}
        onChange={e => inputPasswordHandler(e, 'inputPassword')}
        validationState={
          registerInputsStates.inputPassword.errorState ? 'invalid' : ''
        }
        errorMessage={registerInputsStates.inputPassword.errorMessage}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => toggInputPassVisibility('inputPassword')}
          >
            {isVisible.inputPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        }
      />
      <Input
        type={isVisible.inputRepeatPassword ? 'text' : 'password'}
        label="Repeat password"
        onChange={e => inputPasswordHandler(e, 'inputRepeatPassword')}
        validationState={
          registerInputsStates.inputRepeatPassword.errorState ? 'invalid' : ''
        }
        errorMessage={registerInputsStates.inputRepeatPassword.errorMessage}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => toggInputPassVisibility('inputRepeatPassword')}
          >
            {isVisible.inputRepeatPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        }
      />
    </>
  )
}
