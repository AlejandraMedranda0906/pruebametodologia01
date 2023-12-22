//Crear una función constructora para crear un Estudiante con las siguientes propiedades:
//nombre, 
//correo
//promedio.
//Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
//Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email

'use strict'
function Student(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarPromedio = function(){
        if(this.promedio>=70){
            return"Aprobado";
    }else{
        return"Reprobado";}

        }

    this.obtenerUsuario = function() {
        let imail= this.correo.split('@');
        return imail[2];
          
      
};
}

let  studentOne = new Student("ale@gmail.com","Ale", 80);
  alert("Ale:" +  studentOne.validarPromedio());

  let studen = new Student ("Ale", "ale@gmail.com",80  );
alert("Tu correo:"+Student.obtenerUsuario())






 