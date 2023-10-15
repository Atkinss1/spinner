// refactoring my example spinner that uses the return character ('/r') to create an animated spinner

const spinner = '\r|\r/\r-\r\\\r|\r-';
let time = 5000;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time * 0.2;
}
