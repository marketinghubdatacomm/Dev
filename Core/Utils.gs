function createId(prefix) {
  const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMddHHmmssSSS');
  return `${prefix}-${timestamp}`;
}

function safeString(value) {
  return value === undefined || value === null ? '' : String(value).trim();
}

function nowIso() {
  return new Date().toISOString();
}

function parseDate(value) {
  if (!value) return null;
  if (value instanceof Date) return value;
  const parsed = new Date(value);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function formatDate(value) {
  const date = parseDate(value);
  return date ? Utilities.formatDate(date, Session.getScriptTimeZone(), 'yyyy-MM-dd') : '';
}
