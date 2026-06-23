const SPREADSHEET_ID = 'PUT_SPREADSHEET_ID_HERE';

function getSpreadsheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function getSheet(name) {
  return getSpreadsheet().getSheetByName(name);
}

function showApp() {
  const html = HtmlService.createTemplateFromFile('UI/MainLayout')
    .evaluate()
    .setTitle('Marketing Hub');
  SpreadsheetApp.getUi().showSidebar(html);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function initializeSheets() {
  const definitions = [
    {name: SHEETS.MASTER_USER, headers: ['user_id', 'full_name', 'email', 'role_id', 'status', 'created_at']},
    {name: SHEETS.MASTER_ROLE, headers: ['role_id', 'role_name', 'description']},
    {name: SHEETS.MASTER_COMPANY, headers: ['company_id', 'company_name', 'industry', 'company_size', 'website', 'city', 'country', 'notes', 'created_by', 'created_at', 'is_deleted']},
    {name: SHEETS.MASTER_CONTACT, headers: ['contact_id', 'company_id', 'full_name', 'email', 'phone', 'job_title', 'seniority_level', 'linkedin_url', 'notes', 'created_at', 'is_deleted']},
    {name: SHEETS.TRX_LEAD, headers: ['lead_id', 'company_id', 'contact_id', 'lead_owner', 'lead_creator', 'assigned_sales', 'funnel_stage', 'lead_status', 'temperature', 'estimated_value', 'expected_close_date', 'notes', 'created_at', 'is_deleted']},
    {name: SHEETS.TRX_LEAD_SOURCE, headers: ['lead_source_id', 'lead_id', 'source_name', 'source_type', 'is_primary', 'source_date']},
    {name: SHEETS.TRX_LEAD_ACTIVITY, headers: ['activity_id', 'lead_id', 'activity_date', 'activity_type', 'activity_outcome', 'next_action', 'next_followup_date', 'notes', 'created_by', 'created_at', 'is_deleted']},
    {name: SHEETS.TRX_FUNNEL_HISTORY, headers: ['history_id', 'lead_id', 'from_stage', 'to_stage', 'movement_date', 'reason', 'created_by']},
    {name: SHEETS.TRX_APPROVAL, headers: ['approval_id', 'approval_type', 'reference_id', 'requested_by', 'assigned_approver', 'status', 'notes', 'request_date', 'approval_date']},
    {name: SHEETS.RPT_DASHBOARD_CACHE, headers: ['cache_key', 'value', 'updated_at']}
  ];

  definitions.forEach(def => {
    ensureSheet(def.name, def.headers);
  });
}

function ensureSheet(name, headers) {
  let sheet = getSpreadsheet().getSheetByName(name);
  if (!sheet) {
    sheet = getSpreadsheet().insertSheet(name);
  }
  const existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] || [];
  if (existingHeaders.length === 0 || !arraysEqual(existingHeaders, headers)) {
    sheet.clearContents();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (String(a[i]).trim() !== String(b[i]).trim()) return false;
  }
  return true;
}
