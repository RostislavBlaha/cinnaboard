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
			<h1 style={{ marginBottom: '5px', fontFamily: 'Fira Sans, sans-serif', fontSize: '2.5em', color: 'white' }}>Cinnaboard</h1>
			<div style={{ marginBottom: '30px', color: 'white' }}>My Favorite Cinnabons Worldwide</div>
			<ul style={{
				paddingInlineStart: '0px',
				width: '100%',
				maxWidth: '1000px'
			}}>
				{cinnabons.map((cinnabon, index) => (
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
								fontWeight: 'extra-bold',
								fontSize: '4em',
								color: '#351409',
							}}>
								{index + 1}
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
							flexGrow: 1,  // Add this
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
