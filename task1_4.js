

var applyLanguage = function(lang) {
	var langEls = document.querySelectorAll('.visible');
		for (var i=0; i<langEls.length; i++) {
			langEls[i].classList.remove('visible');
	 	}	
	langEls = document.getElementsByClassName('lang-' + lang);

	for (i=0; i<langEls.length; i++) {
	 	langEls[i].classList.add('visible');
	}
	//alert('now language is: ' + lang);
}

var getCurrentLanguage = function(e) {
	var defaultLanguage = 'ua';
	var currLang;
	if (e && e.target.checked == true) {
  		currLang = e.target.value.toLowerCase();
  		localStorage.setItem("language",currLang); //зберігаємо текст привітання в LocalStorage
  	}			
  	// Після оновлення/перевідкриття сторінки відмічаємо radioButton.
  	if (!e) {
  		var defRadio = document.querySelectorAll('input[name=lang]');
  		for (let i = 0; i < defRadio.length; i++) {
  			if (defRadio[i].value.toLowerCase() === localStorage.getItem("language")) defRadio[i].checked = true;
  		}
  	}

  return localStorage.getItem("language") || defaultLanguage;
}

var $selectLang = document.querySelectorAll('input[type = "radio"]');
for (let i=0;i<$selectLang.length; i++) {
	$selectLang[i].addEventListener('click', function(e) {
		applyLanguage(getCurrentLanguage(e));
	});
 } 		

applyLanguage(getCurrentLanguage());

// Кнопка очищення LocalStorage
var btnClearLocalStorage = document.getElementById('clear');
btnClearLocalStorage.addEventListener('click', function() {
	localStorage.clear();
})