$(document).ready(function() {
	$('a#exportLink').click(exportXML);
	$('textarea#xmlOutput').css('resize', 'none').hide();
})

function exportXML() {

	$('a#exportLink').hide();
	var $root = $('<XMLDocument />');

	$root.append(
		$('<recipe />').append(
			$('<title />').text($('span[itemprop="name"]').text())
		).append(
			$('<recipeinfo />').append(
				$('<blurb />').text($('span[itemprop="description"]').text())
			).append(
				$('<author />').text($('span[itemprop="author"]').text())
			).append(
				$('<yield />').text($('span[itemprop="recipeYeld"]').text())
			).append(
				$('<preptime />').text($('span[itemprop="prepTime"]').text())
			)
		).append(
			$('<ingredientlist />')
		).append(
			$('<preparation />').text($('span[itemprop="recipeInstructions"]').text())
		)
	);

	var xmlString = (new XMLSerializer()).serializeToString($root[0]);

	$('textarea#xmlOutput').html(xmlString).slideDown();


}