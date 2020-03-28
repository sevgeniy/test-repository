function autenticate(login, password) {
  return login === "login" && password === "password"
    ? "You were logged in"
    : "Login is incorrect";
}
