function createLeadRecord(data) {
  const row = [
    data.lead_id,
    data.company_id,
    data.contact_id,
    data.lead_owner,
    data.lead_creator,
    data.assigned_sales || '',
    data.funnel_stage,
    data.lead_status,
    data.temperature,
    data.estimated_value || '',
    data.expected_close_date || '',
    data.notes || '',
    data.created_at,
    'FALSE'
  ];
  appendSheetRow(SHEETS.TRX_LEAD, row);
}

function updateLeadRecord(leadId, data) {
  const index = findSheetRowIndex(SHEETS.TRX_LEAD, row => safeString(row.lead_id) === safeString(leadId) && safeString(row.is_deleted) !== 'TRUE');
  if (index < 0) throw new Error('Lead not found');
  const row = [
    data.lead_id,
    data.company_id,
    data.contact_id,
    data.lead_owner,
    data.lead_creator,
    data.assigned_sales || '',
    data.funnel_stage,
    data.lead_status,
    data.temperature,
    data.estimated_value || '',
    data.expected_close_date || '',
    data.notes || '',
    data.created_at,
    'FALSE'
  ];
  updateSheetRow(SHEETS.TRX_LEAD, index, row);
}

function upsertLeadSource(leadId, sources) {
  sources.forEach(source => {
    const row = [
      source.lead_source_id,
      leadId,
      source.source_name,
      source.source_type,
      source.is_primary ? 'TRUE' : 'FALSE',
      source.source_date
    ];
    appendSheetRow(SHEETS.TRX_LEAD_SOURCE, row);
  });
}
