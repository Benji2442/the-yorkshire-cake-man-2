$(document).ready(function(){
	$('#content').load('/pages/home.html');
});

// below loads page based on nav-link.text

$('.nav-link').click(function(event){
	$("#content").empty();
	var pageName = $(this).text().toLowerCase();
	pageName = pageName + ".html";
	$('#content').load("/pages/" + pageName);
});

$(document).on('click','.btn', function(event){
	// $('#content').empty();
	var buttonPage = $(this).text().toLowerCase();
	buttonPage = buttonPage + ".html";
	$('#content').load("/pages/" + buttonPage);
});
