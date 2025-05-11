const events = [
  {
    title: "Community Clean-Up Day",
    date: "2025-05-15",
    location: "Riverside Park",
    image: "images/cleanup.jpg",
    description: "Join us to help clean up Riverside Park and promote environmental responsibility."
  },
  {
    title: "Job Readiness Workshop",
    date: "2025-05-18",
    location: "Community Center Hall",
    image: "images/jobworkshop.jpg",
    description: "A hands-on workshop offering resume tips, interview practice, and job search strategies."
  },
  {
    title: "Local Food Market",
    date: "2025-05-20",
    location: "Main Street",
    image: "images/market.jpg",
    description: "Support local vendors and discover fresh produce, handmade goods, and artisanal foods."
  },
  {
    title: "Health Awareness Fair",
    date: "2025-05-22",
    location: "Town Square",
    image: "images/healthfair.jpg",
    description: "Engage with health professionals, receive screenings, and learn about healthy living."
  },
  {
    title: "Youth Coding Bootcamp",
    date: "2025-05-25",
    location: "Library Auditorium",
    image: "images/coding.jpg",
    description: "An interactive bootcamp for youth to learn coding fundamentals and build real projects."
  },
  {
    title: "Outdoor Movie Night",
    date: "2025-05-27",
    location: "Greenfield Park",
    image: "images/movienight.jpg",
    description: "Enjoy a relaxing evening under the stars with a family-friendly movie screening."
  },
  {
    title: "Art & Craft Exhibition",
    date: "2025-05-30",
    location: "Civic Art Hall",
    image: "images/art.jpg",
    description: "Explore local creativity through exhibits of painting, sculpture, and handmade crafts."
  },
  {
    title: "Community Book Swap",
    date: "2025-06-01",
    location: "Local Library Courtyard",
    image: "images/bookswap.jpg",
    description: "Bring a book, take a book! Share stories and connect with fellow readers."
  },
  {
    title: "Fire Safety Demo",
    date: "2025-06-03",
    location: "Fire Department HQ",
    image: "images/firesafety.jpg",
    description: "Learn life-saving fire safety tips and watch live demonstrations from local firefighters."
  },
  {
    title: "Elderly Care Support Talk",
    date: "2025-06-05",
    location: "Community Wellness Center",
    image: "images/supporttalk.jpg",
    description: "An informative session on caregiving, wellness resources, and elder support networks."
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
