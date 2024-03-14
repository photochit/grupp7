let toggleBtn = document.querySelectorAll('.gallery .g-col');
toggleBtn.forEach(item => {
    item.addEventListener('click', event => {
        toggleBtn.forEach(item => {
            item.classList.remove('open-a');

        });
        item.classList.add('open-a');

    })

});

function triggerBtn(id) {
    if (id.parentElement.parentElement.classList.contains('open-a')) {
        if(id.classList.contains('img-hover-box')){
        let parent = document.querySelector(".open-a .video-box");
        let imageHover = parent.querySelector('.img-hover-box');
        let videoStatus = parent.querySelector('.video-src');
        imageHover.className = 'img-hover-box-dis';
        let videoAtribut = videoStatus.getAttribute('src') + '&amp;controls=0&amp;autoplay=1';
        videoStatus.setAttribute('src', videoAtribut);
        videoStatus.className = 'v-display';
        }else{
            let parent = document.querySelector(".open-a .video-box");
            let imageHover = parent.querySelector('.img-hover-box-dis');
            let videoStatus = parent.querySelector('.v-display');
            imageHover.className = 'img-hover-box'; 
            videoStatus.className = 'video-src';
            let videoAtributDel = videoStatus.getAttribute('src').replace('&amp;controls=0&amp;autoplay=1','');
            videoStatus.setAttribute('src', videoAtributDel);
        }
    }
}