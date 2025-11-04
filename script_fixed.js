const references = [
  { name: 'Sangat Layak', rgb: { r: 75, g: 9, b: 12 }, price: 'Rp 20.000' },
  { name: 'Masih Layak', rgb: { r: 101, g: 7, b: 5 }, price: 'Rp 15.000' },
  { name: 'Kurang Layak', rgb: { r: 245, g: 197, b: 66 }, price: 'Rp 10.000' },
  { name: 'Tidak Layak', rgb: { r: 255, g: 245, b: 180 }, price: 'Rp 0' }
];

function showNotification(status) {
  const notif = document.getElementById('notif');
  if (status === 'Sangat Layak') {
    notif.textContent = '✅ Produk sangat layak dikonsumsi.';
    notif.style.background = '#27ae60';
    notif.style.color = '#fff';
  } else if (status === 'Masih Layak') {
    notif.textContent = '⚠️ Produk masih layak, sebaiknya segera dikonsumsi.';
    notif.style.background = '#f1c40f';
    notif.style.color = '#111';
  } else if (status === 'Kurang Layak') {
    notif.textContent = '⚠️ Produk kurang layak, periksa kondisi sebelum konsumsi.';
    notif.style.background = '#e67e22';
    notif.style.color = '#fff';
  } else {
    notif.textContent = '❌ Produk tidak layak dikonsumsi.';
    notif.style.background = '#e74c3c';
    notif.style.color = '#fff';
  }
}
