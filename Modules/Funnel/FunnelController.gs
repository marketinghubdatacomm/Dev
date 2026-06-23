function doMoveStage(formData) {
  try {
    const payload = JSON.parse(formData);
    const result = moveLeadStage(payload.lead_id, payload.to_stage, payload.reason);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
