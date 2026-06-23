function readSheetRows(sheetName) {
  const sheet = getSheet(sheetName);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  const headers = data[0] || [];
  return data.slice(1).map(row => mapRow(headers, row));
}

function appendSheetRow(sheetName, row) {
  const sheet = getSheet(sheetName);
  if (!sheet) throw new Error(`Sheet not found: ${sheetName}`);
  sheet.appendRow(row);
}

function updateSheetRow(sheetName, rowIndex, row) {
  const sheet = getSheet(sheetName);
  if (!sheet) throw new Error(`Sheet not found: ${sheetName}`);
  sheet.getRange(rowIndex, 1, 1, row.length).setValues([row]);
}

function findSheetRow(sheetName, predicate) {
  const rows = readSheetRows(sheetName);
  return rows.find(predicate);
}

function findSheetRows(sheetName, predicate) {
  return readSheetRows(sheetName).filter(predicate);
}

function findSheetRowIndex(sheetName, predicate) {
  const sheet = getSheet(sheetName);
  if (!sheet) return -1;
  const data = sheet.getDataRange().getValues().slice(1);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  for (let i = 0; i < data.length; i++) {
    const obj = mapRow(headers, data[i]);
    if (predicate(obj)) {
      return i + 2;
    }
  }
  return -1;
}

function mapRow(headers, row) {
  const obj = {};
  headers.forEach((header, index) => {
    obj[header] = row[index];
  });
  return obj;
}
