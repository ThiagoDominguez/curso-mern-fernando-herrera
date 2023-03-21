import { useState } from "react";
import Small from "./Small";
import useCounter from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

const Memorize = () => {
	const { counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);

	return (
		<div>
			<h1>
				counter: <Small value={counter} />
			</h1>
			<hr />
			<button className="btn btn-primary" onClick={increment}>
				+1
			</button>
			<button
				className="btn btn-outline-primary ml-3"
				onClick={() => setShow(!show)}
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};

export default Memorize;
