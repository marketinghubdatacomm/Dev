function createProjectRecord(data) {
  const projectId = createId('PRJ');
  const row = [
    projectId,
    data.project_name,
    data.project_type || '',
    data.project_owner || '',
    data.project_manager || '',
    data.start_date || '',
    data.due_date || '',
    data.status || '',
    data.priority || '',
    data.description || ''
  ];
  appendSheetRow('Trx_Project', row);
  return { project_id: projectId, ...data };
}
