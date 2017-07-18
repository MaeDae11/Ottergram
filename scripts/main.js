// When click on image
// replace main image with clicked image
// replace text with image


var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
// get trigger link

// take thumbnailsArray and pull out the information I need
//7
function setDetails(imageUrl, titleText){
    var detailsImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    // method Element.setAttribute(name: string, value: string)
    detailsImage.setAttribute("src", imageUrl)
    var detailsText = document.querySelector(DETAIL_TITLE_SELECTOR);
    // method Node.textContent = string
    detailsText.textContent = titleText;
}

//6.2
function getImage(thumbnail){
    return thumbnail.getAttribute("data-image-url");
}

//6.1
function getText(thumbnail){
    return thumbnail.getAttribute("data-image-title");
}
//5*
function setDetailsForThumb(thumbnail){
    return setDetails(getImage(thumbnail), getText(thumbnail));
}
//4*
function clickTrigger(thumb){
    thumb.addEventListener("click", function (event){
        event.preventDefault();
        var thing1 = setDetailsForThumb(thumb);
    });
}
//3 *
function arrayMaker(){
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailsArray = [].slice.call(thumbnails);
    return thumbnailsArray;
}
//2*
function initializeEvent(){
    var thumbnailsArray = arrayMaker();
    //for each time clicked, must make click function//
    thumbnailsArray.forEach(clickTrigger);
}
function displayImage(){
    var thumbnailsArray = arrayMaker();
    var num = Math.floor(Math.random() * 4);
    var num2 = thumbnailsArray[num];
    setDetailsForThumb(num2);
}
// to make extra random, use if else statement
//1*
initializeEvent();
displayImage();
