let img = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg',
            'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg'];

function onload(){
    for (let i = 0; i < img.length; i++) { 
        document.getElementById('imageSection').innerHTML += `<img src="${img[i]}" class="images" onclick="showImage(${i})">`;
    }
}

//Function for show single picture in full size
function showImage(i){
    let fullSizeImg = document.getElementById('fullSizedImgSection');

    fullSizeImg.innerHTML =`
    <div class="one-img">
        <div id="closeButton" onclick="closeImage()" class="close-button">
        <img src="img/close.png">
        </div>
        </div>
        <img src="${img[i]}" class="shown-image">
        <div class="navigation-buttons">
            <div onclick="previousImage(${i})" class="navigation-button">
            <img src="img/arrow-left-white.png">
            </div>
            <div onclick="nextImage(${i})" class="navigation-button">
            <img src="img/arrow-right-white.png">
            </div>
        </div>
    </div>`;
    fullSizeImg.classList.add('full-sized-img-section');
    document.getElementById('mainSection').classList.add('d-none');
    document.getElementById('fullSizedImgSection').classList.remove('d-none');
}

//Function for the "x" button on the upper left corner
function closeImage(){
    document.getElementById('fullSizedImgSection').classList.add('d-none');
    document.getElementById('mainSection').classList.remove('d-none');
}

//Function for the arrow buttons on the shown image which shows the next picture
function nextImage(currentImage){
    if(currentImage < img.length - 1) {
        showImage(currentImage + 1);
    } else {
        showImage(0);
    }
}

//Function for the arrow buttons on the shown image which shows the previous picture
function previousImage(currentImage){
    if(currentImage > 0) {
        showImage(currentImage - 1);
    } else {
        showImage(img.length - 1);
    }

}