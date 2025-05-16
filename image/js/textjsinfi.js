let textarea = document.querySelector("#word");
let text = null;
let data = {
  words: 0,
  sentences: 0,
  uppercaes: 0,
  lowercase: 0,
  spaces: 0,
  digits: 0,
  vowels: 0,
  consonants: 0,
};

const findLength = (item) => {
  return item ? item.length : 0;
};

const setText = () => {
  text = textarea.value.trim(); // remove leading/trailing whitespace
  if (text === "") {
    alert('Please enter the text');
    return; // stop further execution
  }

  data.sentences = findLength(text.match(/\./g));
  data.words = findLength(text.match(/[a-zA-Z]+/g));
  data.spaces = findLength(text.match(/\s/g));
  data.uppercaes = findLength(text.match(/[A-Z]/g));
  data.lowercase = findLength(text.match(/[a-z]/g));
  data.digits = findLength(text.match(/\d/g));
  data.vowels = findLength(text.match(/[aeiou]/gi));
  data.consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));

  localStorage.setItem("data", JSON.stringify(data));
  window.location = "info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for (item in data) {
    htmlContent += `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
      </div>`;
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
};


let submit = document.getElementById('submitID')
console.log(submit);
