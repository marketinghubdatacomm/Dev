function createFunnelHistory(data) {
  const historyId = createId('FH');
  const row = [
    historyId,
    data.lead_id,
    data.from_stage,
    data.to_stage,
    data.movement_date,
    data.reason || '',
    data.created_by || ''
  ];
  appendSheetRow(SHEETS.TRX_FUNNEL_HISTORY, row);
  return { history_id: historyId, ...data };
}
