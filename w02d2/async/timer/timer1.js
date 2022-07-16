const args = process.argv.slice(2);

let arr = [];
args.forEach((x) => arr.push(Number(x)));
arr.sort((a, b) => a - b);
// arr = [ 3, 5, 9, 10, 15 ]

let timer;
for (let i = 0; i < arr.length; i++) {
  timer = arr[i] * 1000;
  setTimeout(() => {
    process.stdout.write("\x07");
  }, timer);
}
