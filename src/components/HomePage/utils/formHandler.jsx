export const formHandler = async (
  event,
  registerInputsStates,
  setRegisterInputsStates,
  registerUser,
  userData,
  setLoading
) => {
  event.preventDefault()

  try {
    setLoading(true)

    if (!registerInputsStates.inputName.value) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputName: {
          ...registerInputsStates.inputName,
          errorState: true,
          errorMessage: "This field can't be empty",
        },
      })
      setLoading(false)
      return
    }

    if (!registerInputsStates.inputEmail.value) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputEmail: {
          ...registerInputsStates.inputEmail,
          errorState: true,
          errorMessage: "This field can't be empty",
        },
      })
      setLoading(false)
      return
    }

    if (!registerInputsStates.inputPassword.value) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputPassword: {
          ...registerInputsStates.inputPassword,
          errorState: true,
          errorMessage: "This field can't be empty",
        },
      })
      setLoading(false)
      return
    }

    if (!registerInputsStates.inputRepeatPassword.value) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputRepeatPassword: {
          ...registerInputsStates.inputRepeatPassword,
          errorState: true,
          errorMessage: "This field can't be empty",
        },
      })
      setLoading(false)
      return
    }

    if (
      registerInputsStates.inputRepeatPassword.value !==
      registerInputsStates.inputPassword.value
    ) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputPassword: {
          ...registerInputsStates.inputPassword,
          errorState: true,
          errorMessage: 'Passwords do not match',
        },
        inputRepeatPassword: {
          ...registerInputsStates.inputRepeatPassword,
          errorState: true,
          errorMessage: 'Passwords do not match',
        },
      })
      setLoading(false)
      return
    } else {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputPassword: {
          ...registerInputsStates.inputPassword,
          errorState: false,
          errorMessage: '',
        },
        inputRepeatPassword: {
          ...registerInputsStates.inputRepeatPassword,
          errorState: false,
          errorMessage: '',
        },
      })
    }

    console.log('register')

    // await registerUser()

    setLoading(false)
  } catch (error) {
    console.error(error)
  }
}
