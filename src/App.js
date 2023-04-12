import { BrowserRouter as Router } from 'react-router-dom';
import { Catagories } from './components/Catagories';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<header>
					<h1>Menu Catagories</h1>
				</header>
				<Catagories />
			</div>
		</Router>
	);
}

export default App;
