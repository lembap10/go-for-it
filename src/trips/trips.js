let trips = [
  {
    name: "Duluth Trip",
    from: "University of Minnesota",
    to: "Duluth",
    numdays: "3",
    src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1426252.345103502!2d-93.68737600437473!3d45.718075727670964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x52b32d69f70ac7ff%3A0xe31217a152df9978!2sUniversity%20of%20Minnesota%2C%20Minneapolis%2C%20MN!3m2!1d44.97399!2d-93.2277285!4m5!1s0x52ae527e782e37ff%3A0x90fdbf76eb580c72!2sDuluth%2C%20MN!3m2!1d46.786671899999995!2d-92.1004852!5e0!3m2!1sen!2sus!4v1667681458593!5m2!1sen!2sus",
    budget: 400,
    cost: 350,
    attendees: ["3 adults", "1 children"],
    dates: ["November 25th", "November 27th"],
    emails: ["email1@gmai.com", "email2@gmail.com"],
    activityTypes: ["Hiking", "Nature"],
    days: [
      {
        day: "November 25",
        activities: ["Aerial Lift Bridge", "Canal Park", "Spirit Mountain"],
      },
      {
        day: "November 26",
        activities: ["Visit the airport", "Great Lakes Aquarium"],
      },
      {
        day: "November 27",
        activities: ["Lakewalk hike", "Railroad Museum", "Oberg Mountain Loop"],
      },
    ],
  },
  {
    name: "Wisconsin Trip",
    from: "University of Minnesota",
    to: "Wisconsin Dells",
    src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1426252.345103502!2d-93.68737600437473!3d45.718075727670964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x52b32d69f70ac7ff%3A0xe31217a152df9978!2sUniversity%20of%20Minnesota%2C%20Minneapolis%2C%20MN!3m2!1d44.97399!2d-93.2277285!4m5!1s0x52ae527e782e37ff%3A0x90fdbf76eb580c72!2sDuluth%2C%20MN!3m2!1d46.786671899999995!2d-92.1004852!5e0!3m2!1sen!2sus!4v1667681458593!5m2!1sen!2sus",
    numdays: "3",
    budget: 400,
    cost: 350,
    attendees: ["5 adults", "1 dog"],
    dates: ["November 25th", "November 27th"],
    emails: ["email1@gmai.com", "email2@gmail.com"],
    activityTypes: ["Hiking", "Nature"],
    days: [
      {
        day: "December 5",
        activities: ["Aerial Lift Bridge", "Canal Park", "Spirit Mountain"],
      },
      {
        day: "December 6",
        activities: ["Visit the airport", "Great Lakes Aquarium"],
      },
      {
        day: "December 7",
        activities: ["Lakewalk hike", "Railroad Museum", "Oberg Mountain Loop"],
      },
    ],
  },
]

function getTrips() {
  return trips
}

/**
 *
 * @param {*} tripName string of trip Name
 * @param {*} to string of the place trip starts at
 * @param {*} from string of the place trip ends
 */
function createNewTrip(tripName, to, from) {
  trips.push({
    name: tripName,
    from: from,
    to: to,
    src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d25048818.82215488!2d-124.9829943932154!3d39.97007639566578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x52b32d69f70ac7ff%3A0xe31217a152df9978!2sUniversity%20of%20Minnesota%2C%20Minneapolis%2C%20MN%2055455!3m2!1d44.97399!2d-93.2277285!4m5!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20National%20Park%2C%20California!3m2!1d37.8651011!2d-119.5383294!5e0!3m2!1sen!2sus!4v1669673491027!5m2!1sen!2sus",
    numdays: 0,
    cost: 250,
    attendees: [],
    dates: [],
    activityTypes: [],
    days: [],
    emails: [],
  })
}

/**
 *
 * @param {*} numAdults number of adults
 * @param {*} numKids number of kids
 * @param {*} numDogs number of dogs
 */
function addAttendees(numAdults, numKids, numDogs) {
  if (numAdults !== 0)
    trips[trips.length - 1].attendees.push(`${numAdults} adults`)
  if (numAdults !== 0) trips[trips.length - 1].attendees.push(`${numKids} kids`)
  if (numAdults !== 0) trips[trips.length - 1].attendees.push(`${numDogs} dogs`)
}

/**
 * example for Deceber 12 through December 15 call with (12, 12, 12, 15)
 * @param {*} startMonth int of the starting month (ex 1 for Jan)
 * @param {*} startDay int of the starting day
 * @param {*} endMonth int of endMonth
 * @param {*} endDay int of ending day
 */
function addDates(
  startMonth,
  startDay,
  endMonth,
  endDay,
  index = trips.length - 1
) {
  let months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  // if (
  //   startMonth === undefined &&
  //   startDay === undefined &&
  //   endMonth === undefined &&
  //   endDay === undefined
  // ) {
  // let today = new Date()
  // let month = today.getMonth() + 1
  // let day = today.getDate()
  // trips[index].dates = [
  //   `${months[month]} ${day}th`,
  //   `${months[month]} ${day}th`,
  // ]
  startDay = parseInt(startDay)
  startMonth = parseInt(startMonth)
  endDay = parseInt(endDay)
  endMonth = parseInt(endMonth)

  trips[index].dates = [
    `${months[startMonth]} ${startDay}th`,
    `${months[endMonth]} ${endDay}th`,
  ]
  console.log(trips[index].dates)
  while (startMonth !== endMonth || startDay !== endDay) {
    trips[index].days.push({
      day: `${months[startMonth]} ${startDay}th`,
      activities: ["Coffee over there", "morning hike on sun trail"],
    })
    startDay += 1
    if (startDay === 31) {
      startDay = 0
      startMonth += 1
    }
  }
}

/**
 *
 * @param {*} budget number representing the budget set
 */
function addBudget(budget, index = trips.length - 1) {
  trips[index].budget = budget
}

/**
 *
 * @param {*} activities list of strings representing the type of activities
 */
function setActivityTypes(activities, index = trips.length - 1) {
  console.log(activities)
  for (let i in activities) trips[index].activityTypes.push(activities[i])
}

/**
 * adds activity to the trip
 * @param {*} activity name of the activity to add
 * @param {*} day its on (not date just the xth day of the trip)
 */
function addActivity(activity, day, index = trips.length - 1) {
  trips[index].days[day].activities += activity
  trips[index].cost += 25
}

/**
 *
 * @param {*} index default to last one
 */
function getDays(index = trips.length - 1) {
  return trips[index].days
}

function getTripNames() {
  let names = []
  for (let i = 0; i < trips.length; i++) {
    names.push(trips[i].name)
  }
  return names
}

function getMap(index = trips.length - 1) {
  return trips[index].src
}
/**
 *
 * @param {*} emails list of strings representing the emails
 */
function addEmails(emails, index = trips.length - 1) {
  for (let i in emails) {
    trips[index].emails.push(emails[i])
  }
}

function getEmails(index = trips.length - 1) {
  return trips[index].emails
}

let curScreen = 1

function changeCurScreen(x) {
  curScreen = x
  console.log("cur screen to", x)
}

function getCurScreen() {
  return curScreen
}

function getCurTrip(name) {
  for (var i = 0; i < trips.length; i++) {
    if (trips[i].name === name) {
      return trips[i]
    }
  }
}

export {
  getTrips,
  getMap,
  getTripNames,
  getDays,
  addActivity,
  setActivityTypes,
  addBudget,
  addDates,
  addEmails,
  getEmails,
  addAttendees,
  createNewTrip,
  changeCurScreen,
  getCurScreen,
  getCurTrip,
}
