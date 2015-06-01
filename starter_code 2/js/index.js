console.log("hello world");

$('#bottom-cta').click(preventSubmission) {
  
function preventSubmission() {
  event.preventDefault();
  .append( "default " + event.type + "prevented" )
  .appendTo( "#log" );
}

$( document ).ready(function() {
    console.log("ready!");

$( ".click-me" ).click(function(event) {
	event.preventDefault();
	if ($(event.target).text() == "Read more...") {
		$(event.target).parents('.article').children('.extend-text').slideDown();
		$(event.target).text('Read less...');
	} else {
		$(event.target).parents('.article').children('.extend-text').slideUp();
		$(event.target).text('Read more...')
	}

$( "#target" ).click() {
  alert( "Handler for .click() called." );
}

$(".readMore").click(slideDown) {
$( ".readLess").click(slideUp() {
$( ".learnMore").click(slideDown() {
  
function slideDown() {
$('p').slideDown().show("Read Less");
$('.readMore').hide();
}

function slideUp() {
$('p').slideUp().show("Read More");
$('.readMore').hide();
}

function slideDown() {
$('span.hide#learnMoreText').slideDown();
$('.learnMore').hide();
}
