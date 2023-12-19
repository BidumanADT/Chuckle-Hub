import { useEffect, useState } from "react";
import { api } from "../utilities";

function EditJokeModal({ modalShow, closeModal, selectedJoke }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(selectedJoke.title);
  const [content, setContent] = useState(selectedJoke.content);

  const handleClose = (e) => {
    e.stopPropagation();
    closeModal();
  };

  useEffect(() => {
    // console.log(selectedJoke, " from useEffect")
    setShow(modalShow);
  }, [modalShow, selectedJoke]);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    // console.log("save changes button clicked");
    // console.log("Title:", title);
    // console.log("Content:", content);
    const payload = {
        title: title,
        content: content,
      };
      try {
        const response = await api.put(`jokes/edit_joke/${selectedJoke.id}/`, payload)
        if (response.status === 204) {
            console.log("Joke edited successfully")
        }
        closeModal();
      } catch (error) {
        console.error("something went wrong with editing the joke: ", error)
      }
  };

  return (
    <div className={modalShow ? "modal-overlay active" : "modal-overlay"}>
      <div className="modal-content">
        <header className="modal-header">
          <h2 className="modal-title">Edit Joke:</h2>
          <button className="close-button" onClick={(e) => handleClose(e)}>
            &times;
          </button>
        </header>
        <main className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <textarea
                id="title"
                rows="2"
                placeholder={selectedJoke.title}
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                rows="3"
                placeholder={selectedJoke.content}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </form>
        </main>
        <footer className="modal-footer">
          <button className="secondary-button" onClick={(e) => handleClose(e)}>
            Close
          </button>
          <button className="primary-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </footer>
      </div>
    </div>
  );
}

export default EditJokeModal;
