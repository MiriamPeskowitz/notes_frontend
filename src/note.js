class Note {
	// take incoming data from fetch and construct Note object 
	constructor(data) {
		this.id = data.id
		this.title = data.title 
		this.content = data.content
		Note.all.push(this)
	}
	//code to render the item on page, with id
	renderListItem() {
	  return `
			<li>
				<h3>${this.title}
					<button data-id=${this.id}>Edit</button>
				</h3>
			</li>`
	}

	renderUpdateForm() {
		return `
	    <form data-id=${this.id}>
	      <label>Title</label>
	      <p>
	        <input type="text" value="${this.title}" />
	      </p>
	      <label>Content</label>
	      <p>
	        <textarea>${this.content}</textarea>
	      </p>
	      <button type='submit'>Save Note</button>
	    </form>
	  `;
		}

	static findById(id) {
		return this.all.find(note => note.id === id)
	}
}

Note.all = []

// this is the basic gesture, then on index.js, call this, to get it in object form 
// .then(json => {
// 	  json.forEach(note => {
// 		const newNote = new Note(note)
// 			document.querySelector('#notes-list').innerHTML += newNote.renderListItem();

// 			})