// 基本提示
function showBasicAlert() {
    Swal.fire('這是一個基本提示！');
}

// 確認提示
function showConfirmAlert() {
    Swal.fire({
        title: '您確定嗎？',
        text: "此操作無法回復！",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '是的，確定！'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('已確認！', '您的操作已成功完成。', 'success');
        }
    });
}

// 輸入提示
function showInputAlert() {
    Swal.fire({
        title: '請輸入您的名字',
        input: 'text',
        inputPlaceholder: '輸入名字',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire(`你好, ${result.value}!`);
        }
    });
}
//錯誤提示
function showerror(){
    Swal.fire({
        icon: "error",
        title: "錯誤",
        text: "大錯特錯",
        footer: '<a href="https://youtu.be/dQw4w9WgXcQ">Why do I have this issue?</a>'
      });
}
//帶有自訂圖像的訊息
function imagemessage(){
    Swal.fire({
        title: "香蕉!",
        text: "猴子愛吃香蕉.",
        imageUrl: "banana.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });
}


