import { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState<number>(1)
	return (
		<span>
			Likes: {count}
			<button onClick={() => setCount(count + 1)}> +1 </button>
		</span>
	)
}
export default Counter
