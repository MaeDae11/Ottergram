// When click on image
// replace main image with clicked image
// replace text with image

// get trigger link
var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";





//2
function arrayMaker(){
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailsArray = [].slice.call(thumbnails);
    return thumbnailsArray;
};

// take thumbnailsArray and pull out the information I need

//1
function initializeEvent(){
    var thumbnailsArray = arrayMaker();
    //for each time clicked, must make click function//
    thumbnailsArray.forEach(clickTrigger);

}

//3
function clickTrigger(thumb){
    thumb.addEventListener("click", function (event){
        event.preventDefault();
        setDetailsForThumb(thumb);
    })
}

//4
function setDetailsforThumb(thumbnail){
    setDetails(getImage(thumbnail), getText(thumbnail));
}

//5.2
function getImage(thumbnail){
    return thumbnail.getAttribute("data-image-url");
}

//5.1
function getText(thumbnail){
    return thumbnail.getAttribute("data-image-title");
}

//6
function setDetails(imageUrl, titleText){

}