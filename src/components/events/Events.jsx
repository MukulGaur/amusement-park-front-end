import React from 'react'
import RidesImg from '../../assets/rides.jpg';
import EventsImg from '../../assets/events.jpg';
import VacationImg from '../../assets/vacation.jpg';

const Events = () => {

  return (
    <>
      <h1 className="text-center mt-5"> Explore </h1>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={RidesImg} className="card-img-top" alt="..." height='200px'/>
              <div className="card-body">
                <h5 className="card-title">Rides</h5>
                <p className="card-text">Your body is not a temple, it's and amusement park. Enjoy the rides</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={EventsImg} className="card-img-top" alt="..." height='200px'/>
              <div className="card-body">
                <h5 className="card-title">Events</h5>
                <p className="card-text">Never underestimate the importance of having fun.</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={VacationImg} className="card-img-top" alt="..." height='200px'/>
              <div className="card-body">
                <h5 className="card-title">Vacation</h5>
                <p className="card-text">A change of latitude would help your attitude.</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events