function operacion(){

    var numero1=document.getElementById("numero1").value;
    numero1=parseFloat(numero1);
    var numero2=document.getElementById("numero2").value;
    numero2=parseFloat(numero2);
    var numero3=document.getElementById("numero3").value;
    numero3=parseFloat(numero3);
    var numero4=document.getElementById("numero4").value;
    numero4=parseFloat(numero4);
    var numero5=document.getElementById("numero5").value;
    numero5=parseFloat(numero5);
    
    var vectorInicial = new Array(5);
    vectorInicial[0]=numero1;
    vectorInicial[1]=numero2;
    vectorInicial[2]=numero3;
    vectorInicial[3]=numero4;
    vectorInicial[4]=numero5;


    var operation = document.getElementById("operaciones").value;
    if (operation=="suma" ){
         
      alert(operation+': '+(numero1+numero2+numero3+numero4+numero5) );
    }
    if (operation=="multiplicacion" ){
         
      alert(operation+': '+(numero1*numero2*numero3*numero4*numero5) );
    }    


    if (operation=="mayor" ){
        
        alert('De mayor a menor es: '+ vectorInicial.sort(function (b, a)
        {
            return a - b;
        }))
    }    
    if (operation=="menor" ){
        
        alert('De menor a mayor es: '+ vectorInicial.sort(function (a, b)
        {
            return a - b;
        }))
      }      
      return false;





      
}
