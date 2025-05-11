const events = [
  {
    title: "Community Clean-Up Day",
    date: "2025-05-15",
    location: "Riverside Park",
    image: "images/cleanup.jpg"
  },
  {
    title: "Job Readiness Workshop",
    date: "2025-05-18",
    location: "Community Center Hall",
    image: "images/jobworkshop.jpg"
  },
  {
    title: "Local Food Market",
    date: "2025-05-20",
    location: "Main Street",
    image: "images/market.jpg"
  },
  {
    title: "Health Awareness Fair",
    date: "2025-05-22",
    location: "Town Square",
    image: "images/healthfair.jpg"
  },
  {
    title: "Youth Coding Bootcamp",
    date: "2025-05-25",
    location: "Library Auditorium",
    image: "images/coding.jpg"
  },
  {
    title: "Outdoor Movie Night",
    date: "2025-05-27",
    location: "Greenfield Park",
    image: "images/movienight.jpg"
  },
  {
    title: "Art & Craft Exhibition",
    date: "2025-05-30",
    location: "Civic Art Hall",
    image: "images/art.jpg"
  },
  {
    title: "Community Book Swap",
    date: "2025-06-01",
    location: "Local Library Courtyard",
    image: "images/bookswap.jpg"
  },
  {
    title: "Fire Safety Demo",
    date: "2025-06-03",
    location: "Fire Department HQ",
    image: "images/firesafety.jpg"
  },
  {
    title: "Elderly Care Support Talk",
    date: "2025-06-05",
    location: "Community Wellness Center",
    image: "images/supporttalk.jpg"
  }
];


function getUpcomingEvents(count = 2) {
  const today = new Date();

  return events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, count);
}

module.exports = {
  events,
  getUpcomingEvents
};
