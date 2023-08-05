import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "./Modal";


const Contact = ({ contact }) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const Delete = (value) => {
    actions.setContactToBeDeleted(value);
    actions.toggleModal(true);
  };

  return (
    <>
      < div className='container' >
        <div className="outcolor rounded">
          <div className='innercolorcontact rounded'>
            {store.newcontact.map((value) =>
              <ul className="list-group" key={value.id}>
                <li className="list-group-item">
                  <section className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <img className="img "
                        src={`http://placekitten.com/150/150`}
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                      <h5 className="mt-5">{value.name} </h5>
                      <p>
                        <i className="fas fa-map-marker-alt" style={{ color: "#b5675e" }}> {value.address} </i>
                      </p>
                      <p>
                        <i className="fas fa-phone-volume" style={{ color: "#b5675e" }}> {value.phone} </i>
                      </p>
                      <p>
                        <i className="fas fa-envelope" style={{ color: "#b5675e" }}> {value.mail} </i>
                      </p>
                    </div>
                    <span className="col-lg-2 col-md-4 col-sm-12 mt-1">
                      <Link to={`/editContact/${value.id}`}>
                        <i className="btn fas fa-pen"></i>
                      </Link>
                      <i className="btn fas fa-trash-alt" onClick={
                        () => Delete(value)
                      } ></i>
                    </span>
                  </section>
                </li>
              </ul>
            )}
            <Modal />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact