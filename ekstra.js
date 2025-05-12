var x=parseInt(prompt('birinci sayi'));
var y=parseInt(prompt('ikinci sayi'));

function teksayılarıtopla(n,son) {
    if (n>son){
        return 99;
    }
    else{
        return n+teksayılarıtopla(n+2,son);
    }
}

var toplam=teksayılarıtopla(x,y);
console.log("toplam:", toplam);