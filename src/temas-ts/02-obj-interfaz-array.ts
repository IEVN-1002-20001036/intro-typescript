
let nombres: string[] = ['Mario', 'Luigi', 'Peach']
  
nombres.push('Toad')
// nombres.push(100) -> error type
console.log(nombres);

let datos:(string | boolean | number)[]= ['Mario',23,true,'Lopez']
datos.push(200)
datos.push('Carlos')
datos.unshift(false)
console.log(datos);

// otra forma de declarar arreglos 
let arreglo: Array<number>=[1,2,3,4]

// type Alumno = {
  interface Alumno {
  matricula: string,
  nombre: string,
  edad: number,
  mail: string,
  materias ?: string[]
}

const alumno: Alumno = {
  matricula :  '20002340',
  nombre: 'Danna',
  edad: 22,
  mail: 'danna@gmail.com'
}


console.table(alumno);

let mascotas:string[]=['perro','gato','perico']

mascotas[1]='perico verde'; 
mascotas.push('gato dos');
console.table(mascotas); 

let tem:(string|number)[]=[]; 
tem.push('RCR');
tem.push(21); 