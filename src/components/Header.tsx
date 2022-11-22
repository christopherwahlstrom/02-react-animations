import { useState } from 'react'
import './Header.css'

const Header = () => {
	const options = ['Matlåda', 'Sushi', 'Rå falukorv','Chili con carne', 'Kebab', 'Pizzarester', 'Morot']
	// Om du använder objekt, använd objektets "id" i stället för index
	const [selectedIndex, setSelectedIndex] = useState<number>(0)

	return (
		<header>
			<nav>
				<span> Logo </span>
				{options.map((option, index) => (
					<button key={option}
						className={index === selectedIndex ? 'selected' : ''}
						onClick={() => setSelectedIndex(index)}
						> {option} </button>
				))}
			</nav>

		</header>
	)
}

export default Header
