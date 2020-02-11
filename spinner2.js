let array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '\n' ]

const spin = function(array) {
let delay = 0;
for (let i of array) {
setTimeout(() => {
  process.stdout.write('\r' + [i]);
}, delay += 200);
}
}
spin(array);
