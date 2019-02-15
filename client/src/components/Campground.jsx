import React, { Component } from "react";
class Campground extends Component {
  render() {
    const { camps } = this.props;

    return (
      <div className="row">
        {camps.map(camp => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={camp._id}>
            <div className="card m-2">
              <div className="card-body p-0">
                <img
                  src={camp.url}
                  className="card-img-top"
                  alt={camp.name + camp.id}
                />
                <div className="p-2">
                  <h5 className="card-title my-2">{camp.name}</h5>
                  <p className="card-text">
                    {camp.description.substring(0, 50)} ...
                  </p>
                  <a
                    href={`/campgrounds/${camp._id}`}
                    className="btn btn-info d-block">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

/* 

*/
export default Campground;
