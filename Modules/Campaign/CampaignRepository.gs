function createCampaignRecord(data) {
  const campaignId = createId('CMP');
  const row = [
    campaignId,
    data.campaign_name,
    data.campaign_type,
    data.brand || '',
    data.objective || '',
    data.start_date || '',
    data.end_date || '',
    data.owner || '',
    data.budget || '',
    data.status || ''
  ];
  appendSheetRow('Trx_Campaign', row);
  return { campaign_id: campaignId, ...data };
}
