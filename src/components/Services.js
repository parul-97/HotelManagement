import React, {Component} from 'react';
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Amazing lakeside campus, with a view of the glittering Lake Lucerne and the towering Alps in the horizon"
            },
            {
                icon:<FaHiking/>,
                title:"free Hiking",
                info:"A distinguish looking style of double-storied pavilions, spacious tents, villas and our deluxe room will provide an assortment of accommodation for our guests to choose from."
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:"The Lakeside Pavilions overlooking the grassland provide guests with beautiful views of the animal & birds coming to drink water. Every effort will be made to ensure your stay is very relaxing and a memorable one."
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Our wildest resort yet, Infinity Resorts Bandhavgarh, is reminiscent of old Maharajah’s shooting lodges during the bygone days. The extensive use of local tiles, stone, inlaid marble, wood and thatch, connects our guests to the resort with the immediate environment."
            }
        ]
    }
    render() {
        return (
          <section className="services">
                <Title title='services'/>
           <div className="service-center">
               {this.state.services.map((item,index) =>{
                   return (
                       <article key={index} className="service">
                       <span>
                           {item.icon}
                       </span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                   </article>
                   );
               } )}
           </div>
           </section>
        );
    }
}

export default Services;