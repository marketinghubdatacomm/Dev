const FUNNEL_TRANSITIONS = {
  Lead: ['MQL', 'Exited'],
  MQL: ['SQL', 'Exited'],
  SQL: ['Opportunity', 'Exited'],
  Opportunity: ['Closed Won', 'Closed Lost']
};

function moveLeadStage(leadId, toStage, reason) {
  const lead = findLeadById(leadId);
  if (!lead) throw new Error('Lead not found');
  const fromStage = lead.funnel_stage;
  const allowed = FUNNEL_TRANSITIONS[fromStage] || [];
  if (!allowed.includes(toStage)) {
    throw new Error(`Invalid transition from ${fromStage} to ${toStage}`);
  }
  const history = createFunnelHistory({
    lead_id: leadId,
    from_stage: fromStage,
    to_stage: toStage,
    movement_date: nowIso(),
    reason: reason || '',
    created_by: getCurrentUser()
  });
  lead.funnel_stage = toStage;
  lead.lead_status = toStage === 'MQL' ? 'Qualified' : lead.lead_status;
  updateLeadRecord(leadId, lead);
  return { lead, history };
}
