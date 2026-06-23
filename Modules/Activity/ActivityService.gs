function createActivity(payload) {
  if (!payload.lead_id) throw new Error('Lead ID is required');
  if (!payload.activity_type) throw new Error('Activity type is required');
  if (!payload.activity_date) throw new Error('Activity date is required');

  const activityId = createId('ACT');
  const createdAt = nowIso();
  const activity = {
    activity_id: activityId,
    lead_id: payload.lead_id,
    activity_date: formatDate(payload.activity_date),
    activity_type: payload.activity_type,
    activity_outcome: payload.activity_outcome || '',
    next_action: payload.next_action || '',
    next_followup_date: formatDate(payload.next_followup_date),
    notes: payload.notes || '',
    created_by: payload.created_by || getCurrentUser(),
    created_at: createdAt
  };
  createActivityRecord(activity);
  return activity;
}
