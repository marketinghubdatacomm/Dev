function createPortalRegisterRecord(data) {
  const registerId = createId('PRT');
  const row = [
    registerId,
    data.email,
    data.full_name,
    data.company_name,
    data.source || '',
    data.register_date || '',
    data.verification_status || 'Registered',
    data.activation_status || 'Not Activated',
    data.converted_to_lead || 'FALSE'
  ];
  appendSheetRow('Trx_Portal_Register', row);
  return { register_id: registerId, ...data };
}
