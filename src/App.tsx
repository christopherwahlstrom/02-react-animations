import './App.css'
import Header from './components/Header'
import Spoiler from './components/Spoiler'
import DelayButton from './components/DelayButton'
import EscapingButton from './components/EscapingButton'

function App() {

	return (
		<div className="App">
			<Header />
			<main>
				<h1>Main</h1>
				
				<Spoiler />
				<Spoiler />

				<DelayButton />
				<DelayButton />

				<EscapingButton />
			</main>
		</div>
	)
}

export default App
