import { getHeroesByPublisher } from '../../helpers/toolHelper';

export default function HeroesList({ publisher }) {
	const heroes = getHeroesByPublisher(publisher);
	return (
		<>
			<h1>Heores List - {publisher}</h1>
			<ul>
				{heroes.map((hero) => (
					<li key={hero.id}>{hero.superhero}</li>
				))}
			</ul>
		</>
	);
}
