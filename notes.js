console.log("Notes.js is in the house!!");

module.exports.addNote = () => {
  console.log('addNote called');
  return 'New note';
};

module.exports.adder = (a, b) => {
  console.log('adder called');
  return a + b;
};
