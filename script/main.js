const speakers = [
  {
    name: 'Sonu Nigam',
    position: 'Indian Singer & Music Producer',
    description: 'Sonu Nigam has been described in the media as one of the most popular playback singers.',
    image: './speakers-images/speaker-1.jpg',
  },
  {
    name: 'Jubin Nautiyal',
    position: 'Indian playback singer and live performer.',
    description: 'Jubin Nautiyal won the IIFA award for “Playback Singer ” for the song “Raataan Lambiyan.” ',
    image: './speakers-images/speaker-2.jpg',
  },
  {
    name: 'Salman Khan',
    position: 'Actor, producer, and television personality',
    description: 'In his film career spanning over thirty years, Khan has received numerous awards.',
    image: './speakers-images/speaker-3.jpg',
  },
  {
    name: 'Rohit Shetty',
    position: 'Film director, producer and television host',
    description: 'He is one of the most successful and recognised film director of Hindi Cinema.',
    image: './speakers-images/speaker-4.jpg',
  },
  {
    name: 'Arijit Singh',
    position: 'Indian singer and music composer',
    description: 'Arijit Singh is the recipient of a National Award and six Filmfare Awards.',
    image: './speakers-images/speaker-5.jpg',
  },
  {
    name: 'Naved',
    position: 'Radio Jockey & Voice Over Artist ',
    description: 'RJ Naved became a household name in India after running his show on Radio Mirchi 98.3 FM',
    image: './speakers-images/speaker-6.jpg',
  },
];

const featuredSpeakers = document.querySelector('.featured-speakers-list');

speakers.forEach((item) => {
  const li = document.createElement('li');
  li.innerHTML = `<div class="speaker-image-container"> <img src="${item.image}" alt="${item.name}'s photo"></div>
  <div class="speaker-details-container">
    <h3>${item.name}</h3>
    <p class="speaker-position"><i>${item.position}</i></p>
    <div class="underline2"></div>
    <p class="speaker-discription">${item.description}</p>
  </div>`;
  featuredSpeakers.appendChild(li);
});

const speakerList = document.querySelectorAll('.featured-speakers-list>li');
const featureSpeakerButton = document.querySelectorAll('.featured-speakers-button');
featureSpeakerButton[0].addEventListener('click', () => {
  for (let i = 2; i < speakerList.length; i += 1) {
    speakerList[i].style.display = 'flex';
  }
  featureSpeakerButton[0].style.display = 'none';
  featureSpeakerButton[1].style.display = 'flex';
});

featureSpeakerButton[1].addEventListener('click', () => {
  for (let i = 2; i < speakerList.length; i += 1) {
    speakerList[i].style.display = 'none';
  }
  featureSpeakerButton[0].style.display = 'flex';
  featureSpeakerButton[1].style.display = 'none';
});

const body = document.querySelector('body');
const menuDiv = document.createElement('div');
const main = document.querySelector('main');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const divContent = '<img class="cross-icon" src="./icons/cross.png" alt=""> <a href="./about.html">About</a> <a href="#">Home</a> <a href="#">Join</a> <a href="#">Sponsor</a><a href="#">Guest</a><a href="#">IMAA 2022</a>';
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