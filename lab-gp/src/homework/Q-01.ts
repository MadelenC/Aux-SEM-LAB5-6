(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const listEmails: Array<string> = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(listEmails);
//el nombre de la variable sria listEmail y usa const para ser declarar
  

//Lista de compras de un carrito
  const listBuy: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(listBuy);
  //el nombre de la variable sria lisaCompras y usa const para ser declarar


  //funcion para sumar mas 3 a un numero y retornarlo
  const sumarTres = (asdfg: number): number => {
    return asdfg + 3;
  }

  console.log(sumarTres(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capi(w: string): string {
    w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }

  console.log(capi("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let eventOcurred: boolean = false;

  if(eventOcurred) console.log('An error has occurred');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let userCanAcces: boolean = true;

  if(userCanAcces) console.log('welcome');
  
//usando la costante let para declarar

  //variable para hallar el promedio de 3 numeros
  const averageNumber: number = (1 + 2 + 3) / 3;

  console.log(averageNumber);
  
  //variable que almacena el valor de PI
  let piValue: number = 3.141592654;

  console.log(piValue);
  

  //variabel que controla si un archivo es modificable 
  let modifyFile: boolean = false;

  if(modifyFile) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const storageE: number = 2.718281828; 


})();