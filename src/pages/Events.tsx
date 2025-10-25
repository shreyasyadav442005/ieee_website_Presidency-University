import { Calendar, MapPin, Clock, Users, ExternalLink, Star, ArrowRight, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Events = () => {
  // Define all upcoming events.
  // Featured events will be filtered from this list,
  // and a separate list for general upcoming events will be used.
  const allUpcomingEvents = [
    {
      id: 1,
      title: "To be updated",
      // Updated date to be an array for a multi-day event, as per description
      date: ["2025-07-24", "2025-07-25"],
      time: "To be updated",
      location: "To be updated",
      description: `To be updated`,
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1752641820/create_a_realistic_i_aljote.png",
      category: "To be updated",
      seats: "To be updated",
      featured: true, // This event is featured
      registrationLink: ""
    },
    {
      id: 2,
      title: "To be Announced",
      date: "2025-09-15",
      time: "To be Announced",
      location: "To be Announced",
      description: "To be Announced",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      category: "To be Announced",
      seats: "To be Announced",
      featured: false, // This event is also featured
      registrationLink: "#" // Placeholder link
    },
  ];

  // Separate array for general upcoming events (non-featured).
  // Only two such events are needed as per the requirement.
  const generalUpcomingEvents = [
    {
      id: 3,
      title: "To be Announced",
      date: "2025-11-20",
      time: "To be Announced",
      location: "To be Announced",
      description: "To be Announced",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      category: "To be Announced", // Changed category
      seats: "To be Announced",
      featured: false,
      registrationLink: "#" // Placeholder link
    },
    {
      id: 4,
      title: "To be Announced",
      date: "2025-11-27",
      time: "To be Announced",
      location: "To be Announced",
      description: "ATo be Announced",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      category: "To be Announced", // Changed category
      seats: "To be Announced",
      featured: false,
      registrationLink: "#" // Placeholder link
    }
  ];

  // Filter featured events from the allUpcomingEvents list
  const featuredEvents = allUpcomingEvents.filter(event => event.featured);

  // Helper function to format date(s)
  const formatDate = (dateInput: string | string[]) => {
    if (!dateInput || dateInput === "To Be Announced") {
      return dateInput;
    }

    if (Array.isArray(dateInput)) {
      // Handle single day in array: ["YYYY-MM-DD"]
      if (dateInput.length === 1) {
        const date = new Date(dateInput[0]);
        return date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } else if (dateInput.length > 1) {
        // Handle multiple days: ["YYYY-MM-DD", "YYYY-MM-DD"]
        const startDate = new Date(dateInput[0]);
        const endDate = new Date(dateInput[dateInput.length - 1]);

        const startMonth = startDate.toLocaleDateString('en-US', { month: 'long' });
        const startDay = startDate.toLocaleDateString('en-US', { day: 'numeric' });
        const endMonth = endDate.toLocaleDateString('en-US', { month: 'long' });
        const endDay = endDate.toLocaleDateString('en-US', { day: 'numeric' });
        const endYear = endDate.toLocaleDateString('en-US', { year: 'numeric' });

        // If the event is within the same month and year
        if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
          return `${startMonth} ${startDay} - ${endDay}, ${endYear}`;
        }
        // If the event spans across months but within the same year
        else if (startDate.getFullYear() === endDate.getFullYear()) {
          return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${endYear}`;
        }
        // If the event spans across years
        else {
          const startYear = startDate.toLocaleDateString('en-US', { year: 'numeric' });
          return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
        }
      }
    } else { // dateInput is a string
      const date = new Date(dateInput);
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return dateInput; // Fallback for unexpected formats
  };

  // Helper function to get category badge color
  const getCategoryColor = (category: string) => {
    const colors = {
      Workshop: "bg-blue-100 text-blue-800",
      Conference: "bg-purple-100 text-purple-800",
      Competition: "bg-green-100 text-green-800",
      Networking: "bg-orange-100 text-orange-800",
      Webinar: "bg-teal-100 text-teal-800", // Added for new category
    };
    // Fallback for "To Be Announced" or other unlisted categories
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join us for exciting workshops, conferences, and networking opportunities
            that will advance your technical skills and professional network.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Featured Events</span>
            </h2>
            <p className="text-xl text-gray-600">Don't miss these highlighted events!</p>
          </div>

          {/* Dynamic grid/flex layout for featured events */}
          <div className={`flex flex-wrap justify-center gap-8 mb-16`}>
            {featuredEvents.map((event) => (
              <Card
                key={event.id}
                className={`hover-lift border-0 shadow-xl overflow-hidden 
                  ${featuredEvents.length === 1 ? "max-w-xl w-full" : "w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]"}`}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-ieee-orange text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-ieee-blue" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-ieee-blue" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-ieee-blue" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-ieee-blue" />
                      <span className="text-sm">{event.seats}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-ieee-blue hover:bg-ieee-dark-blue text-white"
                    onClick={() => window.open(event.registrationLink, '_blank')}
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Upcoming Events (Now distinct from Featured Events and centered) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Upcoming Events</h2>
            <p className="text-xl text-gray-600">Discover more exciting events on our calendar!</p>
          </div>

          {/* Added flexbox for centering. On small screens, cards stack. On medium screens and up, they flex to center. */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Render the separate generalUpcomingEvents array */}
            {generalUpcomingEvents.map((event) => (
              <Card key={event.id} className="hover-lift border-0 shadow-lg overflow-hidden w-full sm:w-[calc(50%-1rem)] max-w-sm">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                  <div className="space-y-1 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-3 h-3 mr-2 text-ieee-blue" />
                      <span className="text-xs">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-3 h-3 mr-2 text-ieee-blue" />
                      <span className="text-xs">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-3 h-3 mr-2 text-ieee-blue" />
                      <span className="text-xs">{event.location}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-ieee-orange hover:bg-orange-600 text-white"
                    onClick={() => window.open(event.registrationLink, '_blank')}
                  >
                    Register
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section (Now only with the "View All" button) */}
      <section className="py-20 bg-ieee-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8"> {/* Adjusted mb for slightly less space */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-600 mb-8">Browse through our archives of successful past events.</p>
            <Link to="/past-events">
              <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white px-8 py-3 text-lg">
                View All Past Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section for Event Queries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Phone className="w-12 h-12 text-ieee-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help with Event Registration?
            </h2>
            <p className="text-gray-600 mb-6">
              Facing any issues with registration or have doubts? We're here to help!
            </p>
            <Link to="/contact-event-person">
              <Button className="bg-ieee-orange hover:bg-orange-600 text-white px-8 py-3">
                Contact Concerned Persons
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Modified to keep only heading */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Don't miss out the event!
          </h2>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
