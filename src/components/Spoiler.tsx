import { useState } from 'react'
import './Spoiler.css'
import Counter from './Counter'

const Spoiler = () => {
	const [reveal, setReveal] = useState<boolean>(false)

	let maybeSecret = <p className={'spoiler' + (reveal ? ' visible' : '')}> Snape kills Dumbledore 
		<Counter />
	</p>

	const buttonText = reveal ? 'Hide spoilers' : 'Reveal spoilers'

	return (
		<section>
			<button onClick={() => setReveal(!reveal)}>
				{buttonText}
			</button>
			{maybeSecret}
		</section>
	)
}

export default Spoiler
