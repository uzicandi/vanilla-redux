const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText(); // html에게 뭔가가 바뀌었다고 알려주는게 이상함! => 리덕스를 쓰는 이유
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
