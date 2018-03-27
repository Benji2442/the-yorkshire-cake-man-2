// $(document).ready(function(){
// 	$('#content').load('/pages/home.html');
// });

// below loads page based on nav-link.text

$('.nav-link').click(function(event){
	$("#content").empty();
	$('#cakeHtmlHere').empty();
	var pageName = $(this).text().toLowerCase();
	pageName = pageName + ".html";
	$('#content').load("/pages/" + pageName);
});

//below loads pages based on .btn click

$(document).on('click','.btn', function(event){
	// $('#content').empty();
	var buttonPage = $(this).text().toLowerCase();
	buttonPage = buttonPage + ".html";
	$('#content').load("/pages/" + buttonPage);
});

//below adds photo thumbs in via json data

$(document).on('click', '.galleryItem a', function(){
	var selectedCollection = $(this).text().toLowerCase();
	// console.log(selectedCollection);
	var data = $.getJSON("../json/data.json", function(data) {
	// console.log(data);
	var selectedCakes = data.filter(i => i.collection === selectedCollection);
	// console.log(selectedCakes);
		var cakeHtml = selectedCakes.map(function(i){
			return "<div class='galleryImage col-lg-4 col-sm-6'><a data-name='"+i.name+"' href='#'><img class='img-thumbnail' src='"+i.thumb+ "' alt=''></a></div>"
		}).join('');
		// console.log(cakeHtml);
		$('#cakeHtmlHere').empty().append(cakeHtml);
	});
});
