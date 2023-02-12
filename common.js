/* Перша частина */

const a = prompt('Enter first text');
const b = prompt('Enter second text');
const c = prompt('Enter last text');


if(a && b && c){

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    switch (getRandomInt(6)){
        case 1:
            alert(a.trim() + b.trim() + c.trim());
            break;
        case 2:
            alert(a.trim() + c.trim() + b.trim());
            break;
        case 3:
            alert(b.trim() + c.trim() + a.trim());
            break;
        case 4:
            alert(b.trim() + a.trim() + c.trim());
            break;
        case 5:
            alert(c.trim() + b.trim() + a.trim());
            break;
        case 6:
            alert(c.trim() + a.trim() + b.trim());
            break;
    }
} else {
    alert('Entered invalid code');
}

/* Друга частина */


const num = 851723;

const array = Array.from(num.toString(), Number)

alert(`${array.join('  ,')}`)
