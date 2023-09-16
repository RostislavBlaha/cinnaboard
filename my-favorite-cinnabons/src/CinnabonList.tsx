import React from 'react';

type Cinnabon = {
	name: string;
	location: string;
};

type Props = {
	cinnabons: Cinnabon[];
};

const CinnabonList: React.FC<Props> = ({ cinnabons }) => {
	return (
		<div>
			<h1>My Favorite Cinnabons Worldwide</h1>
			<ul>
				{cinnabons.map((cinnabon, index) => (
					<li key={index}>
						{cinnabon.name} - {cinnabon.location}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CinnabonList;