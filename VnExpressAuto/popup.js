console.log("This is a popup!");


var urlVnExpressEl = document.getElementById("urlVnExpress");
var countRunEl = document.getElementById("countRun");
var runAutoEl = document.getElementById("runAuto");

runAutoEl.addEventListener("click", run);

function run() {
	var urlVnExpress = urlVnExpressEl.value;
	var countRun = countRunEl.value;
	
	console.log(urlVnExpress);
	console.log(countRun);
	

	chrome.windows.create({"url": 'https://vnexpress.net/an-ninh-that-chat-tai-phien-xu-ba-truong-my-lan-4718036.html', "incognito": true});
	
	if (urlVnExpress != null && urlVnExpress.trim() != '' && countRun > 0) {
		var urls = urlVnExpress.split(';');
		
		for(var u = 0; u < urls.length; u++) {			
			console.log(urls[u]);
		}
	}
}


