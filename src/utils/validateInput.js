export function validatePassword(password) {
  if (password.length < 8) return false;
  return true;
}

export function validateInput(input) {
  if (input.length == 0) return false;
  return true;
}
