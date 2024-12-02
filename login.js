let inputLogin = document.querySelector('#input_log');
let inputPass = document.querySelector('#input_pass')
const btnLogIn = document.querySelector('.btn__login');
const modalPass = document.querySelector('.window__instruct');
let changeWindow = document.querySelector('.if__you');
const modalAutorez = document.querySelector('.wrapper');
const TODO = document.querySelector('.wrapper__two');
const EYE = document.querySelector('.pass__eye');
const ALERT = document.querySelector('.alert__modal');
const TEMNO = document.querySelector('.zatemnenie')
const HEADER = document.querySelector('.header')
const TODOLIST = document.querySelector('#todo')

let baza = {                 //база паролей
    name: 'admin',
    password: 'admin'
}

EYE.addEventListener('mouseover', function(){ //показать пароль
    if(inputPass.type = 'password'){
        inputPass.type = 'text'
    }
})

EYE.addEventListener('mouseout', function(){ //скрыть пароль (лучше бы сделать обе функции в одну)
    if(inputPass.type = 'text'){
        inputPass.type = 'password'
    }
})

//inputPass.addEventListener('click', function(){      //появляется модалка условий создания пароля
    //if(inputPass.placeholder == 'Please, create your password'){
        //modalPass.style.visibility = 'visible'
    //}
//});

changeWindow.addEventListener('click', function(){    //меняется содержание ввода, если уже есть аккаунт
    inputLogin.placeholder = 'Enter your login';
    inputPass.placeholder = 'Enter your password';
    btnLogIn.textContent = 'Log Up';
    this.textContent = 'Forgot password?'
});

btnLogIn.addEventListener('click', function(){     //проверка на совпадение логина и пароля с базой у нас
    if(inputLogin.value == baza.name && inputPass.value == baza.password){
        modalAutorez.style.visibility = 'hidden';
        HEADER.style.visibility = 'visible'
    }else{
        alert('Invalid login or password!');
        //ALERT.style.visibility = 'visible';
    }
})

TODOLIST.addEventListener('click', function(){
    TODO.style.visibility = 'visible'
})

function foo(self) {
    var v = $(self).val();  // Значение того самого инпута
    // ...
}

inputPass.click(function () {
    foo(this);
    console.log(foo)
});



function meow (){
    if(changeWindow.textContent === 'You have account?'){
        changeWindow = true;
        console.log(changeWindow)
    }else{
        changeWindow = false;
        console.log(changeWindow)
    }
}
meow()


/////////////////////////////////TODO

const input = document.querySelector('#inp');
const button = document.querySelector('#button_add')
const task = document.querySelector('#wrapper__task #nav__task');
//let tasks 

let tasks = []
displayTasks();


//const a = JSON.parse(localStorage.getItem('data'));
//console.log(JSON.parse(localStorage.getItem('data')));
if (localStorage.getItem("data") === null) {
  tasks = localStorage.setItem('data', JSON.stringify(tasks));
}

if (JSON.parse(localStorage.getItem('data')) !== 0){
  tasks = JSON.parse(localStorage.getItem('data'));
  displayTasks()
  console.log(tasks)
  //tasks = (JSON.parse(localStorage.getItem('data')));
}else{
    tasks = []
  addTask();
  displayTasks();
  console.log(1)
}


function cleanInput(){
  input.value = '';
}

function addTask() {
  if (input.value.trim() === '') return; // Проверка на пустой ввод ||| trim - удаляет пробельные символы с начала и конца строки
  tasks.push(input.value.trim());// Добавляем новую задачу в массив
  cleanInput();// Очистка значения input
  displayTasks();// Обновляем отображение списка задач
  localStorage.setItem('data', JSON.stringify(tasks));
}

function displayTasks() {
  task.innerHTML = ''; //очищаем старый массив
  tasks.forEach((taskText, index) =>{ //ЗАДАЁМ ЧЕРЕЗ ФУНКЦИЮ ЦИКЛА ИНДЕКС ДЛЯ ЭЛЕМЕНТОВ МАССИВА
      let li = document.createElement('li');
      let div = document.createElement('div');
      div.className = 'delete__batton'
      li.className = 'task__list'
      li.textContent =  taskText; //`${input.value}`
      task.appendChild(li);
      li.appendChild(div);

      function deleteDiv(){  //создаем функцию удаления
        div.addEventListener('click', function(){//слушаем клик по диву 
          li.remove() //и вызываем функцию "удалить лишку"
          tasks.splice(index, 1); //удаляем из массива по индексу массива
          localStorage.setItem('data', JSON.stringify(tasks)); // перезаписываем массив уже с удалённой лишкой
        })
      }
      deleteDiv(); //вызываем функцию на созданный объект
    })
}

button.addEventListener('click', addTask) //добавляем новые таски по кнопке add
