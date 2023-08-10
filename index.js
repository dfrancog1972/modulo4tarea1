//con arreglos

const tareas = [ "lavarme los dientes","bañarme","vestime","sacar el carro","manejar al trabajo","prender equipo","revizar correos","tomar cafe","comenzar","comer"];
let longitud = tareas.length;
console.log("tu tienes ",longitud," tareas por hacer");
//tareas por hacer
imprime();

/* for(let i=0; i<longitud;i++){
    console.log("Tarea numero ", i+1, " ",tareas[i]);
} */


// agregar tareas

tareas.push("apagar equipo");
imprime();
//quitar primera tarea
let inicio = tareas.shift();
console.log("tarea terminada ", inicio);
imprime(); 

function imprime() {
    let i=0;
    tareas.forEach((elemento) => {
        i++;
        console.log("Tarea numero ",i," ",elemento);
    })
};


//con objetos
console.log("====================================");

class tareasObj{
    constructor(){
        this.tareasObj = [];
    }
    //metodos
    agregar(elemento){
        this.tareasObj.push(elemento);
    }
    quitar(){
        return this.tareasObj.shift();
        
    }
    imprimeTareas(){
        console.log(this.tareasObj);
    }
    primeraTarea(){
        if(this.isEmpty()){
            return "Sin actividades";
        }
        const primerElemento = this.tareasObj[0];
        return primerElemento;
    }
    isEmpty(){
        if(this.tareasObj.length === 0){
            return true;
        } else{
            return false;
        }
    }
}

let TareasObj = new tareasObj();

//agregar tareas del arreglo en el objeto
for(let i=0; i<longitud;i++){
    TareasObj.agregar(tareas[i]);
} 
TareasObj.imprimeTareas();
TareasObj.quitar();
TareasObj.imprimeTareas();
TareasObj.agregar("Dormir");
TareasObj.imprimeTareas();


