import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Image from 'react-bootstrap/Image';

function About() {
	let history = useHistory();
	const [DataRender, setDataRender] = useState([]);
	const [loader, setloader] = useState(true);
	useEffect(() => {
		CallApi();
	}, []);

	function CallApi() {
		axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
			const persons = res.data;
			console.log(JSON.stringify(persons));
			setDataRender(persons);
			setloader(false);
		});
	}

	return (
		<Container style={{alignItems: 'center'}}>
			<div>
				<div style={{height: 100, width: '100%'}} />
				{loader == true ? (
					<>
						<Container style={{width: '50%', paddingTop: 100}}>
							<Loader
								type='Puff'
								color='#00BFFF'
								height={100}
								width={100}
								timeout={3000} //3 secs
							/>
						</Container>
					</>
				) : (
					DataRender.map((dataitem) => (
						<Container
							style={{
								width: '100%',
								paddingBottom: 10,
							}}
						>
							<div>
								<Card style={{width: '18rem'}}>
									<Card.Img variant='top' src={dataitem.url} />
									<Card.Body>
										<Card.Title>{dataitem.title}</Card.Title>
										<Button
											variant='primary'
											onClick={() => {
												history.push('./AboutDetails');
											}}
										>
											Check Details
										</Button>
									</Card.Body>
								</Card>
							</div>
						</Container>
					))
				)}
			</div>
		</Container>
	);
}

export default About;
