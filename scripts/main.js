// When click on image
// replace main image with clicked image
// replace text with image

// get trigger link
var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";




// when trigger is clicked

function arrayMaker(){
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailsArray = [].slice.call(thumbnails);
    return thumbnailsArray;
};

// take thumbnailsArray and pull out the information I need


function initializeEvent(){
    var thumbnailsArray = arrayMaker();
    //for each time clicked, must make click function//
    thumbnailsArray.foreach();

}

function clickTrigger(thumb){
    
}