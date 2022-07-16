process.stdout.write("hello from spinner1.js... \rheyyy\n");

const arr = ["\r/   ", "\r|   ", "\r-   ", "\r\\  ", "\r|\n"];
setTimeout(() => {
  let timer = 100;
  for (const needle of arr) {
    timer += 200;
    setTimeout(() => {
      process.stdout.write(needle);
    }, timer);
  }
});
