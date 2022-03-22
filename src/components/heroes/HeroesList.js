import { getHeroesByPublisher } from '../../helpers/toolHelper';
import HeroCard from './HeroCard';

export default function HeroesList({ publisher }) {
	const heroes = getHeroesByPublisher(publisher);
	return (
		<>
			<hr />
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</>
	);
}