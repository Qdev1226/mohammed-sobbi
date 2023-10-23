
var downloadLinks = document.querySelectorAll(".downloadLink");
for (var i = 0; i < downloadLinks.length; i++) {
    downloadLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        var fileURL = this.getAttribute("data-file");
        var fileName = fileURL.split("/").pop(); // Extract the file name from the URL

        var link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        link.click();
    });
}

if ($(".slider-certificate").length > 0) {
    let swiper = new Swiper(".slider-certificate", {
        slidesPerView: 1,
        autoplay: true,
        speed:8000,
        loop: true,
    });
}
if ($(".slider-certificate-vrtical").length > 0) {
    let swiper = new Swiper(".slider-certificate-vrtical", {
        slidesPerView: 1,
        direction: 'vertical',
        autoplay: true,
        speed:2000,
        loop: true,
    });
}
// =================================================


var prevScrollPos = window.scrollY || document.documentElement.scrollTop;
var header = document.querySelector("header");

window.addEventListener("scroll", function () {
    var currentScrollPos = window.scrollY || document.documentElement.scrollTop;

    if (prevScrollPos > currentScrollPos) {
        header.classList.remove("top-100");
    } else {
        header.classList.add("top-100");
    }

    prevScrollPos = currentScrollPos;
});


$(".toggle-mob-menu").on("click",function(){
    $("#menu-header-menu").toggleClass("active");
    $(this).toggleClass("active")
})