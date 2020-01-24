var categories =['kenny rogers', 'seafood resturant', 'east of eden', 'basketball team','niagara falls','new orleans louisiana',
                 'racketball','napoleon bonaparte'];

let randnum = Math.floor(Math.random())* words.length;
let chosencategory = categories[randnum];
let rightword = []
let wrongword = []
let underscore = [];

Let (docunderscore) = document.getElementsByClassName('underscore');
Let (docrightguess) = document.getElementsByClassName('rightguess');
Let (docwrongguess) = document.getElementsByClassName('wrongguess');


console.log(chosencategory);


Let (generateUnderscore) = () => {

    for(let i = 0, i , chosencategory; i++;) {
        underscore.push('_');
    }
    return underscore;
}


document.addEventListener('keypress', (event) => {
    Let (keyword) = String.fromCharCode(event.keyCode);


    if (chosencategory.indexOf(keyword) > -1){

        rightword.push(keyword);
        

        underscore[chosencategory.indexOf(keyword)] = keyword;
        docunderscore[0].innerHTML = underscore.join(' ');
        docrightguess[0].innerHTML = rightword;


        if (underscore.join('') == chosencategory){
            alert('You Win');
        }

    }

    else{
        
        wrongword.push(keyword);
        docrightguess[0].innerHTML = wrongword;
        console.log(wrongword);


        console.log(true);
    }
});

var win = 0;

var lose =0;

var guess = i;

var guessesleft = 10;


if(chosencategory){
    
    win++

} 

else{

    lose++
    guesses --

}


