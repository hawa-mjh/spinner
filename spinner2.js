const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let currentChar = 0;

const animateSpinner = () => {
  process.stdout.write(`\r${spinnerChars[currentChar]}   `);
  currentChar = (currentChar + 1) % spinnerChars.length;
};

setInterval(animateSpinner, 100);
