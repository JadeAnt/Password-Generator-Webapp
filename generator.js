function generator(elm){
    elm = document.getElementById(elm);
    elm.value = generatePassword();
}
  
function generatePassword(){
    var passw = "";
    var vals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 

    var leng = Math.random() * (15 - 10) + 10;
    for(i = 0; i <= leng; i++){
        passw += vals.charAt(Math.floor(Math.random() * vals.length + 1));
    }

    return passw;
}