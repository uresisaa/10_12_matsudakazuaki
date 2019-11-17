//アルバムデータの作成
let album = [
    { src: 'img/1.jpg' },
    { src: 'img/2.jpg' },
    { src: 'img/3.jpg' },
    { src: 'img/4.jpg' },
    { src: 'img/5.jpg' },
    { src: 'img/6.jpg' },
    { src: 'img/7.jpg' },
    { src: 'img/8.jpg' },
    { src: 'img/9.jpg' },
    { src: 'img/10.jpg' },
    { src: 'img/11.jpg' },
    { src: 'img/12.jpg' },
    { src: 'img/13.jpg' },
    { src: 'img/14.jpg' },
    { src: 'img/15.jpg' },
    { src: 'img/16.jpg' },
    { src: 'img/17.jpg' },
    { src: 'img/18.jpg' },
    { src: 'img/19.jpg' },
    { src: 'img/20.jpg' },
    { src: 'img/21.jpg' },
    { src: 'img/22.jpg' },
    { src: 'img/23.jpg' },
    { src: 'img/24.jpg' },
    { src: 'img/25.jpg' },
    { src: 'img/26.jpg' },
    { src: 'img/27.jpg' },
    { src: 'img/28.jpg' },
    { src: 'img/29.jpg' },
    { src: 'img/30.jpg' },
];

//最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
// mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
// mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

//サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function (event) {
    if (event.target.src) {
        // ここに処理を記述していく
        mainImage.src = event.target.src;
        // mainMsg.innerHTML = event.target.alt;

    }
});
