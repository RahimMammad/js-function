/////////////////////////////task1////////////////////////

// let data = [3,8,5,7,2]

// const ortalama = (callback, ...data) => {

//     let sum = data.reduce((number, deyer) => number + deyer, 0)
//     let orta = sum / data.length
//     callback(orta)

// }

// const netice = (orta) => {
//     console.log(orta);
// }

// ortalama(netice, ...data)

////////////////////////////task2////////////////////////

// let sum = 0
// let data = [31, 69, 37, 44, 52]


// const CutSum = (callback , ...data) => {

//     for (let i = 0; i < data.length; i++) {

//         if (data[i] % 2 === 0) {
//             sum += data[i];
//         }
//     }
//     callback(sum);
// }

// const result = (sum) => {
//     console.log(sum);
// }


// CutSum(result, ...data);

//////////////////////////////task3////////////////////////


// let sum = 0
// let data = [16, 56, 69, 40, 31]

// const tekSum = (callback , ...data) => {
//     for (let i = 0; i < data.length; i++) {

//         if (data[i] % 2 !== 0) {
//             sum += data[i];
//         }
//     }
//     callback(sum);
// }

// const result = (sum) => {
//     console.log(sum);
// }

// tekSum(result, ...data);


/////////////////////////task4/////////////////////////

// let tek = 0
// let data = [16, 56, 69, 40, 31]

// const tekSum = (callback , ...data) => {
//     for (let i = 0; i < data.length; i++) {

//         if (data[i] % 2 !== 0) {
//             tek += data[i];
//         }
//     }
//     callback(tek);
// }

// const resultTek = (tek) => {
//     console.log(tek);
// }

// tekSum(resultTek, ...data);

// let cut = 0
// const CutSum = (callback , ...data) => {

//     for (let i = 0; i < data.length; i++) {

//         if (data[i] % 2 === 0) {
//             cut += data[i];
//         }
//     }
//     callback(cut);
// }

// const resultCut = (cut) => {
//     console.log(cut);
// }


// CutSum(resultCut, ...data);

// const Hasil = (tek, cut) => {
//     const tekCutHasil = tek * cut;
//     console.log(Number(tekCutHasil));
// };
// Hasil(tek, cut);




