const biciDaCorsa = [
    { nome: "Specialized S-Works Tarmac SL7", peso: 6.8 },
    { nome: "Trek Emonda SLR 9", peso: 6.7 },
    { nome: "Canyon Ultimate CF SLX", peso: 7.1 },
    { nome: "Pinarello Dogma F12", peso: 6.9 },
    { nome: "BMC Teammachine SLR01", peso: 6.8 },
    { nome: "Cannondale SuperSix EVO", peso: 7.0 },
    { nome: "Giant TCR Advanced SL", peso: 6.7 },
    { nome: "Scott Addict RC Ultimate", peso: 6.9 },
    { nome: "Merida Scultura Team", peso: 6.8 },
    { nome: "Wilier Zero SLR", peso: 6.8 }
];

let biciLeggera = biciDaCorsa[0]; //object

for (let i = 0; i < biciDaCorsa.length; i++) {
    const curBici = biciDaCorsa[i];
    if(curBici.peso < biciLeggera.peso) {
        biciLeggera = curBici;
    }
}

console.log(biciLeggera);

const footballTeams = [
    { nome: `CeltaVino`, punti: 0, fallisubiti: 0},
    { nome: `RealMadrink`, punti: 0, fallisubiti: 0},
    { nome: `Spiacenza`, punti: 0, fallisubiti: 0}, 
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let i = 0; i < footballTeams.length; i++) {
    const curTeam = footballTeams(i);
    curTeam.punti = getRandomInt(0, 100);
    curTeam.fallisubiti = getRandomInt(0, 100);
}
console.log(footballTeams)

const newTeams = [];
for(let i = 0; i < footballTeams.length; i++) {
    const curTeam = footballTeams[i];
    const team = {
        nome: curTeam.nome,
        fallisubiti: curTeam.fallisubiti
    };
    newTeams.push(team);
}
console.log(newTeams);

//[12, 45, 76,200,2,5,7] , 1, 4 --> [45, 76,200,2]

/**
 * Description
 *  @param {array} array
 *  @param {number} startPos
 *  @param {number} endPos
 *  @returns {array}
 */
const subArray = (array, startPos, endPos) => {
   const resultarray = [];
   for(let i = 0; i < array.length; i++) {
     const curItem = array[i];
     if(i >= startPos && i <= endPos) {
        resultarray.push(curItem);
     }
    }  
}

const myArray = [12, 45, 76,200,2,5,7];
console.log(subArray(myArray, 1, 4));
