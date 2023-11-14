import { useState } from "react";
import "./App.css";

const Item = ({ children }) => {
	const [complete, setOnComplete] = useState(false);
	const onCompletion = () => {
		setOnComplete(!complete);
	};
	const completed = complete ? "item strike" : "item";
	return (
		<li className={completed} onClick={onCompletion}>
			{children}
		</li>
	);
};

const GroceryList = ({ title }) => {
	return (
		<>
			<h1>{title}</h1>
			<ul>
				<Item>Cheese</Item>
				<Item>Cucumber</Item>
				<Item>Tomato</Item>
			</ul>
		</>
	);
};

function App() {
	return (
		<>
			<GroceryList title={"Groceries"} />
		</>
	);
}

export default App;
