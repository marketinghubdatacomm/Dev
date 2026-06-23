function doListContacts() {
  const contacts = readSheetRows(SHEETS.MASTER_CONTACT).filter(row => safeString(row.is_deleted) !== 'TRUE');
  return { success: true, data: contacts };
}
