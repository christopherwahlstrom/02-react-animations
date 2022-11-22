import './App.css'
import Header from './components/Header'
import Spoiler from './components/Spoiler'

function App() {

	return (
		<div className="App">
			<Header />
			<main>
				<h1>Main</h1>
				
				<Spoiler />
				<Spoiler />
			</main>
		</div>
	)
}

export default App
