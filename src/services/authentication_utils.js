import jsCookie from 'js-cookie'

export function authenticated() {
  return jsCookie.get('auth') === 'true'
}
