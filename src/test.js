setTimeout(() => {
  console.log(333)
}, 0);

Promise.resolve().then(res => {
  console.log(3)
})

process.nextTick(() => {
  console.log(4)
  Promise.resolve().then(res => {
    console.log(5)
  })
})