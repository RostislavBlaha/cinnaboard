import React, {useEffect, useState} from 'react';
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
	countries: string[];
};

const CinnabonList: React.FC<Props> = ({ cinnabons,countries }) => {
	const [selectedCountries, setSelectedCountries] = useState<string[]>(countries);
	const [order, setOrder] = useState<'most' | 'least'>('most');
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);


	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	useEffect(() =>{
		if (countries.length > 0) {
			setSelectedCountries(countries);
		}
	}, [countries])


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
		<>
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
						flexDirection: windowWidth <= 1000 ? 'column' : 'row',
						fontFamily: 'Fira Sans, sans-serif',
						justifyContent: 'space-between',
						alignItems: 'stretch',
						backgroundColor: '#F0ECEB',
						marginBottom: '2px',
						padding: windowWidth <= 1000 ? '32px':'0px',
					}}>
						<div style={{
							backgroundColor: windowWidth <= 1000 ? '' : 'white',
							width: windowWidth <= 1000 ? '100%' : '120px',
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
							padding: windowWidth <= 1000 ? '0px':'32px',
							backgroundColor: '#F0ECEB',
							flexGrow: 9,
							textAlign: 'left',
						}}>

							<a href={`https://www.google.com/maps/search/?api=1&query=${cinnabon.location}`} target="_blank" rel="noopener noreferrer" style={{
								color: '#351409',
								textDecoration: 'none',
								textAlign: 	windowWidth <= 1000 ? 'center' : 'left',
							}}>
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
							justifyContent: windowWidth <= 1000 ? 'center' : 'flex-end',
							paddingBottom: windowWidth <= 1000 ? '32px' : '0px',
						}}>
							<StarRating rating={cinnabon.rating} />
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default CinnabonList;
