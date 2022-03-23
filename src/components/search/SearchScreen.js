import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { getHeroesByName } from '../../helpers/toolHelper';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';

export default function SearchScreen() {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
		heroName: q,
	});

	const { heroName } = formValues;

	const searchedHero = useMemo(() => getHeroesByName(q), [q]);

	const handleSerach = (e) => {
		e.preventDefault();
		navigate(`?q=${heroName}`);
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
						<button className="btn btn-primary mt-2">Buscar...</button>
					</form>
				</div>
				<div className="col-7">
					<h4>resultados</h4>
					<hr />

					{q === '' ? (
						<div className="alert alert-info">Realiza una busqueda</div>
					) : (
						searchedHero.length === 0 && (
							<div className="alert alert-danger">
								No se encontraron resultados para: ({q})
							</div>
						)
					)}
					<div className="col animate__animated animate__fadeInRight">
						{searchedHero.map((hero) => (
							<HeroCard key={hero.id} {...hero} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
