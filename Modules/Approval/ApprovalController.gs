function doRequestExitFunnel(formData) {
  try {
    const payload = JSON.parse(formData);
    const approval = requestExitFunnel(payload);
    return { success: true, data: approval };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function doListApprovals() {
  return { success: true, data: readSheetRows(SHEETS.TRX_APPROVAL) };
}
