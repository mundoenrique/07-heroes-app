import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/toolHelper';

export default memo(function HeroCard({
	id,
	superhero,
	alter_ego,
	first_appearance,
}) {
	// const imgPath = `/assets/images/${id}.jpg`;

	return (
		<>
			<div className="col">
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<img
								// src={imgPath}
								src={heroImages(`./${id}.jpg`)}
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
								<Link to={`/hero/${id}`} className="btn btn-link">
									Mas...
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
