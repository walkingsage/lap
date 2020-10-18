"use strict";

const catalogbtn = document.querySelector('.catalog__btn'),
catalog = document.querySelector('.categories'),
categories = document.querySelectorAll('.categorie'),
checkbox = document.querySelectorAll('.checkbox__category'),
obvodkaCheckbox = document.querySelectorAll('.checkbox-other'),
tovar = document.querySelectorAll('.tovar'),
buttonMore = document.querySelector('.button__more'),
search = document.getElementById('search'),
header = document.querySelector('.header'),
logotext = document.querySelector('.mobile__top > .logo__mobile > .logo__text'),
phone = document.querySelector('.header__content > .mobile__top > .phone'),
phonedeleted = document.querySelector('.deleted__phone'),
mail = document.querySelector('.dletedmail'),
searchOpen = document.querySelector('.searchOpen'),
searchBlock = document.querySelector('.search'),
nothing = document.querySelector('.nothing'),
formButton = document.querySelectorAll('.button__form'),
form = document.querySelector('.form'),
nameTovar = document.querySelectorAll('.title__tovar'),
costTovar = document.querySelectorAll('.price'),
inputNameTovar = document.getElementById('name__tovar'),
inputCostTovar = document.getElementById('cost__tovar'),
formcontent = document.querySelector('.form__content'),
shifr = document.querySelectorAll('.shifr'),
shifrInput = document.getElementById('shifr'),
proezd = document.querySelector('.schema__proezda'),
proezdMobile = document.querySelector('.schema__proezda__mobile'),
map = document.querySelector('.map'),
nameInput = document.getElementById('name'),
phoneinput = document.getElementById('phone');

let typeTovar = "";
let btnMore = false;
let tovarsContent = 0;
let tovarShow = 6;
let typeTovarShow = 0;
let searching = false;

const scrollOf = () => {
    document.body.style.overflow = 'hidden';
};

const scrollOn = () => {
    document.body.style.overflow = 'scroll';
    document.body.style.overflowX = 'hidden';
};

let moreRemove = () => {
    console.log("tovarcontent" + tovarsContent);
    console.log("tovarshow" + tovarShow);
    if(tovarsContent<=tovarShow){
        buttonMore.style.display = "none";
    }
    else{
        buttonMore.style.display = "flex";
    }
    console.log("remve");
};

let tovarCut = () => {
    if(typeTovar == ""){
        for(let i=0;i<tovar.length;i++){
            i < tovarShow ? tovar[i].style.display = 'grid': tovar[i].style.display = "none";
            tovarsContent++;
        }
    }
    else if(typeTovar == "all"){
        for(let i=0;i<tovar.length;i++){
            i< tovarShow ? tovar[i].style.display = 'grid': tovar[i].style.display = "none";
            buttonMore.style.display = "flex";
            tovarsContent ++;
        }
    }
    else{
        for(let i=0;i<tovar.length;i++){
            tovar[i].classList.contains(typeTovar) && typeTovarShow<tovarShow ? (tovar[i].style.display = 'grid',tovar[i].classList.add('showType'),typeTovarShow++) : tovar[i].style.display = "none";
        }
    }
    moreRemove();
    if(tovarsContent == 0){
        nothing.style.display = "grid";
    }
    else{
        nothing.style.display = "none";
    }
    buttonMore.style.display = "none";
    console.log(tovarsContent);
};

tovarCut();

checkbox.forEach(element => {
    element.addEventListener('click', () => {
        tovarsContent = 0;
        typeTovarShow = 0;
        tovarShow = 6;
        searching = false;
        let setActive;
        for(let i=0;i<checkbox.length;i++){
            if(element.classList == checkbox[i].classList){
                setActive = i;
            }
            else{
                continue;
            }
        }
        for(let i=0;i<checkbox.length;i++){
            if(setActive == i){
                checkbox[i].checked = true;
                obvodkaCheckbox[i].classList.add('active__category');
            }
            else{
                checkbox[i].checked = false;
                obvodkaCheckbox[i].classList.remove('active__category');
            }
        }
        element.classList.contains('opors') ? 
        typeTovar = "opors" : element.classList.contains('pristavki') ? 
        typeTovar = "pristavki" : element.classList.contains('fundament') ? 
        typeTovar = "fundament" : element.classList.contains('lotki') ? 
        typeTovar = "lotki" : element.classList.contains('plita') ? 
        typeTovar = "plita" : element.classList.contains('bruski') ? 
        typeTovar = "bruski" : element.classList.contains('all') ?
        typeTovar = "all" : element.classList.contains('rigels') ? 
        typeTovar = "rigels" : alert('Ошибка такого типа товара не найдено');

        for(let i = 0; i<tovar.length; i++){
            tovar[i].classList.remove('showType');
            tovar[i].classList.contains(typeTovar) ? tovarsContent++ : tovarsContent = tovarsContent;
        }



        tovarCut();
        
    });
});

categories.forEach(element => {
    element.addEventListener('click', () => {
        tovarsContent = 0;
        typeTovarShow = 0;
        tovarShow = 6;
        searching = false;
        let setActive;
        for(let i=0;i<categories.length;i++){
            if(element.textContent == categories[i].textContent){
                setActive = i;
            }
            else{
                continue;
            }
        }
        for(let i=0;i<categories.length;i++){
            if(setActive == i){
                categories[i].classList.add('active');
            }
            else{
                categories[i].classList.remove('active');
            }
        }

        catalog.style.display = "none";
        catalogOpen = false;

        element.classList.contains('opors') ? 
        typeTovar = "opors" : element.classList.contains('pristavki') ? 
        typeTovar = "pristavki" : element.classList.contains('fundament') ? 
        typeTovar = "fundament" : element.classList.contains('lotki') ? 
        typeTovar = "lotki" : element.classList.contains('plita') ? 
        typeTovar = "plita" : element.classList.contains('bruski') ? 
        typeTovar = "bruski" : element.classList.contains('rigels') ? 
        typeTovar = "rigels" : element.classList.contains('traverces') ? 
        typeTovar = "traverces" : element.classList.contains('ogolovki') ? 
        typeTovar = "ogolovki" : element.classList.contains('kronshtejn') ? 
        typeTovar = "kronshtejn" : element.classList.contains('homuts') ? 
        typeTovar = "homuts" : element.classList.contains('styazjki') ? 
        typeTovar = "styazjki" : element.classList.contains('yzels') ? 
        typeTovar = "yzels" : alert('Ошибка такого типа товара не найдено');

        for(let i = 0; i<tovar.length; i++){
            tovar[i].classList.remove('showType');
            tovar[i].classList.contains(typeTovar) ? tovarsContent++ : tovarsContent = tovarsContent;
        }

        tovarCut();
        moreRemove();
    });
});

let catalogOpen = false;

catalogbtn.addEventListener('click', () => {
    if(catalogOpen){
        catalog.style.display = "none";
        catalogOpen = false;
    }
    else{
        catalog.style.display = "grid";
        catalogOpen = true;
    }
});

buttonMore.addEventListener('click', () => {
    tovarShow = tovarShow+6;
    if(typeTovar == ""){
        for(let i=0;i<tovar.length;i++){
            i < tovarShow ? tovar[i].style.display = 'grid': tovar[i].style.display = "none";
        }
    }
    else if(typeTovar == "all"){
        for(let i=0;i<tovar.length;i++){
            i< tovarShow ? tovar[i].style.display = 'grid': tovar[i].style.display = "none";
            buttonMore.style.display = "flex";
        }
    }
    else if(searching){
        for(let i=0;i<tovar.length;i++){
            tovar[i].classList.contains("searching") ? (tovar[i].style.display = 'grid',typeTovarShow++) : tovar[i].style.display = "none";
        }
    }
    else{
        for(let i=0;i<tovar.length;i++){
            tovar[i].classList.contains(typeTovar) ? (tovar[i].style.display = 'grid',tovar[i].classList.add('showType'),typeTovarShow++) : tovar[i].style.display = "none";
        }
    }
    moreRemove();
});

function myFunction() {
    tovarsContent = 0;
    searching = true;
    let filter, marker, i;
    filter = search.value.toUpperCase();
    for (i = 0; i < tovar.length; i++) {
      marker = tovar[i].getElementsByTagName("span")[0];
      if (marker.textContent.toUpperCase().indexOf(filter) > -1) {
        tovar[i].style.display = "grid";
        tovar[i].classList.add("searching");
        tovarsContent++;
      } else {
        tovar[i].classList.remove("searching");
        tovar[i].style.display = "none";
      }
    }
    if(tovarsContent == 0){
        nothing.style.display = "grid";
    }
    else{
        nothing.style.display = "none";
    }
    buttonMore.style.display = "none";
    console.log(tovarsContent);
  }


$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 150){
        if(window.innerWidth > 469){
            $(".header").removeClass('fixed');
            header.style.animation = "none";
        }
        else{
            logotext.style.display = "block";
            phone.style.display = "none";
            phonedeleted.style.display = "grid";
            mail.style.display = "grid";
            searchOpen.style.display = "none";
            $(".header").removeClass('fixed');
            header.style.animation = "none";
        }
    } 
    else{
        if(window.innerWidth > 469){
            $(".header").addClass('fixed');
            header.style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards headerShow";
        }
        else{
            logotext.style.display = "none";
            phone.style.display = "grid";
            phonedeleted.style.display = "none";
            mail.style.display = "none";
            searchOpen.style.display = "block";
            $(".header").addClass('fixed');
            header.style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards headerShow";
        }
    } 
});

let searchOpened = false;

searchOpen.addEventListener('click', () => {
    if (searchOpened == false){
        searchBlock.classList.remove('searchMobile');
        searchBlock.classList.add('searchMobileOpen');
        search.style.display = "block";
        searchOpened = true;
    }
    else{
        searchBlock.classList.add('searchMobile');
        searchBlock.classList.remove('searchMobileOpen');
        search.style.display = "none";
        searchOpened = false;
    }
});

let formOpen = false;


formButton.forEach((element,i) => {
   element.addEventListener('click', () => {
       form.style.display = "grid";
       inputNameTovar.value = nameTovar[i].textContent;
       inputCostTovar.value = `${costTovar[i].textContent}₽`;
       shifrInput.value = shifr.textContent;
       formOpen = true;
       scrollOf();
   });
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".form__content"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 && formOpen) { // и не по его дочерним элементам
        $(".form").hide(); // скрываем его
        scrollOn();
    }
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".categories"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.hide(); // скрываем его
    }
});

let mapOpen = false;

proezd.addEventListener('click', () => {
    if(!mapOpen){
        map.style.display = "grid";
        mapOpen = true;
    }
    else{
        map.style.display = "none";
        mapOpen = false;
    }
});

proezdMobile.addEventListener('click', () => {
    if(!mapOpen){
        map.style.display = "grid";
        mapOpen = true;
    }
    else{
        map.style.display = "none";
        mapOpen = false;
    }
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".map"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 && mapOpen) { // и не по его дочерним элементам
        div.hide(); // скрываем его
        scrollOn();
    }
});

nameInput.addEventListener('input',function(){
    nameInput.value = nameInput.value.replace(/[0-9,-.,:+/*]/g, '');
});

phoneinput.addEventListener('input',function(){
    phoneinput.value = phoneinput.value.replace(/[a-z,A-Z,а-я,А-Я,-.,:+/*]/g, '');
});

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
};

let firstClick = 0;

$("#phone").click(function(){
    if(firstClick == 0){
        $(this).setCursorPosition(3);
        firstClick++;
    }
  }).mask("+7(999)-999-99-99");