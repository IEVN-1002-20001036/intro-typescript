

//desestructurar


interface Reproductor{
    volumen:number; 
    segundo:number; 
    cancion:string; 
    detalles:Detalles;
    
}
interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen: 90, 
    segundo: 66,
    cancion: "Mañanitas",
    detalles: {
        autor:'cepellin', 
        year:1978, 
    }
}
console.log('El volumen actual es: $(Reproductor.volumen)'); 
console.log('Los segundos son: $(Reproductor.segundos)'); 
console.log('la cancion es: $(reproducri.cancion )');
console.log('El cantante es: $(Reproductor.detalles.autor)'); 

const{volumen,segundo,cancion,detalles}=reproductor 
const{autor}=detalles 

console.log(`El volumen actual ess: ${volumen}`); 
console.log(`Los segudos son: ${segundo}`); 
console.log(`El canatnte actual es: ${autor}`); 

const colores:string[]=['blue','red','green','violet'];
console.log('Color 1: ${colores[0]}');
console.log('Color 1: ${colores[1]}');
console.log('Color 1: ${colores[2]}');

const[a,,,b]=colores;
console.log('Color 2: ${a}');
