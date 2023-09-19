import React, { useState } from 'react';
import StarRating from './StarRating';
import FilterComponent from './FilterComponent';
import bottomLeftCinnabon from './bottom-left-cinnabon.png';
import bottomRightCinnabon from './bottom-right-cinnabon.png';

type Cinnabon = {
	name: string;
	location: string;
	country: string;
	rating: number;
};

type Props = {
	cinnabons: Cinnabon[];
	countries: string[];
};

const CinnabonList: React.FC<Props> = ({ cinnabons,countries }) => {
	const [selectedCountries, setSelectedCountries] = useState<string[]>(countries);
	const [order, setOrder] = useState<'most' | 'least'>('most');

	const onSelectCountry = (country: string) => {
		setSelectedCountries(prev => prev.includes(country) ? prev.filter(c => c !== country) : [...prev, country]);
	};

	const toggleOrder = () => {
		setOrder(prev => prev === 'most' ? 'least' : 'most');
	};


	const filteredCinnabons = [...cinnabons]
		.filter(c => selectedCountries.includes(c.country))
		.sort((a, b) => order === 'most' ? b.rating - a.rating : a.rating - b.rating);




	return (
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
			<FilterComponent
				countries={countries}
				selectedCountries={selectedCountries}
				onSelectCountry={onSelectCountry}
				toggleOrder={toggleOrder}
			/>
			<ul style={{
				paddingTop: '48px',
				paddingInlineStart: '0px',
				width: '100%',
				maxWidth: '1000px'
			}}>
				{filteredCinnabons.map((cinnabon, index) => (
					<li key={index} style={{
						display: 'flex',
						fontFamily: 'Fira Sans, sans-serif',
						justifyContent: 'space-between',
						alignItems: 'stretch',
						backgroundColor: '#F0ECEB',
						marginBottom: '2px',
					}}>
						<div style={{
							backgroundColor: 'white',
							width: '120px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
							<div style={{
								fontFamily: 'Fira Sans, sans-serif',
								fontWeight: '900',
								fontSize: '4em',
								color: '#351409',
							}}>
								{cinnabons.indexOf(cinnabon) + 1}
							</div>
						</div>

						<div style={{
							padding: '32px',
							backgroundColor: '#F0ECEB',
							flexGrow: 9,
							textAlign: 'left',
						}}>

							<a href={`https://www.google.com/maps/search/?api=1&query=${cinnabon.location}`} target="_blank" rel="noopener noreferrer" style={{ color: '#351409', textDecoration: 'none' }}>
								<div style={{ fontSize: '1.5em', fontWeight: 'bold', paddingBottom:'10px' }}>{cinnabon.name}</div>
								<div>
									{cinnabon.location}
								</div>
							</a>
						</div>
						<div style={{
							display: 'flex',
							alignItems: 'center',
							paddingRight: '20px',
							flexGrow: 1,
						}}>
							<StarRating rating={cinnabon.rating} /> {/* Use the StarRating component */}
						</div>
					</li>
				))}
			</ul>
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
	);
};

export default CinnabonList;
