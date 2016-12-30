
jQuery(document).ready( function(){
    var images2016 = [
	["2016SpringGroupPhoto.jpg", "Fratelli Spring 2016 Official Group Photo"],
	["FRATELLIPostcardJune27.jpg", "Fratelli June 27 2016 Concert Postcard"],
	["FratelliSingsOrlandoVigil.jpg","Fratelli sings in downtown Santa Barbara at the candlelight vigil for the victims of the June 2016 tragedy in Orlando."],
	["FratelliHolidayConcertPoster.jpg", "Fratelli December 2016 Holiday Concert Poster"],
	["2016_fall_group_photo.jpg","Fratelli Fall 2016 Official Group Photo"],
	["ZackKTMSInterviewJimSirianni.jpg", "Zack's December 2016 Interview with KTMS's Jim Sirianni"],
	["HeritageHouseSingoutNov28_2016.jpg", "Heritage House Singout, November 28, 2016"],
	["HeritageHouseSingoutNov28_2016a.jpg", "Heritage House Singout, November 28, 2016"],
	["HeritageHouseSingoutNov28_2916b.jpg", "Heritage House Singout, November 28, 2016"]	    
    ];
    
    
    var gallery = jQuery("#gallery2016");
    jQuery.each(images2016, function(index,value) {
	gallery.append('<img alt="' + value[1] + '" ' +
		       'src="thumbs2016/' + value[0] + '" ' +
		       'data-image="images2016/' + value[0] + '" ' +
		       'data-description="' + value[1] + '" >');
    });
    gallery.unitegallery();
});
  

