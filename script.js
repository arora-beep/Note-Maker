
let savedNotes = [];

// Function to Save a Note
function createNote() {
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;
    const deadline = document.getElementById('deadlineInput').value;

    if (!title || !content || !deadline) {
        alert('All fields must be filled out!');
        return;
    }

    const newNote = {
        title,
        content,
        deadline,
        id: new Date().getTime()
    };

    savedNotes.push(newNote);
    updateNoteDisplay();
    alert('Note added successfully!');
}

// Function to Show Notes on Screen
function updateNoteDisplay() {
    const noteListElement = document.getElementById('noteList');
    noteListElement.innerHTML = '';

    savedNotes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <p><strong>Deadline:</strong> ${note.deadline}</p>
            <button onclick="removeNote(${note.id})">Delete Note</button>
        `;
        noteListElement.appendChild(noteDiv);
    });
}

// Function to Remove a Note
function removeNote(noteId) {
    savedNotes = savedNotes.filter(note => note.id !== noteId);
    updateNoteDisplay();
    alert('Note deleted successfully!');
}

// Function to Search Notes
function searchNotes() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredNotes = savedNotes.filter(note =>
        note.title.toLowerCase().includes(searchValue) ||
        note.content.toLowerCase().includes(searchValue)
    );

    const noteListElement = document.getElementById('noteList');
    noteListElement.innerHTML = '';

    filteredNotes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <p><strong>Deadline:</strong> ${note.deadline}</p>
            <button onclick="removeNote(${note.id})">Delete Note</button>
        `;
        noteListElement.appendChild(noteDiv);
    });
}

updateNoteDisplay();
