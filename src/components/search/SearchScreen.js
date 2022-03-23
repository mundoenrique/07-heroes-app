import { getHeroesByName } from '../../helpers/toolHelper';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';

export default function SearchScreen() {
	const [formValues, handleInputChange, reset] = useForm({
		heroName: '',
	});

	const { heroName } = formValues;

	const searchedHero = getHeroesByName();
	console.log(searchedHero);

	const handleSerach = (e) => {
		e.preventDefault();

		reset();
	};

	return (
		<>
			<h1>Busca un heroe</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Indica un heroe</h4>
					<hr />
					<form onSubmit={handleSerach}>
						<input
							type="text"
							placeholder="Heroe"
							className="form-control"
							name="heroName"
							autoComplete="off"
							value={heroName}
							onChange={handleInputChange}
						/>
						<button className="btn btn-primary mt-1">Buscar...</button>
					</form>
				</div>
				<div className="col-7 animate__animated animate__fadeInRight">
					<h4>resultados</h4>
					{searchedHero.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
}
