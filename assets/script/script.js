const catalogbtn = document.querySelector('.catalog__btn'),
catalog = document.querySelector('.categories'),
categories = document.querySelectorAll('.categorie'),
checkbox = document.querySelectorAll('.checkbox__category'),
obvodkaCheckbox = document.querySelectorAll('.checkbox-other'),
tovar = document.querySelectorAll('.tovar'),
buttonMore = document.querySelector('.button__more');

let typeTovar = "";
let btnMore = false;
let tovarsContent;
let tovarShow = 6;
let typeTovarShow = 0;

let tovarCut = () => {
    if(typeTovar == ""){
        for(let i=0;i<tovar.length;i++){
            i < 6 ? tovar[i].style.display = 'grid': tovar[i].style.display = "none";
        }
    }
    else if(typeTovar == "all"){
        for(let i=0;i<tovar.length;i++){
            i<6 ? tovar[i].style.display = 'grid': tovar[i].style.display = "none";
            buttonMore.style.display = "flex";
            tovarsContent ++;
        }
    }
    else{
        for(let i; i<tovar.length; i++){
            if(typeTovarShow<tovarShow){
                tovar[i].classList.contains(typeTovar) ? tovar[i].style.display = "grid" : tovar[i].style.display = "none";
                typeTovarShow++;
                tovarsContent++;
            }
            else{
                tovar[i].style.display = "none";
            }
        }
    }
    console.log(typeTovarShow);
    console.log(tovarShow);
};


tovarCut();

checkbox.forEach(element => {
    element.addEventListener('click', () => {
        tovarShow = 6;
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
        typeTovar = "all" : alert('Ошибка такого типа товара не найдено');

        console.log(typeTovar);

        tovarCut();
    });
});

categories.forEach(element => {
    element.addEventListener('click', () => {
        let setActive;
        tovarShow = 6;
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

        tovar.forEach(() => {
            for(let i=0;i<tovar.length;i++){
               tovar[i].classList.contains(typeTovar)? (tovar[i].style.display = 'grid', tovarsContent++) : tovar[i].style.display = "none";
            }
        });
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

const moreRemove = () => {
    if(tovarShow >= tovar.length){
        buttonMore.style.display="none";
    }
    else if(tovarShow >= tovarsContent){
        buttonMore.style.display="none";
    }
};

buttonMore.addEventListener('click', () => {
    tovarShow = tovarShow + 6;
    if(typeTovar == ""){
        for(let i=0;i<tovarShow;i++){
                tovar[i].style.display = 'grid';
                moreRemove();
        }
    }
    else if(typeTovar == "all"){
        for(let i=0;i<tovarShow;i++){
            tovar[i].style.display = 'grid';
            moreRemove();
        }
    }
    else {
        for(let i=0;i<tovarShow;i++){
                tovar[i].classList.contains(typeTovar)? tovar[i].style.display = 'grid' : tovar[i].style.display = "none";
                moreRemove();
        }
    }
});
