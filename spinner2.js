// refactoring my example spinner that uses the return character ('/r') to create an animated spinner

const spinner = '\r|\r/\r-\r\\\r|\r-';

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 100);
}
