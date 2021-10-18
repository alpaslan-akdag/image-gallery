const arrayOfImage = [
    'https://images.pexels.com/photos/4701546/pexels-photo-4701546.jpeg',
    'https://images.pexels.com/photos/3226842/pexels-photo-3226842.jpeg',
    'https://images.pexels.com/photos/1034828/pexels-photo-1034828.jpeg',
    'https://images.pexels.com/photos/162234/cat-red-cat-pet-domestic-cat-162234.jpeg',
    'https://cataas.com/cat/says/hello%20world!', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', 
    'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'
];

const prevButton = document.querySelector('button[name=prev]');
const nextButton = document.querySelector('button[name=next]');

let imagePlaceHolder = document.querySelector('img');

let currentIndex =1;

let defaultImg = arrayOfImage[currentIndex];
console.log(defaultImg);
//imagePlaceHolder.src = defaultImg ; 

prevButton.addEventListener('click',getPrev);
nextButton.addEventListener('click', getNext);
console.log(arrayOfImage.length);

function getPrev() {
    console.log(currentIndex);
    if(currentIndex > 0 ){
        currentIndex = currentIndex -1 ;
        imagePlaceHolder.src = arrayOfImage[currentIndex];
    }
    else if(currentIndex === 0){
        currentIndex= arrayOfImage.length-1;
        imagePlaceHolder.src = arrayOfImage[currentIndex];
    }
}

function getNext() {
    console.log(currentIndex);
    if(currentIndex === arrayOfImage.length-1){
        currentIndex = 0;
        imagePlaceHolder.src = arrayOfImage[currentIndex];
    } else {
        currentIndex = currentIndex +1 ;
        imagePlaceHolder.src = arrayOfImage[currentIndex];
    }
}