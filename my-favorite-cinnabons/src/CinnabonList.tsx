import React, { useState } from 'react';
import StarRating from './StarRating';
import FilterComponent from './FilterComponent';

type Cinnabon = {
	name: string;
	location: string;
	country: string;
	rating: number;
};

type Props = {
	cinnabons: Cinnabon[];
};

const CinnabonList: React.FC<Props> = ({ cinnabons }) => {
	const [selectedCountries, setSelectedCountries] = useState<string[]>(['Czechia', 'Iceland']);
	const [order, setOrder] = useState<'most' | 'least'>('most');
	const countries = ['Czechia', 'Iceland'];

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
			justifyContent: 'center',
			minHeight: '100vh',
			backgroundColor: '#000'
		}}>
			<h1 style={{ marginBottom: '5px', fontFamily: 'Fira Sans, sans-serif', fontSize: '2.5em', color: 'white' }}>Cinnaboard</h1>
			<FilterComponent
				countries={countries}
				selectedCountries={selectedCountries}
				order={order}
				onSelectCountry={onSelectCountry}
				toggleOrder={toggleOrder}
			/>
			<ul style={{
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
		</div>
	);
};

export default CinnabonList;
