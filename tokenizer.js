window.onload = function () {
	var mytext = null
	function gettext (callback) {
		axios.get('./data/TW_tokens.txt').then((response) => {
			if (response.status === 200){
				var text2 = response.data
				mytext = text2.split("\r\n")
			}
		}).then(callback)
	}
	document.getElementById('tokenstart').onclick = function token_text_tradition(){
		// var fs = require("fs");
		// var text2 = fs.readFileSync("/TW_tokens.txt").toString('utf-8');
		// var textByLine = text2.split("\r\n")
		if (mytext === null) {
			gettext(dowork)
		} else {
			dowork()
		}
	}
	function dowork () {
		console.log(mytext)
		var simplit = mytext;
		console.log(simplit.includes("我"))
		var tradition = mytext;
		const text = document.getElementById("tokentext").value
		// var text = '請注意，重新給參數指定一個對象(物件)，並不會對函數的外部有任何影響，因為這樣只是改變了參數的值，而不是改變了對象的一個屬性值：'
		var token_list = []
		var i=0

	  while (i < text.length) {
	    var findtoken = 0
	    var j=text.length-i
	    while (j>=1){
	      var token = text.slice(i, i + (j))
	      /* console.log(token) */
	      if (simplit.includes(token)){
	        token_list.push(token)
	        j=0
	        i=i+token.length
	        findtoken=1
	      }
	      j = j-1
	    }
	    if (findtoken!=1){
	      token_list.push(text.slice(i,i+1))
	      i = i+1
	    }
	  }
	  console.log(token_list)
	  document.getElementById('tokensword').textContent = token_list;
	console.log(document.getElementById('tokensword'))
	}
	gettext()
}
