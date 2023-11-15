import { useState } from "react";
import "./App.css";

const GroceryList = ({ title }) => {
	const list = ["cucumber", "tomato", "banana", "garlic"];
	return (
		<>
			<h1>{title}</h1>
			<ul>
				{list.map((item) => {
					return <Item>{item}</Item>;
				})}
			</ul>
		</>
	);
};

const Item = ({ children }) => {
	const [complete, setComplete] = useState(false);
	const onCompletion = () => {
		setComplete(!complete);
	};
	const completed = complete ? "item strike" : "item";
	return (
		<li className={completed} onClick={onCompletion}>
			{children}
		</li>
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
