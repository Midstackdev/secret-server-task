import React, { useState } from 'react'
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

export default function Home() {
    const [modal, setModal] = useState(false);

    const getData = () => {

        return setModal(true);
    }
  return (
    <div className="container">
        <Navbar/>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4">
        <div className="col">
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/#" className="btn btn-primary" onClick={() => getData()}>View</a>
            </div>
            <div className="card-footer">
                <a href="/#" className="card-link">Edit</a>
                <a href="/#" className="card-link">Sahre</a>
                <a href="/#" className="card-link">Delete</a>
            </div>
        </div>
        </div>
        
        <div className="col">
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
        
        <div className="col">
        <div className="card"> 
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
    </div>
    {
        modal && <Modal hide={() => setModal(false)}/>
    }
    </div>
  )
}
