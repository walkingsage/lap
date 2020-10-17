const catalogbtn = document.querySelector('.catalog__btn'),
catalog = document.querySelector('.categories'),
categories = document.querySelectorAll('.categorie'),
checkbox = document.querySelectorAll('.checkbox__category'),
obvodkaCheckbox = document.querySelectorAll('.checkbox-other'),
tovar = document.querySelectorAll('.tovar'),
buttonMore = document.querySelector('.button__more'),
search = document.getElementById('search'),
header = document.querySelector('.header');

let typeTovar = "";
let btnMore = false;
let tovarsContent = 0;
let tovarShow = 6;
let typeTovarShow = 0;
let searching = false;

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
        typeTovar = "homuts" : element.classList.contains('yzels') ? 
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
    buttonMore.style.display = "none";
    console.log(tovarsContent);
  }


$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 150){
        $(".header").removeClass('fixed');
        header.style.animation = "none";
    } 
    else{
        $(".header").addClass('fixed');
        header.style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards headerShow";
    } 
});