import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext';

const AddContact = () => {
    const { store, actions } = useContext(Context);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    function handleCreate(e) {
        e.preventDefault();
        actions.createContact(contact);
    }

    return (
        <>
            <div className='contactHeader'>
                <span className='hearts'> ♥ ♥ ♥</span>
                <span className='close' style={{ float: "right" }}> X </span>
            </div>
            <h1 className='text-center'>Add a New Contact</h1>
            <form>
                <div className="form-group" onSubmit={handleCreate}>
                    <h5>Full Name</h5>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Full Name"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    />
                </div>
                <div class="form-group">
                    <h5>Email</h5>
                    <input type="email" class="form-control" value={contact.email} id="contactmail" placeholder="Enter Email" onChange={e => setContact({ ...contact, email: e.target.value })} />
                </div>
                <div className="form-group">
                    <h5>Phone</h5>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter Phone"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    />
                </div>
                <div class="form-group">
                    <h5>Address</h5>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter Address" value={contact.address} onChange={e => setContact({ ...contact, address: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn ">Save</button>
                <Link to="/contact">
                    or get back to contacts
                </Link>
            </form>
        </>
    )
}

export default AddContact