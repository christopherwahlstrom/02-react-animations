import './App.css'
import Header from './components/Header'
import Spoiler from './components/Spoiler'
import DelayButton from './components/DelayButton'

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
			</main>
		</div>
	)
}

export default App
