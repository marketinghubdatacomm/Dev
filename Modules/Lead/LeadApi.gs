function doGet(e) {
  return HtmlService.createTemplateFromFile('UI/MainLayout').evaluate().setTitle('Marketing Hub');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
