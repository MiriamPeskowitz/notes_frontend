document.addEventListener('DOMContentLoaded', () => {
	// alert('Loaded')
	//because edit buttons are created dynamically, 
	// we can't put event listeners on them directly, 
	// put it on a static element -- the parent ul
	// then delegat it down to children 

	const app = new App();
  	app.attachEventListeners();

	const endPoint = 'http://localhost:3001/posts';
	fetch(endPoint)
		.then(res => res.json())
		.then(json => {
			json.forEach(note => {
				const newNote = new Note(note)
				document.querySelector('#notes-list').innerHTML += newNote.renderListItem();
				
			})
		})
})

