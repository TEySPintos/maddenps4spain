jQuery(function($) { 

/*49ERS*/
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/14.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-sf');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/14.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-sf"></div>');
$('#teamstats .gc-recapaway-sf h1.cfm-player-name:contains("49ers  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-sf h1.cfm-player-name:contains("49ers  ")').before('<div class="gc-recap-cityname-away">San Francisco</div><div class="team-name-bar-away-recap" style="background-color:#896C4C">49ers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/14.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-sf');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/14.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-sf"></div>');
$('#playerstats .gc-recapaway-sf h1.cfm-player-name:contains("49ers  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-sf h1.cfm-player-name:contains("49ers  ")').before('<div class="gc-recap-cityname-away">San Francisco</div><div class="team-name-bar-away-recap" style="background-color:#896C4C">49ers</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/14.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-sf');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/14.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-sf"></div>');
$('#teamstats .gc-recaphome-sf h1.cfm-player-name:contains("49ers  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-sf h1.cfm-player-name:contains("49ers  ")').before('<div class="gc-recap-cityname-home">San Francisco</div><div class="team-name-bar-home-recap" style="background-color:#9B2743">49ers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/14.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-sf');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/14.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-sf"></div>');
$('#playerstats .gc-recaphome-sf h1.cfm-player-name:contains("49ers  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-sf h1.cfm-player-name:contains("49ers  ")').before('<div class="gc-recap-cityname-home">San Francisco</div><div class="team-name-bar-home-recap" style="background-color:#9B2743">49ers</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/14.png"]').attr( "style", "" ).addClass( "gc-matchupaway-sf" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-sf').before('<div class="matchup-away-bg-sf"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("49ers")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("49ers")').before('<div class="gc-matchup-cityname-away">San Francisco</div><div class="team-name-bar-away-matchup" style="background-color:#896C4C">49ers</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/14.png"]').attr( "style", "" ).addClass( "gc-matchuphome-sf" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-sf').before('<div class="matchup-home-bg-sf"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("49ers")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("49ers")').before('<div class="gc-matchup-cityname-home">San Francisco</div><div class="team-name-bar-home-matchup" style="background-color:#9B2743">49ers</div>');

/*ARI*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/6.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-ari');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/6.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-ari"></div>');
$('#teamstats .gc-recapaway-ari h1.cfm-player-name:contains("Cardinals  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-ari h1.cfm-player-name:contains("Cardinals  ")').before('<div class="gc-recap-cityname-away">Arizona</div><div class="team-name-bar-away-recap" style="background-color:#9B2743">Cardinals</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/6.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-ari');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/6.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-ari"></div>');
$('#playerstats .gc-recapaway-ari h1.cfm-player-name:contains("Cardinals  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-ari h1.cfm-player-name:contains("Cardinals  ")').before('<div class="gc-recap-cityname-away">Arizona</div><div class="team-name-bar-away-recap" style="background-color:#9B2743">Cardinals</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/6.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-ari');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/6.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-ari"></div>');
$('#teamstats .gc-recaphome-ari h1.cfm-player-name:contains("Cardinals  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-ari h1.cfm-player-name:contains("Cardinals  ")').before('<div class="gc-recap-cityname-home">Arizona</div><div class="team-name-bar-home-recap" style="background-color:#9B2743">Cardinals</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/6.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-ari');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/6.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-ari"></div>');
$('#playerstats .gc-recaphome-ari h1.cfm-player-name:contains("Cardinals  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-ari h1.cfm-player-name:contains("Cardinals  ")').before('<div class="gc-recap-cityname-home">Arizona</div><div class="team-name-bar-home-recap" style="background-color:#9B2743">Cardinals</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/6.png"]').attr( "style", "" ).addClass( "gc-matchupaway-ari" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-ari').before('<div class="matchup-away-bg-ari"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Cardinals")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Cardinals")').before('<div class="gc-matchup-cityname-away">Arizona</div><div class="team-name-bar-away-matchup" style="background-color:#9B2743">Cardinals</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/6.png"]').attr( "style", "" ).addClass( "gc-matchuphome-ari" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-ari').before('<div class="matchup-home-bg-ari"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Cardinals")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Cardinals")').before('<div class="gc-matchup-cityname-home">Arizona</div><div class="team-name-bar-home-matchup" style="background-color:#9B2743">Cardinals</div>');

/*ATL*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/13.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-atl');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/13.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-atl"></div>');
$('#teamstats .gc-recapaway-atl h1.cfm-player-name:contains("Falcons  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-atl h1.cfm-player-name:contains("Falcons  ")').before('<div class="gc-recap-cityname-away">Atlanta</div><div class="team-name-bar-away-recap" style="background-color:#101820">Falcons</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/13.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-atl');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/13.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-atl"></div>');
$('#playerstats .gc-recapaway-atl h1.cfm-player-name:contains("Falcons  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-atl h1.cfm-player-name:contains("Falcons  ")').before('<div class="gc-recap-cityname-away">Atlanta</div><div class="team-name-bar-away-recap" style="background-color:#101820">Falcons</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/13.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-atl');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/13.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-atl"></div>');
$('#teamstats .gc-recaphome-atl h1.cfm-player-name:contains("Falcons  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-atl h1.cfm-player-name:contains("Falcons  ")').before('<div class="gc-recap-cityname-home">Atlanta</div><div class="team-name-bar-home-recap" style="background-color:#A6192E">Falcons</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/13.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-atl');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/13.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-atl"></div>');
$('#playerstats .gc-recaphome-atl h1.cfm-player-name:contains("Falcons  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-atl h1.cfm-player-name:contains("Falcons  ")').before('<div class="gc-recap-cityname-home">Atlanta</div><div class="team-name-bar-home-recap" style="background-color:#A6192E">Falcons</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/13.png"]').attr( "style", "" ).addClass( "gc-matchupaway-atl" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-atl').before('<div class="matchup-away-bg-atl"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Falcons")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Falcons")').before('<div class="gc-matchup-cityname-away">Atlanta</div><div class="team-name-bar-away-matchup" style="background-color:#101820">Falcons</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/13.png"]').attr( "style", "" ).addClass( "gc-matchuphome-atl" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-atl').before('<div class="matchup-home-bg-atl"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Falcons")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Falcons")').before('<div class="gc-matchup-cityname-home">Atlanta</div><div class="team-name-bar-home-matchup" style="background-color:#A6192E">Falcons</div>');

/*BAL*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/24.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-bal');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/24.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-bal"></div>');
$('#teamstats .gc-recapaway-bal h1.cfm-player-name:contains("Ravens  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-bal h1.cfm-player-name:contains("Ravens  ")').before('<div class="gc-recap-cityname-away">Baltimore</div><div class="team-name-bar-away-recap" style="background-color:#101820">Ravens</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/24.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-bal');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/24.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-bal"></div>');
$('#playerstats .gc-recapaway-bal h1.cfm-player-name:contains("Ravens  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-bal h1.cfm-player-name:contains("Ravens  ")').before('<div class="gc-recap-cityname-away">Baltimore</div><div class="team-name-bar-away-recap" style="background-color:#101820">Ravens</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/24.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-bal');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/24.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-bal"></div>');
$('#teamstats .gc-recaphome-bal h1.cfm-player-name:contains("Ravens  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-bal h1.cfm-player-name:contains("Ravens  ")').before('<div class="gc-recap-cityname-home">Baltimore</div><div class="team-name-bar-home-recap" style="background-color:#241773">Ravens</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/24.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-bal');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/24.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-bal"></div>');
$('#playerstats .gc-recaphome-bal h1.cfm-player-name:contains("Ravens  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-bal h1.cfm-player-name:contains("Ravens  ")').before('<div class="gc-recap-cityname-home">Baltimore</div><div class="team-name-bar-home-recap" style="background-color:#241773">Ravens</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/24.png"]').attr( "style", "" ).addClass( "gc-matchupaway-bal" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-bal').before('<div class="matchup-away-bg-bal"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Ravens")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Ravens")').before('<div class="gc-matchup-cityname-away">Baltimore</div><div class="team-name-bar-away-matchup" style="background-color:#101820">Ravens</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/24.png"]').attr( "style", "" ).addClass( "gc-matchuphome-bal" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-bal').before('<div class="matchup-home-bg-bal"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Ravens")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Ravens")').before('<div class="gc-matchup-cityname-home">Baltimore</div><div class="team-name-bar-home-matchup" style="background-color:#241773">Ravens</div>');

/*BUF*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/2.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-buf');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/2.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-buf"></div>');
$('#teamstats .gc-recapaway-buf h1.cfm-player-name:contains("Bills  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-buf h1.cfm-player-name:contains("Bills  ")').before('<div class="gc-recap-cityname-away">Buffalo</div><div class="team-name-bar-away-recap" style="background-color:#C8102E">Bills</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/2.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-buf');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/2.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-buf"></div>');
$('#playerstats .gc-recapaway-buf h1.cfm-player-name:contains("Bills  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-buf h1.cfm-player-name:contains("Bills  ")').before('<div class="gc-recap-cityname-away">Buffalo</div><div class="team-name-bar-away-recap" style="background-color:#C8102E">Bills</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/2.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-buf');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/2.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-buf"></div>');
$('#teamstats .gc-recaphome-buf h1.cfm-player-name:contains("Bills  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-buf h1.cfm-player-name:contains("Bills  ")').before('<div class="gc-recap-cityname-home">Buffalo</div><div class="team-name-bar-home-recap" style="background-color:#00338D">Bills</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/2.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-buf');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/2.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-buf"></div>');
$('#playerstats .gc-recaphome-buf h1.cfm-player-name:contains("Bills  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-buf h1.cfm-player-name:contains("Bills  ")').before('<div class="gc-recap-cityname-home">Buffalo</div><div class="team-name-bar-home-recap" style="background-color:#00338D">Bills</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/2.png"]').attr( "style", "" ).addClass( "gc-matchupaway-buf" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-buf').before('<div class="matchup-away-bg-buf"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Bills")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Bills")').before('<div class="gc-matchup-cityname-away">Buffalo</div><div class="team-name-bar-away-matchup" style="background-color:#C8102E">Bills</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/2.png"]').attr( "style", "" ).addClass( "gc-matchuphome-buf" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-buf').before('<div class="matchup-home-bg-buf"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Bills")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Bills")').before('<div class="gc-matchup-cityname-home">Buffalo</div><div class="team-name-bar-home-matchup" style="background-color:#00338D">Bills</div>');

/*CAR*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/20.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-car');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/20.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-car"></div>');
$('#teamstats .gc-recapaway-car h1.cfm-player-name:contains("Panthers  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-car h1.cfm-player-name:contains("Panthers  ")').before('<div class="gc-recap-cityname-away">Carolina</div><div class="team-name-bar-away-recap" style="background-color:#101820">Panthers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/20.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-car');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/20.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-car"></div>');
$('#playerstats .gc-recapaway-car h1.cfm-player-name:contains("Panthers  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-car h1.cfm-player-name:contains("Panthers  ")').before('<div class="gc-recap-cityname-away">Carolina</div><div class="team-name-bar-away-recap" style="background-color:#101820">Panthers</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/20.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-car');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/20.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-car"></div>');
$('#teamstats .gc-recaphome-car h1.cfm-player-name:contains("Panthers  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-car h1.cfm-player-name:contains("Panthers  ")').before('<div class="gc-recap-cityname-home">Carolina</div><div class="team-name-bar-home-recap" style="background-color:#0085CA">Panthers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/20.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-car');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/20.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-car"></div>');
$('#playerstats .gc-recaphome-car h1.cfm-player-name:contains("Panthers  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-car h1.cfm-player-name:contains("Panthers  ")').before('<div class="gc-recap-cityname-home">Carolina</div><div class="team-name-bar-home-recap" style="background-color:#0085CA">Panthers</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/20.png"]').attr( "style", "" ).addClass( "gc-matchupaway-car" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-car').before('<div class="matchup-away-bg-car"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Panthers")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Panthers")').before('<div class="gc-matchup-cityname-away">Carolina</div><div class="team-name-bar-away-matchup" style="background-color:#101820">Panthers</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/20.png"]').attr( "style", "" ).addClass( "gc-matchuphome-car" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-car').before('<div class="matchup-home-bg-car"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Panthers")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Panthers")').before('<div class="gc-matchup-cityname-home">Carolina</div><div class="team-name-bar-home-matchup" style="background-color:#0085CA">Panthers</div>');

/*CHI*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/0.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-chi');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/0.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-chi"></div>');
$('#teamstats .gc-recapaway-chi h1.cfm-player-name:contains("Bears  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-chi h1.cfm-player-name:contains("Bears  ")').before('<div class="gc-recap-cityname-away">Chicago</div><div class="team-name-bar-away-recap" style="background-color:#DC4405">Bears</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/0.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-chi');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/0.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-chi"></div>');
$('#playerstats .gc-recapaway-chi h1.cfm-player-name:contains("Bears  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-chi h1.cfm-player-name:contains("Bears  ")').before('<div class="gc-recap-cityname-away">Chicago</div><div class="team-name-bar-away-recap" style="background-color:#DC4405">Bears</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/0.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-chi');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/0.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-chi"></div>');
$('#teamstats .gc-recaphome-chi h1.cfm-player-name:contains("Bears  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-chi h1.cfm-player-name:contains("Bears  ")').before('<div class="gc-recap-cityname-home">Chicago</div><div class="team-name-bar-home-recap" style="background-color:#051C2C">Bears</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/0.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-chi');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/0.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-chi"></div>');
$('#playerstats .gc-recaphome-chi h1.cfm-player-name:contains("Bears  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-chi h1.cfm-player-name:contains("Bears  ")').before('<div class="gc-recap-cityname-home">Chicago</div><div class="team-name-bar-home-recap" style="background-color:#051C2C">Bears</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/0.png"]').attr( "style", "" ).addClass( "gc-matchupaway-chi" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-chi').before('<div class="matchup-away-bg-chi"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Bears")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Bears")').before('<div class="gc-matchup-cityname-away">Chicago</div><div class="team-name-bar-away-matchup" style="background-color:#DC4405">Bears</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/0.png"]').attr( "style", "" ).addClass( "gc-matchuphome-chi" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-chi').before('<div class="matchup-home-bg-chi"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Bears")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Bears")').before('<div class="gc-matchup-cityname-home">Chicago</div><div class="team-name-bar-home-matchup" style="background-color:#051C2C">Bears</div>');

/*CIN*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/1.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-cin');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/1.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-cin"></div>');
$('#teamstats .gc-recapaway-cin h1.cfm-player-name:contains("Bengals  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-cin h1.cfm-player-name:contains("Bengals  ")').before('<div class="gc-recap-cityname-away">Cincinatti</div><div class="team-name-bar-away-recap" style="background-color:#101820">Bengals</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/1.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-cin');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/1.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-cin"></div>');
$('#playerstats .gc-recapaway-cin h1.cfm-player-name:contains("Bengals  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-cin h1.cfm-player-name:contains("Bengals  ")').before('<div class="gc-recap-cityname-away">Cincinatti</div><div class="team-name-bar-away-recap" style="background-color:#101820">Bengals</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/1.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-cin');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/1.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-cin"></div>');
$('#teamstats .gc-recaphome-cin h1.cfm-player-name:contains("Bengals  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-cin h1.cfm-player-name:contains("Bengals  ")').before('<div class="gc-recap-cityname-home">Cincinatti</div><div class="team-name-bar-home-recap" style="background-color:#FC4C02">Bengals</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/1.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-cin');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/1.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-cin"></div>');
$('#playerstats .gc-recaphome-cin h1.cfm-player-name:contains("Bengals  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-cin h1.cfm-player-name:contains("Bengals  ")').before('<div class="gc-recap-cityname-home">Cincinatti</div><div class="team-name-bar-home-recap" style="background-color:#FC4C02">Bengals</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/1.png"]').attr( "style", "" ).addClass( "gc-matchupaway-cin" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-cin').before('<div class="matchup-away-bg-cin"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Bengals")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Bengals")').before('<div class="gc-matchup-cityname-away">Cincinatti</div><div class="team-name-bar-away-matchup" style="background-color:#101820">Bengals</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/1.png"]').attr( "style", "" ).addClass( "gc-matchuphome-cin" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-cin').before('<div class="matchup-home-bg-cin"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Bengals")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Bengals")').before('<div class="gc-matchup-cityname-home">Cincinatti</div><div class="team-name-bar-home-matchup" style="background-color:#FC4C02">Bengals</div>');

/*CLE*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/4.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-cle');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/4.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-cle"></div>');
$('#teamstats .gc-recapaway-cle h1.cfm-player-name:contains("Browns  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-cle h1.cfm-player-name:contains("Browns  ")').before('<div class="gc-recap-cityname-away">Cleveland</div><div class="team-name-bar-away-recap" style="background-color:#382F2D">Browns</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/4.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-cle');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/4.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-cle"></div>');
$('#playerstats .gc-recapaway-cle h1.cfm-player-name:contains("Browns  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-cle h1.cfm-player-name:contains("Browns  ")').before('<div class="gc-recap-cityname-away">Cleveland</div><div class="team-name-bar-away-recap" style="background-color:#382F2D">Browns</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/4.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-cle');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/4.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-cle"></div>');
$('#teamstats .gc-recaphome-cle h1.cfm-player-name:contains("Browns  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-cle h1.cfm-player-name:contains("Browns  ")').before('<div class="gc-recap-cityname-home">Cleveland</div><div class="team-name-bar-home-recap" style="background-color:#EB3300">Browns</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/4.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-cle');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/4.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-cle"></div>');
$('#playerstats .gc-recaphome-cle h1.cfm-player-name:contains("Browns  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-cle h1.cfm-player-name:contains("Browns  ")').before('<div class="gc-recap-cityname-home">Cleveland</div><div class="team-name-bar-home-recap" style="background-color:#EB3300">Browns</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/4.png"]').attr( "style", "" ).addClass( "gc-matchupaway-cle" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-cle').before('<div class="matchup-away-bg-cle"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Browns")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Browns")').before('<div class="gc-matchup-cityname-away">Cleveland</div><div class="team-name-bar-away-matchup" style="background-color:#382F2D">Browns</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/4.png"]').attr( "style", "" ).addClass( "gc-matchuphome-cle" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-cle').before('<div class="matchup-home-bg-cle"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Browns")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Browns")').before('<div class="gc-matchup-cityname-home">Cleveland</div><div class="team-name-bar-home-matchup" style="background-color:#EB3300">Browns</div>');

/*DAL*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/10.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-dal');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/10.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-dal"></div>');
$('#teamstats .gc-recapaway-dal h1.cfm-player-name:contains("Cowboys  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-dal h1.cfm-player-name:contains("Cowboys  ")').before('<div class="gc-recap-cityname-away">Dallas</div><div class="team-name-bar-away-recap" style="background-color:#869397">Cowboys</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/10.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-dal');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/10.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-dal"></div>');
$('#playerstats .gc-recapaway-dal h1.cfm-player-name:contains("Cowboys  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-dal h1.cfm-player-name:contains("Cowboys  ")').before('<div class="gc-recap-cityname-away">Dallas</div><div class="team-name-bar-away-recap" style="background-color:#869397">Cowboys</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/10.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-dal');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/10.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-dal"></div>');
$('#teamstats .gc-recaphome-dal h1.cfm-player-name:contains("Cowboys  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-dal h1.cfm-player-name:contains("Cowboys  ")').before('<div class="gc-recap-cityname-home">Dallas</div><div class="team-name-bar-home-recap" style="background-color:#041E42">Cowboys</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/10.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-dal');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/10.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-dal"></div>');
$('#playerstats .gc-recaphome-dal h1.cfm-player-name:contains("Cowboys  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-dal h1.cfm-player-name:contains("Cowboys  ")').before('<div class="gc-recap-cityname-home">Dallas</div><div class="team-name-bar-home-recap" style="background-color:#041E42">Cowboys</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/10.png"]').attr( "style", "" ).addClass( "gc-matchupaway-dal" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-dal').before('<div class="matchup-away-bg-dal"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Cowboys")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Cowboys")').before('<div class="gc-matchup-cityname-away">Dallas</div><div class="team-name-bar-away-matchup" style="background-color:#869397">Cowboys</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/10.png"]').attr( "style", "" ).addClass( "gc-matchuphome-dal" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-dal').before('<div class="matchup-home-bg-dal"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Cowboys")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Cowboys")').before('<div class="gc-matchup-cityname-home">Dallas</div><div class="team-name-bar-home-matchup" style="background-color:#041E42">Cowboys</div>');

/*DEN*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/3.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-den');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/3.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-den"></div>');
$('#teamstats .gc-recapaway-den h1.cfm-player-name:contains("Broncos  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-den h1.cfm-player-name:contains("Broncos  ")').before('<div class="gc-recap-cityname-away">Denver</div><div class="team-name-bar-away-recap" style="background-color:#FC4C02">Broncos</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/3.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-den');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/3.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-den"></div>');
$('#playerstats .gc-recapaway-den h1.cfm-player-name:contains("Broncos  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-den h1.cfm-player-name:contains("Broncos  ")').before('<div class="gc-recap-cityname-away">Denver</div><div class="team-name-bar-away-recap" style="background-color:#FC4C02">Broncos</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/3.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-den');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/3.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-den"></div>');
$('#teamstats .gc-recaphome-den h1.cfm-player-name:contains("Broncos  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-den h1.cfm-player-name:contains("Broncos  ")').before('<div class="gc-recap-cityname-home">Denver</div><div class="team-name-bar-home-recap" style="background-color:#0C2340">Broncos</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/3.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-den');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/3.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-den"></div>');
$('#playerstats .gc-recaphome-den h1.cfm-player-name:contains("Broncos  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-den h1.cfm-player-name:contains("Broncos  ")').before('<div class="gc-recap-cityname-home">Denver</div><div class="team-name-bar-home-recap" style="background-color:#0C2340">Broncos</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/3.png"]').attr( "style", "" ).addClass( "gc-matchupaway-den" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-den').before('<div class="matchup-away-bg-den"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Broncos")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Broncos")').before('<div class="gc-matchup-cityname-away">Denver</div><div class="team-name-bar-away-matchup" style="background-color:#FC4C02">Broncos</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/3.png"]').attr( "style", "" ).addClass( "gc-matchuphome-den" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-den').before('<div class="matchup-home-bg-den"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Broncos")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Broncos")').before('<div class="gc-matchup-cityname-home">Denver</div><div class="team-name-bar-home-matchup" style="background-color:#0C2340">Broncos</div>');

/*DET*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/18.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-det');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/18.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-det"></div>');
$('#teamstats .gc-recapaway-det h1.cfm-player-name:contains("Lions  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-det h1.cfm-player-name:contains("Lions  ")').before('<div class="gc-recap-cityname-away">Detroit</div><div class="team-name-bar-away-recap" style="background-color:#A2AAAD">Lions</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/18.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-det');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/18.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-det"></div>');
$('#playerstats .gc-recapaway-det h1.cfm-player-name:contains("Lions  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-det h1.cfm-player-name:contains("Lions  ")').before('<div class="gc-recap-cityname-away">Detroit</div><div class="team-name-bar-away-recap" style="background-color:#A2AAAD">Lions</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/18.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-det');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/18.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-det"></div>');
$('#teamstats .gc-recaphome-det h1.cfm-player-name:contains("Lions  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-det h1.cfm-player-name:contains("Lions  ")').before('<div class="gc-recap-cityname-home">Detroit</div><div class="team-name-bar-home-recap" style="background-color:#0069B1">Lions</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/18.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-det');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/18.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-det"></div>');
$('#playerstats .gc-recaphome-det h1.cfm-player-name:contains("Lions  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-det h1.cfm-player-name:contains("Lions  ")').before('<div class="gc-recap-cityname-home">Detroit</div><div class="team-name-bar-home-recap" style="background-color:#0069B1">Lions</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/18.png"]').attr( "style", "" ).addClass( "gc-matchupaway-det" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-det').before('<div class="matchup-away-bg-det"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Lions")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Lions")').before('<div class="gc-matchup-cityname-away">Detroit</div><div class="team-name-bar-away-matchup" style="background-color:#A2AAAD">Lions</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/18.png"]').attr( "style", "" ).addClass( "gc-matchuphome-det" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-det').before('<div class="matchup-home-bg-det"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Lions")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Lions")').before('<div class="gc-matchup-cityname-home">Detroit</div><div class="team-name-bar-home-matchup" style="background-color:#0069B1">Lions</div>');

/*GB*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/19.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-gb');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/19.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-gb"></div>');
$('#teamstats .gc-recapaway-gb h1.cfm-player-name:contains("Packers  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-gb h1.cfm-player-name:contains("Packers  ")').before('<div class="gc-recap-cityname-away">Green Bay</div><div class="team-name-bar-away-recap" style="background-color:#FFB81C">Packers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/19.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-gb');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/19.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-gb"></div>');
$('#playerstats .gc-recapaway-gb h1.cfm-player-name:contains("Packers  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-gb h1.cfm-player-name:contains("Packers  ")').before('<div class="gc-recap-cityname-away">Green Bay</div><div class="team-name-bar-away-recap" style="background-color:#FFB81C">Packers</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/19.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-gb');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/19.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-gb"></div>');
$('#teamstats .gc-recaphome-gb h1.cfm-player-name:contains("Packers  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-gb h1.cfm-player-name:contains("Packers  ")').before('<div class="gc-recap-cityname-home">Green Bay</div><div class="team-name-bar-home-recap" style="background-color:#175E33">Packers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/19.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-gb');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/19.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-gb"></div>');
$('#playerstats .gc-recaphome-gb h1.cfm-player-name:contains("Packers  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-gb h1.cfm-player-name:contains("Packers  ")').before('<div class="gc-recap-cityname-home">Green Bay</div><div class="team-name-bar-home-recap" style="background-color:#175E33">Packers</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/19.png"]').attr( "style", "" ).addClass( "gc-matchupaway-gb" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-gb').before('<div class="matchup-away-bg-gb"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Packers")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Packers")').before('<div class="gc-matchup-cityname-away">Green Bay</div><div class="team-name-bar-away-matchup" style="background-color:#FFB81C">Packers</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/19.png"]').attr( "style", "" ).addClass( "gc-matchuphome-gb" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-gb').before('<div class="matchup-home-bg-gb"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Packers")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Packers")').before('<div class="gc-matchup-cityname-home">Green Bay</div><div class="team-name-bar-home-matchup" style="background-color:#175E33">Packers</div>');

/*HOU*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/31.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-hou');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/31.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-hou"></div>');
$('#teamstats .gc-recapaway-hou h1.cfm-player-name:contains("Texans  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-hou h1.cfm-player-name:contains("Texans  ")').before('<div class="gc-recap-cityname-away">Houston</div><div class="team-name-bar-away-recap" style="background-color:#A6192E">Texans</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/31.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-hou');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/31.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-hou"></div>');
$('#playerstats .gc-recapaway-hou h1.cfm-player-name:contains("Texans  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-hou h1.cfm-player-name:contains("Texans  ")').before('<div class="gc-recap-cityname-away">Houston</div><div class="team-name-bar-away-recap" style="background-color:#A6192E">Texans</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/31.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-hou');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/31.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-hou"></div>');
$('#teamstats .gc-recaphome-hou h1.cfm-player-name:contains("Texans  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-hou h1.cfm-player-name:contains("Texans  ")').before('<div class="gc-recap-cityname-home">Houston</div><div class="team-name-bar-home-recap" style="background-color:#091F2C">Texans</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/31.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-hou');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/31.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-hou"></div>');
$('#playerstats .gc-recaphome-hou h1.cfm-player-name:contains("Texans  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-hou h1.cfm-player-name:contains("Texans  ")').before('<div class="gc-recap-cityname-home">Houston</div><div class="team-name-bar-home-recap" style="background-color:#091F2C">Texans</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/31.png"]').attr( "style", "" ).addClass( "gc-matchupaway-hou" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-hou').before('<div class="matchup-away-bg-hou"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Texans")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Texans")').before('<div class="gc-matchup-cityname-away">Houston</div><div class="team-name-bar-away-matchup" style="background-color:#A6192E">Texans</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/31.png"]').attr( "style", "" ).addClass( "gc-matchuphome-hou" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-hou').before('<div class="matchup-home-bg-hou"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Texans")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Texans")').before('<div class="gc-matchup-cityname-home">Houston</div><div class="team-name-bar-home-matchup" style="background-color:#091F2C">Texans</div>');

/*IND*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/9.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-ind');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/9.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-ind"></div>');
$('#teamstats .gc-recapaway-ind h1.cfm-player-name:contains("Colts  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-ind h1.cfm-player-name:contains("Colts  ")').before('<div class="gc-recap-cityname-away">Indianapolis</div><div class="team-name-bar-away-recap" style="background-color:#001489">Colts</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/9.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-ind');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/9.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-ind"></div>');
$('#playerstats .gc-recapaway-ind h1.cfm-player-name:contains("Colts  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-ind h1.cfm-player-name:contains("Colts  ")').before('<div class="gc-recap-cityname-away">Indianapolis</div><div class="team-name-bar-away-recap" style="background-color:#001489">Colts</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/9.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-ind');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/9.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-ind"></div>');
$('#teamstats .gc-recaphome-ind h1.cfm-player-name:contains("Colts  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-ind h1.cfm-player-name:contains("Colts  ")').before('<div class="gc-recap-cityname-home">Indianapolis</div><div class="team-name-bar-home-recap" style="background-color:#001489">Colts</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/9.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-ind');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/9.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-ind"></div>');
$('#playerstats .gc-recaphome-ind h1.cfm-player-name:contains("Colts  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-ind h1.cfm-player-name:contains("Colts  ")').before('<div class="gc-recap-cityname-home">Indianapolis</div><div class="team-name-bar-home-recap" style="background-color:#001489">Colts</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/9.png"]').attr( "style", "" ).addClass( "gc-matchupaway-ind" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-ind').before('<div class="matchup-away-bg-ind"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Colts")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Colts")').before('<div class="gc-matchup-cityname-away">Indianapolis</div><div class="team-name-bar-away-matchup" style="background-color:#001489">Colts</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/9.png"]').attr( "style", "" ).addClass( "gc-matchuphome-ind" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-ind').before('<div class="matchup-home-bg-ind"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Colts")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Colts")').before('<div class="gc-matchup-cityname-home">Indianapolis</div><div class="team-name-bar-home-matchup" style="background-color:#001489">Colts</div>');

/*JAC*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/16.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-jac');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/16.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-jac"></div>');
$('#teamstats .gc-recapaway-jac h1.cfm-player-name:contains("Jaguars  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-jac h1.cfm-player-name:contains("Jaguars  ")').before('<div class="gc-recap-cityname-away">Jacksonville</div><div class="team-name-bar-away-recap" style="background-color:#006073">Jaguars</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/16.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-jac');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/16.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-jac"></div>');
$('#playerstats .gc-recapaway-jac h1.cfm-player-name:contains("Jaguars  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-jac h1.cfm-player-name:contains("Jaguars  ")').before('<div class="gc-recap-cityname-away">Jacksonville</div><div class="team-name-bar-away-recap" style="background-color:#006073">Jaguars</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/16.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-jac');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/16.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-jac"></div>');
$('#teamstats .gc-recaphome-jac h1.cfm-player-name:contains("Jaguars  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-jac h1.cfm-player-name:contains("Jaguars  ")').before('<div class="gc-recap-cityname-home">Jacksonville</div><div class="team-name-bar-home-recap" style="background-color:#101820">Jaguars</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/16.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-jac');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/16.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-jac"></div>');
$('#playerstats .gc-recaphome-jac h1.cfm-player-name:contains("Jaguars  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-jac h1.cfm-player-name:contains("Jaguars  ")').before('<div class="gc-recap-cityname-home">Jacksonville</div><div class="team-name-bar-home-recap" style="background-color:#101820">Jaguars</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/16.png"]').attr( "style", "" ).addClass( "gc-matchupaway-jac" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-jac').before('<div class="matchup-away-bg-jac"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Jaguars")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Jaguars")').before('<div class="gc-matchup-cityname-away">Jacksonville</div><div class="team-name-bar-away-matchup" style="background-color:#006073">Jaguars</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/16.png"]').attr( "style", "" ).addClass( "gc-matchuphome-jac" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-jac').before('<div class="matchup-home-bg-jac"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Jaguars")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Jaguars")').before('<div class="gc-matchup-cityname-home">Jacksonville</div><div class="team-name-bar-home-matchup" style="background-color:#101820">Jaguars</div>');

/*KC*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/8.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-kc');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/8.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-kc"></div>');
$('#teamstats .gc-recapaway-kc h1.cfm-player-name:contains("Chiefs  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-kc h1.cfm-player-name:contains("Chiefs  ")').before('<div class="gc-recap-cityname-away">Kansas City</div><div class="team-name-bar-away-recap" style="background-color:#C8102E">Chiefs</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/8.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-kc');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/8.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-kc"></div>');
$('#playerstats .gc-recapaway-kc h1.cfm-player-name:contains("Chiefs  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-kc h1.cfm-player-name:contains("Chiefs  ")').before('<div class="gc-recap-cityname-away">Kansas City</div><div class="team-name-bar-away-recap" style="background-color:#C8102E">Chiefs</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/8.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-kc');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/8.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-kc"></div>');
$('#teamstats .gc-recaphome-kc h1.cfm-player-name:contains("Chiefs  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-kc h1.cfm-player-name:contains("Chiefs  ")').before('<div class="gc-recap-cityname-home">Kansas City</div><div class="team-name-bar-home-recap" style="background-color:#C8102E">Chiefs</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/8.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-kc');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/8.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-kc"></div>');
$('#playerstats .gc-recaphome-kc h1.cfm-player-name:contains("Chiefs  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-kc h1.cfm-player-name:contains("Chiefs  ")').before('<div class="gc-recap-cityname-home">Kansas City</div><div class="team-name-bar-home-recap" style="background-color:#C8102E">Chiefs</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/8.png"]').attr( "style", "" ).addClass( "gc-matchupaway-kc" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-kc').before('<div class="matchup-away-bg-kc"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Chiefs")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Chiefs")').before('<div class="gc-matchup-cityname-away">Kansas City</div><div class="team-name-bar-away-matchup" style="background-color:#C8102E">Chiefs</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/8.png"]').attr( "style", "" ).addClass( "gc-matchuphome-kc" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-kc').before('<div class="matchup-home-bg-kc"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Chiefs")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Chiefs")').before('<div class="gc-matchup-cityname-home">Kansas City</div><div class="team-name-bar-home-matchup" style="background-color:#C8102E">Chiefs</div>');

/*LAC*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/7.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-lac');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/7.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-lac"></div>');
$('#teamstats .gc-recapaway-lac h1.cfm-player-name:contains("Chargers  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-lac h1.cfm-player-name:contains("Chargers  ")').before('<div class="gc-recap-cityname-away">Los Angeles</div><div class="team-name-bar-away-recap" style="background-color:#FFB81C">Chargers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/7.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-lac');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/7.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-lac"></div>');
$('#playerstats .gc-recapaway-lac h1.cfm-player-name:contains("Chargers  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-lac h1.cfm-player-name:contains("Chargers  ")').before('<div class="gc-recap-cityname-away">Los Angeles</div><div class="team-name-bar-away-recap" style="background-color:#FFB81C">Chargers</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/7.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-lac');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/7.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-lac"></div>');
$('#teamstats .gc-recaphome-lac h1.cfm-player-name:contains("Chargers  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-lac h1.cfm-player-name:contains("Chargers  ")').before('<div class="gc-recap-cityname-home">Los Angeles</div><div class="team-name-bar-home-recap" style="background-color:#0072CE">Chargers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/7.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-lac');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/7.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-lac"></div>');
$('#playerstats .gc-recaphome-lac h1.cfm-player-name:contains("Chargers  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-lac h1.cfm-player-name:contains("Chargers  ")').before('<div class="gc-recap-cityname-home">Los Angeles</div><div class="team-name-bar-home-recap" style="background-color:#0072CE">Chargers</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/7.png"]').attr( "style", "" ).addClass( "gc-matchupaway-lac" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-lac').before('<div class="matchup-away-bg-lac"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Chargers")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Chargers")').before('<div class="gc-matchup-cityname-away">Los Angeles</div><div class="team-name-bar-away-matchup" style="background-color:#FFB81C">Chargers</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/7.png"]').attr( "style", "" ).addClass( "gc-matchuphome-lac" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-lac').before('<div class="matchup-home-bg-lac"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Chargers")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Chargers")').before('<div class="gc-matchup-cityname-home">Los Angeles</div><div class="team-name-bar-home-matchup" style="background-color:#0072CE">Chargers</div>');

/*LAR*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/23.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-lar');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/23.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-lar"></div>');
$('#teamstats .gc-recapaway-lar h1.cfm-player-name:contains("Rams  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-lar h1.cfm-player-name:contains("Rams  ")').before('<div class="gc-recap-cityname-away">Los Angeles</div><div class="team-name-bar-away-recap" style="background-color:#002244">Rams</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/23.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-lar');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/23.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-lar"></div>');
$('#playerstats .gc-recapaway-lar h1.cfm-player-name:contains("Rams  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-lar h1.cfm-player-name:contains("Rams  ")').before('<div class="gc-recap-cityname-away">Los Angeles</div><div class="team-name-bar-away-recap" style="background-color:#002244">Rams</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/23.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-lar');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/23.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-lar"></div>');
$('#teamstats .gc-recaphome-lar h1.cfm-player-name:contains("Rams  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-lar h1.cfm-player-name:contains("Rams  ")').before('<div class="gc-recap-cityname-home">Los Angeles</div><div class="team-name-bar-home-recap" style="background-color:#002244">Rams</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/23.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-lar');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/23.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-lar"></div>');
$('#playerstats .gc-recaphome-lar h1.cfm-player-name:contains("Rams  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-lar h1.cfm-player-name:contains("Rams  ")').before('<div class="gc-recap-cityname-home">Los Angeles</div><div class="team-name-bar-home-recap" style="background-color:#002244">Rams</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/23.png"]').attr( "style", "" ).addClass( "gc-matchupaway-lar" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-lar').before('<div class="matchup-away-bg-lar"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Rams")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Rams")').before('<div class="gc-matchup-cityname-away">Los Angeles</div><div class="team-name-bar-away-matchup" style="background-color:#002244">Rams</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/23.png"]').attr( "style", "" ).addClass( "gc-matchuphome-lar" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-lar').before('<div class="matchup-home-bg-lar"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Rams")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Rams")').before('<div class="gc-matchup-cityname-home">Los Angeles</div><div class="team-name-bar-home-matchup" style="background-color:#002244">Rams</div>');

/*MIA*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/11.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-mia');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/11.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-mia"></div>');
$('#teamstats .gc-recapaway-mia h1.cfm-player-name:contains("Dolphins  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-mia h1.cfm-player-name:contains("Dolphins  ")').before('<div class="gc-recap-cityname-away">Miami</div><div class="team-name-bar-away-recap" style="background-color:#F58220">Dolphins</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/11.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-mia');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/11.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-mia"></div>');
$('#playerstats .gc-recapaway-mia h1.cfm-player-name:contains("Dolphins  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-mia h1.cfm-player-name:contains("Dolphins  ")').before('<div class="gc-recap-cityname-away">Miami</div><div class="team-name-bar-away-recap" style="background-color:#F58220">Dolphins</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/11.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-mia');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/11.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-mia"></div>');
$('#teamstats .gc-recaphome-mia h1.cfm-player-name:contains("Dolphins  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-mia h1.cfm-player-name:contains("Dolphins  ")').before('<div class="gc-recap-cityname-home">Miami</div><div class="team-name-bar-home-recap" style="background-color:#008E97">Dolphins</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/11.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-mia');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/11.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-mia"></div>');
$('#playerstats .gc-recaphome-mia h1.cfm-player-name:contains("Dolphins  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-mia h1.cfm-player-name:contains("Dolphins  ")').before('<div class="gc-recap-cityname-home">Miami</div><div class="team-name-bar-home-recap" style="background-color:#008E97">Dolphins</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/11.png"]').attr( "style", "" ).addClass( "gc-matchupaway-mia" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-mia').before('<div class="matchup-away-bg-mia"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Dolphins")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Dolphins")').before('<div class="gc-matchup-cityname-away">Miami</div><div class="team-name-bar-away-matchup" style="background-color:#F58220">Dolphins</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/11.png"]').attr( "style", "" ).addClass( "gc-matchuphome-mia" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-mia').before('<div class="matchup-home-bg-mia"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Dolphins")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Dolphins")').before('<div class="gc-matchup-cityname-home">Miami</div><div class="team-name-bar-home-matchup" style="background-color:#008E97">Dolphins</div>');

/*MIN*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/30.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-min');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/30.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-min"></div>');
$('#teamstats .gc-recapaway-min h1.cfm-player-name:contains("Vikings  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-min h1.cfm-player-name:contains("Vikings  ")').before('<div class="gc-recap-cityname-away">Minnesota</div><div class="team-name-bar-away-recap" style="background-color:#FFB81C">Vikings</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/30.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-min');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/30.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-min"></div>');
$('#playerstats .gc-recapaway-min h1.cfm-player-name:contains("Vikings  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-min h1.cfm-player-name:contains("Vikings  ")').before('<div class="gc-recap-cityname-away">Minnesota</div><div class="team-name-bar-away-recap" style="background-color:#FFB81C">Vikings</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/30.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-min');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/30.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-min"></div>');
$('#teamstats .gc-recaphome-min h1.cfm-player-name:contains("Vikings  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-min h1.cfm-player-name:contains("Vikings  ")').before('<div class="gc-recap-cityname-home">Minnesota</div><div class="team-name-bar-home-recap" style="background-color:#512D6D">Vikings</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/30.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-min');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/30.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-min"></div>');
$('#playerstats .gc-recaphome-min h1.cfm-player-name:contains("Vikings  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-min h1.cfm-player-name:contains("Vikings  ")').before('<div class="gc-recap-cityname-home">Minnesota</div><div class="team-name-bar-home-recap" style="background-color:#512D6D">Vikings</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/30.png"]').attr( "style", "" ).addClass( "gc-matchupaway-min" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-min').before('<div class="matchup-away-bg-min"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Vikings")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Vikings")').before('<div class="gc-matchup-cityname-away">Minnesota</div><div class="team-name-bar-away-matchup" style="background-color:#FFB81C">Vikings</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/30.png"]').attr( "style", "" ).addClass( "gc-matchuphome-min" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-min').before('<div class="matchup-home-bg-min"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Vikings")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Vikings")').before('<div class="gc-matchup-cityname-home">Minnesota</div><div class="team-name-bar-home-matchup" style="background-color:#512D6D">Vikings</div>');

/*NE*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/21.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-ne');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/21.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-ne"></div>');
$('#teamstats .gc-recapaway-ne h1.cfm-player-name:contains("Patriots  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-ne h1.cfm-player-name:contains("Patriots  ")').before('<div class="gc-recap-cityname-away">New England</div><div class="team-name-bar-away-recap" style="background-color:#A2AAAD">Patriots</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/21.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-ne');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/21.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-ne"></div>');
$('#playerstats .gc-recapaway-ne h1.cfm-player-name:contains("Patriots  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-ne h1.cfm-player-name:contains("Patriots  ")').before('<div class="gc-recap-cityname-away">New England</div><div class="team-name-bar-away-recap" style="background-color:#A2AAAD">Patriots</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/21.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-ne');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/21.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-ne"></div>');
$('#teamstats .gc-recaphome-ne h1.cfm-player-name:contains("Patriots  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-ne h1.cfm-player-name:contains("Patriots  ")').before('<div class="gc-recap-cityname-home">New England</div><div class="team-name-bar-home-recap" style="background-color:#0C2340">Patriots</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/21.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-ne');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/21.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-ne"></div>');
$('#playerstats .gc-recaphome-ne h1.cfm-player-name:contains("Patriots  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-ne h1.cfm-player-name:contains("Patriots  ")').before('<div class="gc-recap-cityname-home">New England</div><div class="team-name-bar-home-recap" style="background-color:#0C2340">Patriots</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/21.png"]').attr( "style", "" ).addClass( "gc-matchupaway-ne" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-ne').before('<div class="matchup-away-bg-ne"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Patriots")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Patriots")').before('<div class="gc-matchup-cityname-away">New England</div><div class="team-name-bar-away-matchup" style="background-color:#A2AAAD">Patriots</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/21.png"]').attr( "style", "" ).addClass( "gc-matchuphome-ne" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-ne').before('<div class="matchup-home-bg-ne"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Patriots")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Patriots")').before('<div class="gc-matchup-cityname-home">New England</div><div class="team-name-bar-home-matchup" style="background-color:#0C2340">Patriots</div>');

/*NO*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/26.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-no');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/26.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-no"></div>');
$('#teamstats .gc-recapaway-no h1.cfm-player-name:contains("Saints  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-no h1.cfm-player-name:contains("Saints  ")').before('<div class="gc-recap-cityname-away">New Orleans</div><div class="team-name-bar-away-recap" style="background-color:#101820">Saints</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/26.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-no');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/26.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-no"></div>');
$('#playerstats .gc-recapaway-no h1.cfm-player-name:contains("Saints  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-no h1.cfm-player-name:contains("Saints  ")').before('<div class="gc-recap-cityname-away">New Orleans</div><div class="team-name-bar-away-recap" style="background-color:#101820">Saints</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/26.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-no');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/26.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-no"></div>');
$('#teamstats .gc-recaphome-no h1.cfm-player-name:contains("Saints  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-no h1.cfm-player-name:contains("Saints  ")').before('<div class="gc-recap-cityname-home">New Orleans</div><div class="team-name-bar-home-recap" style="background-color:#A28D5B">Saints</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/26.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-no');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/26.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-no"></div>');
$('#playerstats .gc-recaphome-no h1.cfm-player-name:contains("Saints  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-no h1.cfm-player-name:contains("Saints  ")').before('<div class="gc-recap-cityname-home">New Orleans</div><div class="team-name-bar-home-recap" style="background-color:#A28D5B">Saints</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/26.png"]').attr( "style", "" ).addClass( "gc-matchupaway-no" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-no').before('<div class="matchup-away-bg-no"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Saints")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Saints")').before('<div class="gc-matchup-cityname-away">New Orleans</div><div class="team-name-bar-away-matchup" style="background-color:#101820">Saints</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/26.png"]').attr( "style", "" ).addClass( "gc-matchuphome-no" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-no').before('<div class="matchup-home-bg-no"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Saints")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Saints")').before('<div class="gc-matchup-cityname-home">New Orleans</div><div class="team-name-bar-home-matchup" style="background-color:#A28D5B">Saints</div>');

/*NYG*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/15.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-nyg');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/15.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-nyg"></div>');
$('#teamstats .gc-recapaway-nyg h1.cfm-player-name:contains("Giants  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-nyg h1.cfm-player-name:contains("Giants  ")').before('<div class="gc-recap-cityname-away">New York</div><div class="team-name-bar-away-recap" style="background-color:#A2AAAD">Giants</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/15.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-nyg');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/15.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-nyg"></div>');
$('#playerstats .gc-recapaway-nyg h1.cfm-player-name:contains("Giants  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-nyg h1.cfm-player-name:contains("Giants  ")').before('<div class="gc-recap-cityname-away">New York</div><div class="team-name-bar-away-recap" style="background-color:#A2AAAD">Giants</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/15.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-nyg');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/15.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-nyg"></div>');
$('#teamstats .gc-recaphome-nyg h1.cfm-player-name:contains("Giants  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-nyg h1.cfm-player-name:contains("Giants  ")').before('<div class="gc-recap-cityname-home">New York</div><div class="team-name-bar-home-recap" style="background-color:#001E62">Giants</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/15.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-nyg');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/15.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-nyg"></div>');
$('#playerstats .gc-recaphome-nyg h1.cfm-player-name:contains("Giants  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-nyg h1.cfm-player-name:contains("Giants  ")').before('<div class="gc-recap-cityname-home">New York</div><div class="team-name-bar-home-recap" style="background-color:#001E62">Giants</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/15.png"]').attr( "style", "" ).addClass( "gc-matchupaway-nyg" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-nyg').before('<div class="matchup-away-bg-nyg"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Giants")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Giants")').before('<div class="gc-matchup-cityname-away">New York</div><div class="team-name-bar-away-matchup" style="background-color:#A2AAAD">Giants</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/15.png"]').attr( "style", "" ).addClass( "gc-matchuphome-nyg" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-nyg').before('<div class="matchup-home-bg-nyg"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Giants")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Giants")').before('<div class="gc-matchup-cityname-home">New York</div><div class="team-name-bar-home-matchup" style="background-color:#001E62">Giants</div>');

/*NYJ*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/17.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-nyj');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/17.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-nyj"></div>');
$('#teamstats .gc-recapaway-nyj h1.cfm-player-name:contains("Jets  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-nyj h1.cfm-player-name:contains("Jets  ")').before('<div class="gc-recap-cityname-away">New York</div><div class="team-name-bar-away-recap" style="background-color:#0C371D">Jets</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/17.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-nyj');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/17.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-nyj"></div>');
$('#playerstats .gc-recapaway-nyj h1.cfm-player-name:contains("Jets  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-nyj h1.cfm-player-name:contains("Jets  ")').before('<div class="gc-recap-cityname-away">New York</div><div class="team-name-bar-away-recap" style="background-color:#0C371D">Jets</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/17.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-nyj');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/17.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-nyj"></div>');
$('#teamstats .gc-recaphome-nyj h1.cfm-player-name:contains("Jets  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-nyj h1.cfm-player-name:contains("Jets  ")').before('<div class="gc-recap-cityname-home">New York</div><div class="team-name-bar-home-recap" style="background-color:#0C371D">Jets</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/17.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-nyj');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/17.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-nyj"></div>');
$('#playerstats .gc-recaphome-nyj h1.cfm-player-name:contains("Jets  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-nyj h1.cfm-player-name:contains("Jets  ")').before('<div class="gc-recap-cityname-home">New York</div><div class="team-name-bar-home-recap" style="background-color:#0C371D">Jets</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/17.png"]').attr( "style", "" ).addClass( "gc-matchupaway-nyj" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-nyj').before('<div class="matchup-away-bg-nyj"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Jets")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Jets")').before('<div class="gc-matchup-cityname-away">New York</div><div class="team-name-bar-away-matchup" style="background-color:#0C371D">Jets</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/17.png"]').attr( "style", "" ).addClass( "gc-matchuphome-nyj" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-nyj').before('<div class="matchup-home-bg-nyj"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Jets")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Jets")').before('<div class="gc-matchup-cityname-home">New York</div><div class="team-name-bar-home-matchup" style="background-color:#0C371D">Jets</div>');

/*OAK*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/22.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-oak');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/22.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-oak"></div>');
$('#teamstats .gc-recapaway-oak h1.cfm-player-name:contains("Raiders  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-oak h1.cfm-player-name:contains("Raiders  ")').before('<div class="gc-recap-cityname-away">Oakland</div><div class="team-name-bar-away-recap" style="background-color:#A5ACAF">Raiders</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/22.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-oak');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/22.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-oak"></div>');
$('#playerstats .gc-recapaway-oak h1.cfm-player-name:contains("Raiders  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-oak h1.cfm-player-name:contains("Raiders  ")').before('<div class="gc-recap-cityname-away">Oakland</div><div class="team-name-bar-away-recap" style="background-color:#A5ACAF">Raiders</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/22.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-oak');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/22.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-oak"></div>');
$('#teamstats .gc-recaphome-oak h1.cfm-player-name:contains("Raiders  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-oak h1.cfm-player-name:contains("Raiders  ")').before('<div class="gc-recap-cityname-home">Oakland</div><div class="team-name-bar-home-recap" style="background-color:#101820">Raiders</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/22.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-oak');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/22.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-oak"></div>');
$('#playerstats .gc-recaphome-oak h1.cfm-player-name:contains("Raiders  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-oak h1.cfm-player-name:contains("Raiders  ")').before('<div class="gc-recap-cityname-home">Oakland</div><div class="team-name-bar-home-recap" style="background-color:#101820">Raiders</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/22.png"]').attr( "style", "" ).addClass( "gc-matchupaway-oak" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-oak').before('<div class="matchup-away-bg-oak"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Raiders")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Raiders")').before('<div class="gc-matchup-cityname-away">Oakland</div><div class="team-name-bar-away-matchup" style="background-color:#A5ACAF">Raiders</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/22.png"]').attr( "style", "" ).addClass( "gc-matchuphome-oak" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-oak').before('<div class="matchup-home-bg-oak"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Raiders")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Raiders")').before('<div class="gc-matchup-cityname-home">Oakland</div><div class="team-name-bar-home-matchup" style="background-color:#101820">Raiders</div>');

/*PHI*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/12.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-phi');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/12.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-phi"></div>');
$('#teamstats .gc-recapaway-phi h1.cfm-player-name:contains("Eagles  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-phi h1.cfm-player-name:contains("Eagles  ")').before('<div class="gc-recap-cityname-away">Philadelphia</div><div class="team-name-bar-away-recap" style="background-color:#101820">Eagles</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/12.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-phi');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/12.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-phi"></div>');
$('#playerstats .gc-recapaway-phi h1.cfm-player-name:contains("Eagles  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-phi h1.cfm-player-name:contains("Eagles  ")').before('<div class="gc-recap-cityname-away">Philadelphia</div><div class="team-name-bar-away-recap" style="background-color:#101820">Eagles</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/12.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-phi');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/12.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-phi"></div>');
$('#teamstats .gc-recaphome-phi h1.cfm-player-name:contains("Eagles  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-phi h1.cfm-player-name:contains("Eagles  ")').before('<div class="gc-recap-cityname-home">Philadelphia</div><div class="team-name-bar-home-recap" style="background-color:#004851">Eagles</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/12.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-phi');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/12.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-phi"></div>');
$('#playerstats .gc-recaphome-phi h1.cfm-player-name:contains("Eagles  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-phi h1.cfm-player-name:contains("Eagles  ")').before('<div class="gc-recap-cityname-home">Philadelphia</div><div class="team-name-bar-home-recap" style="background-color:#004851">Eagles</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/12.png"]').attr( "style", "" ).addClass( "gc-matchupaway-phi" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-phi').before('<div class="matchup-away-bg-phi"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Eagles")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Eagles")').before('<div class="gc-matchup-cityname-away">Philadelphia</div><div class="team-name-bar-away-matchup" style="background-color:#101820">Eagles</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/12.png"]').attr( "style", "" ).addClass( "gc-matchuphome-phi" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-phi').before('<div class="matchup-home-bg-phi"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Eagles")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Eagles")').before('<div class="gc-matchup-cityname-home">Philadelphia</div><div class="team-name-bar-home-matchup" style="background-color:#004851">Eagles</div>');

/*PIT*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/28.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-pit');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/28.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-pit"></div>');
$('#teamstats .gc-recapaway-pit h1.cfm-player-name:contains("Steelers  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-pit h1.cfm-player-name:contains("Steelers  ")').before('<div class="gc-recap-cityname-away">Pittsburgh</div><div class="team-name-bar-away-recap" style="background-color:#101820">Steelers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/28.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-pit');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/28.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-pit"></div>');
$('#playerstats .gc-recapaway-pit h1.cfm-player-name:contains("Steelers  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-pit h1.cfm-player-name:contains("Steelers  ")').before('<div class="gc-recap-cityname-away">Pittsburgh</div><div class="team-name-bar-away-recap" style="background-color:#101820">Steelers</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/28.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-pit');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/28.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-pit"></div>');
$('#teamstats .gc-recaphome-pit h1.cfm-player-name:contains("Steelers  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-pit h1.cfm-player-name:contains("Steelers  ")').before('<div class="gc-recap-cityname-home">Pittsburgh</div><div class="team-name-bar-home-recap" style="background-color:#FFB81C">Steelers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/28.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-pit');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/28.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-pit"></div>');
$('#playerstats .gc-recaphome-pit h1.cfm-player-name:contains("Steelers  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-pit h1.cfm-player-name:contains("Steelers  ")').before('<div class="gc-recap-cityname-home">Pittsburgh</div><div class="team-name-bar-home-recap" style="background-color:#FFB81C">Steelers</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/28.png"]').attr( "style", "" ).addClass( "gc-matchupaway-pit" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-pit').before('<div class="matchup-away-bg-pit"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Steelers")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Steelers")').before('<div class="gc-matchup-cityname-away">Pittsburgh</div><div class="team-name-bar-away-matchup" style="background-color:#101820">Steelers</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/28.png"]').attr( "style", "" ).addClass( "gc-matchuphome-pit" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-pit').before('<div class="matchup-home-bg-pit"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Steelers")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Steelers")').before('<div class="gc-matchup-cityname-home">Pittsburgh</div><div class="team-name-bar-home-matchup" style="background-color:#FFB81C">Steelers</div>');

/*SEA*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/27.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-sea');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/27.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-sea"></div>');
$('#teamstats .gc-recapaway-sea h1.cfm-player-name:contains("Seahawks  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-sea h1.cfm-player-name:contains("Seahawks  ")').before('<div class="gc-recap-cityname-away">Seattle</div><div class="team-name-bar-away-recap" style="background-color:#4DFF00">Seahawks</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/27.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-sea');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/27.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-sea"></div>');
$('#playerstats .gc-recapaway-sea h1.cfm-player-name:contains("Seahawks  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-sea h1.cfm-player-name:contains("Seahawks  ")').before('<div class="gc-recap-cityname-away">Seattle</div><div class="team-name-bar-away-recap" style="background-color:#4DFF00">Seahawks</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/27.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-sea');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/27.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-sea"></div>');
$('#teamstats .gc-recaphome-sea h1.cfm-player-name:contains("Seahawks  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-sea h1.cfm-player-name:contains("Seahawks  ")').before('<div class="gc-recap-cityname-home">Seattle</div><div class="team-name-bar-home-recap" style="background-color:#001433">Seahawks</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/27.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-sea');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/27.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-sea"></div>');
$('#playerstats .gc-recaphome-sea h1.cfm-player-name:contains("Seahawks  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-sea h1.cfm-player-name:contains("Seahawks  ")').before('<div class="gc-recap-cityname-home">Seattle</div><div class="team-name-bar-home-recap" style="background-color:#001433">Seahawks</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/27.png"]').attr( "style", "" ).addClass( "gc-matchupaway-sea" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-sea').before('<div class="matchup-away-bg-sea"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Seahawks")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Seahawks")').before('<div class="gc-matchup-cityname-away">Seattle</div><div class="team-name-bar-away-matchup" style="background-color:#4DFF00;color:#001433">Seahawks</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/27.png"]').attr( "style", "" ).addClass( "gc-matchuphome-sea" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-sea').before('<div class="matchup-home-bg-sea"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Seahawks")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Seahawks")').before('<div class="gc-matchup-cityname-home">Seattle</div><div class="team-name-bar-home-matchup" style="background-color:#001433">Seahawks</div>');

/*TB*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/5.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-tb');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/5.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-tb"></div>');
$('#teamstats .gc-recapaway-tb h1.cfm-player-name:contains("Buccaneers  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-tb h1.cfm-player-name:contains("Buccaneers  ")').before('<div class="gc-recap-cityname-away">Tampa Bay</div><div class="team-name-bar-away-recap" style="background-color:#FF8200">Buccaneers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/5.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-tb');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/5.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-tb"></div>');
$('#playerstats .gc-recapaway-tb h1.cfm-player-name:contains("Buccaneers  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-tb h1.cfm-player-name:contains("Buccaneers  ")').before('<div class="gc-recap-cityname-away">Tampa Bay</div><div class="team-name-bar-away-recap" style="background-color:#FF8200">Buccaneers</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/5.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-tb');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/5.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-tb"></div>');
$('#teamstats .gc-recaphome-tb h1.cfm-player-name:contains("Buccaneers  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-tb h1.cfm-player-name:contains("Buccaneers  ")').before('<div class="gc-recap-cityname-home">Tampa Bay</div><div class="team-name-bar-home-recap" style="background-color:#C8102E">Buccaneers</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/5.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-tb');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/5.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-tb"></div>');
$('#playerstats .gc-recaphome-tb h1.cfm-player-name:contains("Buccaneers  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-tb h1.cfm-player-name:contains("Buccaneers  ")').before('<div class="gc-recap-cityname-home">Tampa Bay</div><div class="team-name-bar-home-recap" style="background-color:#C8102E">Buccaneers</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/5.png"]').attr( "style", "" ).addClass( "gc-matchupaway-tb" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-tb').before('<div class="matchup-away-bg-tb"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Buccaneers")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Buccaneers")').before('<div class="gc-matchup-cityname-away">Tampa Bay</div><div class="team-name-bar-away-matchup" style="background-color:#FF8200">Buccaneers</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/5.png"]').attr( "style", "" ).addClass( "gc-matchuphome-tb" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-tb').before('<div class="matchup-home-bg-tb"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Buccaneers")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Buccaneers")').before('<div class="gc-matchup-cityname-home">Tampa Bay</div><div class="team-name-bar-home-matchup" style="background-color:#C8102E">Buccaneers</div>');

/*TEN*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/29.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-ten');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/29.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-ten"></div>');
$('#teamstats .gc-recapaway-ten h1.cfm-player-name:contains("Titans  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-ten h1.cfm-player-name:contains("Titans  ")').before('<div class="gc-recap-cityname-away">Tennessee</div><div class="team-name-bar-away-recap" style="background-color:#4B92DB">Titans</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/29.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-ten');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/29.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-ten"></div>');
$('#playerstats .gc-recapaway-ten h1.cfm-player-name:contains("Titans  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-ten h1.cfm-player-name:contains("Titans  ")').before('<div class="gc-recap-cityname-away">Tennessee</div><div class="team-name-bar-away-recap" style="background-color:#4B92DB">Titans</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/29.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-ten');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/29.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-ten"></div>');
$('#teamstats .gc-recaphome-ten h1.cfm-player-name:contains("Titans  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-ten h1.cfm-player-name:contains("Titans  ")').before('<div class="gc-recap-cityname-home">Tennessee</div><div class="team-name-bar-home-recap" style="background-color:#0C2340">Titans</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/29.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-ten');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/29.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-ten"></div>');
$('#playerstats .gc-recaphome-ten h1.cfm-player-name:contains("Titans  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-ten h1.cfm-player-name:contains("Titans  ")').before('<div class="gc-recap-cityname-home">Tennessee</div><div class="team-name-bar-home-recap" style="background-color:#0C2340">Titans</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/29.png"]').attr( "style", "" ).addClass( "gc-matchupaway-ten" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-ten').before('<div class="matchup-away-bg-ten"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Titans")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Titans")').before('<div class="gc-matchup-cityname-away">Tennessee</div><div class="team-name-bar-away-matchup" style="background-color:#4B92DB">Titans</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/29.png"]').attr( "style", "" ).addClass( "gc-matchuphome-ten" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-ten').before('<div class="matchup-home-bg-ten"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Titans")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Titans")').before('<div class="gc-matchup-cityname-home">Tennessee</div><div class="team-name-bar-home-matchup" style="background-color:#0C2340">Titans</div>');

/*WAS*/

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/25.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-was');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/left/25.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-was"></div>');
$('#teamstats .gc-recapaway-was h1.cfm-player-name:contains("Redskins  ")').addClass("recap-name-away");
$('#teamstats .gc-recapaway-was h1.cfm-player-name:contains("Redskins  ")').before('<div class="gc-recap-cityname-away">Washington</div><div class="team-name-bar-away-recap" style="background-color:#FFCD00">Redskins</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/25.png"]').parents('.cfm-player-profile.Awayteam').addClass('gc-recapaway-was');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/left/25.png"]').parents('.cfm-player-profile.Awayteam').before('<div class="recap-away-bg-was"></div>');
$('#playerstats .gc-recapaway-was h1.cfm-player-name:contains("Redskins  ")').addClass("recap-name-away");
$('#playerstats .gc-recapaway-was h1.cfm-player-name:contains("Redskins  ")').before('<div class="gc-recap-cityname-away">Washington</div><div class="team-name-bar-away-recap" style="background-color:#FFCD00">Redskins</div>');

$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/25.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-was');
$('#teamstats div.cfm-team-logo img[src*="/img/nfl/teams/right/25.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-was"></div>');
$('#teamstats .gc-recaphome-was h1.cfm-player-name:contains("Redskins  ")').addClass("recap-name-home");
$('#teamstats .gc-recaphome-was h1.cfm-player-name:contains("Redskins  ")').before('<div class="gc-recap-cityname-home">Washington</div><div class="team-name-bar-home-recap" style="background-color:#862633">Redskins</div>');

$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/25.png"]').parents('.cfm-player-profile.Hometeam').addClass('gc-recaphome-was');
$('#playerstats div.cfm-team-logo img[src*="/img/nfl/teams/right/25.png"]').parents('.cfm-player-profile.Hometeam').before('<div class="recap-home-bg-was"></div>');
$('#playerstats .gc-recaphome-was h1.cfm-player-name:contains("Redskins  ")').addClass("recap-name-home");
$('#playerstats .gc-recaphome-was h1.cfm-player-name:contains("Redskins  ")').before('<div class="gc-recap-cityname-home">Washington</div><div class="team-name-bar-home-recap" style="background-color:#862633">Redskins</div>');

$('div.header-matchup div.teamimage-left[style*="/img/m25/left/25.png"]').attr( "style", "" ).addClass( "gc-matchupaway-was" );
$('div.header-matchup div.team-info-left.font-reforma .gc-matchupaway-was').before('<div class="matchup-away-bg-was"></div>');
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Redskins")').addClass( "matchup-name-away");
$('div.header-matchup div.team-info-left.font-reforma .name:contains("Redskins")').before('<div class="gc-matchup-cityname-away">Washington</div><div class="team-name-bar-away-matchup" style="background-color:#FFCD00;color:#862633">Redskins</div>');

$('div.header-matchup div.teamimage-right[style*="/img/m25/right/25.png"]').attr( "style", "" ).addClass( "gc-matchuphome-was" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchuphome-was').before('<div class="matchup-home-bg-was"></div>');
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Redskins")').addClass( "matchup-name-home");
$('div.header-matchup div.team-info-right.font-reforma .name:contains("Redskins")').before('<div class="gc-matchup-cityname-home">Washington</div><div class="team-name-bar-home-matchup" style="background-color:#862633">Redskins</div>');

/*OTHERS*/
$('#teamstats .cfm-player-profile.Awayteam .cfm-player-info').addClass('away');
$('#teamstats div.cfm-player-profile.Awayteam').removeClass('cfm-player-profile Awayteam');
$('#playerstats .cfm-player-profile.Awayteam .cfm-player-info').addClass('away');
$('#playerstats div.cfm-player-profile.Awayteam').removeClass('cfm-player-profile Awayteam');
$('#teamstats .cfm-player-profile.Hometeam .cfm-player-info').addClass('home');
$('#teamstats div.cfm-player-profile.Hometeam').removeClass('cfm-player-profile Hometeam');
$('#playerstats .cfm-player-profile.Hometeam .cfm-player-info').addClass('home');
$('#playerstats div.cfm-player-profile.Hometeam').removeClass('cfm-player-profile Hometeam');
$('div.player-stats-list div.info-row:contains("Passing"), div.team-stats-list:contains("Passing")').addClass( "stats-spacing" );
$('table.data-table1:contains("Stats")').addClass( "cfm-stats-table" );
$('div.scrollbar').remove();
$('div.team-stats-list div.data').addClass( "stats-data-text" );
$('div.sub-header-recap div.statictisc-title.font-reforma:contains("STATS PER GAME")').addClass( "matchup-text-header" );
$('div.team-stats-list div.info-row').addClass( "stats-border" );
$('div.header-matchup div.team-info-right.font-reforma .gc-matchup-cityname-home').before('<div class="matchup-at"></div>');
});