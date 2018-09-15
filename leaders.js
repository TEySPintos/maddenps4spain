jQuery(function($) { 
	//Passing Yards
	var url = $('#passing-stats .tbdy1 .Link').attr('href');
  	var urlPlayer = url + ' .cfm-player-img img';
  	var urlTeam = url + ' .cfm-player-team img';
  	$('.pasadoresFoto .foto').load(urlPlayer);
  	$('.pasadoresFoto .sobre').load(urlTeam);

  	//Rushing Yards
	var url = $('#rushing-stats .tbdy1 .Link').attr('href');
  	var urlPlayer = url + ' .cfm-player-img img';
  	var urlTeam = url + ' .cfm-player-team img';
  	$('.corredoresFoto .foto').load(urlPlayer);
  	$('.corredoresFoto .sobre').load(urlTeam);

  	//Receiving Yards
	var url = $('#receiving-stats .tbdy1 .Link').attr('href');
  	var urlPlayer = url + ' .cfm-player-img img';
  	var urlTeam = url + ' .cfm-player-team img';
  	$('.receptoresFoto .foto').load(urlPlayer);
  	$('.receptoresFoto .sobre').load(urlTeam);

  	//Picks
	var url = $('#picks-stats .tbdy1 .Link').attr('href');
  	var urlPlayer = url + ' .cfm-player-img img';
  	var urlTeam = url + ' .cfm-player-team img';
  	$('.interceptadosFoto .foto').load(urlPlayer);
  	$('.interceptadosFoto .sobre').load(urlTeam);

  	//Tackles
	var url = $('#defense-stats .tbdy1 .Link').attr('href');
  	var urlPlayer = url + ' .cfm-player-img img';
  	var urlTeam = url + ' .cfm-player-team img';
  	$('.placadoresFoto .foto').load(urlPlayer);
  	$('.placadoresFoto .sobre').load(urlTeam);

  	//INTs
	var url = $('#defenseint-stats .tbdy1 .Link').attr('href');
  	var urlPlayer = url + ' .cfm-player-img img';
  	var urlTeam = url + ' .cfm-player-team img';
  	$('.interceptadoresFoto .foto').load(urlPlayer);
  	$('.interceptadoresFoto .sobre').load(urlTeam);

  	//Sacks
	var url = $('#sacks-stats .tbdy1 .Link').attr('href');
  	var urlPlayer = url + ' .cfm-player-img img';
  	var urlTeam = url + ' .cfm-player-team img';
  	$('.saqueadoresFoto .foto').load(urlPlayer);
  	$('.saqueadoresFoto .sobre').load(urlTeam);
});