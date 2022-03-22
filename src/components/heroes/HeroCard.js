import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroCard({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) {
	const imgPath = `/assets/images/${id}.jpg`;

	return (
		<>
			<div className="col">
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={imgPath}
								className="img-fluid rounded-start"
								alt={superhero}
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{superhero}</h5>
								<p className="card-text">{alter_ego}</p>
								<p className="card-text">
									<small className="text-muted">{first_appearance}</small>
								</p>
								<Link
									to={`/heroes/${id}`}
									className="pt-5 float-end btn btn-link"
								>
									Mas...
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
