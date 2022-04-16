import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
import { omitBy } from "lodash";

export default function CreateEntry(props) {
    const [show, setShow] = useState(false);
    const [compendiumType, setCompendiumType] = useState("Artifacts");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [source, setSource] = useState("");
    const [references, setReferences] = useState("");
    const [location, setLocation] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();

        const newEntry = omitBy({
            compendium_type: compendiumType.toLowerCase(),
            title: title,
            author: author,
            description: description,
            source: source,
            references: references
        });

        axios.post("http://localhost:5000/compendium/add", newEntry)
        .then((res) => console.log(res.data));

        setCompendiumType("");
        setTitle("");
        setAuthor("");
        setDescription("");
        setSource("");
        setReferences("");
        setLocation("");
        setShow(false);
    }


    return (
        <>
        <Button variant="primary" onClick={() => setShow(true)}>Create Entry</Button>
        <Modal show={show}>
        <Modal.Header>
            <Modal.Title>Add Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={onSubmit}>
                <div className="form-group" >
                <label>Type of Compendium:</label>
                <select className="form-control"  onChange={setCompendiumType}>
                    <option>Artifacts</option>
                    <option>Associations</option>
                    <option>Entities</option>
                    <option>Locations</option>
                    <option>People</option>
                    <option>Texts</option>
                </select>
                </div>
                <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Source:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={source}
                        onChange={e => setSource(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>References:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={references}
                        onChange={e => setReferences(e.target.value)}
                    />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={onSubmit} style={{color: '#F4F8F5'}}>Save</Button>
            <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
        </Modal.Footer>
        </Modal>
        </>
    );
}