function doCreateLead(formData) {
  try {
    const payload = JSON.parse(formData);
    const lead = createLead(payload);
    return { success: true, data: lead };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function doGetLead(leadId) {
  const lead = findLeadById(leadId);
  if (!lead) return { success: false, error: 'Lead not found' };
  const sources = findLeadSourceByLead(leadId);
  const activities = findLeadActivities(leadId);
  const funnelHistory = findFunnelHistory(leadId);
  return { success: true, data: { lead, sources, activities, funnelHistory } };
}

function doListLeads() {
  return { success: true, data: readSheetRows(SHEETS.TRX_LEAD).filter(row => safeString(row.is_deleted) !== 'TRUE') };
}
