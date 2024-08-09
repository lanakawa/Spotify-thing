import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';


var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 1000,
    cubeEffect: {
      shadow: false,
    },
    autoplay: {
      delay: 2600,
      pauseOnMouseEnter: true,
    },
  });

  
function fullscreen(elementID) {
  //when you click on specific swiper face, it makes the swiper inactive and adds a node with a fullscreen image 
  //disable the cube
  const temp = document.getElementById('main-swiper');
  //holds copy of swiper node in case you need to bring it back
  const clone = temp.cloneNode(true);
  //removes swiper branch completely if you click on any image and changes the background image to a full sized version of the one clicked
  temp.remove();
  if (elementID === 'img1') {
    document.body.style.backgroundImage = "url('https://github.com/lanakawa/Spotify-thing/blob/main/images/IMG_1837.png?raw=true')"
    console.log("img 1 clicked");
    
  }
  if (elementID === 'img2') {
    console.log("img 2 clicked");
    document.body.style.backgroundImage = "url('https://github.com/lanakawa/Spotify-thing/blob/main/images/IMG_1838.png?raw=true')"
  }
  if (elementID === 'img3') {
    console.log("img 3 clicked");
    document.body.style.backgroundImage = "url('https://github.com/lanakawa/Spotify-thing/blob/main/images/IMG_1839.png?raw=true')"
  }
  if (elementID === 'img4') {
    console.log("img 4 clicked");
    document.body.style.backgroundImage = "url('https://github.com/lanakawa/Spotify-thing/blob/main/images/IMG_1840.png?raw=true')"
  }  

  
}

document.getElementById('img1').addEventListener("click", () => fullscreen(document.getElementById('img1').id));
document.getElementById('img2').addEventListener("click", () => fullscreen(document.getElementById('img2').id));
document.getElementById('img3').addEventListener("click", () => fullscreen(document.getElementById('img3').id));
document.getElementById('img4').addEventListener("click", () => fullscreen(document.getElementById('img4').id));
