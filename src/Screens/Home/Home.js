import React from 'react';
// import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

function Home() {
	let history = useHistory();
	return (
		<>
			<div>
				<Container style={{paddingTop: 30}}>
					<Row>
						<Col style={{height: 500}} xs='6'>
							<Image src='https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
						</Col>
						<Col style={{height: 500}} xs='6'>
							<h1 style={{paddingBottom: 30}}>Internship Week 1</h1>
							<h2>
								Task for React.Js create a React app to display content in the
								form of cards.
							</h2>
							<p style={{paddingTop: 30}}>
								use this( https://jsonplaceholder.typicode.com/photos ) Rest Api
								to fetch data Use React Router to redirect to specific card
								details page when clicked which will include (Photo and Title)
								Notes: Website should be responsive Apply good styles(it would
								be plus if you use tailwind or bootstrap)
							</p>
							<p style={{paddingTop: 30}}>
								This Task is Completed By Vishwas Gupta Using BootStrap and
								React.
							</p>
							<div style={{paddingTop: 54}}>
								<Button
									style={{padding: 20}}
									variant='primary'
									onClick={() => {
										history.push('../About/About');
									}}
								>
									Click here to check the Task
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Home;
