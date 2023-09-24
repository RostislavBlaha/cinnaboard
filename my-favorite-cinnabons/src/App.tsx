import React, {useEffect, useState} from 'react';
import './App.css';
import CinnabonList from './CinnabonList';


type Cinnabon = {
	name: string;
	location: string;
	country: string;
	rating: number;
};

function App() {
	const [cinnabons, setCinnabons] = useState<Cinnabon[]>([]);
	const [countries, setCountries] = useState<string[]>([]);

	useEffect(() => {
		fetch('http://localhost:3000/cinnabons.json')
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok' + response.statusText);
				}
				return response.json();
			})
			.then(data => {
				setCinnabons(data);
				// Set countries using the fetched data instead of the cinnabons state
				const uniqueCountries: string[] = Array.from(new Set(data.map((cinnabon: Cinnabon) => cinnabon.country)));
				setCountries(uniqueCountries);
			})
			.catch(error => console.error('Error fetching the cinnabons data', error));
	}, []);


	return (
		<div className="App">
			<CinnabonList cinnabons={cinnabons} countries={countries}/>
		</div>
	);
}

export default App;