// header.js

const headerEl = document.querySelector('.header');
const footerEl = document.querySelector('.footer');

headerEl.innerHTML=`
<h1 class="logo">
<a href="../index.html">
  <img src="../images/logo.png" alt="logo" />
</a>
</h1>
<nav class="header_nav">
<ul class="dep1_ul">
  <li class="dep1_li">
    <a href="../htmls/about.html"
      >회사소개
      <ul class="dep2_ul">
        <li class="dep2_li">
          <a href="../htmls/about.html#vision">회사 비전 </a>
        </li>
        <li class="dep2_li">
          <a href="../htmls/about.html#contact">오시는 길 </a>
        </li>
      </ul>
    </a>
  </li>            
  <li class="dep1_li">
    <a href="../htmls/product.html"
      >제품정보
      <ul class="dep2_ul">
        <li class="dep2_li">
          <a href="../htmls/product.html">수압전사</a>
        </li>
        <li class="dep2_li">
          <a href="../htmls/product.html">IPE</a>
        </li>
        <li class="dep2_li">
          <a href="../htmls/product.html">패드프린트</a>
        </li>
        <li class="dep2_li">
          <a href="../htmls/product.html">도금위도장</a>
        </li>
      </ul>
    </a>
  </li>
  <li class="dep1_li">
      <a href="#"
        >연구정보
        <ul class="dep2_ul">
          <li class="dep2_li">
            <a href="#">기술연구소</a>
          </li>
          <li class="dep2_li"><a href="#">주요기술력</a></li>
        </ul>
      </a>
    </li>
  <li class="dep1_li">
    <a href="#"
      >홍보센터
      <ul class="dep2_ul">
        <li class="dep2_li">
          <a href="#">공지사항 </a>
        </li>
        <li class="dep2_li"><a href="#">공시정보 </a></li>
        <li class="dep2_li"><a href="#">고객지원</a></li>
      </ul>
    </a>
  </li>
  <li class="dep1_li">
      <a href="#"
        >인재채용
        <ul class="dep2_ul">
          <li class="dep2_li">
            <a href="#">인사관리</a>
          </li>
          <li class="dep2_li"><a href="#">채용절차 </a></li>
          <li class="dep2_li"><a href="#">채용공고 </a></li>
        </ul>
      </a>
    </li>
</ul>
</nav>
<div class="header_ui">
<div class="lang">
  <a href="#"
    >KR
    <svg
      width="10"
      height="8"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L4 3.4L7 1" stroke="black" stroke-width="1.3px" />
    </svg>
    <ul>
      <li>KR</li>
      <li>EN</li>
    </ul>
  </a>
</div>
<div class="m_btn">
  <a href="#">
    <img src="../images/site-mep-menu.svg" alt="site-mep-menu" />
  </a>
</div>
</div>
<!-- site map 입니다. -->
<div class="site_map">
  <div class="site_map_upper">
    <h1 class="site_map_logo">
      <a href="../index.html">
        <img src="../images/logo.png" alt="logo" />
      </a>
    </h1>
    <div class="site_map_header_ui">
      <div class="site_map_close_btn">
        <a href="#">
          <img
            src="../images/site_map_close_btn.svg"
            alt="site_close_btn"
          />
        </a>
      </div>
    </div>
  </div>
  <nav class="site_map_nav">
    <ul class="site_map_dep1_ul">
      <li class="site_map_dep1_li">
        <a href="../htmls/about.html"
          >회사소개
          <ul class="site_map_dep2_ul">
            <li class="site_map_dep2_li">
              <a href="../htmls/about.html#vision">회사 비전</a>
            </li>
            <li class="site_map_dep2_li">
              <a href="../htmls/about.html#contact">오시는 길</a>
            </li>
          </ul>
        </a>
      </li>
      <li class="site_map_dep1_li">
        <a href="../htmls/product.html"
          >제품정보
          <ul class="site_map_dep2_ul">
            <li class="site_map_dep2_li">
              <a href="../htmls/product.html">수압전사</a>
            </li>
            <li class="site_map_dep2_li">
              <a href="../htmls/product.html">IPE</a>
            </li>
            <li class="site_map_dep2_li">
              <a href="../htmls/product.html">패드프린트</a>
            </li>
            <li class="site_map_dep2_li">
              <a href="../htmls/product.html">도금위도장</a>
            </li>
          </ul>
        </a>
      </li>
      <li class="site_map_dep1_li">
          <a href="#"
            >연구정보
            <ul class="site_map_dep2_ul">
              <li class="site_map_dep2_li">
                <a href="#">기술연구소</a>
              </li>
              <li class="site_map_dep2_li"><a href="#">주요기술력</a></li>
            </ul>
          </a>
        </li>
      <li class="site_map_dep1_li">
        <a href="#"
          >홍보센터
          <ul class="site_map_dep2_ul">
            <li class="site_map_dep2_li">
              <a href="#">공지사항</a>
            </li>
            <li class="site_map_dep2_li"><a href="#">고시정보</a></li>
            <li class="site_map_dep2_li"><a href="#">고객지원</a></li>
          </ul>
        </a>
      </li>
      <li class="site_map_dep1_li">
          <a href="#"
            >인재채용
            <ul class="site_map_dep2_ul">
              <li class="site_map_dep2_li">
                <a href="#">인사관리</a>
              </li>
              <li class="site_map_dep2_li"><a href="#">채용절차</a></li>
              <li class="site_map_dep2_li"><a href="#">채용공고</a></li>
            </ul>
          </a>
        </li>
    </ul>
  </nav>
</div>
`

footerEl.innerHTML=`
<div class="footer_left">
<div class="footer_left_upper">
  <a href="../index.html">
    <img src="../images/logo.png" alt="logo" />
  </a>
  <div class="footer_left_info_1">
    <p><a href="#">개인정보방침</a></p>
    <p><a href="#">이용약관</a></p>
  </div>
</div>

<div class="footer_left_info_2">
  <p>
    경북 영천시 도남공단길16(도남동) | 대표번호 054-335-9655 |
    팩스 054-330-9606 <br /><br />
    COPYⓒ All RIGHT RESERVED.
  </p>
</div>
</div>
<div class="footer_right">
<div class="family_site">
  <select name="select" id="select">
      <option value=""><a href="#">Family site</a></option>
      <option value=""><a href="#">----------------</option>
      <option value=""><a href="#">SM그룹</a></option>
      <option value=""><a href="#">남선알미늄</a></option>
      <option value=""><a href="#">벡셀</a></option>
  </select>            
</div>
<div class="sns_btn">
  <a href="https://www.naver.com/">
    <img src="../images/naver.svg" alt="naver_btn" />
  </a>
  <a href="https://www.facebook.com/">
    <img src="../images/facebook.svg" alt="facebook_btn" />
  </a>
  <a href="https://www.instagram.com/">
    <img src="../images/instagram.svg" alt="instagram_btn" />
  </a>
  <a href="https://www.youtube.com/">
    <img src="../images/youtube.svg" alt="youtube_btn" />
  </a>
</div>
</div>
`


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
