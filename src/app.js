class App {
  constructor() {
  	this.adapter = new Adapter()
  }

  attachEventListeners() {
    document.querySelector('#notes-list').addEventListener('click', e => {
      // console.log('clicked');
      const id = parseInt(e.target.dataset.id)
      const note = Note.findById(id)
      // console.log(note)
     document.querySelector('#update').innerHTML = note.renderUpdateForm()
 	})


	// grab updated title and content and send to db
    document.querySelector('#update').addEventListener('submit', e => {
		e.preventDefault()
		const id = parseInt(e.target.dataset.id)
		const note = Note.findById(id)
		const title = e.target.querySelector('input').value
        const content = e.target.querySelector('textarea').value
		const jsonBody = {title, content}
        
        // backend responds with the updated note instance represented as JSON
        this.adapter.updateNote(note.id, jsonBody)
        .then(updatedNote => console.log(updatedNote))
     })	    
  }	 
}