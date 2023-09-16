import React from 'react';

type Props = {
	rating: number; // rating between 0 and 10
};

const StarRating: React.FC<Props> = ({ rating }) => {
	// Create an array from 1 to 10
	const stars = Array.from({ length: 10 }, (_, index) => index + 1);

	return (
		<div style={{ display: 'flex' }}>
			{stars.map((star) => {
				let starType;

				if (rating >= star) {
					starType = (
						<svg key={star} width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z" fill="#351409"/>
						</svg>
					);
				} else if (rating >= star - 0.5) {
					starType = (
						<svg key={star} width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.9999 0L17.1431 9.67376H27.3147L19.0857 15.6525L22.2289 25.3262L13.9999 19.3475V0Z" fill="#CCBCB6"/>
							<path d="M13.9999 0V19.3475L5.77098 25.3262L8.91417 15.6525L0.685181 9.67376H10.8568L13.9999 0Z" fill="#351409"/>
						</svg>
					);
				} else {
					starType = (
						<svg key={star} width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z" fill="#CCBCB6"/>
						</svg>
					);
				}

				return starType;
			})}
		</div>
	);
};

export default StarRating;
