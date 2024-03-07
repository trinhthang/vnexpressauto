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

const pageComments = 5;


function showMoreComment() {
	for(var pageComment = 0; i < pageComments; pageComment++) {
	
		console.log('load more comment!!!!!!!!');
		var showMoreComment = document.getElementById("show_more_coment");
		console.log(showMoreComment);
		
		if (showMoreComment) {
			showMoreComment.scrollIntoView();
			showMoreComment.click();
			
//			setTimeout(showMoreComment, 1000);
		} else {
			console.log('no more comment!!!!!!!!!')
			var likes = document.getElementsByClassName("link_thich control-action");
			var count = likes.length;
			for(var i = 0; i < count; i++) {
				var el = likes[i];
				if (el.getAttribute('data-name') != 'like') {
					el.click();
				}
			}
			
			break;
		}
	} 
}

setTimeout(function() {
//	showMoreComment();
}, 5000);



