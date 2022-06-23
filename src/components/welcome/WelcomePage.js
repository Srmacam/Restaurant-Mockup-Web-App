import React from 'react';
import {Link} from 'react-router';

class WelcomePage extends React.Component {

    render() {
        return (
            <div className="welWrapper">
                <div className="welcome">
                    <h1 className="message">Would you like to dine here today?</h1>
                </div>	
                <div className="welButton">
                    <Link to="home" className="button1">YES</Link>
                </div>
            </div>
        );
    }
}

export default WelcomePage;


/*<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name ="viewport" content = "width=device-width,initial-scale=1.0:">
	<link rel="stylesheet" type="text/css" href="./css/welcomepage.css">
	<title>Welcome Page</title>

<script>

	var tables;

	function loadPage() {
  		let storedTables = localStorage.getItem("tables");
  		if (storedTables !== null) tables = JSON.parse(storedTables);
		else {
			tables = [false, false, false, false, false, false];
			localStorage.setItem("tables", JSON.stringify(tables));
		}
	}

	function login() {
		if (sessionStorage.getItem("sessID") !== null) {
			alert("You are already seated. Redirecting to the home page...")
			window.location = "SecondPage.html";
			return;
		}

		var i = 0;
  		for (; i < tables.length; i++) {
			if (tables[i] === false) {
				tables[i] = true;
				break;
			}
		}

		// All tables are filled
		if (i === tables.length) {
			alert("Sorry, there are no tables available.");
		}

		else {
			sessionStorage.setItem("sessID", JSON.stringify(i));
			localStorage.setItem("tables", JSON.stringify(tables));
			window.location = "SecondPage.html";
		}
	}

window.onload = loadPage;

</script>

</head>
<body>
	<div class="wrapper">
		<div class="welcome">
			<h1 class = "message">Would you like to dine here today?</h1>
		</div>	
		<div class="button">
			<a href="javascript:login()" class="button1">YES</a>
		</div>
	</div>
</body>
</html>
*/