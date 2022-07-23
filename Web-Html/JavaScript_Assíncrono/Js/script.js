const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CATBTN = document.getElementById('change-cat');
const CATIMG = document.getElementById('cat');

const getCats = async () => {
  try {
    const DATA = await fetch(BASE_URL);
    const JSON = await DATA.json();

    return JSON.webpurl;
  } catch (error) {
    console.log(error.message);
  }
};

const loadImg = async () => {
    CATIMG.src = await getCats();
};

CATBTN.addEventListener('click',loadImg);

loadImg();