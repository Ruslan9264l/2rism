var mySelects = customSelect('select');
console.log(mySelects);

const Inputsubscribe = document.querySelector('.subscribe__input');
const lable = document.querySelector('.subscribe__lable');

Inputsubscribe.addEventListener('input', ()=> {
    if(Inputsubscribe.value.trim() !=='') {
        lable.classList.add('.subscribe__lable--top');
    }else {
        lable.classList.remove('.subscribe__lable--top');
    }
})