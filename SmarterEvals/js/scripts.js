$(document).ready(function() {



	$('.nav-item').click(function(event) {
		

		$('.nav-item').removeClass('active');

		report = $(this).attr('data-id');
		console.log($(this).attr('data-id'));


		$(this).addClass('active');
		if (report === 'home') {
			$('#reportDiv').empty();
			$('#reportDiv').append('test');

		} 
		else if (report == 'student') {
			$('#reportDiv').empty();
			$('#reportDiv').append(`<iframe width="1500" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiMTdiODdjM2QtZWE4NC00OWFkLWIwMmItMjMwZjIzZTFhOThhIiwidCI6ImE3MGE1ODNlLWRmNDEtNDRmYy1iZjQxLTUxNWQwNzJiMTk2YSIsImMiOjF9" frameborder="0" allowFullScreen="true"></iframe>`);
		}
		else if (report == 'proffesor') {
			$('#reportDiv').empty();
			$('#reportDiv').append(`<iframe width="1500" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiYmIyMGIwNzMtZjk5MC00OTU3LWE3ZWUtZGZkNjQzODdjNjM1IiwidCI6ImE3MGE1ODNlLWRmNDEtNDRmYy1iZjQxLTUxNWQwNzJiMTk2YSIsImMiOjF9" frameborder="0" allowFullScreen="true"></iframe>`);
		}
		else if (report == 'admin') {
			$('#reportDiv').empty();
			$('#reportDiv').append(`<iframe width="1500" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiZGU3ZDBkZDgtNWFlOC00OTM1LThiYzQtN2ZmYTRhOGQyZWZkIiwidCI6ImE3MGE1ODNlLWRmNDEtNDRmYy1iZjQxLTUxNWQwNzJiMTk2YSIsImMiOjF9" frameborder="0" allowFullScreen="true"></iframe>`);
		}
		else {
			$('.reports').addClass('hidden');	
			$('#'+ report + 'Report').removeClass('hidden');
		}
		event.preventDefault();

	});




	$.urlParam = function(name){
        try {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return results[1] || 0;
        } catch(err) {
            console.log(err);
            return "NO";
        }
    }
});