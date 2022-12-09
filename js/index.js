//index.js

let main_bnEl = document.getElementsByClassName('main_bn')[0];
let num = 0;

setInterval(function(){
    num++
    main_bnEl.setAttribute("style",
     `background-image: url(./images/mainbanner${num%3}.jpg);`)
},5000)


$(function () {
    $(".m_btn a").on("click", function () {
      $(".site_map").toggleClass("site_map_open");
    });
  
    $(".site_map_close_btn a").on("click", function () {
      $(".site_map").removeClass("site_map_open");
    });

    $(".family_site li a").on('click',() =>{
        $('.family_site .family2').css({
            display: 'block'
        })
    })
  });