const current = document.querySelector('#current');
const fslide_show = document.querySelector('#imgs_slider');
const imgs = document.querySelectorAll('.fslide_show img');
const imgs_slider = document.querySelector('#imgs_slider');
const rightBtn = document.querySelector('#right_btn');
const leftBtn = document.querySelector('#left_btn');
let position = -1;
// const opacity = 0.3;


imageDisplayer();


imgs_slider.addEventListener('mouseover', e =>{
  if (e.target.nodeName === 'IMG') {
    document.getElementById('name').innerText = photosGallery[e.target.id].firstName + " " + photosGallery[e.target.id].lastName;
    document.getElementById('title').innerText = "Title: " + photosGallery[e.target.id].title;
    document.getElementById('nationality').innerText = "Nationality: " + photosGallery[e.target.id].nationality;
    document.getElementById('skills').innerText = "Skills: " + photosGallery[e.target.id].skills.join(" ");
    document.getElementById('whySD').innerText = "Why: " + photosGallery[e.target.id].whySofterDeveloper;
    document.getElementById('longTerm').innerText = "Long term Vision: " + photosGallery[e.target.id].longTermVision;
    document.getElementById('motivatesMe').innerText = "Motivates Me: " + photosGallery[e.target.id].motivatesMe;
    document.getElementById('favoriteQuote').innerText = "Favorite Quote: " + photosGallery[e.target.id].favoriteQuote;
    document.getElementById('joinedOn').innerText = "Joined on: " + photosGallery[e.target.id].joinedOn;
  }
});


function imageDisplayer () {
  for (let i = 0; i < 5; i++) {
    position++;
    const img = document.createElement('img');
    img.src = "Photo wall/" + photosGallery[position].src;
    img.id = position;
    imgs_slider.appendChild(img);
  }
  position++;
}

  rightBtn.addEventListener('click', e => {
    if (position >= photosGallery.length) {
      return false;
    } else {
    fslide_show.removeChild(fslide_show.firstElementChild);
    const nxtImg = document.createElement('img');
    nxtImg.src = "Photo wall/" + photosGallery[position].src;
    fslide_show.appendChild(nxtImg);
    nxtImg.id = position;
    position++;
    console.log(position);
    }
  });

  leftBtn.addEventListener('click' , e => {
    if (position <= 5) {
      return false;
    } else {
      fslide_show.removeChild(fslide_show.lastElementChild);
      const prevImg = document.createElement('img');
      position--;
      prevImg.src = "Photo wall/" + photosGallery[position-5].src;
      fslide_show.insertBefore(prevImg, fslide_show.childNodes[0]);
      prevImg.id = position - 5;
    }
  });
