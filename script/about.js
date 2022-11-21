const body = document.querySelector('body');
const menuDiv = document.createElement('div');
const main = document.querySelector('main');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const divContent = '<img class="cross-icon" src="./icons/cross.png" alt=""> <a href="#">About</a> <a href="./index.html">Home</a> <a href="#">Join</a> <a href="#">Sponsor</a><a href="#">Guest</a><a href="#">IMAA 2022</a>';
menuDiv.innerHTML = divContent;
body.appendChild(menuDiv);
const hamburgerIcon = document.querySelector('.hamburger-container');
const headerContainer = document.querySelector('header');
hamburgerIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  main.style.filter = 'blur(5px)';
  headerContainer.style.display = 'none';
});

const crossIcon = document.querySelector('.cross-icon');
crossIcon.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  main.style.filter = 'blur(0)';
  headerContainer.style.display = 'block';
});

const itemList = document.querySelectorAll('.menu-content>a');

itemList.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    main.style.filter = 'blur(0)';
    headerContainer.style.display = 'block';
  });
});