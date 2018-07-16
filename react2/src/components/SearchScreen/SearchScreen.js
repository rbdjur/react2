import React from "react";

const SearchScreen = () =>
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Topic" aria-label="Topic" aria-describedby="basic-addon2"/>
                <input type="text" className="form-control" placeholder="Start Year" aria-label="Topic" aria-describedby="basic-addon2"/>
                <input type="text" className="form-control" placeholder="End Year" aria-label="Topic" aria-describedby="basic-addon2"/>


                <p> Need to write javascript scrubbing the articles from NYT.  This might be similar to previous homework except htis time we are using react.  May need to incorporate javascript to transition easily into axios on the search results and set up the structure of the mongodatabase therefore putting the information into the mongodatabase  </p>

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Button</button>
                    </div>
            </div>
        </div>
        </div>

        export default SearchScreen