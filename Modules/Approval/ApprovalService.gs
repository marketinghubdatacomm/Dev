function requestExitFunnel(payload) {
  if (!payload.lead_id) throw new Error('Lead ID is required');
  if (!payload.reason) throw new Error('Exit reason is required');
  const approval = createApprovalRequest({
    approval_type: APPROVAL_TYPE.EXIT_FUNNEL,
    reference_id: payload.lead_id,
    requested_by: payload.requested_by || getCurrentUser(),
    assigned_approver: payload.assigned_approver || '',
    notes: payload.reason,
    request_date: nowIso()
  });
  return approval;
}
