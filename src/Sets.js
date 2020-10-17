import React, { Fragment } from "react";
import { Link, Redirect } from "@reach/router";
import "./sets.scss";

export default function Sets() {

	function handleClick(event) {
		return <Redirect to={"/sets/" + event.target.dataset.id} />
	}

	return (
		<Fragment>
			<article class="setItem" onClick={handleClick} data-id="1">
				<Link to="/sets/1">Classic Bench Press</Link>
			</article>
			<article class="setItem" onClick={handleClick} data-id="2">
				<Link to="/sets/2">Free-weight Bench Press</Link>
			</article>
			<article class="setItem">
				<Link to="/sets/3">One-handed free-weight back row</Link>
			</article>
		</Fragment>
	);
}
