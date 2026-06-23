function seedInitialData() {
  const roles = [
    ['Owner', 'Full system access'],
    ['Manager', 'Team and approval management'],
    ['Admin', 'Data administration and user support'],
    ['BDR', 'Lead processing and activity logging'],
    ['Digital Marketing', 'Campaign and portal monitoring'],
    ['Marketing Specialist', 'Project and MOM operations'],
    ['Sales', 'Opportunity handling']
  ];

  const roleSheet = getSheet(SHEETS.MASTER_ROLE);
  if (!roleSheet) throw new Error('Master_Role sheet missing');
  const existing = readSheetRows(SHEETS.MASTER_ROLE).map(row => safeString(row.role_name).toLowerCase());
  roles.forEach(role => {
    if (!existing.includes(role[0].toLowerCase())) {
      appendSheetRow(SHEETS.MASTER_ROLE, [createId('ROL'), role[0], role[1]]);
    }
  });
}
