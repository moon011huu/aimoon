let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .vid1').src = src;
      document.querySelector('.main-video-container .vid1').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});

function myFunction(){
   var element = document.body;
   element.classList.toggle("dark-mode");
}

