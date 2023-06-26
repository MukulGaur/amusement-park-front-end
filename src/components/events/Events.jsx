import React from 'react'
import RidesImg from '../../assets/rides.jpg';
import EventsImg from '../../assets/events.jpg';
import VacationImg from '../../assets/vacation.jpg';

const Events = () => {

  const cardData = [
    {
      image: RidesImg,
      title: "Rides",
      text: "Your body is not a temple, it's an amusement park. Enjoy the rides",
    },
    {
      image: EventsImg,
      title: "Events",
      text: "Never underestimate the importance of having fun.",
    },
    {
      image: VacationImg,
      title: "Vacation",
      text: "A change of latitude would help your attitude.",
    },
  ];

  return (
    <>
      <h1 className="text-center mt-5"> Explore </h1>
      <div className="container text-center my-5">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={card.image} className="card-img-top" alt="..." height='200px' />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="#" className="btn btn-primary">Explore</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Events