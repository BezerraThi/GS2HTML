export interface ISigninUser {
  userEmail: string
  userPassword: string
}

export interface ISignupUser {
  userName: string
  userEmail: string
  userAddress: string
  userCpf: string
  userPassword: string
}

export interface IUserData {
  userId: string
  userName: string
  userEmail: string
  userAddress: string
  userCpf: string
}

// ==================================================================

export interface AuthContextData {
  userId: string | null
  userData: IUserData | null
  isUserLogged: boolean
  handleLogout: () => void
}
