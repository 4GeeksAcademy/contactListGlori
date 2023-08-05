import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Modal = () => {
    const { store, actions } = useContext(Context);

    if (!store.showModal) return null;

    const handleDeleteContact = () => {
        actions.delete(store.delContact);
        actions.closeModal();
    };

    const handleClose = () => {
        actions.closeModal();
    };

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete</h5>
                        <button type="button" className="btn btn-close" data-dismiss="modal" onClick={handleClose}>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Do you want to delete this contact?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" style={{ background: "#B37B70", color: "white" }} data-dismiss="modal" onClick={handleClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn " style={{ background: "#8F001E", color: "white" }} onClick={handleDeleteContact}>
                            Delete contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal