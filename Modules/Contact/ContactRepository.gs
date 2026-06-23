function createContactRecord(data) {
  const contactId = createId('CON');
  const row = [
    contactId,
    data.company_id,
    data.full_name,
    data.email,
    data.phone,
    data.job_title || '',
    data.seniority_level || '',
    data.linkedin_url || '',
    data.notes || '',
    nowIso(),
    'FALSE'
  ];
  appendSheetRow(SHEETS.MASTER_CONTACT, row);
  return {
    contact_id: contactId,
    ...data,
    created_at: nowIso(),
    is_deleted: 'FALSE'
  };
}
