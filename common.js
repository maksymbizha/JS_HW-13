/* Перша частина */

const a = prompt('Enter first text');
const b = prompt('Enter second text');
const c = prompt('Enter last text');



if(a !== null && a.trim() !== "" && b !== null && b.trim() !== "" && c !== null && c.trim() !== ""){

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    switch (getRandomInt(6)){
        case 1:
            alert(a + b + c);
            break;
        case 2:
            alert(a + c + b);
            break;
        case 3:
            alert(b+ a + c);
            break;
        case 4:
            alert(b+ c + a);
            break;
        case 5:
            alert(c + a + b);
            break;
        case 6:
            alert(c + b + a);
            break;
    }
} else {
    console.log(a,b,c);
    alert('Entered invalid code');
}

/* Друга частина */

Number.prototype.toDivide = function() {
    let int = String(Math.trunc(this));
    if(int.length <= 3) return int;
    let space = 0;
    let number = '';

    for(let i = int.length - 1; i >= 0; i--) {
        if(space === 3) {
            number = ' ' + number;
            space = 0;
        }
        number = int.charAt(i) + number;
        space++;
    }

    return number;
}

const res = +prompt();
alert(res.toDivide());
