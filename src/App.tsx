

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Events from "./pages/Events";
import PastEvents from "./pages/PastEvents";
import PastAchievements from "./pages/PastAchievements";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import ContactEventPerson from "./pages/ContactEventPerson";
import Newsletters from "./pages/Newsletters";
import EventsParticipated from "./pages/EventsParticipated";
import Certificates from "./pages/Certificates";
import Design from "./pages/Design";
import ActiveIEEEMembers from "./pages/ActiveIEEEMembers";
import Societies from "./pages/Societies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/past-achievements" element={<PastAchievements />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-event-person" element={<ContactEventPerson />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/events-participated" element={<EventsParticipated />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/design" element={<Design />} />
          <Route path="/active-ieee-members" element={<ActiveIEEEMembers />} />
          <Route path="/societies" element={<Societies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
