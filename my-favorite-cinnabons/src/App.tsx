import React from 'react';
import './App.css';
import CinnabonList from './CinnabonList';

const cinnabons = [
	{ name: 'Brauð & co.', location: '16 Frakkastígur, 101 Reykjavík', country: 'Iceland', rating: 10 },
	{ name: 'Café Pilot', location: 'Dačického 1225/8, 140 00 Praha 4-Nusle', country: 'Czechia', rating: 8 },
	{ name: 'Eaternia', location: 'Nádražní 349/3, 150 00 Praha 5-Smíchov', country: 'Czechia', rating: 8 },
	{ name: 'U Kalendů (Babka)', location: 'Rašínovo nábř. 383/58, 128 00 Nové Město', country: 'Czechia', rating: 7 },
	{ name: 'Tady a teď', location: 'Na Bělidle 31, 150 00 Praha 5-Smíchov', country: 'Czechia', rating: 6 },
	{ name: 'Artic Bakehouse', location: 'Štefánikova 31, 150 00 Praha 5-Smíchov', country: 'Czechia', rating: 4.5 },
	{ name: 'Delmart', location: 'Nádražní 344, 150 00 Praha 5-Anděl', country: 'Czechia', rating: 3 }
];


function App() {
	return (
		<div className="App">
			<CinnabonList cinnabons={cinnabons} />
		</div>
	);
}

export default App;