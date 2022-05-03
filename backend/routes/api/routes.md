Notebooks:

//get a user's all notebooks 
GET /users/:userId/notebooks    collection of [notebook1, notebook2]

//post a notebook
POST /users/:userId/notebooks

//get a notebook (info)
GET /notebooks/:notebookId

//update a notebook (info)
PUT /notebooks/:notebookId

//delete a notebook
DELETE /notebooks/:notebookId


Notes:
//get all notes of a notebook
GET  /notebooks/:notebookId/notes

//post a note of a notebook
POST  /notebooks/:notebookId/notes

//get a specific note
GET notes/:noteId

//update a note
PUT  /notes/:noteId

//delete a note
DELETE  /notes/:noteId
