

<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" href="https:cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3">
	<link rel="stylesheet" type="text/css" href="style.css">
	

</head>
<body>
	<div class="container-fluid">
		<div class="header"></div>
		<input type="checkbox" id="openSidebarMenu">
		<label for="openSidebarMenu" class="sidebarIconToggle">
			<div class="spinner top"></div>
			<div class="spinner middle"></div>
			<div class="spinner bottom"></div>



		</label>
		<div id="sidebarMenu">
			<ul class="menu">
			<li><a href="#">home</a></li>
			<li><a href="#">about</a></li>
			<li><a href="#">about</a></li>
		</ul>
			
	</div>
	<div class="main">
		<h1>purse css</h1>
		<p>jgg</p>
	</div>
	</div>
</html>
*{
	box-sizing: border-box;

}
html, body{
	overflow-x: hidden;
	height: 100%;

}
body{
	font-family: arial, sans-serif;
	background: #fff;
	padding: 0;
	margin: 0;
}
.header{
	background: #ee5253;
	width: 100%;
	height: 10%;
	position: fixed;
	z-index: 10;

}


.main{
	height: 100%;
	margin-top: 60px;
	padding: 10px 50px;
}
#sidebarMenu{
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	width: 250px;
	margin-top: 60px;
	background: #2e86de;
	transform: translateX(-250px);
	transition:transform 250ms ease-in-out
}
.openSidebarMenu:checked ~ #sidebarMenu {
	transform: translateX(0px);

}
.menu{
	list-style: none;
	padding: 0;
	margin: 0;

}
.menu li{
	color: #fff;
	border-bottom: 1px solid rgba(255,255,255,0.10);
}
.menu li {
	color: #fff;
	display: block;
	text-decoration: none;
	text-transform: uppercase;
	padding: 20px;
}
.sidebarIconToggle{
	
	height: 22px;
	width: 22px;
	position: absolute;
	z-index: 20;
	top: 22px;
	left: 15px;
	cursor: pointer;

}
.spinner{
	height: 3px;
	background: #fff;
	transition: all 0.3s;

}
.spinner.middle,
.spinner.bottom{
	margin-top: 3px;

}
#openSidebarMenu:checked ~ .sidebarIconToggle > .spinner.middle{
	opacity: 0px;
}
#openSidebarMenu:checked ~ .sidebarIconToggle > .spinner.top{
	transform: rotate(135deg);
	margin-top: 8px;
}
#openSidebarMenu:checked ~ .sidebarIconToggle > .spinner.bottom: {
	transform: rotate(-135deg);
	margin-top: -9px;
}