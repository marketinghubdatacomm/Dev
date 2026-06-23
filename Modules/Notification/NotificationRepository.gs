function createNotificationRecord(data) {
  const notificationId = createId('NOT');
  const row = [
    notificationId,
    data.user_id || '',
    data.title || '',
    data.message || '',
    data.is_read ? 'TRUE' : 'FALSE',
    nowIso()
  ];
  appendSheetRow('Trx_Notification', row);
  return { notification_id: notificationId, ...data };
}
