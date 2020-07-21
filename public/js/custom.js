$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: 'smuswe',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJXWUl3TzhPN634hgdf83hjdj2U1ZAbVJ4MWhWejFuUkFsNmZAEcmpXbmZADZAzM4Q2h2NjRGd1A5QVVYRkdGdmlmek15SVYyYTlkc0RIYXA1ZAXZANVkI0QVJ2ZAUMtbjM4YW4zOFdZASHZACR3BTY245S2x3',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});