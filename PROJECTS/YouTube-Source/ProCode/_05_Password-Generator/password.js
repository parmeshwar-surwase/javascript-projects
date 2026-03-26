const lengthp = document.querySelector('.length-number');
const upper = document.querySelector('.uppercase');
const lower = document.querySelector('.lowercase');
const number = document.querySelector('.numbers');
const symbol = document.querySelector('.symbols');
const passinp = document.querySelector('.pass-input');
const copy = document.querySelector('.copy');
const generate = document.querySelector('#generate');

console.log(lengthp.value);
console.log(upper.checked);
console.log(lower.checked);
console.log(number.checked);
console.log(symbol.checked);

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

generate.addEventListener('click', () => {

    let str = '';

    if(upper.checked){
        str += uppercasestr;
    }

    if(lower.checked){
        str += lowercasestr;
    }

    if(number.checked){
        str += numberstr;
    }

    if(symbol.checked){
        str += symbolstr;
    }

    console.log(str,"string");

});