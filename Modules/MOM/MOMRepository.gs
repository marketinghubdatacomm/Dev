function createMomRecord(data) {
  const momId = createId('MOM');
  const row = [
    momId,
    data.meeting_title,
    data.meeting_date || '',
    data.organizer || '',
    data.participants || '',
    data.summary || '',
    data.google_doc_url || ''
  ];
  appendSheetRow('Trx_MOM', row);
  return { mom_id: momId, ...data };
}
