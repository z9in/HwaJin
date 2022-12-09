//research.js
let infoTitle = document.getElementsByClassName('titleName')[0];
let infoDef = document.getElementsByClassName('titleDef')[0];
let techInfo1 = document.getElementsByClassName('tech_pic1')[0];
let techInfo2 = document.getElementsByClassName('tech_pic2')[0];
let techInfo3 = document.getElementsByClassName('tech_pic3')[0];
let techInfo4 = document.getElementsByClassName('tech_pic4')[0];

document.getElementsByClassName('product_info')[0].addEventListener('click', () => {
    infoTitle.innerHTML="수압전사"
    infoDef.innerHTML="필름을 수면 위에 띄워 액체상태로 활성화 시킨 후 피전사들을 전사하는 방식으로 3차원 곡면형상 표현"
    techInfo1.style.display='block'
    techInfo2.style.display='none'
    techInfo3.style.display='none'
    techInfo4.style.display='none'
    infoImgEl.setAttribute('style','background-image:url(../images/suab1.jpg)')
    infoName.innerHTML='①  C/PAD LH'
})
document.getElementsByClassName('product_info')[1].addEventListener('click', () => {
    infoTitle.innerHTML="IPE"
    infoDef.innerHTML="금속을 고진공 속에서 기화시켜 피도물에 피폭, 얇은 피막을 형성하는 표면처리 공법"
    techInfo1.style.display='none'
    techInfo2.style.display='block'
    techInfo3.style.display='none'
    techInfo4.style.display='none'
    infoImgEl.setAttribute('style','background-image:url(../images/ipe1.jpg)')
    infoName.innerHTML='①  A/V GARNISH LH'
})
document.getElementsByClassName('product_info')[2].addEventListener('click', () => {
    infoTitle.innerHTML="패드프린트"
    infoDef.innerHTML="수압전사 및 진공 증착, 도장 공법의 융함 기술로 시각적, 촉각적 입체감을 가미한 REAL TOUCH 공법"
    techInfo1.style.display='none'
    techInfo2.style.display='none'
    techInfo3.style.display='block'
    techInfo4.style.display='none'
    infoImgEl.setAttribute('style','background-image:url(../images/padprint1.jpg)')
    infoName.innerHTML='①  C/PAD LH'
})
document.getElementsByClassName('product_info')[3].addEventListener('click', () => {
    infoTitle.innerHTML="도금위도장"
    infoDef.innerHTML="도금 상단면에 도료를 입힘으로써, 밋밋한 도금면에 고급스럽고 오묘한 느낌을 더해주는 공법"
    techInfo1.style.display='none'
    techInfo2.style.display='none'
    techInfo3.style.display='none'
    techInfo4.style.display='block'
    infoImgEl.setAttribute('style','background-image:url(../images/dojang1.jpg)')
    infoName.innerHTML='①  GRILL RADATOR'
})

let infoImgEl = document.getElementsByClassName('imgBox')[0];
let infoName = document.getElementsByClassName('imgName')[0];

//수압전사 제품 상세
document.getElementsByClassName('num_box_11')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/suab1.jpg)')
    infoName.innerHTML='①  C/PAD LH'

})
document.getElementsByClassName('num_box_12')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/suab2.jpg)')
    infoName.innerHTML='②  C/PAD CTR'

})
document.getElementsByClassName('num_box_13')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/suab3.jpg)')
    infoName.innerHTML='③  C/PAD RH'

})
document.getElementsByClassName('num_box_14')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/suab4.jpg)')
    infoName.innerHTML='④  FRT DOOR UPR LH'

})
document.getElementsByClassName('num_box_15')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/suab5.jpg)')
    infoName.innerHTML='⑤  FRT DOOR UPR RH'

})
document.getElementsByClassName('num_box_16')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/suab6.jpg)')
    infoName.innerHTML='⑥  CONSOLE UPR COVER'

})
document.getElementsByClassName('num_box_17')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/suab7.jpg)')
    infoName.innerHTML='⑦  OUTER COVER'

})
document.getElementsByClassName('num_box_18')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/suab8.jpg)')
    infoName.innerHTML='⑧  CUP HOLER BEZEL'

})

//IPE 제품 상세
document.getElementsByClassName('num_box_21')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/ipe1.jpg)')
    infoName.innerHTML='①  A/V GARNISH LH'

})
document.getElementsByClassName('num_box_22')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/ipe2.jpg)')
    infoName.innerHTML='②  C/PAD MOLDING'

})
document.getElementsByClassName('num_box_23')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/ipe3.jpg)')
    infoName.innerHTML='③  C/PAD GARNISH RH'

})
document.getElementsByClassName('num_box_24')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/ipe4.jpg)')
    infoName.innerHTML='④  STEERG BEZEL'

})
document.getElementsByClassName('num_box_25')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/ipe5.jpg)')
    infoName.innerHTML='⑤  CLOVE BOX DECO'

})
document.getElementsByClassName('num_box_26')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/ipe6.jpg)')
    infoName.innerHTML='⑥  FRT DR GARNISH'
})

//패드프린팅 제품 상세
document.getElementsByClassName('num_box_31')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/padprint1.jpg)')
    infoName.innerHTML='①  C/PAD LH'

})
document.getElementsByClassName('num_box_32')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/padprint2.jpg)')
    infoName.innerHTML='②  C/PAD RH'

})
document.getElementsByClassName('num_box_33')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/padprint3.jpg)')
    infoName.innerHTML='③  FRT DR GARNISH LH'

})

//도장위도장 제품 상세
document.getElementsByClassName('num_box_41')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/dojang1.jpg)')
    infoName.innerHTML='①  GRILL RADATOR'

})
document.getElementsByClassName('num_box_42')[0].addEventListener('click',() => {
    infoImgEl.setAttribute('style','background-image:url(../images/dojang2.jpg)')
    infoName.innerHTML='②  DR COVER-OTR'

})