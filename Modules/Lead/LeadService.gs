function createLead(payload) {
  validateLeadPayload(payload);

  let company = findCompanyByName(payload.company_name);
  if (!company) {
    company = createCompanyRecord({
      company_name: payload.company_name,
      industry: payload.industry,
      company_size: payload.company_size,
      website: payload.website,
      city: payload.city,
      country: payload.country,
      notes: payload.company_notes || '',
      created_by: payload.created_by
    });
  }

  let contact = findContactByEmail(payload.email);
  if (!contact) {
    contact = createContactRecord({
      company_id: company.company_id,
      full_name: payload.full_name,
      email: payload.email,
      phone: payload.phone,
      job_title: payload.job_title,
      seniority_level: payload.seniority_level,
      linkedin_url: payload.linkedin_url,
      notes: payload.contact_notes || ''
    });
  }

  const leadId = createId('LED');
  const createdAt = nowIso();
  const leadData = {
    lead_id: leadId,
    company_id: company.company_id,
    contact_id: contact.contact_id,
    lead_owner: payload.lead_owner,
    lead_creator: payload.created_by,
    assigned_sales: payload.assigned_sales || '',
    funnel_stage: FUNNEL_STAGE.LEAD,
    lead_status: LEAD_STATUS.NEW,
    temperature: payload.temperature,
    estimated_value: payload.estimated_value || '',
    expected_close_date: formatDate(payload.expected_close_date),
    notes: payload.notes || '',
    created_at: createdAt
  };

  createLeadRecord(leadData);

  upsertLeadSource(leadId, payload.sources || [{
    lead_source_id: createId('LS'),
    source_name: payload.source_name,
    source_type: payload.source_type || 'Manual',
    is_primary: true,
    source_date: formatDate(payload.source_date || createdAt)
  }]);

  return leadData;
}
