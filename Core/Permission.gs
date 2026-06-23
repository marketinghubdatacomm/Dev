function canCreateLead(userEmail) {
  const user = findUserByEmail(userEmail);
  if (!user) return false;
  return ['Owner', 'Manager', 'Admin', 'BDR'].includes(user.role_id);
}

function canViewDashboard(userEmail) {
  const user = findUserByEmail(userEmail);
  if (!user) return false;
  return ['Owner', 'Manager', 'Admin', 'BDR', 'Digital Marketing', 'Marketing Specialist', 'Sales'].includes(user.role_id);
}
