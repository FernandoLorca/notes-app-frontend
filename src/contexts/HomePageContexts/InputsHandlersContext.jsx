import { createContext, useState } from 'react'

export const InputHandlersContext = createContext()

export default function InputHandlersProvider({ children }) {
  const [isVisible, setIsVisible] = useState({
    inputPassword: false,
    inputRepeatPassword: false,
  })

  const toggInputPassVisibility = inputPassword => {
    if (!isVisible[inputPassword]) {
      setIsVisible({
        ...isVisible,
        [inputPassword]: true,
      })
    } else {
      setIsVisible({
        ...isVisible,
        [inputPassword]: false,
      })
    }
  }

  const [registerInputsStates, setRegisterInputsStates] = useState({
    inputName: {
      value: '',
      errorState: false,
      errorMessage: '',
    },
    inputEmail: {
      value: '',
      errorState: false,
      errorMessage: '',
    },
    inputPassword: {
      value: '',
      errorState: false,
      errorMessage: '',
    },
    inputRepeatPassword: {
      value: '',
      errorState: false,
      errorMessage: '',
    },
  })

  const clearInput = (inputsObject, objKeyName) => {
    if (inputsObject.value) {
      setRegisterInputsStates({
        ...registerInputsStates,
        [objKeyName]: {
          ...registerInputsStates.inputName,
          value: '',
          errorState: false,
          errorMessage: '',
        },
      })
    }
  }

  const inputTextHandler = e => {
    setRegisterInputsStates({
      ...registerInputsStates,
      inputName: {
        value: e.target.value,
      },
    })

    if (!e.target.value) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputName: {
          ...registerInputsStates.inputName,
          value: e.target.value,
          errorState: true,
          errorMessage: 'Name is required',
        },
      })
      return
    }

    if (e.target.value.length < 4 || e.target.value.length > 20) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputName: {
          ...registerInputsStates.inputName,
          value: e.target.value,
          errorState: true,
          errorMessage: 'Name must be between 4 and 20 characters',
        },
      })
      return
    }
  }

  const inputEmailHandler = e => {
    const emailValidation = inputObjValue => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      return regex.test(inputObjValue)
    }

    setRegisterInputsStates({
      ...registerInputsStates,
      inputEmail: {
        value: e.target.value,
      },
    })

    emailValidation(registerInputsStates.inputEmail.value)
    if (!emailValidation(registerInputsStates.inputEmail.value))
      setRegisterInputsStates({
        ...registerInputsStates,
        inputEmail: {
          ...registerInputsStates.inputEmail,
          value: e.target.value,
          errorState: true,
          errorMessage: 'Email is invalid',
        },
      })

    if (!e.target.value) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputEmail: {
          ...registerInputsStates.inputEmail,
          value: e.target.value,
          errorState: true,
          errorMessage: 'Email is required',
        },
      })
    }
  }

  const inputPasswordHandler = (e, inputPassword) => {
    const inputValue = e.target.value
    const passwordLength = inputValue.length

    if (!inputValue) {
      setRegisterInputsStates({
        ...registerInputsStates,
        [inputPassword]: {
          value: inputValue,
          errorState: true,
          errorMessage: 'Password is required',
        },
      })
    } else if (passwordLength < 8 || passwordLength > 32) {
      setRegisterInputsStates({
        ...registerInputsStates,
        [inputPassword]: {
          value: inputValue,
          errorState: true,
          errorMessage: 'Password must be between 8 and 32 characters',
        },
      })
    } else {
      setRegisterInputsStates({
        ...registerInputsStates,
        [inputPassword]: {
          value: inputValue,
          errorState: false,
          errorMessage: '',
        },
      })
    }
  }

  return (
    <InputHandlersContext.Provider
      value={{
        isVisible,
        toggInputPassVisibility,
        registerInputsStates,
        setRegisterInputsStates,
        clearInput,
        inputTextHandler,
        inputEmailHandler,
        inputPasswordHandler,
      }}
    >
      {children}
    </InputHandlersContext.Provider>
  )
}
