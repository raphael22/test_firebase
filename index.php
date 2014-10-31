<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src='https://cdn.firebase.com/js/client/1.1.1/firebase.js'></script>	

	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="js/underscore.js"></script>

	<script type="text/javascript">
	  var userip;
	</script>

	<script type="text/javascript" src="http://l2.io/ip.js?var=userip"></script>
</head>
	<body>
		<div class="wrapper">
			<div class="button">Utopia</div>
			<hr>
			<div class="utopia"></div>

			<ul class="fanlist">
			</ul>
		</div>

		<div class="overlay">
			<label for="name">
				<span class="question">Want utopia back ?</span>
				<input name='name' class="input" type="text" placeholder="wilson wilson">
				<span class="submit submit_utopia">Yes</span>
				<span class="no submit submit_no">No</span>
			</label>
		</div>

		<video src="utopia.mp3" autoplay loop></video>
	</body>

	<script src="js/script.js"></script>

</html>
