<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<style>
	div[contentEditable=true]:empty:not(:focus):before {
        	content:attr(data-ph);
        	color: #B3B3B3;
	}
</style>

	<div data-ph="Введите текст сообщения..." class = "" style = "padding: 10px;border: 1px solid red;width: 300px; min-height: 200px;" contenteditable="true"></div>


	<script>

	let myDiv = document.querySelector('div')
		
    myDiv.onkeypress = function (e) {

    	if (e.keyCode == 13 && !e.shiftKey) {

	        e.preventDefault()
	        e.stopPropagation()

let a = $('div').text()

a.replace('<br>','xxx')

a = preg_replace("/&#?[a-z0-9]+;/i","",a);

console.log(a)

console.log(a.replace('<br>','xxx'))
    	}
	    else if (e.keyCode == 13 && e.shiftKey) {

	        e.preventDefault()
	        e.stopPropagation()
	        
	        document.execCommand('insertLineBreak')
	    }
	}

	</script>

	
</body>
</html>