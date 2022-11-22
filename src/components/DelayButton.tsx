// En sekund efter klick ska knappen animeras med en transform
// Använd useRef och setTimeout för att ändra dom-elementet direkt
import { useRef } from 'react'
import './DelayButton.css'

const DelayButton = () => {
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	const handleClick = () => {
		setTimeout(() => {
			if( !buttonRef.current )
				return
			let domElement = buttonRef.current
			domElement.classList.toggle('start')
		}, 1000)
	}

	return (
		<button
			ref={buttonRef}
			onClick={handleClick}
			className="delayed"
			> Delayed animation </button>
	)
}

export default DelayButton
