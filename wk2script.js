console.log('JS');
console.log('JQ');

$( document).on('click','#searchHere', function(){
  var searchMovie = $('#search').val();
  console.log('Searching to find:', searchMovie);

  var searchURL = 'http://www.omdbapi.com/?s=' + searchMovie;
  $.ajax({ url: searchURL, dataType: 'JSON',sucess: function(data){
    console.log('API success:', data);
    showResults(data.search);
  },
statusCode:{
  404: function(){
    alert('Page not found');
  } //
}
});
});

var showResults = function( results ){
console.log( 'in showResults', results );
$( '#outputDiv').empty();
for( var i = 0 ; i < results.length; i++ ){
$( '#outputDiv').append( '<p><b>' + results[ i ].Title + '</b> (' + results[ i ].Year + ')</p>' );
$( '#outputDiv').append( '<img src="http://img.omdbapi.com/?apikey=[yourkey]&"' + results[ i ].Poster + '">' );
}
}
var obj = JSON.parse(text);

//To alert user of empty input
function validateForm() {
    var a = document.forms["myForm"]["year"].value;
    if (a == "") {
        alert("Year must be entered");
        return false;
    var  b = document.forms["myForm"]["title"].value;
    if (a == "") {
        alert("Title must be entered");
        return false;
    }
}

//To remove movies from DOM
//https://api.jquery.com/jQuery.removeData/ has example
//
// var div = $( "div" )[ 0 ];
// $( "span:eq(0)" ).text( "" + $( "div" ).data( "test1" ) );
// jQuery.data( div, "test1", "VALUE-1" );
// jQuery.data( div, "test2", "VALUE-2" );
// $( "span:eq(1)" ).text( "" + jQuery.data( div, "test1" ) );
// jQuery.removeData( div, "test1" );
// $( "span:eq(2)" ).text( "" + jQuery.data( div, "test1" ) );
// $( "span:eq(3)" ).text( "" + jQuery.data( div, "test2" ) );

//? : var div = $("#outputDiv");
// $( "span:" ).text( "" + $( "#output" ).data( "input" ) );
// jQuery.data( div, "#outputDiv" );
// jQuery.removeData( div, "#output" );
var input = $( "input" );
jQuery.data( input, "", "" );
jQuery.removeData( input, "" );



//remove data
//http://www.w3schools.com/jsref/jsref_splice.asp example
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;
//
// function myFunction() {
//     fruits.splice(2, 1, "Lemon", "Kiwi");
//     document.getElementById("demo").innerHTML = fruits;
// }

//Site that mention other ways to display an array of JSON objects
//http://stackoverflow.com/questions/13054119/how-to-display-an-array-of-json-objects-in-the-dom-via-append
// $.getJSON('wp-content/themes/invoke-dmd/get-client-logos.php/', function (data) {
//
//     $.each(data, function(key, val) {
//         $('#practice').append('<img src ="' + val.url + '"/>');
//     });
//
// });
