import { useState } from 'react'
import './Spoiler.css'


const Spoiler = () => {
	const [reveal, setReveal] = useState<boolean>(false)

	let maybeSecret: JSX.Element | null = null
	if( reveal ) {
		maybeSecret = <p> Snape kills Dumbledore </p>
	}

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
