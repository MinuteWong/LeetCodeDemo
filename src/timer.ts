import fs from "fs";


setTimeout(() => {
  console.log(555);
}, 0);

setImmediate(() => {
  console.log(456);
});

Promise.resolve().then(() => {
  console.log(123);
  process.nextTick(() => console.log("tde"));
});

process.nextTick(() => console.log("te"));

// fs.readFile("./index.ts", () => {
//   setTimeout(() => {
//     console.log(555);
//   }, 0);

//   setImmediate(() => {
//     console.log(456);
//   });

//   process.nextTick(() => console.log("te"));

//   Promise.resolve().then(() => {
//     console.log(123);
//     process.nextTick(() => console.log("tddde"));
//   }).then(() => {
//     console.log(5566);
//   }).then(() => {
//     console.log(55667);
//   });

//   Promise.resolve().then(() => {
//     console.log(12355);
//   });
// });
