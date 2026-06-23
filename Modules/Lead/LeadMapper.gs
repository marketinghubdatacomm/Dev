function mapLeadRow(row) {
  return {
    lead_id: row.lead_id,
    company_id: row.company_id,
    contact_id: row.contact_id,
    lead_owner: row.lead_owner,
    lead_creator: row.lead_creator,
    assigned_sales: row.assigned_sales,
    funnel_stage: row.funnel_stage,
    lead_status: row.lead_status,
    temperature: row.temperature,
    estimated_value: row.estimated_value,
    expected_close_date: row.expected_close_date,
    notes: row.notes,
    created_at: row.created_at,
    is_deleted: row.is_deleted
  };
}
