// put your javascript code here

/*
 *		This file contains the javascript code for our gallery
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled
// templates many times
var animalsCategoryTemplate, animalsDetailsTemplate, animalDetailTemplate, slideshow_template;

// variables to store the current displayed album and photo
var currentAnimalCategory = animals_data.category[0];
var currentImage = currentAnimalCategory.animals[0].image1;
console.log("current image", currentImage);

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html = template(data);
	$('.main-container').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source = $("#animal-category-template").html();
	animalsCategoryTemplate = Handlebars.compile(source);

	source   = $("#animal-details-template").html();
	animalsDetailsTemplate = Handlebars.compile(source);

	source   = $("#animal-detail-template").html();
	animalDetailTemplate = Handlebars.compile(source);
  //
	// source   = $("#slideshow-template").html();
	// slideshow_template = Handlebars.compile(source);

	//
	//  clicking on the albums tab shows the
	//  thumbnails of all the albums
	//
	$("#categories-tab").click(function () {

		// displays the albums template
		showTemplate(animalsCategoryTemplate, animals_data);

		// make the albums tab the active one
		// first make the currently active tab inactive
		$(".navbar-nav .active").removeClass("active");
		// then make albums tab active
		$("#categories-tab").addClass("active");

		// add a click callback to each album
		// thumbnail which displays the photos
		// template on that album
		// (I have written out the code for this
		// function for clarity but it is actually
		// pretty much the same as the photos tab
		// function so we could acutally just
		// call $(".photo-thumbnail").click() )
		$(".category-content").click(function (){

			// get the index (position in the array)
			// of the album we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the album in
			// the array - @index)
			var index = $(this).data("id");
      console.log("cat tab index", index);
			// set the current album to this album
			currentAnimalCategory = animals_data.category[index];
      console.log("cat tab curr animal cat", currentAnimalCategory);
			// displays the photos template
			showTemplate(animalsDetailsTemplate, currentAnimalCategory);

			// add an on click al all the photo thumbnails
			// which displays the photo in a modal popup
			// $(".detail-content").click(function (){
			// 	// get the index (position in the array)
			// 	// of the photo we clicked on
			// 	// "this" is the element that was clicked on
			// 	// data("id") gets the attribute data-id
			// 	// (which we set to the index of the photo in
			// 	// the array - @index)
			// 	var index = $(this).data("id");
      //   console.log("detail content index", index);
			// 	// set the current photo to this photo
			// 	currentImage = currentAnimalCategory.animals[index].image1;
      //   console.log("cat thumb curr image", currentImage);
      //
			// 	// displays the single photo template
			// 	showTemplate(animalDetailTemplate, currentImage);
			// });
      $("#details-tab").click();
		});
	});

	//
	//  clicking on the photos tab shows all of the
	//  photos in the current album
	//
	$("#details-tab").click(function () {

		// displays the photos template
		showTemplate(animalsDetailsTemplate, currentAnimalCategory);

		// make the photos tab the active one
		// first make the currently active tab inactive
		$(".navbar-nav .active").removeClass("active");
		// then make photos tab active
		$("#details-tab").addClass("active");

		// add an on click al all the photo thumbnails
		// which displays the photo in a modal popup
		$(".detail-content").click(function (){
			// get the index (position in the array)
			// of the photo we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the photo in
			// the array - @index)
			var index = $(this).data("id");

			// set the current photo to this photo
			currentAnimal = currentAnimalCategory.animals[index];
      console.log('detail tab curr animaal', currentAnimal);
			// displays the single photo template
			showTemplate(animalDetailTemplate, currentAnimal);
		});
	});

	//
	//  clicking on the slideshow tab displays the
	//  current album as a slide show
	//
	$("#slideshow-tab").click(function () {
		// display the slideshow template using the
		// current album
		showTemplate(slideshow_template, current_album);

		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make slideshow tab active
		$("#slideshow-tab").addClass("active");
	});

	// start the page by showing the albums view
	// we do this by virtually clicking on the
	// albums tab
	$("#categories-tab").click();

});
