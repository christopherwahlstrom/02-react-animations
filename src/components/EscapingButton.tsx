import anime, { AnimeInstance } from 'animejs'

const EscapingButton = () => {
	let animation: AnimeInstance | null = null

	const handleClick = () => {
		// Är det första gången man klickar på knappen?
		if( animation === null ) {
			animation = anime({
				targets: '.escaping button',
				translateX: '50vw',
				duration: 3000
			})
		} else {
			animation.restart()
		}
	}

	return (
		<div className="escaping">
			<button onClick={handleClick}> Watch me go </button>
		</div>
	)
}

export default EscapingButton
