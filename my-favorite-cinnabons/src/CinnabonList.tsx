import React from 'react';
import StarRating from './StarRating'; // Import the StarRating component

type Cinnabon = {
	name: string;
	location: string;
	rating: number;
};

type Props = {
	cinnabons: Cinnabon[];
};

const CinnabonList: React.FC<Props> = ({ cinnabons }) => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			minHeight: '100vh',
			backgroundColor: '#000'
		}}>
			<h1 style={{ marginBottom: '5px', fontSize: '2.5em', color: 'white' }}>Cinnaboard</h1>
			<div style={{ marginBottom: '30px', color: 'white' }}>My Favorite Cinnabons Worldwide</div>
			<ul style={{
				borderRadius: '12px',
				backgroundColor: 'rgba(255, 255, 255, 0.2)',
				border: '1px solid #ccc',
				paddingInlineStart: '0px',
				width: '100%',
				maxWidth: '1000px'
			}}>
				{cinnabons.map((cinnabon, index) => (
					<li key={index} style={{
						padding: '30px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						borderBottom: index === cinnabons.length - 1 ? 'none' : '1px solid #ccc'
					}}>
						<div>
							<a href={`https://www.google.com/maps/search/?api=1&query=${cinnabon.location}`} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
								<div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{cinnabon.name}</div>
								<div>
									{cinnabon.location}
								</div>
							</a>
						</div>
						<StarRating rating={cinnabon.rating} /> {/* Use the StarRating component */}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CinnabonList;
