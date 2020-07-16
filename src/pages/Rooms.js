import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import RoomContainer from "../components/RoomsContainer";


const Rooms = () => {
    return(
        <div>
          <Hero hero = "roomsHero">
              <Banner title="Our Rooms">
                  <Link to="/" className = "btn-primary">
                      Return Home
                  </Link>
              </Banner>
          </Hero>
            <RoomContainer/>
        </div>


    )
}

export default Rooms