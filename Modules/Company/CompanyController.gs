function doListCompanies() {
  const companies = readSheetRows(SHEETS.MASTER_COMPANY).filter(row => safeString(row.is_deleted) !== 'TRUE');
  return { success: true, data: companies };
}
