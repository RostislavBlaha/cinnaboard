import React, {useEffect, useState} from 'react';
import './App.css';
import CinnabonList from './CinnabonList';
import Loader from "./Loader";
import bottomLeftCinnabon from "./bottom-left-cinnabon.png";
import bottomRightCinnabon from "./bottom-right-cinnabon.png";


type Cinnabon = {
	name: string;
	location: string;
	country: string;
	rating: number;
};

function App() {
	const [cinnabons, setCinnabons] = useState<Cinnabon[]>([]);
	const [countries, setCountries] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);

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
				const uniqueCountries: string[] = Array.from(new Set(data.map((cinnabon: Cinnabon) => cinnabon.country)));
				setCountries(uniqueCountries);
				setLoading(false);
			})
			.catch(error => console.error('Error fetching the cinnabons data', error));
	}, []);


	return (
		<div className="App">
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: '100vh',
				backgroundColor: '#0A0605',
				backgroundImage: `url(${bottomLeftCinnabon}), url(${bottomRightCinnabon})`,
				backgroundRepeat: 'no-repeat, no-repeat',
				backgroundPosition: 'left bottom, right bottom',
				backgroundAttachment: 'fixed',
			}}>
				<h1 style={{ marginBottom: '16px', paddingTop: '48px', fontFamily: 'Lemon, sans-serif', fontSize: '3em', color: 'white' }}>Cinnaboard</h1>
			{loading && <Loader/>}
			<CinnabonList cinnabons={cinnabons} countries={countries}/>
				<div
					style={{
						paddingTop: "16px",
						paddingBottom: "32px",
						fontSize: "1em",
						fontFamily: 'Fira Sans, sans-serif',
						color: "white",
					}}
				>
					designed and developed by{" "}
					<a
						href="https://rostislavblaha.cz"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold'}}
					>
						Rostislav Blaha
					</a>
				</div>
			</div>

		</div>
	);
}

export default App;