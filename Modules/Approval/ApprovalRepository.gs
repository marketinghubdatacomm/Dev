function createApprovalRequest(data) {
  const approvalId = createId('APR');
  const row = [
    approvalId,
    data.approval_type,
    data.reference_id,
    data.requested_by,
    data.assigned_approver || '',
    APPROVAL_STATUS.PENDING,
    data.notes || '',
    nowIso(),
    ''
  ];
  appendSheetRow(SHEETS.TRX_APPROVAL, row);
  return { approval_id: approvalId, ...data, status: APPROVAL_STATUS.PENDING, request_date: nowIso() };
}
