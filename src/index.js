import './style';
import { h, render, Component } from 'preact';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
  } from "react-router-dom";


function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  if (typeof window !== "undefined") { 
	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
  }
};

class App extends Component {
	state = { value: '', newValue: 'Val' }
	
	
	onInput = ev => {
		this.setState({ value: ev.target.value});
	}
	
	onSubmit = ev => {
		ev.preventDefault();
		let t = this.state.value;
		let newVal = t.replace(/\[[^\]]+\]/g, '[ ]');
		this.setState({newValue: newVal });
		copyToClip(newVal);
	}
	
	render() {
		return (
			<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/flashcardTool">Flashcard Tool</Link>
					</li>
				</ul>
				<Switch>
					<Route path="/flashcardTool">
						<FlashcardTool />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>

		</Router>
		);
	}
}

function Home() {
	return (
		<div align="center">
			<h2>Simple PWA tools</h2>
			<p>A collection of simple tools written as PWAs.</p>


		</div>
	);
}

function FlashcardTool() {
	return (
		<div align="center">
			<h1>Flashcard maker</h1>
			<form onSubmit={this.onSubmit}>
				<input type="text" value={this.state.value} onInput={this.onInput} />
				<button type="submit" margin-left="8px;">Set</button>
			</form>
			<p><span type="text" class="newlabel">{this.state.newValue}</span></p>
		</div>
		);
}

if (typeof window !== "undefined") {
	render(<App />, document.body);
}