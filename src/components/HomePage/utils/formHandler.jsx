export const formHandler = async (
  event,
  registerInputsStates,
  setRegisterInputsStates,
  registerUser,
  saveUser,
  setLoading
) => {
  event.preventDefault()

  if (
    registerInputsStates.inputRepeatPassword.value !==
    registerInputsStates.inputPassword.value
  ) {
    setRegisterInputsStates({
      ...registerInputsStates,
      inputRepeatPassword: {
        ...registerInputsStates.inputRepeatPassword,
        errorState: true,
        errorMessage: 'Passwords do not match',
      },
    })
    return
  }

  try {
    setLoading(true)

    const data = await registerUser()

    if (data.ok === false && data.status === 400) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputName: {
          ...registerInputsStates.inputName,
          errorState: true,
          errorMessage: data.message,
        },
      })
      setLoading(false)
      console.log(data)

      return
    } else if (data.ok === false && data.status === 409) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputEmail: {
          ...registerInputsStates.inputEmail,
          errorState: true,
          errorMessage: data.message,
        },
      })
      setLoading(false)
      console.log(data)

      return
    }

    saveUser(data.user)

    setLoading(false)
  } catch (error) {
    console.error(error)
  }
}
