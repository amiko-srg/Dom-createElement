// 1. Запрашиваем имя
let name = prompt("Ismingizni kiriting");

// 2. Настраиваем фон body
document.body.style.backgroundColor = 'blue';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh'; // чтобы заняло весь экран
document.body.style.margin = '0'; // убираем отступы

// 3. Создаём элемент для текста
let nameText = document.createElement('h1');
nameText.textContent = name;
nameText.style.color = 'yellow';
nameText.style.fontSize = '100px';
nameText.style.fontFamily = 'sans-serif';

// 4. Добавляем текст в body
document.body.appendChild(nameText);