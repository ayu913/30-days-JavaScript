const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress_div = document.getElementById("progress_div");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");

let current_time = document.getElementById("current_time");
const songs = [
  {
    name: "whoopty",
    title: "WHOOPTY",
    artist: "CJ -WHOOPTY",
  },
  {
    name: "brown",
    title: "BROWN MUNDE",
    artist: "AP DHILLON",
  },
  {
    name: "intheend",
    title: "IN THE END",
    artist: "TOMMEE PROFITT",
  },
  {
    name: "gymclass",
    title: "STEREO HEARTS",
    artist: "GYM CLASS HEROES",
  },
];

let isPlaying = false;

play.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic(); //isPlaying value is true then pause the music or else playmusic
  } else {
    playMusic();
  }
});

//for play
const playMusic = () => {
  isPlaying = true;
  music.play();

  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

//for pause
const pauseMusic = () => {
  isPlaying = false;
  music.pause();

  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

// progress
music.addEventListener("timeupdate", (event) => {
  console.log(event);
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  console.log(duration);

  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;

  //music duration update
  console.log(duration);
  let min_duration = Math.floor(duration / 60);
  let sec_duration = Math.floor(duration % 60);

  let tot_duration = `${min_duration}:${sec_duration}`;
  if (duration) {
    total_duration.textContent = `${tot_duration}`;
  }

  // current duration update
  let min_currentTime = Math.floor(currentTime / 60);
  let sec_currentTime = Math.floor(currentTime % 60);

  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTime}`;
  }
  let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;

  current_time.textContent = `${tot_currentTime}`;
});

//11.111 total

// progress onClick functionality

progress_div.addEventListener("click", (event) => {
  const { duration } = music;

  let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
  console.log(duration);
  console.log(move_progress);

  music.currentTime = move_progress;
});

music.addEventListener("ended", nextSong);
