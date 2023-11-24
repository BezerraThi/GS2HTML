const loginUser = (userType) => {
  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('userType', userType)
}

const logoutUser = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('userType')
}

const getLoginStatus = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const userType = localStorage.getItem('userType')

  return isLoggedIn !== null && isLoggedIn === 'true' && userType !== null
    ? userType
    : null
}

export { loginUser, logoutUser, getLoginStatus }
