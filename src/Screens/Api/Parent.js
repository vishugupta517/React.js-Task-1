import axios from 'axios';
import React from 'react';

function Parent() {
	const [notes, setnotes] = useState('');

	const url = '';

	useEffect(() => {
		getAllNotes();
	}, []);

    
	const getAllNotes = () => {
		axios
			.get(`${url}notes`)
			.then((response) => {
				const allNotes = response.data.notes.allNotes;
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	return <NoteTimeline notes={notes} />;
}

export default Parent;
