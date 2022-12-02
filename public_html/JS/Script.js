const mapping = {
		//Unidade
		0 : [
			 ''		//0
			,'I' 	//1
			,'II'	//2
			,'III'	//3
			,'IV'	//4
			,'V'	//5
			,'VI'	//6
			,'VII'	//7
			,'VIII'	//8
			,'IX'	//9				
		]
		//Dezena
		,1 : [
			 ''		//10
			,'X'	//10
			,'XX'   //20
			,'XXX'  //30
			,'XL'   //40
			,'L'    //50
			,'LX'   //60
			,'LXX'  //70
			,'LXXX' //80
			,'XC'   //90
		]
		,2 : [
			''
			,'C'	//100
			,'CC'   //200
			,'CCC'  //300				
			,'CD'   //400
			,'D'    //500
			,'DC'   //600
			,'DCC'  //700
			,'DCCC' //800
			,'CM' 	//900
		]
		,3 : [
			 ''
			,'M' //1000
                        ,'MM' // 2000
                        ,'MMM' ///3000
                        , 'MMMM' //4000
		]
	};
	//Obs número maximo é 1999
	
        
	function toRoman(input){		
	
		input = input.replace(/[^0-9]/, "");
		if(input === '') return'';
		//number
		var intNumber= parseInt(input);
		
		if(intNumber > 3999){
			return "Não é possivel converter numeros maiores que 3999";
		}
		
	
		//Descobre se é Unidade, Dezena, Centana, Milhar
		var number = Number(input).toString();
		var numberLength = number.length;
	
		// resulta 1 para dezenas 2 centena 3 milhares
		var decimalSize = numberLength - 1;
    
		//ordena ao reverso
		var inverseOrder = '';
		for(var i = decimalSize; i >= 0 ;i--){
			inverseOrder = inverseOrder + number.charAt(i);
		}
    
       
           
		var concat = '';
		for(var i = decimalSize; i >= 0 ;i--){
			var auxVar = parseInt(inverseOrder.charAt(i));
			concat = concat + mapping[i][auxVar];
		}
		
		return concat;
	}
        
        
        
        
        function valueof(roman) 
{
    if (roman === 'I')
        return 1;
    if (roman === 'V')
        return 5;
    if (roman === 'X')
        return 10;
    if (roman === 'L')
        return 50;
    if (roman === 'C')
        return 100;
    if (roman === 'D')
        return 500;
    if (roman === 'M')
        return 1000;
    return -1;
}


        
       function fromRoman(str)
        {
      
    var result = 0;
  
     for (i = 0; i < str.length; i++) 
     {
       
         var symbol1 = valueof(str.toUpperCase().charAt(i));
  
         if (i + 1 < str.length) 
         {
             var symbol2 = valueof(str.toUpperCase().charAt(i + 1));
  
             if (symbol1 >= symbol2) 
             {
                 result = result + symbol1;
             } 
             else 
             {
                 result = result + symbol2 - symbol1;
                 i++;
             }
         } 
         else  
         {
             result = result + symbol1;
         }
     }
     if(Number(result)<4000)
     {
      return result;   
     }else
         return "Somente valores menores que '4000'";
     
        }
        
        
        function convertNow ()
        {  let drop = document.getElementById("dropdown");
           let value = document.getElementById("valueOf").value;
           let result = document.getElementById("result");
           
           
           if(value==="")
           {
               alert("Necessário preencher o Campo para conversão");
           }else
           {
               switch (drop.selectedIndex)
               {
                   case 0: 
                       if(!Number(value)) result.innerHTML=fromRoman(value.toString()); else result.innerHTML="Somente Algarismos Romanos!" ;
                       break;
                       
                    case 1: if(Number(value))result.innerHTML=toRoman(value); else result.innerHTML="Somente Valores Numéricos";
                        break;
               }
           }
           
        }
