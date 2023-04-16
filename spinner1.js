const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let currentChar = 0;

const animateSpinner = () => {
  process.stdout.write(`\r${spinnerChars[currentChar]}   `);
  currentChar++;
  if (currentChar === spinnerChars.length) {
    currentChar = 0;
  }
  setTimeout(animateSpinner, 100);
};

setTimeout(animateSpinner, 100);
