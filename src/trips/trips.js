const trips = 
    [{
        name:"Duluth Trip",
        from:"University of Minnesota",
        to:"Duluth",
        numdays : "3",
        src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1426252.345103502!2d-93.68737600437473!3d45.718075727670964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x52b32d69f70ac7ff%3A0xe31217a152df9978!2sUniversity%20of%20Minnesota%2C%20Minneapolis%2C%20MN!3m2!1d44.97399!2d-93.2277285!4m5!1s0x52ae527e782e37ff%3A0x90fdbf76eb580c72!2sDuluth%2C%20MN!3m2!1d46.786671899999995!2d-92.1004852!5e0!3m2!1sen!2sus!4v1667681458593!5m2!1sen!2sus",
        cost: 350,
        attendees: ["3 adults", "1 children"],
        dates: ["November 25th", "November 27th"], 
        activityTypes: ["Hiking", "Nature"],
        days :
            [{
                day: "November 25", 
                activities: [
                    "Aerial Lift Bridge",
                    "Canal Park",
                    "Spirit Mountain"
                    ]
            },{
                day: "November 26", 
                activities: [
                    "Visit the airport",
                    "Great Lakes Aquarium"
                    
                    ]
            },{
                day: "November 27", 
                activities: [
                    "Lakewalk hike",
                    "Railroad Museum",
                    "Oberg Mountain Loop"
                    ]
            }],
    },
    {
        name:"Wisconsin Trip",
        from:"University of Minnesota",
        to:"Wisconsin Dells",
        src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1426252.345103502!2d-93.68737600437473!3d45.718075727670964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x52b32d69f70ac7ff%3A0xe31217a152df9978!2sUniversity%20of%20Minnesota%2C%20Minneapolis%2C%20MN!3m2!1d44.97399!2d-93.2277285!4m5!1s0x52ae527e782e37ff%3A0x90fdbf76eb580c72!2sDuluth%2C%20MN!3m2!1d46.786671899999995!2d-92.1004852!5e0!3m2!1sen!2sus!4v1667681458593!5m2!1sen!2sus",
        numdays : "3",
        cost: 350,
        attendees: ["5 adults", "1 dog"],
        dates: ["November 25th", "November 27th"], 
        activityTypes: ["Hiking", "Nature"],
        days :
            [{
                day: "December 5", 
                activities: [
                    "Aerial Lift Bridge",
                    "Canal Park",
                    "Spirit Mountain"
                    ]
            },{
                day: "December 6", 
                activities: [
                    "Visit the airport",
                    "Great Lakes Aquarium"
                    
                    ]
            },{
                day: "December 7", 
                activities: [
                    "Lakewalk hike",
                    "Railroad Museum",
                    "Oberg Mountain Loop"
                    ]
            }],
    }];

function getTrips(){
    return trips;
}

export {getTrips};