var Protses = 0,
	OneProtses = 1,
	TwoProtses = 3,
	ThreeProtses = 7;
var	ProtsesEnd = 0;


$("#OneProtses").click(function() {
	Protses = Protses + OneProtses;
	if (Protses >= 100) {
		Protses = 100;	
		update();
	};
	someBar ();
});

$("#TwoProtses").click(function() {
	Protses = Protses + TwoProtses;
	if (Protses >= 100) {
		Protses = 100;
		update();
	};
	someBar ();
});

$("#ThreeProtses").click(function() {
	Protses = Protses + ThreeProtses;
	if (Protses >= 100) {
		Protses = 100;
		update();
	};
	someBar(); 
});

function someBar () {
	ProtsesEnd = Protses;
	$('#ProtsesEnd').width(ProtsesEnd + '%');
	console.log ('Процесс выполнен на: ' + ProtsesEnd);
	$("#progress-bar").width(String(ProtsesEnd) + "%");
	$('.progress-bar').text(ProtsesEnd + '%');
};


function update() {
	Protses = 0;
	console.log ('Начинайте заново: ' + Protses + '%');
	document.write('Вы успешно достигли 100% обновите страницу чтобы начать сначала!&copy;&nbsp;Skillfactory!P.S Если понравилось ставь высокий бал:)');

}

console.log ('Загрузка успешна');
