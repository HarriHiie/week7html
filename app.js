const currentImage = document.querySelector('#image');
const images = ['images/picture1.jpg','images/picture2.webp','images/picture3.jpg'];

function changeImage() {
    console.log('Hello from script file');

    let randomnumber = Math.floor(Math.random() * images.length);

    console.log(images[randomnumber]);

currentImage.src = (images[randomnumber]);

}