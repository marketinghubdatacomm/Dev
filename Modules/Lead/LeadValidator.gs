function validateLeadPayload(payload) {
  if (!payload.company_name) throw new Error('Company name is required');
  if (!payload.full_name) throw new Error('Contact full name is required');
  if (!payload.email) throw new Error('Contact email is required');
  if (!payload.phone) throw new Error('Contact phone is required');
  if (!payload.lead_owner) throw new Error('Lead owner is required');
  if (!payload.source_name && !payload.sources) throw new Error('Lead source is required');
  if (!payload.temperature) throw new Error('Temperature is required');
}
