window.onload = function () {
	var mytext = null
	function gettext (callback) {
		axios.get('./data/TW_tokens.txt').then((response) => {
			if (response.status === 200){
				var text2 = response.data
				// console.log(text2)
				// mytext = text2.split("\r\n")
				mytext = text2.split("\n")
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
		var simplit = mytext;
		var tradition = mytext;
		const text = document.getElementById("myTextArea").value
		const chinesePunctuation = [
		    ' ','·', '×', '—', '‘', '’', '“', '”', '…',
		    '、', '。', '《', '》', '『', '』', '【', '】',
		    '！', '（', '）', '，', '：', '；', '？'
		]
		// var text = '請注意，重新給參數指定一個對象(物件)，並不會對函數的外部有任何影響，因為這樣只是改變了參數的值，而不是改變了對象的一個屬性值：'
		var token_list = []
		var i=0

	  while (i < text.length) {
	    var findtoken = 0
	    // var j=text.length-i
	    var j=10
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
	    var token = text.slice(i,i+1)
	    if (findtoken!=1){
	    	if (!chinesePunctuation.includes(token)){
	    		token_list.push(token) 
	    	}
	    	i = i+1
	    }
	  }
	  console.log(token_list)
	  token_sentence = token_list.join(" ")
	  document.getElementById('myTextArea').value = token_sentence.replace(/\n /g,"\n")
	console.log(document.getElementById('myTextArea').value)
	}
	gettext()
}
