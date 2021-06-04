

let qr_btn = document.querySelector("#qr-btn");
let qr_img = document.querySelector("#qr-img");
let loading = document.querySelector("#loading");

qr_btn.addEventListener("click", () => {
    // Loading
    loading.style.display = "block";
    qr_img.onload = function () {
        loading.style.display = "none";
    }
    // Generate Image (QR)
    let input = document.querySelector("#input").value;
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
    qr_img.src = url;
})
