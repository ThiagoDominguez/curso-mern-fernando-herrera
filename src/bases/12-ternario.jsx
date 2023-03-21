const activo = true;

// let mensaje = "";

// if (activo) {
//   mensaje = "Activo";
// } else {
//   mensaje = "Inactivo";
// }

// * Operador ternario para ambas condiciones

// const mensaje = activo ? "Activo" : "Inactivo";

// * Operador ternario para cuando solo queremos una condicion
const mensaje = activo && "Activo";

/*
!COMENTARIOS IMPORTANTES
 ? La linea anterior es como hacer 
 * (activo===true) && "Activo",
 * luego del "&&"  viene lo que quieres que retorne si se cumple la condicion
 ? Si no se cumple, solo devolvera falso

*/

console.log(mensaje);
