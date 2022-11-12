/*
 * string
 * number
 * boolean
 * object
 * arrays
*/

let hablities: (string)[] = [
    'Bash',
    'Counter',
    'Healing'
];

console.log(hablities)


// para trabajar con objetos se utilizan las interfaces, es cómo queremos que se vea el objeto

interface Personaje {
    nam: string,
    hp: number,
    habi: string[]
}

/* const character: Personaje = {
    nam: 'leopro',
    hp: 100,
    habi: ['Bash, Counter', 'Healing']
} */