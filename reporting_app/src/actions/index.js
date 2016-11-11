export const SIGNEDIN = 'SIGNEDIN'

export function signedIn (user) {
  return {
    type: SIGNEDIN,
    payload: user
  }
}
