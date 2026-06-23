function getCurrentUser() {
  return Session.getActiveUser().getEmail();
}

function isUserAuthorized() {
  const email = getCurrentUser();
  return !!findUserByEmail(email);
}
