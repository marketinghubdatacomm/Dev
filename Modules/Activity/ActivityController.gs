function doCreateActivity(formData) {
  try {
    const payload = JSON.parse(formData);
    const activity = createActivity(payload);
    return { success: true, data: activity };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function doListActivities() {
  return { success: true, data: findAllActivities() };
}

function doListLeadActivities(leadId) {
  return { success: true, data: findActivitiesByLead(leadId) };
}
