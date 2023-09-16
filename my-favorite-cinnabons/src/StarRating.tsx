import React from 'react';

type Props = {
	rating: number;
};

const StarRating: React.FC<Props> = ({ rating }) => {
	let stars = [];

	// Add full stars
	for (let i = 0; i < Math.floor(rating); i++) {
		stars.push(<span key={i}>⭐</span>);
	}

	// Add a half star if needed
	if (rating % 1 >= 0.5) {
		stars.push(<span key={'half'}>⭐️</span>);
	}

	return (
		<div style={{ fontSize: '1.2em', color: 'white' }}>
			{stars}
		</div>
	);
};

export default StarRating;
