function findUserByEmail(email) {
  return findSheetRow(SHEETS.MASTER_USER, row => safeString(row.email).toLowerCase() === safeString(email).toLowerCase());
}

function findCompanyByName(companyName) {
  return findSheetRow(SHEETS.MASTER_COMPANY, row => safeString(row.company_name).toLowerCase() === safeString(companyName).toLowerCase() && safeString(row.is_deleted) !== 'TRUE');
}

function findContactByEmail(email) {
  return findSheetRow(SHEETS.MASTER_CONTACT, row => safeString(row.email).toLowerCase() === safeString(email).toLowerCase() && safeString(row.is_deleted) !== 'TRUE');
}

function findLeadById(leadId) {
  return findSheetRow(SHEETS.TRX_LEAD, row => safeString(row.lead_id) === safeString(leadId) && safeString(row.is_deleted) !== 'TRUE');
}

function findLeadSourceByLead(leadId) {
  return findSheetRows(SHEETS.TRX_LEAD_SOURCE, row => safeString(row.lead_id) === safeString(leadId));
}

function findLeadActivities(leadId) {
  return findSheetRows(SHEETS.TRX_LEAD_ACTIVITY, row => safeString(row.lead_id) === safeString(leadId) && safeString(row.is_deleted) !== 'TRUE');
}

function findFunnelHistory(leadId) {
  return findSheetRows(SHEETS.TRX_FUNNEL_HISTORY, row => safeString(row.lead_id) === safeString(leadId));
}

function findApprovalByReference(referenceId) {
  return findSheetRows(SHEETS.TRX_APPROVAL, row => safeString(row.reference_id) === safeString(referenceId));
}

function getDashboardCache() {
  return readSheetRows(SHEETS.RPT_DASHBOARD_CACHE);
}
