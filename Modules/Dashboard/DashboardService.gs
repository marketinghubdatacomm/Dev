function getDashboardSummary() {
  const leads = readSheetRows(SHEETS.TRX_LEAD).filter(row => safeString(row.is_deleted) !== 'TRUE');
  const activities = readSheetRows(SHEETS.TRX_LEAD_ACTIVITY).filter(row => safeString(row.is_deleted) !== 'TRUE');
  const approvals = readSheetRows(SHEETS.TRX_APPROVAL);
  const totals = {
    totalLead: leads.length,
    totalMql: leads.filter(row => safeString(row.funnel_stage) === FUNNEL_STAGE.MQL).length,
    totalSql: leads.filter(row => safeString(row.funnel_stage) === FUNNEL_STAGE.SQL).length,
    totalOpportunity: leads.filter(row => safeString(row.funnel_stage) === FUNNEL_STAGE.OPPORTUNITY).length,
    totalActivity: activities.length,
    pendingApproval: approvals.filter(row => safeString(row.status) === APPROVAL_STATUS.PENDING).length
  };
  return totals;
}
