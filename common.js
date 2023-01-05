const a = prompt('Enter first text');
const b = prompt('Enter second text');
const c = prompt('Enter last text');



if(a,b,c === null || a,b,c === "" ){

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


