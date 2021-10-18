/** when we click on a button we change the src value of the img tag 
 * click > event listener
 * find the buttons in the DOM
 * find the image tag in the DOM
 * change src value
 * define a list of images
*/

/** 1. declare variables */
/** 2. inputs & output: assign DOM elements to variables */
/** input: click on button(s) */
/** output: change the src value of the image */
const imgPlaceholder = document.querySelector("img");
const prevBtn = document.querySelector("button[name=prev]");
const nextBtn = document.querySelector("button[name=next]");
let arrImages = [
    'https://cataas.com/cat/says/hello%20world!', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', 
    'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'
];

/** define the default image in the array to display when loading the page */
let currentIndex = 1;
let defaultImg = arrImages[currentIndex];
imgPlaceholder.src = defaultImg;

/** 3. event listeners */
prevBtn.addEventListener("click",getPrev);
nextBtn.addEventListener("click",getNext);

/** 4. declare functions */
function getPrev(){
    /** find current index */
    /** get current index -1 */
    currentIndex = currentIndex-1;
    /** check if index exists, if > -1 */
    if(currentIndex > -1){
        /** change src to image in array[index-1] */
        imgPlaceholder.src = arrImages[currentIndex];
    } else {
        /** option1: make a carousel and go the last of the array items */
        currentIndex = arrImages.length-1;
        imgPlaceholder.src = arrImages[currentIndex];
        /** option2: do nothing, stay there, disable the button */
    }
}

function getNext(){
    /** find current index */
    /** get current index +1 */
    currentIndex = currentIndex+1;
    /** check if index exists, if < length of array */
    if(currentIndex < arrImages.length){
        /** change src to image in array[index+1] */
        imgPlaceholder.src = arrImages[currentIndex];
    } else {
        /** option1: make a carousel and go the first of the array items */
        currentIndex = 0;
        imgPlaceholder.src = arrImages[currentIndex];
        /** option2: do nothing, stay there, disable the button */
    }
}