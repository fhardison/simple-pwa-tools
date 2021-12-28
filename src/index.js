import 'preact/debug';
import './style';
import { h, render, Component } from 'preact';
import { Router } from "preact-router";
import baseroute from './baseroute';
import { useState } from 'preact/hooks';


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
	
	
	render() {
		return (
			<div align="center">
				<nav>
					<ul>
						<li>
							<a href={`${baseroute}/`}>Home</a>
						</li>
						<li>
							<a href={`${baseroute}/FlashcardTool`}>Flashcard Tool</a>
						</li>
					</ul>
				</nav>
				<Router>
					<Home path={`${baseroute}/`} />
					<FlashcardTool path={`${baseroute}/FlashcardTool`} />
				</Router>
			</div>
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
	const [state, setState] = useState({ value: '', newValue: 'Val' });
	
	
	onInput = ev => {
		setState({ value: ev.target.value, newValue: state.newValue});
	}
	
	onSubmit = ev => {
		ev.preventDefault();
		let t = state.value;
		let newVal = t.replace(/\[[^\]]+\]/g, '[ ]');
		setState({value: state.value, newValue: newVal });
		copyToClip(newVal);
	}
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