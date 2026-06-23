function createActivityRecord(data) {
  const row = [
    data.activity_id,
    data.lead_id,
    data.activity_date,
    data.activity_type,
    data.activity_outcome,
    data.next_action,
    data.next_followup_date,
    data.notes || '',
    data.created_by,
    data.created_at,
    'FALSE'
  ];
  appendSheetRow(SHEETS.TRX_LEAD_ACTIVITY, row);
}

function findActivitiesByLead(leadId) {
  return findSheetRows(SHEETS.TRX_LEAD_ACTIVITY, row => safeString(row.lead_id) === safeString(leadId) && safeString(row.is_deleted) !== 'TRUE');
}

function findAllActivities() {
  return readSheetRows(SHEETS.TRX_LEAD_ACTIVITY).filter(row => safeString(row.is_deleted) !== 'TRUE');
}
