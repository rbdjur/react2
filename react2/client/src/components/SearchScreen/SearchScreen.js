import React from "react";
import "./SearchScreen.css";

const SearchScreen = () =>
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="Topic" aria-label="Topic" aria-describedby="basic-addon2" id="boxes" />


                <div className="row">
                    <input type="text" className="form-control" placeholder="Start Year" aria-label="Topic" aria-describedby="basic-addon2" id="boxes" />
                </div>

                <input type="text" className="form-control" placeholder="End Year" aria-label="Topic" aria-describedby="basic-addon2" id="boxes" />

                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
        </div>
    </div>

export default SearchScreen