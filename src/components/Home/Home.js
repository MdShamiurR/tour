import React from 'react';
import './Home.css';
import { Card, Col, Container, Row } from 'react-bootstrap';


import filling from '../../Logo/dental-filling.jpg';
import dentures from '../../Logo/dentures.jpg';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';

const Home = () => {
	return (
		<div className="container">

			{/* Banner................................ */}

			<Banner />
			<br /><br />

			<Container>

				<h3>Recommended travel to do in Bangladesh</h3>
				<br /> <br />

				<div className="row p-5 panda-bg-info bg-gradient d-flex align-items-center">

					<div className="col-lg-6">
						<ul>
							<h4> Sundarban Day Tour from Khulna</h4>
							<img width="500px" src="https://media-eng.dhakatribune.com/uploads/2020/09/9-new-project-1599296482873.jpg" alt="" />
							<p>Cox's Bazar (/ˌkɒksɪz bəˈzɑː/; Bengali: কক্সবাজার, romanized: Kaksabājāra; pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km (93 mi) south of the city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as "yellow flower". Another old name was "Palongkee". It has the longest sea beach in the world.</p>
						</ul>
						<br />


					</div>

					<div className="col-lg-6">
						<ul>
							<h4> Cox’s Bazar Sea Beach, Inani Beach Tour</h4>
							<img width="500px" height="263px" src="https://media-cdn.tripadvisor.com/media/photo-s/0d/43/bf/0b/cox-s-bazaar-sea-beach.jpg" alt="" />
							<p>Following a hotel pick-up, your first stop will be Cox's Bazar Beach, claimed to be the world’s longest natural sandy sea beach. It is an unbroken 125 kilometer sandy sea beach with a gentle slope. It is a good place for sea bathing. This is one of the most visited tourist destinations in Bangladesh. Explore Ramu and feed your cultural mind with sights of monasteries and pagodas containing images of Buddha in gold, bronze and many other materials. You can also buy handicrafts here. </p>


						</ul>

					</div>
				</div>

			</Container>
			<Container>

				<Services />

			</Container>

			<Container className="header">
				<br /><br />
				<h3 className="text-success">Explore our top destinations</h3>
				<br /><br />

				<a class="link-button" target="_blank" href="https://open.spotify.com/">New York City</a>
				<a class="link-button" target="_blank" href="https://open.spotify.com/">Windies</a>
				<a class="link-button" target="_blank" href="https://open.spotify.com/">Las Vegas</a>
				<a class="link-button" target="_blank" href="https://open.spotify.com/">Miami</a>
				<a class="link-button" target="_blank" href="https://open.spotify.com/">Atlanta</a>
				<a class="link-button" target="_blank" href="https://open.spotify.com/"> Niagara</a>
			</Container>

			{/* card */}

			<Container>

				<Container>
					<Row className="m-5 g-5">

						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src='https://cdn.getyourguide.com/tf/assets/static/home/gyg-app-logo.svg' />
								<Card.Body>
									<Card.Title>Your ultimate travel companion </Card.Title>
									<Card.Text>
										<p>Book in advance or last-minute with GetYourGuide. Receive instant confirmation. Access your booking info offline. <br /> <h5>Download the app</h5>
										</p>

									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src='https://cdn.getyourguide.com/tf/assets/static/home/mobile.png' />
								<Card.Body>
									<Card.Title>GetYourGuide</Card.Title>
									<Card.Text>

										<button className="btn btn-warning">Get in Google play</button>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>

				</Container>

			</Container>
		</div>

	);
};

export default Home;
