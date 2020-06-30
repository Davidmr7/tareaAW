//boton 1 
//se crea una funcion sin parametros 
function numParoImp() {
	//se declara una variable con prompt para preguntar por un numero al usuario 
	var num = parseInt(prompt("Ingresa un número entero"));
	//se hace una condicional, si el sobrante de la division del numero que ingresamos entre dos es igual a 0
	//entonces el numero es par y si no es 0 sera impar 
  if(num %2==0) {
	  //regresamos el valor con un string y concatenamos la variable
    return console.log("El numero "+num+" es par");
  }
	// si no se cumple regresamos un string y concatenamos la variable
  else {
    return console.log("El numero "+num+" es impar");
  }

}	

//boton 2 no comprendi bien como realizarlo

//boton3
//se crea la funcion 
function mayordetres(){
    //se guarda en una variable el valor ingresado en los input y se convierte a numero
	var a = parseInt(document.getElementById('numero1').value);
	var b = parseInt(document.getElementById('numero2').value);
	var c = parseInt(document.getElementById('numero3').value);
	//se hace una condicional para saber que numero es mas grande
	if(a>b && a>c){
        //el resultado se manda a un h2 con ayuda de su id
		document.getElementById("resultado").innerHTML="El numero mayor es "+a;
	}
    else if(b>c && b>a){
    document.getElementById("resultado").innerHTML="El numero mayor es "+b;        
    }
    else{
    document.getElementById("resultado").innerHTML="El numero mayor es "+c;       
    }
}