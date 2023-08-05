import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditContact = () => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const navigate = useNavigate()

    const [contactEdit, setContactEdit] = useState({
        name: store.newcontact[id - 1].name,
        email: store.newcontact[id - 1].email,
        phone: store.newcontact[id - 1].phone,
        address: store.newcontact[id - 1].address
    })

    const handleEdit = (e) => {
        e.preventDefault();
        actions.edit(parseInt(id), contactEdit);
        (navigate("/contact"));
    }

    return (
        <>
            <div className='container'>
                <div className="outcolor rounded">
                    <div className='innercolor rounded'>
                        <div className='contactHeader'>
                            <span className='hearts'> ♥ ♥ ♥</span>
                            <span className='close' style={{ float: "right" }}> X </span>
                        </div>
                        <h1 className='text-center'>Add a New Contact</h1>
                        <form>
                            <div className="form-group" onSubmit={handleEdit}>
                                <h5>Full Name</h5>
                                <input type="text" className="form-control" id="contactname" aria-describedby="emailHelp" placeholder="Full Name" value={contactEdit.name} onChange={e => setContactEdit({ ...contactEdit, name: e.target.value })} />
                            </div>
                            <div class="form-group">
                                <h5>Email</h5>
                                <input type="email" class="form-control" id="contactmail" placeholder="Enter Email" value={contactEdit.email} onChange={e => setContactEdit({ ...contactEdit, email: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <h5>Phone</h5>
                                <input type="number" className="form-control" id="contactphone" placeholder="Enter Phone" value={contactEdit.phone} onChange={e => setContactEdit({ ...contactEdit, phone: e.target.value })} />
                            </div>
                            <div class="form-group">
                                <h5>Address</h5>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter Address" value={contactEdit.address} onChange={e => setContactEdit({ ...contactEdit, address: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn ">Save</button>
                            <Link to="/">
                                or get back to contacts
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditContact