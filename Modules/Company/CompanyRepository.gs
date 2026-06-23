function createCompanyRecord(data) {
  const companyId = createId('COM');
  const row = [
    companyId,
    data.company_name,
    data.industry || '',
    data.company_size || '',
    data.website || '',
    data.city || '',
    data.country || '',
    data.notes || '',
    data.created_by || '',
    nowIso(),
    'FALSE'
  ];
  appendSheetRow(SHEETS.MASTER_COMPANY, row);
  return {
    company_id: companyId,
    ...data,
    created_at: nowIso(),
    is_deleted: 'FALSE'
  };
}
