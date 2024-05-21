document.addEventListener('DOMContentLoaded', function() {
  // Chọn các phần tử HTML
  const btnShowSuccess = document.querySelector('.btn-success');
  const btnShowInfo = document.querySelector('.btn-info');
  const btnShowWarning = document.querySelector('.btn-warning');

  const toastSuccess = document.querySelector('.toast-success');
  const toastInfo = document.querySelector('.toast-info');
  const toastWarning = document.querySelector('.toast-warning');

  const closeButtons = document.querySelectorAll('.toast-close');

  // Đính kèm các sự kiện lắng nghe vào các nút
  btnShowSuccess.addEventListener('click', function() {
    showToast(toastSuccess);
  });

  btnShowInfo.addEventListener('click', function() {
    showToast(toastInfo);
  });

  btnShowWarning.addEventListener('click', function() {
    showToast(toastWarning);
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      hideToast(this.parentElement);
    });
  });

  // Hàm hiển thị thông báo
  function showToast(toast) {
    toast.classList.remove('toast-hide');
    setTimeout(() => {
      hideToast(toast);
    }, 4000); // Thông báo sẽ tự động ẩn sau 3 giây
  }

  // Hàm ẩn thông báo
  function hideToast(toast) {
    toast.classList.add('toast-hide');
  }
});