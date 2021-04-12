import React from 'react';
import chair from '../../../images/Chair.png'

const HeadetrMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"#3A4256"}}>Your New Smile Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequuntur iusto pariatur, nostrum quae cumque!</p>
                <button className="btn btn-color">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeadetrMain;