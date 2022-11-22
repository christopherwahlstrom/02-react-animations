import { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState<number>(1)
	return (
		<div>
			Count: {count}
			<button onClick={() => setCount(count + 1)}> +1 </button>
		</div>
	)
}
export default Counter
