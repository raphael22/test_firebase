(function(){
var _firebase  = new Firebase("https://blazing-inferno-8850.firebaseio.com/"),
	utopia,
	ip,
	userToken=true;

_firebase.child("utopia").on("value", function(snapshot) {
  utopia = snapshot.val();
  $('.utopia').addClass('on').text(utopia);
  //updateFanList();v
});


_firebase.child("users").once("value", function(snapshot) {
  users = snapshot.val();
  console.log(users)
  _.each(users,function(user,i,j){
  	if(i!='utopia')checkUser(user);
  });
});

_firebase.child("users").on("child_added",function(snapshot){
	var user = snapshot.val();
	updateFanList(user);
});


pushUser = function(){	
	_firebase.child("users").push({
		ip:userip,
		name:$('input').val(),
		utopia:utopia
	});
}

checkUser = function(user){
  	if(user.ip!==undefined){
	  	if(user.ip==userip){
	  		userToken=true;
	  		$('body').addClass('on');
	  		$('.overlay').addClass('on');
	  	}else{
	  		userToken=false;
	  		setTimeout(function(){
	  			$('.overlay').addClass('off')
	  		},500);
	  	}
	}
}
//++ UTOPIA
Utopia = function(){
	if(userToken==false){
		userToken = true;
		utopia+=1;

		_firebase.update({
		  utopia: utopia
		});

		$('.wrapper').addClass('on');
	}
}

//CREATE USER
$('.submit_utopia').click(function(){

	var name = $('input').val();

	Utopia();

	if(name.trim()!="" && name.length > 2){
		pushUser();
		$('body').addClass('on');
		$('.overlay').addClass('on');
	}

});



updateFanList = function(user){
	$('.fanlist').append('<p>#'+user.utopia+' '+user.name+'</p>');
}

})();