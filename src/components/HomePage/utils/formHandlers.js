async function registerFormHandler(
  event,
  registerInputsStates,
  setRegisterInputsStates,
  registerUser,
  setLoading
) {
  event.preventDefault()

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

  try {
    setLoading(true)

    async function registerUser() {
      const res = await fetch('http://localhost:3000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: registerInputsStates.inputName.value,
          email: registerInputsStates.inputEmail.value,
          password: registerInputsStates.inputPassword.value,
        }),
      })
      const data = await res.json()
      setUser(data)
      return data
    }

    if (data.status === 409) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputEmail: {
          ...registerInputsStates.inputEmail,
          errorState: true,
          errorMessage: 'Email already exists',
        },
      })
      setLoading(false)
      return
    }

    setLoading(false)
  } catch (error) {
    console.error(error)
  }
}

async function loginFormHandler(
  event,
  registerInputsStates,
  setRegisterInputsStates,
  loginUser,
  setLoading
) {
  event.preventDefault()

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

  try {
    setLoading(true)

    const data = await loginUser()

    if (data.status === 404) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputEmail: {
          ...registerInputsStates.inputEmail,
          errorState: true,
          errorMessage: 'User Not found',
        },
      })
      setLoading(false)
      return
    }

    if (data.status === 401) {
      setRegisterInputsStates({
        ...registerInputsStates,
        inputPassword: {
          ...registerInputsStates.inputPassword,
          errorState: true,
          errorMessage: 'Invalid password',
        },
      })
      setLoading(false)
      return
    }

    localStorage.setItem('token', data.user.token)
    setLoading(false)
  } catch (error) {
    console.error(error)
  }
}

export const formHandlers = {
  registerFormHandler,
  loginFormHandler,
}