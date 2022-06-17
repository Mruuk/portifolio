const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['deep.jpg', `python.jpg`, `php-academy.jpg`, `google.jpg`, `latinoware.png`, `wollen.jpg`,`sicite.jpg`];

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `img/certificates/${image}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => displayedImage.src = e.target.src);
}


