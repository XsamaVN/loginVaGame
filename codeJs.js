let danhSachTaiKhoan = JSON.parse(localStorage.getItem('taiKhoan')) || [];

function kiemTraNhap() {
    let accountDN = document.getElementById('taiKhoanDangNhap').value
    let passDN = document.getElementById('taiKhoanDangNhap').value
    let accountDK = document.getElementById('taiKhoanDangKy').value;
    let passDK = document.getElementById('matKhauDangKy').value;
    let rePassDK = document.getElementById('nhapLaiMatKhauDangKy').value;

    if (passDK.length, rePassDK.length, passDN.length < 6 && passDK.length, rePassDK.length, passDN.length > 0) {
        document.getElementById('nhapsai').innerHTML = 'mật khẩu phải có ít nhất 6 kí tự'
    } else {
        document.getElementById('nhapsai').innerHTML = '&nbsp;'
    }
    if (passDK !== rePassDK) {
        document.getElementById('nhapsai').innerHTML = "Mật khẩu bạn nhập lại không trùng khớp."
    } else {
        document.getElementById('nhapsai').innerHTML = '&nbsp;'
    }
    if (accountDK === '' || passDK === '' || rePassDK === '' || accountDN === '' || passDN === '') {
        document.getElementById('nhapsai').innerHTML = 'Không được để trống các mục'
    }
}
