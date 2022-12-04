
//Importo mi módulo con require
const states = require('./ubication.js')
//creo una constante colonies, que al array states lo recorro con flatmap 
const colonies = states.flatMap(e => e.cities).flatMap(e => e.colonies) 

//creo un array
const coloniesGroup = []
//con for recorro la longitud del array,
for (let i = 0; i < colonies.length; i++) {
    //mediante este creo dos constantes
    //la constante e buscan señala el primer indíce de mi array
    const e = colonies[i];
    //retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente
    const a = coloniesGroup.findIndex(k => k.letter == e[0])

    //si la condicion se cumple, y a retorna -1 a colonias le vamos añadir los siguientes objetos
    if(a === -1){
        coloniesGroup.push(
            {
                //la primera letra, o sea el indice 0 de la cosntante e
                letter: e[0],
                values: [e]
            })
            //si el valor no retorna -1, al arrray coloniesgroup se le añadire el objeto 0 con el parametro e "la constante"
    } else {
        coloniesGroup[a].values.push(e)
    }
}
//proyectamos en la consola
console.log(coloniesGroup)