const BASE_URL = "https://api.thecatapi.com/v1/images/search/";
const CATBTN = document.getElementById("change-cat");
const CATIMG = document.getElementById("cat");

const getCats = async () => {
  try {
    const DATA = await fetch(BASE_URL);
    const JSON = await DATA.json();

    return JSON[0].url;
  } catch (error) {
    console.log(error.message);
  }
};

const song = async () => {
  const SONG = document.getElementById("song");
  SONG.src = "./song/song.mp3";
  SONG.play();
};

const loadImg = async () => {
  CATIMG.src = await getCats();
  await song();
};

CATBTN.addEventListener("click", loadImg);
