const cl =console.log ;

const countryContainer = document.getElementById("countryContainer");



let result = countries.map(country =>{
	return`
				<div class ="col-3 col-offset-1 mb-4">
							<div class ="card ">
								<figure class="countryCard">
									<img class="flagImg"
									src="${country.flag}" alt="" title="">
									<figcaption>
										<div class="countryName">
											<h4 class="text-center">${country.name}</h4>
										</div>
										<div class="countryInfo">
											<ul class="list-group">
												<li> <strong>Capital</strong>: ${country.capital} </li>
												<li> <strong>Languages</strong>: ${country.languages} </li>
												<li> <strong>Population</strong>: ${country.population}</li>
											</ul>
										
										</div>
									</figcaption>
								
								</figure>
							
							</div>
						
						</div>
	
	`
}).join('');
cl(result);

countryContainer.innerHTML= result;