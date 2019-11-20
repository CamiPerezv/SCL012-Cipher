window.cipher = {
  encode: (ingresaTexto,desplazamiento) => {//funcion cifrar con parametros//
    
    let valueLyrics = '';
    

  for (let i=0; i<ingresaTexto.length; i++){ //bucle que separa contenido del texto ingresado letra por letra//

        let numberPosition = ingresaTexto.charCodeAt(i);// obteniendo posicion de de la letra en ASCII//
   

        if( numberPosition >=65 && numberPosition <=90){//condicion que verificará si el texto contiene mayusculas en base a ASCCI//

                 let valueNumber = (numberPosition - 65 + parseInt(desplazamiento)) % 26 + 65;// obtendiendo la letra cifrada en numero//
                 valueLyrics += String.fromCharCode(valueNumber) ;// cambiando a letra el resultado del cifrado anterior//

         }

         if(numberPosition === 32){//obtendo espacios//

                 valueLyrics += " ";//incluyendo espacios en el resultado ya cifrado//
         }
   

         if( numberPosition >=97 && numberPosition <=122){//condicion que verificará si el texto contiene minusculas en base a ASCCI//

                let valueNumber = (numberPosition - 97 + parseInt(desplazamiento)) % 26 + 97;// obtendiendo la letra cifrada en numero//
                valueLyrics += String.fromCharCode(valueNumber) ;// cambiando a letra el resultado del cifrado anterior//

    }


    }
 
 return valueLyrics; //devolviendo resultado cifrado//

    
  },
  decode: (ingresaTexto,desplazamiento) => {//funcion para descifrar con parametros//
   
    let valueLyrics = "";
    

  for (let i=0; i<ingresaTexto.length; i++){ //bucle que separa contenido del texto ingresado letra por letra//

        let numberPosition = ingresaTexto.charCodeAt(i);// obteniendo posicion de de la letra en ASCII//
   

        if( numberPosition >=65 && numberPosition <=90){//condicion que verificará si el texto contiene mayusculas en base a ASCCI//

                 let valueNumber = (numberPosition - 90 - parseInt(desplazamiento)) % 26 + 90;// obtendiendo la letra cifrada en numero//
                 valueLyrics += String.fromCharCode(valueNumber) ;// cambiando a letra el resultado del cifrado anterior//

         }

         if(numberPosition === 32){//obtendo espacios//

                 valueLyrics += " ";//incluyendo espacios en el resultado ya cifrado//
         }
   

         if( numberPosition >=97 && numberPosition <=122){//condicion que verificará si el texto contiene minusculas en base a ASCCI//

            let valueNumber = (numberPosition - 122 - parseInt(desplazamiento)) % 26 + 122;// obtendiendo la letra cifrada en numero//
            valueLyrics += String.fromCharCode(valueNumber) ;// cambiando a letra el resultado del cifrado anterior//

    }


    }
 
 return valueLyrics;

  }
};
