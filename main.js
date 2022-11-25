document.getElementById("btnTinhTien").onclick = function(){
// đầu vào
    var thanhToan = document.getElementById("thanhToan").value*1 ;
    var tienTip = document.getElementById("tienTip").value*1 ;
    var nguoiShare = document.getElementById("nguoiShare").value*1 ;

// xử lý
    var soTienTip =( thanhToan * tienTip) / 100;
    var ketQua = soTienTip / nguoiShare;

    //Đầu ra
    document.getElementById("showKetQua").innerHTML = "Số tiền tip: " + ketQua;
}
