const catalogbtn = document.querySelector('.catalog__btn'),
catalog = document.querySelector('.categories'),
categories = document.querySelectorAll('.categorie'),
checkbox = document.querySelectorAll('.checkbox__category'),
obvodkaCheckbox = document.querySelectorAll('.checkbox-other'),
tovar = document.querySelectorAll('.tovar'),
buttonMore = document.querySelector('.button__more');

let typeTovar = "";
let btnMore = false;
let tovarsContent = 0;

tovar.forEach(() => {
    if(!btnMore){
        for(let i=0;i<tovar.length;i++){
            i < 6 ? tovar[i].style.display = 'grid': tovar[i].style.display = "none";
        }
    }
});

checkbox.forEach(element => {
    element.addEventListener('click', () => {
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
    });
});

categories.forEach(element => {
    element.addEventListener('click', () => {
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

let tovarShow = 6;

buttonMore.addEventListener('click', () => {
    tovarShow = tovarShow + 6;
    if(typeTovar == ""){
        for(let i=0;i<tovarShow;i++){
            if(tovarShow < tovar.length){
                tovar[i].style.display = 'grid';
            }
            else{
                buttonMore.style.display="none";
            }
        }
    }
    else {
        for(let i=0;i<tovarShow;i++){
            if(tovarShow<tovarsContent){
                tovar[i].classList.contains(typeTovar)? tovar[i].style.display = 'grid' : tovar[i].style.display = "none";
            }
            else{
                buttonMore.style.display="none";
            }
        }
    }
});
