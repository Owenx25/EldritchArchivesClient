import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
import { omitBy } from "lodash";


export default function CreateSource(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [show, setShow] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const newSource = omitBy({
            title: title,
            author: author,
            publishYear: publishYear
        });

        axios.post("http://localhost:5000/source/add", newSource)
        .then((res) => console.log(res.data));

        setTitle("");
        setAuthor("");
        setPublishYear("");
        setShow(false);
    }

    return (
        <>
        <Button variant="primary" onClick={() => setShow(true)}>Create Source</Button>
        <Modal show={show}>
        <Modal.Header>
            <Modal.Title>Add Source</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <label>Title:</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Pubish Year</label>
                    <input
                        type="text"
                        className="form-control"
                        value={publishYear}
                        onChange={e => setPublishYear(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label style={{paddingRight: '5px'}}>Collection</label>
                    <label style={{fontSize: 10, color: 'red'}}>(not required)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={publishYear}
                        onChange={e => setPublishYear(e.target.value)}
                    />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={onSubmit}>Save</Button>
            <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}