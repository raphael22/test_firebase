(function(){
var _firebase  = new Firebase("https://debugword.firebaseio.com/debugwords/");

var allWords;



/*upvotesRef.transaction(function (current_value) {
  return (current_value || 0) + 1;
});*/

/*_firebase.child("debugwords").push({
	word:'toto',
	count:1
});*/



$('.button').click(function(){

	var word = $('.input').val();

	checkWord(word);

});


checkWord = function(word){
	var wordcount = 0;
	_firebase.once("value", function(snapshot) {

	  allWords = snapshot.val();

	  var length = Object.keys(allWords).length;

	  for (var i=0; i < length; i++) {

	  	var id = Object.keys(allWords)[i],
	  		thisword = allWords[id].word;

	  	console.log(allWords[Object.keys(allWords)[i]].word);

	  	if(thisword == word){
	  		wordcount++;
	  		console.log('word known')

			var wordknown  = new Firebase("https://debugword.firebaseio.com/debugwords/"+id+"/count"); 		
			wordknown.transaction(function (current_value) {
			  return current_value + 1;
			});

	  	}

	  }

	  if(wordcount==0){
	  	console.log('word unknown')
	  	_firebase.push({
			word:word,
			count:1
		});
	  }

	});	
}

_firebase.on("value", function(snapshot) {
	var words = snapshot.val();
	$('.list').empty();
	_.each(words,function(word){
		$('.list').append('<div class="list-item">'+word.word+'<span>'+word.count+'</span>'+'</div>');
	});
});

/*_firebase.push({
	word:'caca',
	count:10
});*/


})();

