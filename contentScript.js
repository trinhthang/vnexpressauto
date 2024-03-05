var div = document.createElement('div');
div.style = "position: fixed; bottom: 0; right: 0; z-index:9999";
div.innerHTML = 
`<div
	style="
		background-image:url(https://s1.vnecdn.net/vnexpress/restruct/i/v862/v2_2019/pc/graphics/logo.svg);
		background-size: 100% 100%;
	        width: 250px;
	        height: 150px;
	        background-color: black;
	        color: white;
		font-size: 20px;
	"
 >
	Running auto like...
</div>`;

document.body.appendChild(div);

for(var i = 0; i < 5; i++) {
	console.log(9999999);
}


const showMoreComment = document.getElementById("show_more_coment");

const likes = document.getElementsByClassName("link_thich control-action");


function simulateClick(obj) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
  0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var canceled = !obj.dispatchEvent(evt);      
  	/*
	  if(canceled) {
	  // A handler called preventDefault
	  alert("canceled");
	  } else {
	  // None of the handlers called preventDefault
	  alert("not canceled");
	}
	*/
}	


for(var i = 0; i < likes.length; i++) {
//	likes[i].click();
	simulateClick(likes[i]);
}

