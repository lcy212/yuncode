// import_before.js

const data = ['banana', 'melon'];
const codeFile = () => {
  return (`
  <h1>hello</h1>
  <ul>
    <li>${data[0]}</li>
    <li>${data[1]}</li>
  </ul>
  `);
};

export default codeFile;