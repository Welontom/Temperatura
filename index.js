function converterTexto(){
    var valor = parseFloat(document.getElementById('number').value)
    var unidade = document.querySelector('select').value
    
    if (unidade == 'celsius'){
        var celsius = valor
        var fahrenheit = valor*1.8+32
        var kelvin = valor + 273
        document.getElementById('range').value = kelvin
    }
    else if(unidade == 'fahrenheit'){
        var celsius = (valor-32)/1.8
        var fahrenheit = valor
        var kelvin = celsius +273
        document.getElementById('range').value = kelvin
    }
    else if(unidade == 'kelvin'){
        var celsius = valor - 273
        var fahrenheit = celsius*1.8+32
        var kelvin = valor
        document.getElementById('range').value = valor
    }

    mostrar(celsius,fahrenheit,kelvin);
    cor(kelvin);
}
function converterRange(){
    var valor = parseFloat(document.getElementById('range').value)

    var celsius = valor - 273
    var fahrenheit = celsius*1.8+32
    var kelvin = valor

    document.getElementById('number').value = valor
    document.querySelector('select').value  = 'kelvin'
    mostrar(celsius,fahrenheit,kelvin);
    cor(kelvin);
}
function mostrar(x,y,z){
    var linha = document.querySelector('table').rows[1].cells;
    linha[0].innerText = (x).toFixed(2)+' °C'
    linha[1].innerText = (y).toFixed(2)+' °F'
    linha[2].innerText = (z).toFixed(2)+' K'
}
function cor(cor){
    var vermelho = parseFloat((1.014**(cor+12)).toFixed(0))
    var azul = parseFloat((265-1.011**(cor+200)).toFixed(0))
    if (cor < 335 && cor>=0){
        var verde = parseFloat((170+1.012**(cor+100)).toFixed(0))
    }
    else if (cor < 0 ){
        var verde = parseFloat((1.015**(cor+347)).toFixed(0))
    }
    else{
        var verde = parseFloat((285-1.014**(cor-100)).toFixed(0))
    }
    
    if (vermelho>255){
        vermelho=255
    }
    if (verde>255){
        verde=255
    }
    if (verde<0){
        verde=0
    }
    if (azul<0){
        azul=0
    }
    if (azul>255){
        azul=255
    }


    var body = document.querySelector('body')
    body.style.backgroundColor = 'rgb('+vermelho+','+verde+','+azul+')';
    colorir(vermelho,verde,azul)
    hexa(vermelho,verde,azul)

}
function colorir(r,g,b){
    document.getElementById('rgb').value = r+','+g+','+b
}

function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
  
  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
function hexa(r,g,b){
    var hexa = ConvertRGBtoHex(r,g,b)
    
    document.getElementById('hexa').value = hexa
}
function escalaTempRangeK(){
    document.getElementById('range').max = parseFloat(document.getElementById('kmax').value)
    document.getElementById('range').min = parseFloat(document.getElementById('kmin').value)
}
