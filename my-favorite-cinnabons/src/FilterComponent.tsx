import React, { useState, useEffect } from 'react';

type FilterProps = {
	countries: string[];
	selectedCountries: string[];
	onSelectCountry: (country: string) => void;
	toggleOrder: () => void;
};

const FilterComponent: React.FC<FilterProps> = ({ countries, selectedCountries, onSelectCountry, toggleOrder }) => {
	const [displayCountries, setDisplayCountries] = useState<string[]>([]);
	const [isLeastToMost, setIsLeastToMost] = useState(false);
	const [playAnimation, setPlayAnimation] = useState(false);

	useEffect(() => {
		setDisplayCountries(countries);
	}, [countries]);

	return (
		<div style={{
			fontFamily: 'Fira Sans, sans-serif',
			fontSize: '1.5em',
			color: 'white'
		}}>
			<span>Cinnabons in </span>
			{displayCountries.map((country, index) => (
				<span key={index}>
					<span
						className={selectedCountries.includes(country) ? 'cross-out' : 'selected cross-out'}
						onClick={() => onSelectCountry(country)}
					>
						<strong>{country}</strong>
					</span>
					{index < displayCountries.length - 2 && ', '}
					{index === displayCountries.length - 2 && ' and '}
				</span>
			))}
			<span> ordered from my </span>
			<span
				className={`switch-order ${playAnimation? 'switched' : ''}`}
				onClick={() => {
					setIsLeastToMost(!isLeastToMost);
					setPlayAnimation(false);
					toggleOrder();
				}}
				onMouseEnter={() => setPlayAnimation(true)}
				onMouseLeave={() => setPlayAnimation(false)}
			>
				<strong className={playAnimation ? 'order-word' : ''} id="most">{isLeastToMost ? 'least' : 'most'}</strong>
				<span>{' to '}</span>
				<strong className={playAnimation ? 'order-word' : ''} id="least">{isLeastToMost ? 'most' : 'least'}</strong>
				<span>{' favorite'}</span>
			</span>
		</div>
	);
};

export default FilterComponent;
