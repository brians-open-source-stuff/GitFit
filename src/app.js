import React, { Fragment } from "react";
import { Router, Link, Redirect } from "@reach/router";
import { render } from "react-dom";
import Sets from "./Sets";
import "./style.scss";


function Recent() {
	return (
		<h1>Recent</h1>
	);
}
function Timer() {
	return (
		<h1>Timer</h1>
	);
}

function App() {
	return (
		<Fragment>
			<header>
				<img src="https://via.placeholder.com/100/100" class="profileImage" /> @BrianEmilius
			</header>

			<main>
				<Router>
					<Redirect from="/" to="sets" />
					<Sets path="sets" />
					<Sets path="sets/:id" />
					<Recent path="recent" />
					<Timer path="timer" />
				</Router>
			</main>

			<nav class="drawer">
				<ul class="drawer__iconList">
					<li>
						<Link to="/sets">Sets</Link>
					</li>
					<li>
						<Link to="recent">Recent</Link>
					</li>
					<li>
						<Link to="timer">Timer</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
}

render(<App />, document.getElementById("root"));
