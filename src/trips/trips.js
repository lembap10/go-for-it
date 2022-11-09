const trips = {
    Duluth: {
        name:"Duluth Trip",
        from:"University of Minnesota",
        to:"Duluth",
        numdays : "3",
        days :
            [{
                day: "day 1", 
                activities: [
                    "visit",
                    "visit2"
                    ]
            },{
                day: "day 2", 
                activities: [
                    "visit3",
                    "visit4"
                    ]
            },{
                day: "day 3", 
                activities: [
                    "visit5",
                    "visit6"
                    ]
            }],
    }
};

function getTrips(){
    return trips;
}

export {getTrips};