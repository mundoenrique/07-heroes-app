import { Navigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../helpers/toolHelper';

export default function HeroScreen() {
	const { heroId } = useParams();
	const hero = getHeroesById(heroId);

	if (!hero) {
		<Navigate to="/" />;
	}

	return (
		<>
			<h1>HeroScreen</h1>
			<p>{hero.superhero}</p>
		</>
	);
}
