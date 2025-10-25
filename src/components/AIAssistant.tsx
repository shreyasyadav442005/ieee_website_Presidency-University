import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

// Assuming these components are available via your project setup
// For standalone use, you might need to define simple Button and Input components
// or include a UI library like Shadcn UI (which you've indicated with "@/components/ui/button")
// For this example, I'll assume they are correctly imported or provide basic definitions if needed
// For demonstration purposes, I'll use simple div/button elements if the imports are not resolved in this environment.

// Basic Button and Input definitions if not using Shadcn UI directly in this environment
const Button = ({ onClick, children, className, size, type = "button" }: any) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-md ${className}`} type={type}>
    {children}
  </button>
);

const Input = ({ value, onChange, onKeyPress, placeholder, className }: any) => (
  <input
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
    className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);


interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Eeva, your IEEE buddy 🤖. I'm here to help you navigate our website and answer questions about our events, achievements, and activities. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Define custom colors for IEEE branding (assuming Tailwind CSS is configured)
  const ieeeColors = {
    blue: "#006699", // A shade of blue often associated with IEEE
    orange: "#FF9900", // A shade of orange often associated with IEEE
    darkBlue: "#004060",
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // --- General Greetings ---
    if (
      lowerMessage.includes("hai") ||
       lowerMessage.includes("hi") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hey") ||
      lowerMessage.includes("heyy") ||
      lowerMessage.includes("good morning") ||
      lowerMessage.includes("good night") ||
      lowerMessage.includes("good afternoon")
    ) {
      return "Hello! Welcome to IEEE Presidency University Student Chapter. I'm here to help you explore our achievements, events, and activities. What would you like to know? 😊";
    }

    // --- Homepage Information (Q1-Q13) ---
    if (lowerMessage.includes("what is ieee presidency university") || lowerMessage.includes("ieee")) {
      return "IEEE Presidency University is the student branch of IEEE at Presidency University, Bengaluru, where students grow through projects, events, and global opportunities.";
    }
    if (lowerMessage.includes("what is ieee") || lowerMessage.includes("about ieee")) {
      return "IEEE (Eye-triple-E) is the world's largest technical organization for engineers and tech enthusiasts. It supports technology, innovation, and learning across the globe.";
    }
    if ((lowerMessage.includes("can i join ieee") && lowerMessage.includes("not technical")) || lowerMessage.includes("non-technical background")) {
      return "Yes! IEEE is for everyone curious about technology and innovation, regardless of their field.";
    }
    if (lowerMessage.includes("what does the chapter do") || lowerMessage.includes("chapter activities")) {
      return "The chapter organizes workshops, projects, competitions, research activities, and networking events.";
    }
    if (lowerMessage.includes("what makes ieee different") || lowerMessage.includes("ieee unique")) {
      return "IEEE is globally recognized. It offers access to international conferences, certifications, mentorship, and publishing opportunities.";
    }
    if (lowerMessage.includes("how many students") || lowerMessage.includes("active members") || lowerMessage.includes("number of students")) {
      return "There are over 90 active members and the number keeps growing!";
    }
    if (lowerMessage.includes("how many events hosted") || lowerMessage.includes("events count")) {
      return "The chapter has organized over 55 events across technical, social, and academic categories.";
    }
    if (lowerMessage.includes("achievements of ieee") || lowerMessage.includes("ieee achievements")) {
      return "The chapter has won more than 25 awards and completed 10+ innovative projects.";
    }
    if (lowerMessage.includes("mission of ieee presidency university") || lowerMessage.includes("ieee mission")) {
      return "To use technology for humanity by promoting learning, leadership, and innovation.";
    }
    if (lowerMessage.includes("core values") || lowerMessage.includes("chapter values")) {
      return "Our core values are innovation, integrity, professionalism, and commitment to positive societal impact.";
    }
    if (lowerMessage.includes("how to become a member") || lowerMessage.includes("join community") || lowerMessage.includes("how to join") || lowerMessage.includes("register")) {
      return "Just click 'Join Our Community' on the homepage and follow the steps.";
    }
    if (lowerMessage.includes("fee to join") || lowerMessage.includes("membership fee") || lowerMessage.includes("cost to join")) {
      return "Yes, there's a small yearly fee. In return, you get access to IEEE global resources, tools, and events. Some memberships may be free for a limited number of students based on eligibility or sponsorship.";
    }
    if (lowerMessage.includes("what do i get after joining") || lowerMessage.includes("benefits of joining")) {
      return "You get hands-on workshops, certification programs, projects, leadership roles, and international exposure.";
    }
    if (lowerMessage.includes("help me get a job") || lowerMessage.includes("internships") || lowerMessage.includes("placements") || lowerMessage.includes("career help")) {
      return "Definitely. IEEE boosts your resume, connects you with industry mentors, and helps you stand out in placements. Recruiters love to see real-world, award-winning innovation.";
    }
    if (lowerMessage.includes("why is ieee important for students") || lowerMessage.includes("ieee student importance")) {
      return "It helps you become future-ready with technical skills, leadership, and global networks.";
    }

    // --- About Us Page (Q1-Q17) ---
    if (lowerMessage.includes("purpose of ieee presidency university about us") || lowerMessage.includes("ieee purpose")) {
      return "To empower students in advancing technology through education, innovation, and professional growth.";
    }
    if (lowerMessage.includes("when was the chapter established") || lowerMessage.includes("chapter establishment date")) {
      return "The IEEE chapter at Presidency University was established in 2023, starting with just 10 members.";
    }
    if (lowerMessage.includes("strategic focus") || lowerMessage.includes("ieee focus")) {
      return "It means focusing on innovation, leadership, and aligning students with global engineering trends.";
    }
    if (lowerMessage.includes("institutional contribution") || lowerMessage.includes("chapter contribution")) {
      return "The chapter bridges industry, academia, and research to boost the university's technical ecosystem.";
    }
    if (lowerMessage.includes("ethical foundations") || lowerMessage.includes("ieee ethics")) {
      return "Integrity, professionalism, and using technology responsibly for the benefit of society.";
    }
    if (lowerMessage.includes("what we do") || lowerMessage.includes("kinds of activities") || lowerMessage.includes("about us activities")) {
      return "We conduct technical workshops, research, innovation labs, industry talks, hackathons, and career development.";
    }
    if (lowerMessage.includes("significance of innovation labs") || lowerMessage.includes("innovation labs")) {
      return "These labs help students prototype and test new ideas using advanced tools and facilities.";
    }
    if (lowerMessage.includes("networking opportunities") || lowerMessage.includes("industry connect")) {
      return "Yes! 'Industry Connect' programs let students interact with professionals and build real-world networks.";
    }
    if (lowerMessage.includes("past achievements of ieee about us") || lowerMessage.includes("about us past achievements")) {
      return "Our past achievements include: First hands-on workshop in July 2023, Hosted 1st International IEEE Conference, Conducted WICAS (Women in Circuits and Systems) event, and Organized sessions on IoT and AI in 2025.";
    }
    if (lowerMessage.includes("what is wicas") || lowerMessage.includes("women in circuits and systems")) {
      return "'Women in Circuits and Systems' is an IEEE initiative to empower women in technology through innovation and collaboration.";
    }
    if (lowerMessage.includes("iot unplugged event") || lowerMessage.includes("about iot unplugged")) {
      return "It was a hands-on exploration of IoT technology with expert speakers and real demos.";
    }
    if (lowerMessage.includes("deep learning & llms session") || lowerMessage.includes("about deep learning session")) {
      return "It introduces students to neural networks and large language models used in modern AI.";
    }
    if (lowerMessage.includes("who can take part in research projects") || lowerMessage.includes("research projects participation")) {
      return "Any student member with a passion for solving real-world challenges through technology.";
    }
    if (lowerMessage.includes("how do competitions help students") || lowerMessage.includes("competitions benefits")) {
      return "Competitions and hackathons encourage creativity, teamwork, and practical problem-solving.";
    }
    if (lowerMessage.includes("activities only for senior students") || lowerMessage.includes("all students participate")) {
      return "No! Students from all years and departments can participate and benefit.";
    }
    if (lowerMessage.includes("ieee provide certification") || lowerMessage.includes("ieee certificates")) {
      return "Yes, many workshops and programs offer certificates that are globally recognized.";
    }
    if (lowerMessage.includes("professional development important") || lowerMessage.includes("ieee professional development")) {
      return "It helps students prepare for careers through skill-building and real-world exposure.";
    }

    // --- Achievements (Key ones) ---
    if (lowerMessage.includes("achievements") || lowerMessage.includes("awards") || lowerMessage.includes("win") || lowerMessage.includes("recognition")) {
      return "The chapter has received 25+ awards, published 15+ research papers, and completed 20+ successful projects. Visit our 'Achievements' page for full details.";
    }
    if (lowerMessage.includes("biggest award won") || lowerMessage.includes("top award")) {
      return "IEEE Presidency students won the Best Project Award at IEEE YESIST12 Prelims and qualified for the Malaysia Grand Finale.";
    }
    if (lowerMessage.includes("represented india internationally") || lowerMessage.includes("international representation")) {
      return "Yes! They will represent India at the YESIST12 Grand Finale in Malaysia in 2025.";
    }
    if (lowerMessage.includes("smart vehicle project real") || lowerMessage.includes("smart vehicle system")) {
      return "Yes, it's a fully functional safety system created by IEEE PU students that won multiple awards.";
    }
    if (lowerMessage.includes("drone competitions") || lowerMessage.includes("drone designs") || lowerMessage.includes("drone'acharya")) {
      return "Yes! Their students showcased drone designs at DRONE'ACHARYA 2.0, a national hackathon.";
    }
    if (lowerMessage.includes("who won the ai hackathon in 2025") || lowerMessage.includes("ai hackathon winners")) {
      return "The team of Keerthi M, Mohammed Zaid, Suhas A. Salunke, and Varsha Shree won 2nd prize at the AI Hackathon in 2025.";
    }
    if (lowerMessage.includes("ieee 12conecct 2025") || lowerMessage.includes("12conecct award")) {
      return "IEEE PU won 1st prize at the IEEE 12CONECCT 2025 Project Competition in Mangaluru.";
    }
    if (lowerMessage.includes("smart driver safety system") || lowerMessage.includes("driver safety project")) {
      return "A project that alerts emergency services during accidents and manages phone calls safely while driving.";
    }
    if (lowerMessage.includes("dr rajiv ranjan singh") || lowerMessage.includes("rajiv ranjan singh")) {
      return "Dr. Rajiv Ranjan Singh is the HOD of ECE at Presidency University and was appointed to the IEEE CAS Executive Committee in 2024.";
    }
    if (lowerMessage.includes("dr joseph anthony prathap") || lowerMessage.includes("joseph anthony prathap")) {
      return "Dr. Joseph Anthony Prathap was appointed newsletter editor for IEEE PELS and IES for 2025.";
    }
    if (lowerMessage.includes("ieee cas") || lowerMessage.includes("circuits and systems society")) {
      return "IEEE CAS stands for Circuits and Systems Society - part of IEEE focusing on electronics innovation.";
    }
    if (lowerMessage.includes("ieee famous for innovation") || lowerMessage.includes("ieee innovation")) {
      return "Yes! It's one of the leading student branches in Bengaluru for innovation.";
    }
    if (lowerMessage.includes("yesist12 winning team") || lowerMessage.includes("yesist12 winners")) {
      return "The YESIST12 winning team included Gagan K. S, Jiteesh P, Kanti Prasad J, Poonnacha C. N, and Ritu Patnaik.";
    }
    if (lowerMessage.includes("smart vehicle impact system")) {
      return "A tech system to detect crashes and automatically trigger emergency calls.";
    }
    if (lowerMessage.includes("technovate 2k25")) {
      return "Students won 4th place at TECHNOVATE 2K25 for their Smart Vehicle Impact System.";
    }
    if (lowerMessage.includes("circuits, chips and charades") || lowerMessage.includes("circuits chips charades")) {
      return "It's a technical event with quizzes and activities on RISC-V and ARM processors. Winners were Mohammed Zaid S, Leoni, and Sri Krishna.";
    }
    if (lowerMessage.includes("engineer's day 2024 theme")) {
      return "The theme of Engineer's Day 2024 at IEEE was 'Driving Sustainability with Engineering Solutions Embracing AI.'";
    }
    if (lowerMessage.includes("excom member")) {
      return "Dr. Rajeev Ranjan Singh is a person appointed to the Executive Committee of an IEEE Bengaluru Section of CAS Society.";
    }
    if (lowerMessage.includes("hash-based message authentication")) {
      return "A cryptography method used to verify the authenticity and integrity of messages.";
    }
    if (lowerMessage.includes("fault analysis important data security")) {
      return "It helps detect weaknesses in systems and improves protection against attacks.";
    }
    if (lowerMessage.includes("processors quiz competition")) {
      return "RISC-V and ARM processor architectures were part of the quiz competition.";
    }
    if (lowerMessage.includes("ieee promote sustainable engineering")) {
      return "Through idea competitions focused on AI and eco-friendly tech.";
    }
    if (lowerMessage.includes("hardware used in drone projects")) {
      return "UAV systems, embedded controllers, and real-time flight mechanics.";
    }
    if (lowerMessage.includes("autonomous systems hackathon")) {
      return "Machines or vehicles that can operate without human input using AI.";
    }
    if (lowerMessage.includes("projects hardware-only or software too")) {
      return "They combine both with embedded systems, AI models, and software control.";
    }
    if (lowerMessage.includes("can students publish papers on these projects")) {
      return "Yes! Many projects are eligible for research publication and IEEE conferences.";
    }
    if (lowerMessage.includes("notable student achievers")) {
      return "Some notable student achievers include Shreyas Yadav, Mohammed Zaid, Monika P, Chandana T, Varshashree and others.";
    }
    if (lowerMessage.includes("benefit of winning ieee awards")) {
      return "Recognition, confidence, exposure, and a great resume boost.";
    }
    if (lowerMessage.includes("projects funded")) {
      return "Some may receive funding support or sponsorship from IEEE or college.";
    }
    if (lowerMessage.includes("ieee help students go abroad")) {
      return "Yes! Like the YESIST12 team going to Malaysia for the international finale.";
    }
    if (lowerMessage.includes("how often does ieee win awards")) {
      return "Almost every semester thanks to active participation and strong mentoring.";
    }

    // --- Events (Key ones, especially recent/popular) ---
    if (lowerMessage.includes("types of events") || lowerMessage.includes("what events")) {
      return "IEEE Presidency University conducts workshops, webinars, colloquiums, hackathons, panel discussions, and training programs.";
    }
    if (lowerMessage.includes("are events technical or general") || lowerMessage.includes("event types")) {
      return "Most are technical, focusing on electronics, AI, IoT, and VLSI, but open to all learners.";
    }
    if (lowerMessage.includes("who can attend events") || lowerMessage.includes("event attendance")) {
      return "Yes! Most events are open to students, and some are even open to faculty and outsiders.";
    }
    if (lowerMessage.includes("how often are events held") || lowerMessage.includes("event frequency")) {
      return "Almost every month - with several events per semester.";
    }
    if (lowerMessage.includes("where do events take place") || lowerMessage.includes("event venue")) {
      return "Mostly at Presidency University, Bengaluru, and some are conducted online via Microsoft Teams.";
    }
    if (lowerMessage.includes("do events offer hands-on learning") || lowerMessage.includes("hands-on events")) {
      return "Yes! Many include practical sessions, especially in workshops on PCB, VLSI, and MATLAB.";
    }
    if (lowerMessage.includes("quiz-cuits") || lowerMessage.includes("about quiz-cuits")) {
      return "QUIZ-CUITS was a 3-level quiz for 1st-year students testing digital circuits, logic, and technical riddles. It was held on April 11, 2025, at Presidency University and had over 20+ participants.";
    }
    if (lowerMessage.includes("industrial iot 4.0 workshop") || lowerMessage.includes("iot workshop")) {
      return "The Industrial IoT 4.0 Workshop focused on smart factory systems, IoT applications, and Industry 4.0 tools. It was held on March 7, 2025, at Presidency University, Bengaluru, and had over 100+ attendees. Speakers included Ms. Lakshmi Lakshmana Rao, Mr. Sundaresan Poovalingam, Ms. Sanchitha Mukherjee, and Mr. Aravind S. Infosys Limited and Edutech India Pvt. Ltd. collaborated for this workshop.";
    }
    if (lowerMessage.includes("ai in neuroscience workshop") || lowerMessage.includes("neuroscience ai")) {
      return "The AI in Neuroscience workshop explored AI-powered brain diagnostics, neuroimaging tools, and brain-computer interfaces. It was held on March 7, 2025 (Online) with 30+ attendees. Dr. Abhishek Appaji conducted the session, showcasing tools like NeuroBridge and smart eye kiosks.";
    }
    if (lowerMessage.includes("hemts workshop") || lowerMessage.includes("about hemts")) {
      return "The HEMT workshop discussed High Electron Mobility Transistors used in 5G and RF applications, specifically Gallium Nitride (GaN) and Indium Phosphide (InP) materials. It was held on February 28, 2025, and led by Dr. Ajayan.";
    }
    if (lowerMessage.includes("passive radar") || lowerMessage.includes("about passive radar")) {
      return "Passive Radar technology involves detecting objects using external radio signals, useful for stealth applications. The session was delivered by Dr. Mohammad Shahnawaz Hussain on February 14, 2025.";
    }
    if (lowerMessage.includes("metamaterials in antenna design") || lowerMessage.includes("antenna metamaterials")) {
      return "Metamaterials are engineered materials used to enhance antenna performance. Dr. Prabhu T, Assistant Professor at Presidency University, conducted this workshop on January 31, 2025.";
    }
    if (lowerMessage.includes("qiskit quantum workshop") || lowerMessage.includes("quantum workshop")) {
      return "The Qiskit Quantum Workshop introduced students to quantum computing principles and IBM’s Qiskit platform. It was conducted by Dr. Madihally Nagaraja from SSIT Tumakuru on October 21, 2024.";
    }
    if (lowerMessage.includes("ai colloquium") || lowerMessage.includes("about ai colloquium")) {
      return "The AI Colloquium focused on AI's impact on enterprise, creativity, and ethical concerns. Dr. Sunil Chinnamgari from Maersk was the keynote speaker on September 20, 2024.";
    }
    if (lowerMessage.includes("ieee student chapter inauguration") || lowerMessage.includes("chapter inauguration")) {
      return "The IEEE Student Chapters Inauguration was held on September 13, 2024. Key speakers included Dr. Anindya Saha, Dr. Megha P. Arakeri, Dr. Veena S. Chakravarthi, and Dr. Sumit Soman. Topics discussed were 5G, software-defined radios, SoC design, and AI in telecom.";
    }
    if (lowerMessage.includes("vlsi workshop") || lowerMessage.includes("about vlsi workshop")) {
      return "The VLSI workshop taught Verilog design, Cadence simulation, CMOS amplifier analysis, and ALU creation. Hardware tools used included Xilinx FPGA Boards and Cadence Virtuoso. Speakers were Mr. Shivaprasad B K, Dr. Ashutosh Anand, and Ms. Renuka Bhagwat. It was held on July 29-30, 2024.";
    }
    if (lowerMessage.includes("pcb design workshop") || lowerMessage.includes("about pcb workshop")) {
      return "The PCB Design workshop covered Kicad, Gerber files, soldering, and real PCB printing. It was held from Dec 7-9, 2023, with Dr. Elango and Mr. Duraisamy as speakers.";
    }
    if (lowerMessage.includes("microfluidics webinar") || lowerMessage.includes("about microfluidics")) {
      return "The webinar on Microfluidics was about detecting microplastics in water using sensor tech. Dr. Jegatha Nambi Krishnan presented it on Sept 21, 2023.";
    }
    if (lowerMessage.includes("cmos bipolar analog design") || lowerMessage.includes("analog design session")) {
      return "The session on CMOS/Bipolar Analog Design covered circuit design using advanced analog principles, including translinear functions like square roots, filters, and logarithmic amplifiers. Dr. Raj Senani led it on May 27, 2023.";
    }
    if (lowerMessage.includes("mathworks industry day") || lowerMessage.includes("matlab simulink event")) {
      return "MathWorks Industry Day was a 2-day hands-on MATLAB/Simulink event held on April 21-22, 2023, covering SimScape and signal processing.";
    }
    if (lowerMessage.includes("ieee cass student skill program") || lowerMessage.includes("cass program")) {
      return "The IEEE CASS Student Skill Program included sessions on entrepreneurship and FPGA ML. Speakers were Dr. G. S. Javed and Dr. Joseph Prathap, held on July 5, 2024.";
    }
    if (lowerMessage.includes("highest attendance event") || lowerMessage.includes("most attended event")) {
      return "The Industrial IoT Workshop had the highest attendance with over 100 attendees.";
    }
    if (lowerMessage.includes("online events") || lowerMessage.includes("virtual events")) {
      return "Yes! Events like 'AI in Neuroscience' and 'CMOS Design' had 30–85+ attendees and were conducted online via Microsoft Teams.";
    }
    if (lowerMessage.includes("event registration help") || lowerMessage.includes("register for events")) {
      return "You can contact Monika P (+91 91489 02320) and Beryl T Binu (+91 90199 95449), our Student Event Coordinators, for registration help.";
    }
    if (lowerMessage.includes("events archived") || lowerMessage.includes("recorded events") || lowerMessage.includes("past event gallery")) {
      return "While not all events are recorded, most have a photo gallery under the 'Event Gallery' section on our website.";
    }
    if (lowerMessage.includes("upcoming events") || lowerMessage.includes("future events")) {
      return "Registration links for upcoming IEEE PU events are shared on the website, email, or WhatsApp groups ahead of each event. Check our 'Events' page for the latest schedule!";
    }
    if (lowerMessage.includes("events 2024-2025") || lowerMessage.includes("events in 2024") || lowerMessage.includes("events in 2025")) {
      return "The IEEE Events page is categorized by year, including 2024–2025 and 2023–2024. You can check there for specific events from those periods.";
    }
    if (lowerMessage.includes("microsoft r&d lab event") || lowerMessage.includes("microsoft lab event")) {
      return "The 'Microsoft R&D Lab' event was held on June 17, 2025.";
    }
    if (lowerMessage.includes("ieee project expo 2025") || lowerMessage.includes("project expo 2025")) {
      return "The 'IEEE Project Expo 2025' was held on May 7, 2025.";
    }
    if (lowerMessage.includes("deep learning and llms session date") || lowerMessage.includes("llms session date")) {
      return "The 'Deep Learning and LLMs' session took place on April 21, 2025.";
    }
    if (lowerMessage.includes("cense bangalore event") || lowerMessage.includes("iisc cense")) {
      return "A visit or session by CeNSE, Bangalore, occurred on April 4, 2025, and an industrial visit to CeNSE, IISC Bengaluru, on October 11, 2024.";
    }
    if (lowerMessage.includes("advancing land cover mapping")) {
      return "The 'Advancing Land Cover Mapping' event was on March 28, 2025.";
    }
    if (lowerMessage.includes("fpga implementation of triple des algorithm") || lowerMessage.includes("triple des fpga")) {
      return "The 'FPGA implementation of Triple DES Algorithm' event was held on February 28, 2025.";
    }
    if (lowerMessage.includes("fpga for neural network in power switches") || lowerMessage.includes("neural network fpga")) {
      return "The 'FPGA for Neural Network in Power Switches' seminar was on February 21, 2025.";
    }
    if (lowerMessage.includes("fpga implementation of hmac algorithm") || lowerMessage.includes("hmac fpga")) {
      return "The 'FPGA implementation of HMAC algorithm' event was held on February 14, 2025.";
    }
    if (lowerMessage.includes("digital image forensics") || lowerMessage.includes("image forensics")) {
      return "The 'Digital Image Forensics – Achievements & Challenges' event was conducted on January 24, 2025.";
    }
    if (lowerMessage.includes("women safety and self defence") || lowerMessage.includes("safety session")) {
      return "A safety session on 'Women Safety and Self Defence' was held on December 13, 2024.";
    }
    if (lowerMessage.includes("kvl and kcl hindi session") || lowerMessage.includes("hindi session")) {
      return "The KVL and KCL Hindi session was organized on December 6, 2024.";
    }
    if (lowerMessage.includes("ieee student branch meet 2024") || lowerMessage.includes("student branch meet")) {
      return "The 'IEEE Student Branch Meet 2024' was held on November 15, 2024, and another in August 2024 on August 31.";
    }
    if (lowerMessage.includes("ai virtual companion") || lowerMessage.includes("virtual companion")) {
      return "The 'AI Virtual Companion' presentation was on October 4, 2024.";
    }
    if (lowerMessage.includes("ieee day celebration 2024") || lowerMessage.includes("ieee day")) {
      return "IEEE Day 2024 was celebrated on October 1, 2024, along with a 'Technical Quiz for 2nd Year ECE Students'.";
    }
    if (lowerMessage.includes("fundamentals of cybersecurity") || lowerMessage.includes("cybersecurity event")) {
      return "The 'Fundamentals of Cybersecurity' event was held on September 27, 2024.";
    }
    if (lowerMessage.includes("artificial intelligence and its impact") || lowerMessage.includes("ai impact session")) {
      return "The 'Artificial Intelligence and Its Impact' session was conducted on September 20, 2024.";
    }
    if (lowerMessage.includes("nano-tech design & applications") || lowerMessage.includes("nano tech event")) {
      return "An IEEE NTC-sponsored event on Nano-Tech Design & Applications, along with the inauguration of IEEE Societies like CIS, ComSoc, Sensor Council, and Nano Tech Council, happened on September 13–14, 2024.";
    }
    if (lowerMessage.includes("into corporate space and beyond engineering") || lowerMessage.includes("corporate space webinar")) {
      return "The webinar 'Into Corporate Space and Beyond Engineering' was on August 30, 2024.";
    }
    if (lowerMessage.includes("research opportunities in ai & ml") || lowerMessage.includes("ai ml research")) {
      return "The webinar 'Research Opportunities in AI & ML' was on August 23, 2024.";
    }
    if (lowerMessage.includes("time frequency analysis of signals") || lowerMessage.includes("signal analysis webinar")) {
      return "The webinar 'Time Frequency Analysis of Signals' was on August 9, 2024.";
    }
    if (lowerMessage.includes("technovanza idea presentation") || lowerMessage.includes("technovanza")) {
      return "TECHNOVANZA Idea Presentation was on July 25, 2024.";
    }
    if (lowerMessage.includes("remote sensing & navigation") || lowerMessage.includes("remote sensing event")) {
      return "The 'Remote Sensing & Navigation – Indian & Global View' event was held on July 26, 2024.";
    }
    if (lowerMessage.includes("vlsi design workshop 2023") || lowerMessage.includes("2023 vlsi workshop")) {
      return "The 'VLSI Design' workshop was conducted on July 23–24, 2024.";
    }
    if (lowerMessage.includes("women in wicas technology") || lowerMessage.includes("wicas technology event")) {
      return "The 'Women in WiCAS Technology' event was held on June 28, 2024.";
    }
    if (lowerMessage.includes("ai tools for research") || lowerMessage.includes("research ai tools")) {
      return "The 'AI Tools for Research' event was held on April 11, 2024.";
    }
    if (lowerMessage.includes("ieee international conference on smart tech") || lowerMessage.includes("smart tech conference")) {
      return "The IEEE International Conference on Smart Tech was held on March 8–9, 2024.";
    }
    if (lowerMessage.includes("bytebash") || lowerMessage.includes("software hackathon")) {
      return "BYTEBASH was a software hackathon held on March 1, 2024.";
    }
    if (lowerMessage.includes("pcb design & fabrication 2024") || lowerMessage.includes("2024 pcb event")) {
      return "PCB Design & Fabrication was held on February 23, 2024.";
    }
    if (lowerMessage.includes("techvolution") || lowerMessage.includes("about techvolution")) {
      return "TECHVOLUTION was organized from December 7–9, 2023.";
    }
    if (lowerMessage.includes("hardware security architecture") || lowerMessage.includes("hardware security event")) {
      return "The 'Hardware Security Architecture for Emerging Technologies' event was on November 25, 2023.";
    }
    if (lowerMessage.includes("pcb workshop using kicad") || lowerMessage.includes("kicad pcb workshop")) {
      return "The PCB workshop using KiCad was on October 18, 2023.";
    }
    if (lowerMessage.includes("ieee day 2023") || lowerMessage.includes("ieee day celebration")) {
      return "IEEE Day 2023 celebrations for both senior IEEE members and freshers were on October 1, 2023.";
    }
    if (lowerMessage.includes("microfluidics for microplastics detection") || lowerMessage.includes("microplastics detection")) {
      return "The 'Microfluidics for Microplastics Detection' session was on September 21, 2023.";
    }
    if (lowerMessage.includes("iot & vlsi design with eda tools") || lowerMessage.includes("eda tools workshop")) {
      return "The 'IoT & VLSI Design with EDA Tools' session was on September 21, 2023.";
    }
    if (lowerMessage.includes("organic devices workshop") || lowerMessage.includes("organic devices")) {
      return "The 'Organic Devices' workshop was held from August 21–25, 2023.";
    }
    if (lowerMessage.includes("bipolar and cmos analog circuit design") || lowerMessage.includes("cmos analog design")) {
      return "The 'Bipolar and CMOS Analog Circuit Design' event was held from July 17–22, 2023.";
    }
    if (lowerMessage.includes("are events open to all departments") || lowerMessage.includes("events for all students")) {
      return "Yes, IEEE events are open to students from all backgrounds.";
    }
    if (lowerMessage.includes("certificate for attending events") || lowerMessage.includes("event certificates")) {
      return "Most events provide participation certificates to attendees.";
    }
    if (lowerMessage.includes("are events repeated every year") || lowerMessage.includes("annual events")) {
      return "Some flagship events like VLSI workshops, WiCAS, and IEEE Day are annual.";
    }
    if (lowerMessage.includes("check past ieee events") || lowerMessage.includes("past events info")) {
      return "Visit the 'Chapter Events' section on our website, which includes 2023–2024 and 2024–2025 separately.";
    }
    if (lowerMessage.includes("gallery for events") || lowerMessage.includes("event photos")) {
      return "Yes, visit the 'Event Gallery' tab on the website.";
    }
    if (lowerMessage.includes("events held online or offline") || lowerMessage.includes("online vs offline events")) {
      return "Most events are held offline on campus; some are webinars conducted on Microsoft Teams.";
    }
    if (lowerMessage.includes("present idea at events") || lowerMessage.includes("student presentations")) {
      return "Yes! These events are open for student ideas, hackathons, and presentations.";
    }
    if (lowerMessage.includes("quantum computing events") || lowerMessage.includes("quantum events")) {
      return "The 'Foundations of Quantum Computing and Qiskit' event was on October 21, 2024.";
    }
    if (lowerMessage.includes("ai ethics topics") || lowerMessage.includes("ethics in ai")) {
      return "Yes, AI ethics topics were discussed in 'Artificial Intelligence and Its Impact' and 'AI Virtual Companion'.";
    }
    if (lowerMessage.includes("cybersecurity event") || lowerMessage.includes("cyber security")) {
      return "Yes, 'Fundamentals of Cybersecurity' was on Sept 27, 2024, and FPGA HMAC sessions in 2025.";
    }
    if (lowerMessage.includes("hardware-based workshops") || lowerMessage.includes("hardware workshops")) {
      return "Yes, PCB Design, VLSI, FPGA, and Remote Sensing workshops were conducted.";
    }
    if (lowerMessage.includes("ieee society events") || lowerMessage.includes("society events")) {
      return "Yes, including IEEE CASS, ComSoc, Sensor Council, Nano Tech, and AI/ML focused sessions.";
    }
    if (lowerMessage.includes("events page updated") || lowerMessage.includes("event updates")) {
      return "The events page is usually updated after every major event — typically every 2–3 weeks.";
    }

    // --- Join Page ---
    if (lowerMessage.includes("what is ieee student chapter at presidency university join page") || lowerMessage.includes("join page chapter info")) {
      return "It's a student-run community that helps you explore tech, innovation, networking, and global opportunities through IEEE.";
    }
    if (lowerMessage.includes("never heard of ieee can i still join") || lowerMessage.includes("new to ieee join")) {
      return "Absolutely! You don’t need to know anything technical beforehand — just curiosity and a willingness to learn.";
    }
    if (lowerMessage.includes("why should i join ieee presidency university") || lowerMessage.includes("reasons to join ieee")) {
      return "You’ll gain access to competitions, innovation labs, networking, workshops, and global exposure.";
    }
    if (lowerMessage.includes("do i need to be from a tech branch to join") || lowerMessage.includes("non-tech students join")) {
      return "No! Any student from Presidency University, regardless of branch, can join.";
    }
    if (lowerMessage.includes("is there an online form to join") || lowerMessage.includes("online join form")) {
      return "Yes, just fill out the registration form on the Join Page and follow the steps.";
    }
    if (lowerMessage.includes("what does eeva mean one form away") || lowerMessage.includes("eeva one form away")) {
      return "It means joining is simple — just fill out the form to begin your IEEE journey!";
    }
    if (lowerMessage.includes("how do i join ieee presidency university student chapter") || lowerMessage.includes("join ieee")) {
      return "Step 1 – Fill the registration form, Step 2 – Complete your IEEE membership, Step 3 – Start your journey!";
    }
    if (lowerMessage.includes("what information is required in the form") || lowerMessage.includes("join form requirements")) {
      return "You’ll need your name, roll number, contact number, and email ID.";
    }
    if (lowerMessage.includes("where can i find the ieee registration form") || lowerMessage.includes("find registration form")) {
      return "On the IEEE Presidency University website’s 'Join' page — look for the 'Open Registration Form' button.";
    }
    if (lowerMessage.includes("official ieee member to participate") || lowerMessage.includes("member participation")) {
      return "To access all benefits, yes. But some events may allow non-members too.";
    }
    if (lowerMessage.includes("difference between chapter form and ieee official membership") || lowerMessage.includes("chapter vs official membership")) {
      return "The chapter form connects you locally, while the IEEE membership gives you global access to tools, journals, and communities.";
    }
    if (lowerMessage.includes("is ieee membership free") || lowerMessage.includes("free membership")) {
      return "Some memberships may be free for a limited number of students based on eligibility or sponsorship.";
    }
    if (lowerMessage.includes("do i need to pay every year") || lowerMessage.includes("annual fee")) {
      return "Yes, IEEE membership is typically renewed annually.";
    }
    if (lowerMessage.includes("what do i get after paying the membership fee") || lowerMessage.includes("paid membership benefits")) {
      return "Access to global IEEE resources, journals, events, and certifications.";
    }
    if (lowerMessage.includes("activities can i join as an ieee member") || lowerMessage.includes("member activities")) {
      return "Workshops, seminars, competitions, research projects, networking events, and leadership programs.";
    }
    if (lowerMessage.includes("will i get hands-on experience") || lowerMessage.includes("hands-on experience")) {
      return "Yes! You can join innovation labs, coding sessions, and practical design workshops.";
    }
    if (lowerMessage.includes("can i lead or coordinate events") || lowerMessage.includes("leadership roles")) {
      return "Yes! Members often take up leadership and volunteer roles.";
    }
    if (lowerMessage.includes("can i publish my research through ieee") || lowerMessage.includes("publish research")) {
      return "Yes, active members can explore publishing in IEEE journals and conferences.";
    }
    if (lowerMessage.includes("doubts about registration who to contact") || lowerMessage.includes("registration help")) {
      return "You can reach out to the student contacts: Mohammed Zaid (+91 86607 39890 | zaidp232005@gmail.com) or Keerthi M (+91 93801 97576 | keerthipu375@gmail.com).";
    }
    if (lowerMessage.includes("mohammed zaid contact") || lowerMessage.includes("contact mohammed zaid")) {
      return "Mohammed Zaid is a student representative and contact person for IEEE Presidency University. You can reach him at +91 86607 39890 or zaidp232005@gmail.com.";
    }
    if (lowerMessage.includes("keerthi m contact") || lowerMessage.includes("contact keerthi m")) {
      return "Keerthi M is a student coordinator for joining queries. You can reach her at +91 93801 97576 or keerthipu375@gmail.com.";
    }
    if (lowerMessage.includes("general ieee team contact") || lowerMessage.includes("ieee team email")) {
      return "You can get in touch with the general IEEE team via email: ieeepresidencyuniversity@outlook.com.";
    }
    if (lowerMessage.includes("physical location to visit for help") || lowerMessage.includes("ieee room")) {
      return "Yes, visit the IEEE room at Presidency University, Bengaluru campus.";
    }
    if (lowerMessage.includes("networking opportunities ieee offer") || lowerMessage.includes("networking")) {
      return "You’ll connect with peers, alumni, industry professionals, and international experts.";
    }
    if (lowerMessage.includes("ieee help meet recruiters") || lowerMessage.includes("recruiters")) {
      return "Yes! Some sessions and career fairs are organized with industry partners.";
    }
    if (lowerMessage.includes("ieee help with soft skills") || lowerMessage.includes("soft skills")) {
      return "Yes, through leadership roles, teamwork, presentations, and speaking opportunities.";
    }
    if (lowerMessage.includes("can i be a volunteer") || lowerMessage.includes("volunteer")) {
      return "Yes, volunteering is encouraged and adds value to your resume and growth.";
    }
    if (lowerMessage.includes("i'm shy can i still be part of the community") || lowerMessage.includes("shy to join")) {
      return "Absolutely. IEEE is a welcoming space for everyone, whether you’re introverted or outgoing.";
    }
    if (lowerMessage.includes("do i need a high cgpa to join") || lowerMessage.includes("cgpa requirement")) {
      return "No, joining is open to all students regardless of grades.";
    }
    if (lowerMessage.includes("what is eeva on the join page") || lowerMessage.includes("who is eeva")) {
      return "“Eeva” is the friendly AI buddy helping you explore the IEEE experience.";
    }
    if (lowerMessage.includes("ieee presidency university active on social media") || lowerMessage.includes("social media")) {
      return "Yes, follow them on Instagram and LinkedIn for updates and event photos. You can find the icons in the footer.";
    }
    if (lowerMessage.includes("what happens after i submit the form") || lowerMessage.includes("form submission")) {
      return "The IEEE team will contact you, verify your interest, and guide you through membership.";
    }
    if (lowerMessage.includes("i still have questions about joining") || lowerMessage.includes("more questions")) {
      return "Reach out via email or contact the coordinators listed on the page — they’ll be happy to help!";
    }

    // --- Certificates ---
    if (lowerMessage.includes("certificates section represent") || lowerMessage.includes("about certificates")) {
      return "The Certificates section showcases achievements of students who participated in various competitions and won awards at national and institutional levels.";
    }
    if (lowerMessage.includes("certificates for internal or external events") || lowerMessage.includes("internal external certificates")) {
      return "Both. Students have received recognition in external events across India and in internal campus competitions.";
    }
    if (lowerMessage.includes("students receive certificates for participation") || lowerMessage.includes("participation certificates")) {
      return "Yes, students are recognized not only for winning but also for active and group participation.";
    }
    if (lowerMessage.includes("all team members receive certificates") || lowerMessage.includes("team certificates")) {
      return "Yes, certificates are awarded to each member of a participating or winning team.";
    }
    if (lowerMessage.includes("internal certificates showcased") || lowerMessage.includes("internal awards display")) {
      return "Yes, internal recognitions from Presidency University events are included.";
    }
    if (lowerMessage.includes("raspberry pi mentioned in awarded project") || lowerMessage.includes("raspberry pi project award")) {
      return "Yes, there’s a project awarded in the “Innovative Projects Using Raspberry Pi” category.";
    }
    if (lowerMessage.includes("top-70 project certificate") || lowerMessage.includes("top 70 project")) {
      return "An internal Raspberry Pi project competition at Presidency University awarded a ‘Top-70 Project’ certificate.";
    }
    if (lowerMessage.includes("kanti prasad j award") || lowerMessage.includes("kanti prasad award")) {
      return "Kanti Prasad J won the Best Project award at Nitte Meenakshi Institute of Technology, Bengaluru.";
    }
    if (lowerMessage.includes("monika p 1st prize") || lowerMessage.includes("monika p award")) {
      return "Monika P, along with her team: Chandana T, Shreyas Yadav M, and Tejaswini C N, won 1st prize at MITE, Mangaluru.";
    }
    if (lowerMessage.includes("chandana t recognized for") || lowerMessage.includes("chandana t award")) {
      return "Her team was awarded Top 4th Innovative Project at HKBK College of Engineering.";
    }
    if (lowerMessage.includes("varsha shree v s second prize") || lowerMessage.includes("varsha shree award")) {
      return "Varsha Shree V S, with team members Keerthi M, Meghana H S, and Suhas A Salunke, won second prize at Vidya Vikas Institute of Technology, Mysore.";
    }
    if (lowerMessage.includes("keerthi m multiple winning teams") || lowerMessage.includes("keerthi m achievements")) {
      return "Yes, Keerthi M participated in multiple recognized events, both internally and externally.";
    }
    if (lowerMessage.includes("mohammed zaid 1st prize") || lowerMessage.includes("mohammed zaid award")) {
      return "Mohammed Zaid, with Leoni S and Sri Krishna, won 1st prize at BNM Institute of Technology.";
    }
    if (lowerMessage.includes("shreyas yadav m award") || lowerMessage.includes("shreyas yadav award")) {
      return "Shreyas Yadav M won the Best Idea Presentation award at Institution of Engineers (India).";
    }
    if (lowerMessage.includes("best project award nmit bengaluru team") || lowerMessage.includes("nmit best project team")) {
      return "The team for the Best Project award at NMIT Bengaluru included Kanti Prasad J, Jiteesh P, Poonnacha C N, Ritu Patnaik, Gagan K S.";
    }
    if (lowerMessage.includes("monika p teammates mite mangaluru") || lowerMessage.includes("monika p team")) {
      return "Monika P’s teammates in MITE Mangaluru were Chandana T, Shreyas Yadav M, and Tejaswini C N.";
    }
    if (lowerMessage.includes("project team hkbk college of engineering") || lowerMessage.includes("hkbk project team")) {
      return "The project team at HKBK College of Engineering included Chandana T, Monika P, Shreyas Yadav M, Tejaswini C N.";
    }
    if (lowerMessage.includes("raspberry pi-based internal award team") || lowerMessage.includes("internal raspberry pi team")) {
      return "The team for the Raspberry Pi-based internal award included Sneha D V, Aswathi V, Hemanth J R, Kushi G, Savitha, Shreyas Yadav M.";
    }
    if (lowerMessage.includes("varsha shree teammates vidya vikas mysore") || lowerMessage.includes("varsha shree team")) {
      return "Varsha Shree’s teammates at Vidya Vikas, Mysore, were Keerthi M, Meghana H S, Suhas A Salunke.";
    }
    if (lowerMessage.includes("team participated siddhartha academy vijayawada") || lowerMessage.includes("siddhartha academy team")) {
      return "The team that participated at Siddhartha Academy, Vijayawada, included Leoni S, Beryl T Binu, M Aishwarya, Venkanna E.";
    }
    if (lowerMessage.includes("second prize siddhartha academy team") || lowerMessage.includes("siddhartha academy second prize")) {
      return "The team that received Second Prize at Siddhartha Academy included Keerthi M, Mohammed Zaid, Suhas A Salunke, Varsha Shree V S.";
    }
    if (lowerMessage.includes("represented presidency nokia tower") || lowerMessage.includes("nokia tower visit")) {
      return "Beryl T Binu and IEEE students of Presidency University represented them at Nokia Tower, Manyata Tech Park.";
    }
    if (lowerMessage.includes("represented ieee nie south campus mysore") || lowerMessage.includes("nie south campus visit")) {
      return "M Aishwarya and the IEEE VLSI batch represented IEEE PU at NIE South Campus, Mysore.";
    }
    if (lowerMessage.includes("internal participation certificates") || lowerMessage.includes("internal participation awards")) {
      return "D D Aishwarya and Keerthi M received internal participation certificates.";
    }
    if (lowerMessage.includes("team recognized internal group participation keerthi m") || lowerMessage.includes("keerthi m group participation")) {
      return "The team recognized for internal group participation with Keerthi M included Shreyas Yadav M, Tejaswini C N, and Varsha Shree V S.";
    }
    if (lowerMessage.includes("siddesh b s active participation") || lowerMessage.includes("siddesh b s award")) {
      return "Siddesh B S was awarded active participation at BMS College of Engineering, Bengaluru.";
    }
    if (lowerMessage.includes("types of recognitions certificates page") || lowerMessage.includes("certificate types")) {
      return "The certificates page lists recognitions such as Best Project, 1st Prize, 2nd Prize, Active Group Participation, Best Idea Presentation, and Top-70 Projects.";
    }
    if (lowerMessage.includes("certificates reflect innovation projects") || lowerMessage.includes("innovation project certificates")) {
      return "Yes, several are project-based recognitions, including Raspberry Pi and VLSI innovations.";
    }
    if (lowerMessage.includes("individual and group recognitions included") || lowerMessage.includes("solo group awards")) {
      return "Yes, the list includes both solo winners and team efforts.";
    }
    if (lowerMessage.includes("ritu patnaik contribution") || lowerMessage.includes("ritu patnaik team")) {
      return "Ritu Patnaik was part of the Best Project-winning team at NMIT Bengaluru.";
    }
    if (lowerMessage.includes("active group participation siddhartha academy team") || lowerMessage.includes("siddhartha academy participation")) {
      return "The Active Group Participation at Siddhartha Academy included Leoni S, Beryl T Binu, M Aishwarya, and Venkanna E.";
    }
    if (lowerMessage.includes("monika b s participation") || lowerMessage.includes("monika b s team")) {
      return "Monika B S participated at Vidya Vikas Institute of Engineering & Technology, Mysore, with teammate Aneeqha Tarannum S.";
    }
    if (lowerMessage.includes("students frequently appear across multiple events") || lowerMessage.includes("frequent achievers")) {
      return "Monika P, Shreyas Yadav M, Keerthi M, and Mohammed Zaid are involved in multiple winning and participation teams.";
    }
    if (lowerMessage.includes("certificates useful for placements") || lowerMessage.includes("certificates for resume")) {
      return "Yes, showcasing technical achievement and participation boosts your resume.";
    }
    if (lowerMessage.includes("certificates verified by external organizations") || lowerMessage.includes("verify certificates")) {
      return "Yes, most are earned in reputed institutes and can be verified through IEEE PU.";
    }
    if (lowerMessage.includes("non-ieee members win certificates") || lowerMessage.includes("non-members certificates")) {
      return "In most external events, yes — but IEEE members have priority and more access.";
    }
    if (lowerMessage.includes("certificates include faculty names") || lowerMessage.includes("faculty names on certificates")) {
      return "Not in this section, only student names and institutions are mentioned.";
    }
    if (lowerMessage.includes("gallery or proof of these events") || lowerMessage.includes("event proof")) {
      return "Yes, check the 'Event Gallery' or IEEE PU Instagram/website for event photos.";
    }
    if (lowerMessage.includes("team-based certificates show all student names") || lowerMessage.includes("all team names on certificates")) {
      return "Yes, the document lists all recognized participants.";
    }
    if (lowerMessage.includes("awarded even if i didn’t win first place") || lowerMessage.includes("other awards")) {
      return "Yes, awards include Top Projects, 2nd Prize, and Active Participation as well.";
    }
    if (lowerMessage.includes("external certificates counted in internal evaluations") || lowerMessage.includes("external awards recognized")) {
      return "Yes, IEEE PU encourages and celebrates all recognized student efforts.";
    }
    if (lowerMessage.includes("certificates displayed on website") || lowerMessage.includes("certificates on website")) {
      return "Yes, under the Certificates tab on the official IEEE PU website.";
    }
    if (lowerMessage.includes("certificate list updated") || lowerMessage.includes("certificate updates")) {
      return "The certificate list is usually updated after major inter-college competitions or end-of-semester events.";
    }

    // --- Website Developers/Team (Student section) ---
    if (lowerMessage.includes("who designed the ieee presidency university website") || lowerMessage.includes("website built by students") || lowerMessage.includes("website developer") || lowerMessage.includes("website team") || lowerMessage.includes("who built the website")) {
      return "It was developed and designed by a talented student team under the guidance of two experienced faculty advisors. Shreyas Yadav M was the Lead Developer and Designer, followed by Monika P and Mohammed Zaid";
    }
    if (lowerMessage.includes("website built by students or external developers") || lowerMessage.includes("in-house development")) {
      return "It was proudly developed in-house by IEEE Presidency University student members.";
    }
    if (lowerMessage.includes("who led the website design and development") || lowerMessage.includes("lead developer")) {
      return "Shreyas Yadav M was the Lead Developer and Designer.";
    }
    if (lowerMessage.includes("did students build the entire site") || lowerMessage.includes("students built site")) {
      return "Yes, students handled everything — from front-end design to backend event and certificate data management.";
    }
    if (lowerMessage.includes("faculty advisors guiding web development") || lowerMessage.includes("website faculty advisors")) {
      return "Dr. Joseph Anthony Prathap and Dr. Vanithalakshmi Mariappan were the faculty advisors.";
    }
    if (lowerMessage.includes("shreyas yadav m role in website") || lowerMessage.includes("shreyas yadav website role")) {
      return "He led the end-to-end development, design, and deployment of the IEEE website.";
    }
    if (lowerMessage.includes("who managed event and certificate data") || lowerMessage.includes("event data manager")) {
      return "Mohammed Zaid S handled the event information flow and certificate integration.";
    }
    if (lowerMessage.includes("monika p contribution to site") || lowerMessage.includes("monika p website role")) {
      return "Monika P was responsible for content creation and strategic messaging throughout the website.";
    }
    if (lowerMessage.includes("only one developer on team") || lowerMessage.includes("website team size")) {
      return "While Shreyas Yadav M led development, other members contributed to content, data structuring, and user experience.";
    }
    if (lowerMessage.includes("students had fixed roles or collaborate") || lowerMessage.includes("team collaboration")) {
      return "Each student had a primary role but collaborated as a team to ensure design, function, and content aligned perfectly.";
    }
    if (lowerMessage.includes("dr. joseph anthony prathap role") || lowerMessage.includes("joseph prathap role")) {
      return "He is a faculty member in the ECE Department and served as one of the Faculty Advisors for the website.";
    }
    if (lowerMessage.includes("dr. vanithalakshmi mariappan role") || lowerMessage.includes("vanithalakshmi mariappan role")) {
      return "She is also a Faculty Advisor from the ECE Department, guiding the website development process.";
    }
    if (lowerMessage.includes("role of faculty advisors in this project") || lowerMessage.includes("faculty advisor role")) {
      return "They provided mentorship, quality review, and ensured technical and institutional alignment of the site.";
    }
    if (lowerMessage.includes("faculty members involved in design process") || lowerMessage.includes("faculty design involvement")) {
      return "They guided the structure and content while allowing students to take full ownership of design and deployment.";
    }
    if (lowerMessage.includes("technologies used to build website") || lowerMessage.includes("website tech stack")) {
      return "Front-end tools like HTML, CSS, JS, and possibly frameworks like React or Bootstrap were likely used. Backend likely includes form handling, databases, or CMS integration.";
    }
    if (lowerMessage.includes("website responsive mobile-friendly") || lowerMessage.includes("mobile compatibility")) {
      return "Yes, the design team ensured mobile compatibility for user-friendly access on any device.";
    }
    if (lowerMessage.includes("certificate system managed") || lowerMessage.includes("certificate management")) {
      return "Mohammed Zaid S structured and connected certificate data to user-visible pages.";
    }
    if (lowerMessage.includes("event data organized on website") || lowerMessage.includes("event data management")) {
      return "Through structured pages that showcase event details by date and category — maintained by the design team.";
    }
    if (lowerMessage.includes("website regularly updated by student team") || lowerMessage.includes("website updates")) {
      return "Yes, the design team built it for long-term use, and it’s updated as new events and achievements occur.";
    }
    if (lowerMessage.includes("who should i thank for this beautiful website") || lowerMessage.includes("thank website team")) {
      return "The student design team — especially Shreyas Yadav M, Mohammed Zaid S, and Monika P, with support from two dedicated faculty members.";
    }
    if (lowerMessage.includes("can i help with next website update") || lowerMessage.includes("volunteer for website")) {
      return "Yes! Reach out to the IEEE chapter or the current developers to volunteer or learn.";
    }
    if (lowerMessage.includes("found a bug or typo who to contact") || lowerMessage.includes("report bug")) {
      return "You can message the IEEE Presidency University social channels or connect with the current web team.";
    }
    if (lowerMessage.includes("website versions from past years") || lowerMessage.includes("old website versions")) {
      return "This is the most recent version built by the current IEEE student team. Archives, if any, are internal.";
    }
    if (lowerMessage.includes("can i contribute content for ieee pages") || lowerMessage.includes("contribute content")) {
      return "Yes! IEEE welcomes student contributors, especially for events, blogs, and project updates.";
    }
    if (lowerMessage.includes("why is student-led website development important") || lowerMessage.includes("importance of student website dev")) {
      return "It shows ownership, creativity, technical skill, and real-world project execution — a great resume builder too!";
    }
    if (lowerMessage.includes("team receive awards or recognition for their work") || lowerMessage.includes("website team awards")) {
      return "Their work is officially listed on the website and publicly credited under the “Website Developers” section.";
    }
    if (lowerMessage.includes("website considered a project or club activity") || lowerMessage.includes("website project or club")) {
      return "It’s both — a project under IEEE with real deployment and management responsibilities.";
    }
    if (lowerMessage.includes("development experience help in internships or placements") || lowerMessage.includes("website dev for placements")) {
      return "Absolutely. Working on a live institutional website is highly valuable in resumes and interviews.";
    }
    if (lowerMessage.includes("will this team update the site again in future") || lowerMessage.includes("future website updates")) {
      return "Possibly — or they might hand it off to the next IEEE student developers.";
    }
    if (lowerMessage.includes("where can i see full credits of design team") || lowerMessage.includes("full credits website")) {
      return "At the bottom of the website footer under “Website Developers” or in the Dedicated Developer Page.";
    }

    // --- Footer Information ---
    if (lowerMessage.includes("ieee presidency university student chapter footer") || lowerMessage.includes("footer chapter info")) {
      return "It is a student-led chapter that promotes innovation, collaboration, and technical development for humanity.";
    }
    if (lowerMessage.includes("main vision of ieee presidency university footer") || lowerMessage.includes("footer vision")) {
      return "Advancing technology for humanity through innovation, collaboration, and professional development.";
    }
    if (lowerMessage.includes("where is the ieee chapter located footer") || lowerMessage.includes("footer location")) {
      return "At Presidency University, Bengaluru.";
    }
    if (lowerMessage.includes("official email for ieee presidency university chapter") || lowerMessage.includes("footer email")) {
      return "ieeepresidencyuniversity@outlook.com";
    }
    if (lowerMessage.includes("contact ieee presidency chapter by phone") || lowerMessage.includes("footer phone")) {
      return "You can call the phone number listed in the contact section.";
    }
    if (lowerMessage.includes("quick links available in footer") || lowerMessage.includes("footer quick links")) {
      return "Quick links available in the footer include Newsletters, Events Participated, Certificates, Active IEEE Members, and Website Developers.";
    }
    if (lowerMessage.includes("where can i find newsletters") || lowerMessage.includes("newsletters link")) {
      return "Under the 'Quick Links' section in the footer – click “Newsletters.”";
    }
    if (lowerMessage.includes("check which events have been participated in") || lowerMessage.includes("events participated link")) {
      return "Use the 'Events Participated' link in the footer to explore past events.";
    }
    if (lowerMessage.includes("ieee presidency university certificates listed") || lowerMessage.includes("footer certificates")) {
      return "You can find them under the “Certificates” quick link in the footer.";
    }
    if (lowerMessage.includes("who are the active ieee members") || lowerMessage.includes("footer active members")) {
      return "A list of currently active student members is linked under “Active IEEE Members.”";
    }
    if (lowerMessage.includes("who developed the ieee website footer") || lowerMessage.includes("footer website developers")) {
      return "Click “Website Developers” in the footer to see contributors and developers.";
    }
    if (lowerMessage.includes("ieee resources listed in footer") || lowerMessage.includes("footer ieee resources")) {
      return "IEEE resources listed in the footer include IEEE Official, IEEE Spectrum, IEEE Collabratec, IEEE Bengaluru, IEEE Standards, and IEEE Xplore.";
    }
    if (lowerMessage.includes("what is ieee spectrum") || lowerMessage.includes("ieee spectrum info")) {
      return "IEEE’s flagship magazine covering trends in engineering and technology.";
    }
    if (lowerMessage.includes("what is ieee collabratec") || lowerMessage.includes("ieee collabratec info")) {
      return "A global online platform where IEEE members can network and collaborate.";
    }
    if (lowerMessage.includes("what is ieee xplore") || lowerMessage.includes("ieee xplore info")) {
      return "A digital library with research papers, journals, and conference publications from IEEE.";
    }
    if (lowerMessage.includes("ieee bengaluru link about") || lowerMessage.includes("ieee bengaluru section")) {
      return "It connects you to the Bengaluru Section of IEEE, under which this student chapter functions.";
    }
    if (lowerMessage.includes("where can i find official ieee standards") || lowerMessage.includes("ieee standards link")) {
      return "Click the “IEEE Standards” link in the footer.";
    }
    if (lowerMessage.includes("presence logo represent") || lowerMessage.includes("presence logo")) {
      return "It likely represents a local or national IEEE initiative or internal program — you can click it for more info.";
    }
    if (lowerMessage.includes("ieee bangalore section") || lowerMessage.includes("bangalore section")) {
      return "It's the regional IEEE branch that supports chapters like Presidency University’s.";
    }
    if (lowerMessage.includes("how do i follow ieee presidency university on social media") || lowerMessage.includes("social media links")) {
      return "Use the Instagram and LinkedIn icons located in the footer.";
    }
    if (lowerMessage.includes("ieee presidency university instagram page") || lowerMessage.includes("instagram page")) {
      return "Yes, the Instagram icon in the footer links to their official page.";
    }
    if (lowerMessage.includes("linkedin profile for ieee") || lowerMessage.includes("linkedin profile")) {
      return "Yes, it's linked in the footer — click the LinkedIn icon to access it.";
    }
    if (lowerMessage.includes("who owns the ieee presidency university website content") || lowerMessage.includes("website copyright")) {
      return "© 2025 IEEE Presidency University Student Chapter — all rights reserved.";
    }
    if (lowerMessage.includes("copyright notice in footer") || lowerMessage.includes("footer copyright")) {
      return "Yes, it states the ownership belongs to the IEEE PU Student Chapter (2025).";
    }
    if (lowerMessage.includes("can i reuse content from the ieee website") || lowerMessage.includes("reuse website content")) {
      return "You may need written permission, as all content is copyright protected.";
    }

    // --- Specific Individual Roles ---
    if (lowerMessage.includes("shreyas yadav m") || lowerMessage.includes("shreyas") || lowerMessage.includes("shreyas yadav")) {
        return "Shreyas Yadav M was the Lead Developer and Designer of the IEEE Presidency University website. He led the end-to-end development, design, and deployment.";
    }
    if (lowerMessage.includes("mohammed zaid s") || lowerMessage.includes("mohammed zaid") || lowerMessage.includes("zaid")) {
        return "Mohammed Zaid S handled the event information flow and certificate integration for the IEEE Presidency University website. He is also a student representative and contact person for joining queries.";
    }
    if (lowerMessage.includes("monika p") || lowerMessage.includes("monika")) {
        return "Monika P was responsible for content creation and strategic messaging throughout the IEEE Presidency University website. She is also a Student Event Coordinator.";
    }
    if (lowerMessage.includes("dr. joseph anthony prathap") || lowerMessage.includes("joseph prathap")) {
        return "Dr. Joseph Anthony Prathap is a faculty member in the ECE Department and served as one of the Faculty Advisors for the website. He was also appointed newsletter editor for IEEE PELS and IES for 2025.";
    }
    if (lowerMessage.includes("dr. vanithalakshmi mariappan") || lowerMessage.includes("vanithalakshmi mariappan")) {
        return "Dr. Vanithalakshmi Mariappan is a Faculty Advisor from the ECE Department, guiding the website development process.";
    }
    if (lowerMessage.includes("dr. abhishek appaji") || lowerMessage.includes("abhishek appaji")) {
        return "Dr. Abhishek Appaji conducted the 'AI in Neuroscience' session, showcasing real-world tools like NeuroBridge and eye-tracking kiosks.";
    }
    if (lowerMessage.includes("dr. ajayan") || lowerMessage.includes("ajayan")) {
        return "Dr. Ajayan led the HEMT workshop, explaining differences between MOSFETs and HEMTs using GaN, InP materials.";
    }
    if (lowerMessage.includes("dr. mohammad shahnawaz hussain") || lowerMessage.includes("mohammad shahnawaz hussain")) {
        return "Dr. Mohammad Shahnawaz Hussain delivered the 'Passive Radar: Past, Present and Future' session.";
    }
    if (lowerMessage.includes("dr. prabhu t") || lowerMessage.includes("prabhu t")) {
        return "Dr. Prabhu T, Assistant Professor at Presidency University, conducted the 'Metamaterials in Antenna Design' workshop.";
    }
    if (lowerMessage.includes("dr. madihally nagaraja") || lowerMessage.includes("madihally nagaraja")) {
        return "Dr. Madihally Nagaraja from SSIT Tumakuru conducted the Qiskit Quantum Workshop.";
    }
    if (lowerMessage.includes("dr. sunil chinnamgari") || lowerMessage.includes("sunil chinnamgari")) {
        return "Dr. Sunil Chinnamgari from Maersk was the keynote speaker at the AI Colloquium and an industry speaker for AI events from Intel India.";
    }
    if (lowerMessage.includes("dr. anindya saha") || lowerMessage.includes("anindya saha")) {
        return "Dr. Anindya Saha was one of the key speakers at the IEEE Student Chapters Inauguration.";
    }
    if (lowerMessage.includes("dr. megha arakeri") || lowerMessage.includes("megha arakeri")) {
        return "Dr. Megha Arakeri was one of the key speakers at the IEEE Student Chapters Inauguration.";
    }
    if (lowerMessage.includes("dr. veena s. chakravarthi") || lowerMessage.includes("veena chakravarthi")) {
        return "Dr. Veena S. Chakravarthi was one of the key speakers at the IEEE Student Chapters Inauguration.";
    }
    if (lowerMessage.includes("dr. sumit soman") || lowerMessage.includes("sumit soman")) {
        return "Dr. Sumit Soman was one of the key speakers at the IEEE Student Chapters Inauguration.";
    }
    if (lowerMessage.includes("mr. shivaprasad b k") || lowerMessage.includes("shivaprasad b k")) {
        return "Mr. Shivaprasad B K was a speaker at the VLSI workshop.";
    }
    if (lowerMessage.includes("dr. ashutosh anand") || lowerMessage.includes("ashutosh anand")) {
        return "Dr. Ashutosh Anand was a speaker at the VLSI workshop.";
    }
    if (lowerMessage.includes("ms. renuka bhagwat") || lowerMessage.includes("renuka bhagwat")) {
        return "Ms. Renuka Bhagwat was a speaker at the VLSI workshop.";
    }
    if (lowerMessage.includes("dr. elango") || lowerMessage.includes("elango")) {
        return "Dr. Elango led sessions at the PCB Design workshop.";
    }
    if (lowerMessage.includes("mr. duraisamy") || lowerMessage.includes("duraisamy")) {
        return "Mr. Duraisamy led sessions at the PCB Design workshop.";
    }
    if (lowerMessage.includes("dr. jegatha nambi krishnan") || lowerMessage.includes("jegatha nambi krishnan")) {
        return "Dr. Jegatha Nambi Krishnan presented the webinar on Microfluidics.";
    }
    if (lowerMessage.includes("dr. raj senani") || lowerMessage.includes("raj senani")) {
        return "Dr. Raj Senani led the CMOS/Bipolar Analog Design session.";
    }
    if (lowerMessage.includes("dr. g. s. javed") || lowerMessage.includes("g s javed")) {
        return "Dr. G. S. Javed was a speaker in the IEEE CASS Student Skill Program and an industry speaker for AI events from Intel India.";
    }
    if (lowerMessage.includes("beryl t binu") || lowerMessage.includes("beryl")) {
        return "Beryl T Binu is a Student Event Coordinator. He also participated in the Active Group Participation at Siddhartha Academy and represented Presidency at Nokia Tower.";
    }
    if (lowerMessage.includes("aishwarya m") || lowerMessage.includes("aishwarya")) {
        return "M. Aishwarya was selected as a Student Volunteer for IEEE CAS Bangalore Chapter in 2025. She also participated in the Active Group Participation at Siddhartha Academy and represented IEEE PU at NIE South Campus, Mysore.";
    }
    if (lowerMessage.includes("suhas a. salunke") || lowerMessage.includes("suhas salunke")) {
        return "Suhas A. Salunke was part of the team that won 2nd prize at the AI Hackathon in 2025 and was a teammate of Varsha Shree V S at Vidya Vikas Institute of Technology, Mysore.";
    }
    if (lowerMessage.includes("varsha shree v s") || lowerMessage.includes("varsha shree")) {
        return "Varsha Shree V S won 2nd prize at Vidya Vikas Institute of Technology, Mysore, with her team, and was also part of the 2nd prize winning team at the AI Hackathon in 2025.";
    }
    if (lowerMessage.includes("leoni s") || lowerMessage.includes("leoni")) {
        return "Leoni S was part of the team that won 1st prize at BNM Institute of Technology and participated in the Active Group Participation at Siddhartha Academy.";
    }
    if (lowerMessage.includes("sri krishna") || lowerMessage.includes("sri krishna")) {
        return "Sri Krishna was part of the team that won 1st prize at BNM Institute of Technology.";
    }
    if (lowerMessage.includes("chandana t") || lowerMessage.includes("chandana")) {
        return "Chandana T's team was awarded Top 4th Innovative Project at HKBK College of Engineering, and she was a teammate of Monika P at MITE, Mangaluru.";
    }
    if (lowerMessage.includes("tejaswini c n") || lowerMessage.includes("tejaswini")) {
        return "Tejaswini C N was a teammate of Monika P at MITE, Mangaluru, and part of the project team at HKBK College of Engineering.";
    }
    if (lowerMessage.includes("sneha d v") || lowerMessage.includes("sneha")) {
        return "Sneha D V was part of the Raspberry Pi-based internal award winning team.";
    }
    if (lowerMessage.includes("aswathi v") || lowerMessage.includes("aswathi")) {
        return "Aswathi V was part of the Raspberry Pi-based internal award winning team.";
    }
    if (lowerMessage.includes("hemanth j r") || lowerMessage.includes("hemanth")) {
        return "Hemanth J R was part of the Raspberry Pi-based internal award winning team.";
    }
    if (lowerMessage.includes("kushi g") || lowerMessage.includes("kushi")) {
        return "Kushi G was part of the Raspberry Pi-based internal award winning team.";
    }
    if (lowerMessage.includes("savitha") || lowerMessage.includes("savitha")) {
        return "Savitha was part of the Raspberry Pi-based internal award winning team.";
    }
    if (lowerMessage.includes("meghana h s") || lowerMessage.includes("meghana")) {
        return "Meghana H S was a teammate of Varsha Shree V S at Vidya Vikas Institute of Technology, Mysore.";
    }
    if (lowerMessage.includes("aneeqha tarannum s") || lowerMessage.includes("aneeqha tarannum")) {
        return "Aneeqha Tarannum S was a teammate of D. D. Aishwarya for an internal award and Monika B S at Vidya Vikas Institute of Engineering & Technology, Mysore.";
    }
    if (lowerMessage.includes("venkanna e") || lowerMessage.includes("venkanna")) {
        return "Venkanna E participated in the Active Group Participation at Siddhartha Academy.";
    }
    if (lowerMessage.includes("siddesh b s") || lowerMessage.includes("siddesh")) {
        return "Siddesh B S was awarded active participation at BMS College of Engineering, Bengaluru.";
    }
    if (lowerMessage.includes("ritu patnaik") || lowerMessage.includes("ritu")) {
        return "Ritu Patnaik was part of the Best Project-winning team at NMIT Bengaluru.";
    }
    if (lowerMessage.includes("gagan k. s") || lowerMessage.includes("gagan")) {
        return "Gagan K. S was part of the YESIST12 winning team and the Best Project-winning team at NMIT Bengaluru.";
    }
    if (lowerMessage.includes("jiteesh p") || lowerMessage.includes("jiteesh")) {
        return "Jiteesh P was part of the YESIST12 winning team and the Best Project-winning team at NMIT Bengaluru.";
    }
    if (lowerMessage.includes("kanti prasad j") || lowerMessage.includes("kanti prasad")) {
        return "Kanti Prasad J was part of the YESIST12 winning team and won the Best Project award at Nitte Meenakshi Institute of Technology, Bengaluru.";
    }
    if (lowerMessage.includes("poonnacha c. n") || lowerMessage.includes("poonnacha")) {
        return "Poonnacha C. N was part of the YESIST12 winning team and the Best Project-winning team at NMIT Bengaluru.";
    }

    // --- Homepage Information ---
    if (
      lowerMessage.includes("what is ieee presidency university") ||
      lowerMessage.includes("ieee") ||
      lowerMessage.includes("tell me about ieee presidency university") ||
      lowerMessage.includes("info about ieee") ||
      lowerMessage.includes("explain ieee presidency university") ||
      lowerMessage.includes("what's ieee") ||
      lowerMessage.includes("presidency university ieee chapter details") ||
      lowerMessage.includes("ieee at presidency uni") ||
      lowerMessage.includes("describe ieee presidency university") ||
      lowerMessage.includes("what about ieee") ||
      lowerMessage.includes("ieee presidency university overview") ||
      lowerMessage.includes("can you tell me about ieee") ||
      lowerMessage.includes("ieee presidency university student branch") ||
      lowerMessage.includes("what is the ieee chapter at presidency university") ||
      lowerMessage.includes("presidency university ieee")
    ) {
      return "IEEE Presidency University is the student branch of IEEE at Presidency University, Bengaluru, where students grow through projects, events, and global opportunities.";
    }
    if (
      lowerMessage.includes("what is ieee") ||
      lowerMessage.includes("about ieee") ||
      lowerMessage.includes("tell me about ieee") ||
      lowerMessage.includes("explain ieee") ||
      lowerMessage.includes("what's ieee") ||
      lowerMessage.includes("ieee definition") ||
      lowerMessage.includes("what does ieee stand for") ||
      lowerMessage.includes("ieee overview") ||
      lowerMessage.includes("describe ieee") ||
      lowerMessage.includes("info on ieee") ||
      lowerMessage.includes("what is eye-triple-e") ||
      lowerMessage.includes("world's largest technical organization") ||
      lowerMessage.includes("ieee technical organization") ||
      lowerMessage.includes("ieee global support") ||
      lowerMessage.includes("ieee innovation and learning")
    ) {
      return "IEEE is the world's largest technical organization for engineers and tech enthusiasts. It supports technology, innovation, and learning across the globe.";
    }
    if (
      (lowerMessage.includes("can i join ieee") && lowerMessage.includes("not technical")) ||
      lowerMessage.includes("non-technical background") ||
      lowerMessage.includes("do i need a tech background to join") ||
      lowerMessage.includes("is ieee for non-tech students") ||
      lowerMessage.includes("can arts students join ieee") ||
      lowerMessage.includes("is ieee open to all fields") ||
      lowerMessage.includes("do i need engineering background") ||
      lowerMessage.includes("can anyone join ieee") ||
      lowerMessage.includes("is ieee welcoming to all disciplines") ||
      lowerMessage.includes("how inclusive is ieee") ||
      lowerMessage.includes("ieee for diverse backgrounds") ||
      lowerMessage.includes("can humanities students join") ||
      lowerMessage.includes("is ieee only for engineers") ||
      lowerMessage.includes("do i need to be a cs student to join") ||
      lowerMessage.includes("is ieee for everyone")
    ) {
      return "Yes! IEEE is for everyone curious about technology and innovation, regardless of their field.";
    }
    if (
      lowerMessage.includes("what does the chapter do") ||
      lowerMessage.includes("chapter activities") ||
      lowerMessage.includes("ieee chapter functions") ||
      lowerMessage.includes("what activities does ieee organize") ||
      lowerMessage.includes("ieee presidency university chapter roles") ||
      lowerMessage.includes("what kind of work does the chapter do") ||
      lowerMessage.includes("ieee chapter responsibilities") ||
      lowerMessage.includes("what are the main functions of the chapter") ||
      lowerMessage.includes("ieee chapter initiatives") ||
      lowerMessage.includes("what services does the chapter provide") ||
      lowerMessage.includes("chapter's main focus") ||
      lowerMessage.includes("what does ieee offer") ||
      lowerMessage.includes("ieee programs") ||
      lowerMessage.includes("what workshops does the chapter hold") ||
      lowerMessage.includes("ieee competitions")
    ) {
      return "The chapter organizes workshops, projects, competitions, research activities, and networking events.";
    }
    if (
      lowerMessage.includes("what makes ieee different") ||
      lowerMessage.includes("ieee unique") ||
      lowerMessage.includes("how is ieee different from other clubs") ||
      lowerMessage.includes("ieee vs other student organizations") ||
      lowerMessage.includes("what sets ieee apart") ||
      lowerMessage.includes("ieee competitive advantage") ||
      lowerMessage.includes("why choose ieee over other clubs") ||
      lowerMessage.includes("ieee distinguishing factors") ||
      lowerMessage.includes("ieee global recognition") ||
      lowerMessage.includes("international conferences ieee") ||
      lowerMessage.includes("ieee certifications") ||
      lowerMessage.includes("ieee mentorship opportunities") ||
      lowerMessage.includes("ieee publishing opportunities") ||
      lowerMessage.includes("access to ieee resources") ||
      lowerMessage.includes("ieee global network")
    ) {
      return "IEEE is globally recognized. It offers access to international conferences, certifications, mentorship, and publishing opportunities.";
    }
    if (
      lowerMessage.includes("how many students") ||
      lowerMessage.includes("active members") ||
      lowerMessage.includes("number of students") ||
      lowerMessage.includes("ieee student count") ||
      lowerMessage.includes("how large is ieee") ||
      lowerMessage.includes("student membership numbers") ||
      lowerMessage.includes("current member count") ||
      lowerMessage.includes("ieee membership size") ||
      lowerMessage.includes("how many people are in ieee") ||
      lowerMessage.includes("student enrollment in ieee") ||
      lowerMessage.includes("ieee active member count") ||
      lowerMessage.includes("growth of ieee membership") ||
      lowerMessage.includes("ieee student base") ||
      lowerMessage.includes("total ieee members") ||
      lowerMessage.includes("size of ieee presidency university chapter")
    ) {
      return "There are over 90 active members and the number keeps growing!";
    }
    if (
      lowerMessage.includes("how many events hosted") ||
      lowerMessage.includes("events count") ||
      lowerMessage.includes("ieee event numbers") ||
      lowerMessage.includes("total events organized") ||
      lowerMessage.includes("number of events by ieee") ||
      lowerMessage.includes("ieee event history") ||
      lowerMessage.includes("how many programs has ieee held") ||
      lowerMessage.includes("ieee event statistics") ||
      lowerMessage.includes("count of ieee activities") ||
      lowerMessage.includes("ieee past events count") ||
      lowerMessage.includes("how many workshops ieee") ||
      lowerMessage.includes("ieee event frequency") ||
      lowerMessage.includes("record of ieee events") ||
      lowerMessage.includes("ieee event tally") ||
      lowerMessage.includes("total number of events")
    ) {
      return "The chapter has organized over 55 events across technical, social, and academic categories.";
    }
    if (
      lowerMessage.includes("achievements of ieee") ||
      lowerMessage.includes("ieee achievements") ||
      lowerMessage.includes("what has ieee achieved") ||
      lowerMessage.includes("ieee accomplishments") ||
      lowerMessage.includes("ieee awards won") ||
      lowerMessage.includes("successes of ieee") ||
      lowerMessage.includes("ieee project completions") ||
      lowerMessage.includes("highlights of ieee") ||
      lowerMessage.includes("ieee recognition") ||
      lowerMessage.includes("what awards has ieee received") ||
      lowerMessage.includes("ieee track record") ||
      lowerMessage.includes("ieee milestones") ||
      lowerMessage.includes("ieee success stories") ||
      lowerMessage.includes("ieee notable achievements") ||
      lowerMessage.includes("summary of ieee achievements")
    ) {
      return "The chapter has won more than 25 awards and completed 10+ innovative projects.";
    }
    if (
      lowerMessage.includes("mission of ieee presidency university") ||
      lowerMessage.includes("ieee mission") ||
      lowerMessage.includes("what is ieee's mission") ||
      lowerMessage.includes("ieee purpose statement") ||
      lowerMessage.includes("ieee goals") ||
      lowerMessage.includes("what drives ieee") ||
      lowerMessage.includes("ieee objectives") ||
      lowerMessage.includes("ieee vision and mission") ||
      lowerMessage.includes("ieee core purpose") ||
      lowerMessage.includes("ieee values and mission") ||
      lowerMessage.includes("ieee aims") ||
      lowerMessage.includes("ieee commitment") ||
      lowerMessage.includes("ieee philosophy") ||
      lowerMessage.includes("ieee guiding principles") ||
      lowerMessage.includes("what is the aim of ieee")
    ) {
      return "To use technology for humanity by promoting learning, leadership, and innovation.";
    }
    if (
      lowerMessage.includes("core values") ||
      lowerMessage.includes("chapter values") ||
      lowerMessage.includes("ieee values") ||
      lowerMessage.includes("what are ieee's values") ||
      lowerMessage.includes("ieee guiding values") ||
      lowerMessage.includes("ieee ethical values") ||
      lowerMessage.includes("ieee principles") ||
      lowerMessage.includes("what does ieee stand for") ||
      lowerMessage.includes("ieee organizational values") ||
      lowerMessage.includes("ieee code of conduct") ||
      lowerMessage.includes("ieee foundational values") ||
      lowerMessage.includes("ieee moral compass") ||
      lowerMessage.includes("ieee integrity and professionalism") ||
      lowerMessage.includes("ieee societal impact commitment") ||
      lowerMessage.includes("ieee innovation values")
    ) {
      return "Our core values are innovation, integrity, professionalism, and commitment to positive societal impact.";
    }
    if (
      lowerMessage.includes("how to become a member") ||
      lowerMessage.includes("join community") ||
      lowerMessage.includes("how to join") ||
      lowerMessage.includes("register") ||
      lowerMessage.includes("membership process") ||
      lowerMessage.includes("steps to join") ||
      lowerMessage.includes("how do i sign up") ||
      lowerMessage.includes("enroll in ieee") ||
      lowerMessage.includes("become an ieee member") ||
      lowerMessage.includes("ieee registration") ||
      lowerMessage.includes("join ieee presidency university") ||
      lowerMessage.includes("sign up for ieee") ||
      lowerMessage.includes("ieee membership application") ||
      lowerMessage.includes("ieee new member")
    ) {
      return "Just click 'Join Our Community' on the homepage and follow the steps.";
    }
    if (
      lowerMessage.includes("fee to join") ||
      lowerMessage.includes("membership fee") ||
      lowerMessage.includes("cost to join") ||
      lowerMessage.includes("is there a membership fee") ||
      lowerMessage.includes("how much does it cost to join ieee") ||
      lowerMessage.includes("ieee fees") ||
      lowerMessage.includes("annual membership cost") ||
      lowerMessage.includes("is ieee membership paid") ||
      lowerMessage.includes("what is the yearly fee") ||
      lowerMessage.includes("are there any free memberships") ||
      lowerMessage.includes("ieee global resources cost") ||
      lowerMessage.includes("ieee tools access fee") ||
      lowerMessage.includes("ieee events cost") ||
      lowerMessage.includes("ieee membership pricing")
    ) {
      return "Yes, there's a small yearly fee. In return, you get access to IEEE global resources, tools, and events. Some memberships may be free for a limited number of students based on eligibility or sponsorship.";
    }
    if (
      lowerMessage.includes("what do i get after joining") ||
      lowerMessage.includes("benefits of joining") ||
      lowerMessage.includes("ieee member benefits") ||
      lowerMessage.includes("what are the perks of ieee membership") ||
      lowerMessage.includes("advantages of joining ieee") ||
      lowerMessage.includes("ieee membership advantages") ||
      lowerMessage.includes("what opportunities does ieee offer members") ||
      lowerMessage.includes("ieee member privileges") ||
      lowerMessage.includes("what do members receive") ||
      lowerMessage.includes("ieee member access") ||
      lowerMessage.includes("hands-on workshops ieee") ||
      lowerMessage.includes("ieee certification programs") ||
      lowerMessage.includes("ieee leadership roles") ||
      lowerMessage.includes("ieee international exposure") ||
      lowerMessage.includes("ieee projects for members")
    ) {
      return "You get hands-on workshops, certification programs, projects, leadership roles, and international exposure.";
    }
    if (
      lowerMessage.includes("help me get a job") ||
      lowerMessage.includes("internships") ||
      lowerMessage.includes("placements") ||
      lowerMessage.includes("career help") ||
      lowerMessage.includes("ieee job assistance") ||
      lowerMessage.includes("does ieee help with careers") ||
      lowerMessage.includes("ieee for employment") ||
      lowerMessage.includes("ieee resume boost") ||
      lowerMessage.includes("ieee industry mentors") ||
      lowerMessage.includes("ieee placement support") ||
      lowerMessage.includes("ieee for standing out in interviews") ||
      lowerMessage.includes("ieee for real-world innovation") ||
      lowerMessage.includes("ieee for recruiters") ||
      lowerMessage.includes("ieee career development") ||
      lowerMessage.includes("ieee job opportunities")
    ) {
      return "Definitely. It boosts your resume, connects you with industry mentors, and helps you stand out in placements. Recruiters love to see real-world, award-winning innovation.";
    }
    if (
      lowerMessage.includes("why is ieee important for students") ||
      lowerMessage.includes("ieee student importance") ||
      lowerMessage.includes("significance of ieee for students") ||
      lowerMessage.includes("how does ieee benefit students") ||
      lowerMessage.includes("ieee student benefits") ||
      lowerMessage.includes("ieee future-ready") ||
      lowerMessage.includes("ieee technical skills") ||
      lowerMessage.includes("ieee leadership development") ||
      lowerMessage.includes("ieee global networks") ||
      lowerMessage.includes("why should students join ieee") ||
      lowerMessage.includes("ieee student growth") ||
      lowerMessage.includes("ieee student career readiness") ||
      lowerMessage.includes("ieee student impact") ||
      lowerMessage.includes("ieee student professional growth") ||
      lowerMessage.includes("ieee student skill enhancement")
    ) {
      return "It helps you become future-ready with technical skills, leadership, and global networks.";
    }

    // --- About Us Page ---
    if (
      lowerMessage.includes("purpose of ieee presidency university about us") ||
      lowerMessage.includes("ieee purpose") ||
      lowerMessage.includes("aim of ieee chapter") ||
      lowerMessage.includes("what is the goal of ieee") ||
      lowerMessage.includes("ieee mission statement") ||
      lowerMessage.includes("ieee educational focus") ||
      lowerMessage.includes("ieee innovation focus") ||
      lowerMessage.includes("ieee professional growth") ||
      lowerMessage.includes("ieee student empowerment") ||
      lowerMessage.includes("ieee technology advancement") ||
      lowerMessage.includes("what is ieee trying to achieve") ||
      lowerMessage.includes("ieee core purpose about us") ||
      lowerMessage.includes("ieee educational objectives") ||
      lowerMessage.includes("ieee innovation objectives") ||
      lowerMessage.includes("ieee growth objectives")
    ) {
      return "To empower students in advancing technology through education, innovation, and professional growth.";
    }
    if (
      lowerMessage.includes("when was the chapter established") ||
      lowerMessage.includes("chapter establishment date") ||
      lowerMessage.includes("ieee founding year") ||
      lowerMessage.includes("when did ieee start") ||
      lowerMessage.includes("ieee inception date") ||
      lowerMessage.includes("history of ieee establishment") ||
      lowerMessage.includes("how many members when ieee started") ||
      lowerMessage.includes("ieee initial members") ||
      lowerMessage.includes("ieee beginning") ||
      lowerMessage.includes("ieee founding year and members") ||
      lowerMessage.includes("when was ieee presidency university formed") ||
      lowerMessage.includes("ieee founding details") ||
      lowerMessage.includes("ieee establishment history") ||
      lowerMessage.includes("ieee initial count") ||
      lowerMessage.includes("ieee founding information")
    ) {
      return "The IEEE chapter at Presidency University was established in 2023, starting with just 10 members.";
    }
    if (
      lowerMessage.includes("strategic focus") ||
      lowerMessage.includes("ieee focus") ||
      lowerMessage.includes("what does strategic focus mean") ||
      lowerMessage.includes("ieee strategic objectives") ||
      lowerMessage.includes("ieee innovation strategy") ||
      lowerMessage.includes("ieee leadership strategy") ||
      lowerMessage.includes("ieee global engineering trends") ||
      lowerMessage.includes("ieee strategic alignment") ||
      lowerMessage.includes("ieee key focus areas") ||
      lowerMessage.includes("ieee strategic direction") ||
      lowerMessage.includes("ieee core strategy") ||
      lowerMessage.includes("ieee future focus") ||
      lowerMessage.includes("ieee innovation and leadership") ||
      lowerMessage.includes("ieee engineering trends") ||
      lowerMessage.includes("ieee strategic goals")
    ) {
      return "It means focusing on innovation, leadership, and aligning students with global engineering trends.";
    }
    if (
      lowerMessage.includes("institutional contribution") ||
      lowerMessage.includes("chapter contribution") ||
      lowerMessage.includes("ieee contribution to university") ||
      lowerMessage.includes("how does ieee help the university") ||
      lowerMessage.includes("ieee academic contribution") ||
      lowerMessage.includes("ieee industry bridge") ||
      lowerMessage.includes("ieee research bridge") ||
      lowerMessage.includes("ieee technical ecosystem boost") ||
      lowerMessage.includes("ieee university impact") ||
      lowerMessage.includes("ieee role in academia") ||
      lowerMessage.includes("ieee industry connection") ||
      lowerMessage.includes("ieee research connection") ||
      lowerMessage.includes("ieee university partnership") ||
      lowerMessage.includes("ieee academic and industry link") ||
      lowerMessage.includes("ieee technical growth")
    ) {
      return "The chapter bridges industry, academia, and research to boost the university's technical ecosystem.";
    }
    if (
      lowerMessage.includes("ethical foundations") ||
      lowerMessage.includes("ieee ethics") ||
      lowerMessage.includes("what are ieee's ethical foundations") ||
      lowerMessage.includes("ieee integrity") ||
      lowerMessage.includes("ieee professionalism") ||
      lowerMessage.includes("ieee responsible technology use") ||
      lowerMessage.includes("ieee societal benefit") ||
      lowerMessage.includes("ieee ethical principles") ||
      lowerMessage.includes("ieee moral guidelines") ||
      lowerMessage.includes("ieee ethical code") ||
      lowerMessage.includes("ieee responsible innovation") ||
      lowerMessage.includes("ieee technology for society") ||
      lowerMessage.includes("ieee ethical conduct") ||
      lowerMessage.includes("ieee integrity and professionalism") ||
      lowerMessage.includes("ieee technology responsibility")
    ) {
      return "Integrity, professionalism, and using technology responsibly for the benefit of society.";
    }
    if (
      lowerMessage.includes("what we do") ||
      lowerMessage.includes("kinds of activities") ||
      lowerMessage.includes("about us activities") ||
      lowerMessage.includes("ieee activities list") ||
      lowerMessage.includes("what programs does ieee offer") ||
      lowerMessage.includes("ieee workshops") ||
      lowerMessage.includes("ieee research activities") ||
      lowerMessage.includes("ieee innovation labs") ||
      lowerMessage.includes("ieee industry talks") ||
      lowerMessage.includes("ieee hackathons") ||
      lowerMessage.includes("ieee career development") ||
      lowerMessage.includes("ieee event types about us") ||
      lowerMessage.includes("ieee program offerings") ||
      lowerMessage.includes("ieee technical events") ||
      lowerMessage.includes("ieee professional events")
    ) {
      return "We conduct technical workshops, research, innovation labs, industry talks, hackathons, and career development.";
    }
    if (
      lowerMessage.includes("significance of innovation labs") ||
      lowerMessage.includes("innovation labs") ||
      lowerMessage.includes("what are innovation labs for") ||
      lowerMessage.includes("ieee labs purpose") ||
      lowerMessage.includes("how do innovation labs help students") ||
      lowerMessage.includes("ieee prototyping") ||
      lowerMessage.includes("ieee new ideas testing") ||
      lowerMessage.includes("ieee advanced tools") ||
      lowerMessage.includes("ieee facilities for innovation") ||
      lowerMessage.includes("ieee lab benefits") ||
      lowerMessage.includes("ieee innovation ecosystem") ||
      lowerMessage.includes("ieee creative spaces") ||
      lowerMessage.includes("ieee hands-on innovation") ||
      lowerMessage.includes("ieee research and development labs") ||
      lowerMessage.includes("ieee experimental labs")
    ) {
      return "These labs help students prototype and test new ideas using advanced tools and facilities.";
    }
    if (
      lowerMessage.includes("networking opportunities") ||
      lowerMessage.includes("industry connect") ||
      lowerMessage.includes("ieee networking") ||
      lowerMessage.includes("does ieee offer networking") ||
      lowerMessage.includes("ieee professional connections") ||
      lowerMessage.includes("ieee industry interaction") ||
      lowerMessage.includes("ieee real-world networks") ||
      lowerMessage.includes("ieee connect with professionals") ||
      lowerMessage.includes("ieee career networking") ||
      lowerMessage.includes("ieee alumni network") ||
      lowerMessage.includes("ieee mentorship opportunities") ||
      lowerMessage.includes("ieee professional development networking") ||
      lowerMessage.includes("ieee industry engagement") ||
      lowerMessage.includes("ieee professional growth through networking") ||
      lowerMessage.includes("ieee industry events")
    ) {
      return "Yes! 'Industry Connect' programs let students interact with professionals and build real-world networks.";
    }
    if (
      lowerMessage.includes("past achievements of ieee about us") ||
      lowerMessage.includes("about us past achievements") ||
      lowerMessage.includes("ieee historical achievements") ||
      lowerMessage.includes("ieee key milestones about us") ||
      lowerMessage.includes("ieee significant past events") ||
      lowerMessage.includes("ieee early achievements") ||
      lowerMessage.includes("ieee founding events") ||
      lowerMessage.includes("ieee conference history") ||
      lowerMessage.includes("ieee wicas event history") ||
      lowerMessage.includes("ieee iot and ai session history") ||
      lowerMessage.includes("ieee first workshop") ||
      lowerMessage.includes("ieee international conference details") ||
      lowerMessage.includes("ieee wicas details") ||
      lowerMessage.includes("ieee iot ai history") ||
      lowerMessage.includes("ieee initial accomplishments")
    ) {
      return "Our past achievements include: First hands-on workshop in July 2023, Hosted 1st International IEEE Conference, Conducted WiCAS (Women in Circuits and Systems) event, and Organized sessions on IoT and AI in 2025.";
    }
    if (
      lowerMessage.includes("what is wicas") ||
      lowerMessage.includes("women in circuits and systems") ||
      lowerMessage.includes("about wicas") ||
      lowerMessage.includes("explain wicas") ||
      lowerMessage.includes("wicas meaning") ||
      lowerMessage.includes("ieee wicas initiative") ||
      lowerMessage.includes("wicas purpose") ||
      lowerMessage.includes("wicas goals") ||
      lowerMessage.includes("wicas women empowerment") ||
      lowerMessage.includes("wicas technology innovation") ||
      lowerMessage.includes("wicas collaboration") ||
      lowerMessage.includes("wicas mission") ||
      lowerMessage.includes("wicas in ieee") ||
      lowerMessage.includes("what is the wicas event for") ||
      lowerMessage.includes("wicas event significance")
    ) {
      return "'Women in Circuits and Systems' is an IEEE initiative to empower women in technology through innovation and collaboration.";
    }
    if (
      lowerMessage.includes("iot unplugged event") ||
      lowerMessage.includes("about iot unplugged") ||
      lowerMessage.includes("explain iot unplugged") ||
      lowerMessage.includes("what happened at iot unplugged") ||
      lowerMessage.includes("iot unplugged details") ||
      lowerMessage.includes("iot unplugged workshop content") ||
      lowerMessage.includes("iot unplugged speakers") ||
      lowerMessage.includes("iot unplugged demos") ||
      lowerMessage.includes("iot unplugged hands-on") ||
      lowerMessage.includes("iot unplugged exploration") ||
      lowerMessage.includes("iot unplugged technology focus") ||
      lowerMessage.includes("iot unplugged event description") ||
      lowerMessage.includes("iot unplugged highlights") ||
      lowerMessage.includes("iot unplugged key takeaways") ||
      lowerMessage.includes("iot unplugged expert talks")
    ) {
      return "It was a hands-on exploration of IoT technology with expert speakers and real demos.";
    }
    if (
      lowerMessage.includes("deep learning & llms session") ||
      lowerMessage.includes("about deep learning session") ||
      lowerMessage.includes("explain deep learning llms") ||
      lowerMessage.includes("what was the llms session about") ||
      lowerMessage.includes("deep learning llms content") ||
      lowerMessage.includes("deep learning llms introduction") ||
      lowerMessage.includes("deep learning llms neural networks") ||
      lowerMessage.includes("deep learning llms large language models") ||
      lowerMessage.includes("deep learning llms modern ai") ||
      lowerMessage.includes("deep learning llms session overview") ||
      lowerMessage.includes("deep learning llms topics") ||
      lowerMessage.includes("deep learning llms key concepts") ||
      lowerMessage.includes("deep learning llms ai applications") ||
      lowerMessage.includes("deep learning llms session details") ||
      lowerMessage.includes("deep learning llms learning objectives")
    ) {
      return "It introduces students to neural networks and Large Language Models used in modern AI.";
    }
    if (
      lowerMessage.includes("who can take part in research projects") ||
      lowerMessage.includes("research projects participation") ||
      lowerMessage.includes("eligibility for research projects") ||
      lowerMessage.includes("can any student join research projects") ||
      lowerMessage.includes("ieee research project requirements") ||
      lowerMessage.includes("ieee research project eligibility") ||
      lowerMessage.includes("ieee research project passion") ||
      lowerMessage.includes("ieee research project technology") ||
      lowerMessage.includes("ieee research project problem solving") ||
      lowerMessage.includes("ieee research project student involvement") ||
      lowerMessage.includes("ieee research project criteria") ||
      lowerMessage.includes("ieee research project open to whom") ||
      lowerMessage.includes("ieee research project participation rules") ||
      lowerMessage.includes("ieee research project student access") ||
      lowerMessage.includes("ieee research project opportunities")
    ) {
      return "Any student member with a passion for solving real-world challenges through technology.";
    }
    if (
      lowerMessage.includes("how do competitions help students") ||
      lowerMessage.includes("competitions benefits") ||
      lowerMessage.includes("advantages of ieee competitions") ||
      lowerMessage.includes("how do hackathons benefit students") ||
      lowerMessage.includes("ieee competitions impact") ||
      lowerMessage.includes("ieee creativity") ||
      lowerMessage.includes("ieee teamwork") ||
      lowerMessage.includes("ieee practical problem-solving") ||
      lowerMessage.includes("ieee competition learning") ||
      lowerMessage.includes("ieee skill development through competitions") ||
      lowerMessage.includes("ieee competition advantages") ||
      lowerMessage.includes("ieee hackathon benefits") ||
      lowerMessage.includes("ieee student growth competitions") ||
      lowerMessage.includes("ieee competition experience") ||
      lowerMessage.includes("ieee competition skill enhancement")
    ) {
      return "Competitions and hackathons encourage creativity, teamwork, and practical problem-solving.";
    }
    if (
      lowerMessage.includes("activities only for senior students") ||
      lowerMessage.includes("all students participate") ||
      lowerMessage.includes("are ieee activities only for final year") ||
      lowerMessage.includes("ieee activities for all years") ||
      lowerMessage.includes("ieee activities for all departments") ||
      lowerMessage.includes("is ieee inclusive of all students") ||
      lowerMessage.includes("who can participate in ieee activities") ||
      lowerMessage.includes("ieee student participation policy") ||
      lowerMessage.includes("ieee activities open to everyone") ||
      lowerMessage.includes("ieee student eligibility for activities") ||
      lowerMessage.includes("ieee activities for junior students") ||
      lowerMessage.includes("ieee activities for first year") ||
      lowerMessage.includes("ieee activities for all branches") ||
      lowerMessage.includes("ieee activities for all academic levels") ||
      lowerMessage.includes("ieee activities accessibility")
    ) {
      return "No! Students from all years and departments can participate and benefit.";
    }
    if (
      lowerMessage.includes("ieee provide certification") ||
      lowerMessage.includes("ieee certificates") ||
      lowerMessage.includes("does ieee offer certificates") ||
      lowerMessage.includes("ieee certification programs") ||
      lowerMessage.includes("ieee workshop certificates") ||
      lowerMessage.includes("ieee globally recognized certificates") ||
      lowerMessage.includes("ieee program certificates") ||
      lowerMessage.includes("ieee certificate benefits") ||
      lowerMessage.includes("ieee certificate recognition") ||
      lowerMessage.includes("ieee certificate validity") ||
      lowerMessage.includes("ieee certificate types") ||
      lowerMessage.includes("ieee certificate availability") ||
      lowerMessage.includes("ieee certificate value") ||
      lowerMessage.includes("ieee certificate for participation") ||
      lowerMessage.includes("ieee certificate for completion")
    ) {
      return "Yes, many workshops and programs offer certificates that are globally recognized.";
    }
    if (
      lowerMessage.includes("professional development important") ||
      lowerMessage.includes("ieee professional development") ||
      lowerMessage.includes("why is professional development crucial") ||
      lowerMessage.includes("how does ieee help with professional growth") ||
      lowerMessage.includes("ieee career preparation") ||
      lowerMessage.includes("ieee skill-building for careers") ||
      lowerMessage.includes("ieee real-world exposure for careers") ||
      lowerMessage.includes("ieee student career readiness") ||
      lowerMessage.includes("ieee professional growth benefits") ||
      lowerMessage.includes("ieee career enhancement") ||
      lowerMessage.includes("ieee professional skills") ||
      lowerMessage.includes("ieee career opportunities") ||
      lowerMessage.includes("ieee job readiness") ||
      lowerMessage.includes("ieee industry insights") ||
      lowerMessage.includes("ieee career guidance")
    ) {
      return "It helps students prepare for careers through skill-building and real-world exposure.";
    }

    // --- Achievements Section ---
    if (
      lowerMessage.includes("achievements of ieee presidency university") ||
      lowerMessage.includes("ieee achievements") ||
      lowerMessage.includes("what has ieee achieved") ||
      lowerMessage.includes("ieee accomplishments") ||
      lowerMessage.includes("ieee awards won") ||
      lowerMessage.includes("successes of ieee") ||
      lowerMessage.includes("ieee project completions") ||
      lowerMessage.includes("highlights of ieee") ||
      lowerMessage.includes("ieee recognition") ||
      lowerMessage.includes("what awards has ieee received") ||
      lowerMessage.includes("ieee track record") ||
      lowerMessage.includes("ieee milestones") ||
      lowerMessage.includes("ieee success stories") ||
      lowerMessage.includes("ieee notable achievements") ||
      lowerMessage.includes("summary of ieee achievements")
    ) {
      return "The chapter has received 25+ awards, published 15+ research papers, and completed 20+ successful projects.";
    }
    if (
      lowerMessage.includes("has ieee presidency university won any awards") ||
      lowerMessage.includes("ieee awards won") ||
      lowerMessage.includes("ieee national awards") ||
      lowerMessage.includes("ieee international awards") ||
      lowerMessage.includes("ieee innovation awards") ||
      lowerMessage.includes("ieee leadership awards") ||
      lowerMessage.includes("ieee project excellence awards") ||
      lowerMessage.includes("ieee award recognition") ||
      lowerMessage.includes("ieee award history") ||
      lowerMessage.includes("ieee award categories") ||
      lowerMessage.includes("ieee award types") ||
      lowerMessage.includes("ieee award winning status") ||
      lowerMessage.includes("ieee award achievements") ||
      lowerMessage.includes("ieee award winning chapter") ||
      lowerMessage.includes("ieee award recognition details")
    ) {
      return "Yes! The chapter has won national and international awards for innovation, leadership, and project excellence.";
    }
    if (
      lowerMessage.includes("do only students win awards or professors too") ||
      lowerMessage.includes("who wins awards at ieee") ||
      lowerMessage.includes("student and professor awards") ||
      lowerMessage.includes("faculty recognition ieee") ||
      lowerMessage.includes("ieee award recipients") ||
      lowerMessage.includes("ieee faculty awards") ||
      lowerMessage.includes("ieee student awards") ||
      lowerMessage.includes("ieee award contributions") ||
      lowerMessage.includes("ieee award recognition for faculty") ||
      lowerMessage.includes("ieee award recognition for students") ||
      lowerMessage.includes("ieee award recognition for both") ||
      lowerMessage.includes("ieee award recognition for outstanding contributions") ||
      lowerMessage.includes("ieee award recognition for excellence") ||
      lowerMessage.includes("ieee award recognition for work") ||
      lowerMessage.includes("ieee award recognition for achievements")
    ) {
      return "Both students and professors have been recognized for their outstanding contributions to IEEE.";
    }
    if (
      lowerMessage.includes("what is the biggest award won by ieee presidency students") ||
      lowerMessage.includes("ieee biggest award") ||
      lowerMessage.includes("top award for ieee students") ||
      lowerMessage.includes("ieee yesist12 prelims award") ||
      lowerMessage.includes("malaysia grand finale qualification") ||
      lowerMessage.includes("ieee best project award") ||
      lowerMessage.includes("ieee yesist12 achievement") ||
      lowerMessage.includes("ieee international competition award") ||
      lowerMessage.includes("ieee top project recognition") ||
      lowerMessage.includes("ieee student highest honor") ||
      lowerMessage.includes("ieee most significant award") ||
      lowerMessage.includes("ieee grand finale qualification") ||
      lowerMessage.includes("ieee yesist12 success") ||
      lowerMessage.includes("ieee award for innovation") ||
      lowerMessage.includes("ieee award for project excellence")
    ) {
      return "They won the Best Project Award at IEEE YESIST12 Prelims and qualified for the Malaysia Grand Finale.";
    }
    if (
      lowerMessage.includes("have students from this ieee chapter represented india internationally") ||
      lowerMessage.includes("ieee international representation") ||
      lowerMessage.includes("ieee students abroad") ||
      lowerMessage.includes("ieee global representation") ||
      lowerMessage.includes("ieee india representation") ||
      lowerMessage.includes("ieee yesist12 international") ||
      lowerMessage.includes("ieee malaysia finale") ||
      lowerMessage.includes("ieee international competition") ||
      lowerMessage.includes("ieee global presence") ||
      lowerMessage.includes("ieee international recognition") ||
      lowerMessage.includes("ieee global exposure for students") ||
      lowerMessage.includes("ieee international honors") ||
      lowerMessage.includes("ieee global awards") ||
      lowerMessage.includes("ieee international participation") ||
      lowerMessage.includes("ieee global achievements")
    ) {
      return "Yes! They will represent India at the YESIST12 Grand Finale in Malaysia in 2025.";
    }
    if (
      lowerMessage.includes("are students involved in real innovation") ||
      lowerMessage.includes("ieee student innovation") ||
      lowerMessage.includes("ieee real innovation") ||
      lowerMessage.includes("ieee smart systems development") ||
      lowerMessage.includes("ieee drone development") ||
      lowerMessage.includes("ieee ai innovation") ||
      lowerMessage.includes("ieee student projects innovation") ||
      lowerMessage.includes("ieee practical innovation") ||
      lowerMessage.includes("ieee student creativity in projects") ||
      lowerMessage.includes("ieee student technical innovation") ||
      lowerMessage.includes("ieee student problem solving innovation") ||
      lowerMessage.includes("ieee student applied innovation") ||
      lowerMessage.includes("ieee student cutting-edge projects") ||
      lowerMessage.includes("ieee student real-world solutions") ||
      lowerMessage.includes("ieee student tech development")
    ) {
      return "Absolutely! Many students have developed smart systems for safety, drones, AI, and more.";
    }
    if (
      lowerMessage.includes("what is yesist12") ||
      lowerMessage.includes("about yesist12") ||
      lowerMessage.includes("explain yesist12") ||
      lowerMessage.includes("yesist12 meaning") ||
      lowerMessage.includes("ieee yesist12 competition") ||
      lowerMessage.includes("yesist12 project competition") ||
      lowerMessage.includes("yesist12 for young innovators") ||
      lowerMessage.includes("yesist12 international competition") ||
      lowerMessage.includes("yesist12 prestige") ||
      lowerMessage.includes("yesist12 organized by ieee") ||
      lowerMessage.includes("yesist12 purpose") ||
      lowerMessage.includes("yesist12 focus") ||
      lowerMessage.includes("yesist12 global competition") ||
      lowerMessage.includes("yesist12 student competition") ||
      lowerMessage.includes("yesist12 innovation platform")
    ) {
      return "A prestigious international project competition organized by IEEE for young innovators.";
    }
    if (
      lowerMessage.includes("what kind of projects win awards at ieee") ||
      lowerMessage.includes("ieee award-winning projects") ||
      lowerMessage.includes("ieee project categories") ||
      lowerMessage.includes("ieee award criteria for projects") ||
      lowerMessage.includes("ieee projects recognized") ||
      lowerMessage.includes("ieee ai projects") ||
      lowerMessage.includes("ieee safety tech projects") ||
      lowerMessage.includes("ieee drone projects") ||
      lowerMessage.includes("ieee cybersecurity projects") ||
      lowerMessage.includes("ieee real-world problem-solving projects") ||
      lowerMessage.includes("ieee innovative projects") ||
      lowerMessage.includes("ieee award-winning solutions") ||
      lowerMessage.includes("ieee project excellence") ||
      lowerMessage.includes("ieee recognized project types") ||
      lowerMessage.includes("ieee successful project examples")
    ) {
      return "Projects that solve real-world problems using AI, safety tech, drones, and cybersecurity.";
    }
    if (
      lowerMessage.includes("is the smart vehicle project real") ||
      lowerMessage.includes("smart vehicle project authenticity") ||
      lowerMessage.includes("smart vehicle project functional") ||
      lowerMessage.includes("ieee smart vehicle project details") ||
      lowerMessage.includes("smart vehicle project awards") ||
      lowerMessage.includes("ieee safety system project") ||
      lowerMessage.includes("smart vehicle project existence") ||
      lowerMessage.includes("smart vehicle project validation") ||
      lowerMessage.includes("smart vehicle project actual") ||
      lowerMessage.includes("smart vehicle project working") ||
      lowerMessage.includes("smart vehicle project development") ||
      lowerMessage.includes("smart vehicle project recognition") ||
      lowerMessage.includes("smart vehicle project success") ||
      lowerMessage.includes("smart vehicle project impact") ||
      lowerMessage.includes("smart vehicle project student creation")
    ) {
      return "Yes, it's a fully functional safety system created by IEEE PU students that won multiple awards.";
    }
    if (
      lowerMessage.includes("has ieee participated in drone competitions") ||
      lowerMessage.includes("ieee drone competitions") ||
      lowerMessage.includes("ieee drone designs") ||
      lowerMessage.includes("ieee drone'acharya 2.0") ||
      lowerMessage.includes("ieee national hackathon drones") ||
      lowerMessage.includes("ieee drone showcases") ||
      lowerMessage.includes("ieee drone project participation") ||
      lowerMessage.includes("ieee drone innovation") ||
      lowerMessage.includes("ieee drone recognition") ||
      lowerMessage.includes("ieee drone event involvement") ||
      lowerMessage.includes("ieee drone technology focus") ||
      lowerMessage.includes("ieee drone design competition") ||
      lowerMessage.includes("ieee drone hackathon details") ||
      lowerMessage.includes("ieee drone achievements") ||
      lowerMessage.includes("ieee drone participation history")
    ) {
      return "Yes! Their students showcased drone designs at DRONE'ACHARYA 2.0, a national hackathon.";
    }
    if (
      lowerMessage.includes("can i be part of a winning team in ieee") ||
      lowerMessage.includes("join winning team ieee") ||
      lowerMessage.includes("how to join ieee winning team") ||
      lowerMessage.includes("eligibility for ieee winning team") ||
      lowerMessage.includes("ieee project teams") ||
      lowerMessage.includes("ieee competition teams") ||
      lowerMessage.includes("ieee active member projects") ||
      lowerMessage.includes("ieee passion and dedication for projects") ||
      lowerMessage.includes("ieee student involvement in winning teams") ||
      lowerMessage.includes("ieee student participation in competitions") ||
      lowerMessage.includes("ieee student project opportunities") ||
      lowerMessage.includes("ieee student competition opportunities") ||
      lowerMessage.includes("ieee student team formation") ||
      lowerMessage.includes("ieee student project collaboration") ||
      lowerMessage.includes("ieee student team membership")
    ) {
      return "Yes! Any active member with passion and dedication can join projects and competitions.";
    }
    if (
      lowerMessage.includes("are there any student volunteers recognized by ieee") ||
      lowerMessage.includes("ieee student volunteer recognition") ||
      lowerMessage.includes("aishwarya m ieee volunteer") ||
      lowerMessage.includes("ieee cas bangalore chapter volunteer") ||
      lowerMessage.includes("ieee student volunteer achievements") ||
      lowerMessage.includes("ieee student volunteer recognition details") ||
      lowerMessage.includes("ieee student volunteer status") ||
      lowerMessage.includes("ieee student volunteer contribution") ||
      lowerMessage.includes("ieee student volunteer role") ||
      lowerMessage.includes("ieee student volunteer acknowledgement") ||
      lowerMessage.includes("ieee student volunteer honors") ||
      lowerMessage.includes("ieee student volunteer awards") ||
      lowerMessage.includes("ieee student volunteer recognition year") ||
      lowerMessage.includes("ieee student volunteer chapter") ||
      lowerMessage.includes("ieee student volunteer selection")
    ) {
      return "Yes! M. Aishwarya was selected as a Student Volunteer for IEEE CAS Bangalore Chapter in 2025.";
    }
    if (
      lowerMessage.includes("what kind of support does ieee offer for students") ||
      lowerMessage.includes("ieee student support") ||
      lowerMessage.includes("ieee mentorship") ||
      lowerMessage.includes("ieee guidance") ||
      lowerMessage.includes("ieee competition access") ||
      lowerMessage.includes("ieee workshop opportunities") ||
      lowerMessage.includes("ieee certification opportunities") ||
      lowerMessage.includes("ieee student resources") ||
      lowerMessage.includes("ieee student development support") ||
      lowerMessage.includes("ieee student learning support") ||
      lowerMessage.includes("ieee student career support") ||
      lowerMessage.includes("ieee student skill support") ||
      lowerMessage.includes("ieee student growth support") ||
      lowerMessage.includes("ieee student academic support") ||
      lowerMessage.includes("ieee student professional support")
    ) {
      return "Mentorship, guidance, access to competitions, workshops, and certification opportunities.";
    }
    if (
      lowerMessage.includes("who won the ai hackathon in 2025") ||
      lowerMessage.includes("ai hackathon 2025 winners") ||
      lowerMessage.includes("ieee ai hackathon winners") ||
      lowerMessage.includes("keerthi m ai hackathon") ||
      lowerMessage.includes("mohammed zaid ai hackathon") ||
      lowerMessage.includes("suhas a. salunke ai hackathon") ||
      lowerMessage.includes("varsha shree ai hackathon") ||
      lowerMessage.includes("ai hackathon 2025 2nd prize") ||
      lowerMessage.includes("ieee ai hackathon team") ||
      lowerMessage.includes("ai hackathon 2025 results") ||
      lowerMessage.includes("ai hackathon 2025 top teams") ||
      lowerMessage.includes("ai hackathon 2025 recognized teams") ||
      lowerMessage.includes("ai hackathon 2025 participants") ||
      lowerMessage.includes("ai hackathon 2025 awardees") ||
      lowerMessage.includes("ai hackathon 2025 winning team members")
    ) {
      return "The team of Keerthi M, Mohammed Zaid S, Suhas A. Salunke, and Varsha Shree V S won 2nd prize.";
    }
    if (
      lowerMessage.includes("are ieee events only for toppers or tech geniuses") ||
      lowerMessage.includes("ieee events for all skill levels") ||
      lowerMessage.includes("do i need to be a genius to join ieee events") ||
      lowerMessage.includes("ieee events for everyone") ||
      lowerMessage.includes("ieee events inclusivity") ||
      lowerMessage.includes("ieee events for curious students") ||
      lowerMessage.includes("ieee events for creative students") ||
      lowerMessage.includes("ieee events for willing to learn") ||
      lowerMessage.includes("ieee events open to all") ||
      lowerMessage.includes("ieee events no skill barrier") ||
      lowerMessage.includes("ieee events for beginners") ||
      lowerMessage.includes("ieee events for experienced students") ||
      lowerMessage.includes("ieee events for diverse talents") ||
      lowerMessage.includes("ieee events for all academic levels") ||
      lowerMessage.includes("ieee events for all backgrounds")
    ) {
      return "No! Anyone with creativity, curiosity, and a willingness to learn is welcome.";
    }
    if (
      lowerMessage.includes("how can i join an ieee competition team") ||
      lowerMessage.includes("join ieee competition team") ||
      lowerMessage.includes("ieee competition team steps") ||
      lowerMessage.includes("how to get into ieee competition team") ||
      lowerMessage.includes("ieee active member for competitions") ||
      lowerMessage.includes("ieee project calls") ||
      lowerMessage.includes("ieee mentors for competitions") ||
      lowerMessage.includes("ieee competition team formation") ||
      lowerMessage.includes("ieee competition team opportunities") ||
      lowerMessage.includes("ieee competition team eligibility") ||
      lowerMessage.includes("ieee competition team involvement") ||
      lowerMessage.includes("ieee competition team sign up") ||
      lowerMessage.includes("ieee competition team participation") ||
      lowerMessage.includes("ieee competition team guidance") ||
      lowerMessage.includes("ieee competition team selection")
    ) {
      return "By becoming an active IEEE member, attending project calls, and working with mentors.";
    }
    if (
      lowerMessage.includes("who was part of the yesist12 winning team") ||
      lowerMessage.includes("yesist12 winning team members") ||
      lowerMessage.includes("ieee yesist12 team") ||
      lowerMessage.includes("gagan k. s yesist12") ||
      lowerMessage.includes("jiteesh p yesist12") ||
      lowerMessage.includes("kanti prasad j yesist12") ||
      lowerMessage.includes("poonnacha c. n yesist12") ||
      lowerMessage.includes("ritu patnaik yesist12") ||
      lowerMessage.includes("yesist12 team composition") ||
      lowerMessage.includes("yesist12 award winning team") ||
      lowerMessage.includes("yesist12 team names") ||
      lowerMessage.includes("yesist12 international team") ||
      lowerMessage.includes("yesist12 grand finale team") ||
      lowerMessage.includes("yesist12 project team") ||
      lowerMessage.includes("yesist12 student team")
    ) {
      return "Gagan K. S, Jiteesh P, Kanti Prasad J, Poonnacha C. N, and Ritu Patnaik.";
    }
    if (
      lowerMessage.includes("what kind of teamwork is involved in winning these awards") ||
      lowerMessage.includes("teamwork in ieee awards") ||
      lowerMessage.includes("ieee award-winning teamwork") ||
      lowerMessage.includes("ieee project collaboration") ||
      lowerMessage.includes("ieee coding for awards") ||
      lowerMessage.includes("ieee designing for awards") ||
      lowerMessage.includes("ieee testing for awards") ||
      lowerMessage.includes("ieee presenting innovative ideas") ||
      lowerMessage.includes("ieee teamwork dynamics") ||
      lowerMessage.includes("ieee collaborative efforts") ||
      lowerMessage.includes("ieee team roles in projects") ||
      lowerMessage.includes("ieee interdisciplinary teamwork") ||
      lowerMessage.includes("ieee project execution teamwork") ||
      lowerMessage.includes("ieee problem-solving teamwork") ||
      lowerMessage.includes("ieee innovation teamwork")
    ) {
      return "Students collaborate on coding, designing, testing, and presenting innovative ideas.";
    }
    if (
      lowerMessage.includes("is ieee good for developing leadership") ||
      lowerMessage.includes("ieee leadership development") ||
      lowerMessage.includes("ieee teamwork development") ||
      lowerMessage.includes("ieee ethics development") ||
      lowerMessage.includes("ieee technical skills development") ||
      lowerMessage.includes("ieee leadership opportunities") ||
      lowerMessage.includes("ieee leadership training") ||
      lowerMessage.includes("ieee leadership roles") ||
      lowerMessage.includes("ieee leadership growth") ||
      lowerMessage.includes("ieee leadership qualities") ||
      lowerMessage.includes("ieee leadership skills enhancement") ||
      lowerMessage.includes("ieee leadership and teamwork") ||
      lowerMessage.includes("ieee leadership and ethics") ||
      lowerMessage.includes("ieee leadership and technical skills") ||
      lowerMessage.includes("ieee leadership benefits")
    ) {
      return "Yes. It nurtures leadership, teamwork, ethics, and technical skills.";
    }
    if (
      lowerMessage.includes("do students get recognition outside college for ieee work") ||
      lowerMessage.includes("ieee external recognition") ||
      lowerMessage.includes("ieee regional awards") ||
      lowerMessage.includes("ieee national awards") ||
      lowerMessage.includes("ieee publications feature") ||
      lowerMessage.includes("ieee student recognition beyond campus") ||
      lowerMessage.includes("ieee student external honors") ||
      lowerMessage.includes("ieee student external achievements") ||
      lowerMessage.includes("ieee student external visibility") ||
      lowerMessage.includes("ieee student external awards") ||
      lowerMessage.includes("ieee student external recognition details") ||
      lowerMessage.includes("ieee student external media coverage") ||
      lowerMessage.includes("ieee student external project recognition") ||
      lowerMessage.includes("ieee student external competition recognition") ||
      lowerMessage.includes("ieee student external academic recognition")
    ) {
      return "Yes. Many have won regional and national awards and featured in IEEE publications.";
    }
    if (
      lowerMessage.includes("what is the smart driver safety system") ||
      lowerMessage.includes("smart driver safety system details") ||
      lowerMessage.includes("smart driver safety project") ||
      lowerMessage.includes("ieee smart driver safety") ||
      lowerMessage.includes("smart driver safety emergency services") ||
      lowerMessage.includes("smart driver safety phone calls") ||
      lowerMessage.includes("smart driver safety accident alerts") ||
      lowerMessage.includes("smart driver safety system features") ||
      lowerMessage.includes("smart driver safety system functionality") ||
      lowerMessage.includes("smart driver safety system purpose") ||
      lowerMessage.includes("smart driver safety system benefits") ||
      lowerMessage.includes("smart driver safety system innovation") ||
      lowerMessage.includes("smart driver safety system technology") ||
      lowerMessage.includes("smart driver safety system project description") ||
      lowerMessage.includes("smart driver safety system student project")
    ) {
      return "A project that alerts emergency services during accidents and manages phone calls safely while driving.";
    }
    if (
      lowerMessage.includes("where did ieee win 1st prize in 2025") ||
      lowerMessage.includes("ieee 1st prize 2025 location") ||
      lowerMessage.includes("ieee 12conecct 2025 project competition") ||
      lowerMessage.includes("ieee mangaluru award") ||
      lowerMessage.includes("ieee 2025 top award") ||
      lowerMessage.includes("ieee 2025 competition win") ||
      lowerMessage.includes("ieee 2025 first place") ||
      lowerMessage.includes("ieee 2025 award venue") ||
      lowerMessage.includes("ieee 2025 award details") ||
      lowerMessage.includes("ieee 2025 project competition winner") ||
      lowerMessage.includes("ieee 2025 mangaluru event") ||
      lowerMessage.includes("ieee 2025 award recognition") ||
      lowerMessage.includes("ieee 2025 top achievement") ||
      lowerMessage.includes("ieee 2025 competition results") ||
      lowerMessage.includes("ieee 2025 award location")
    ) {
      return "At the IEEE 12CONECCT 2025 Project Competition in Mangaluru.";
    }
    if (
      lowerMessage.includes("what's the smart vehicle impact system") ||
      lowerMessage.includes("smart vehicle impact system details") ||
      lowerMessage.includes("smart vehicle impact project") ||
      lowerMessage.includes("ieee smart vehicle impact") ||
      lowerMessage.includes("smart vehicle impact crash detection") ||
      lowerMessage.includes("smart vehicle impact emergency calls") ||
      lowerMessage.includes("smart vehicle impact system features") ||
      lowerMessage.includes("smart vehicle impact system functionality") ||
      lowerMessage.includes("smart vehicle impact system purpose") ||
      lowerMessage.includes("smart vehicle impact system benefits") ||
      lowerMessage.includes("smart vehicle impact system innovation") ||
      lowerMessage.includes("smart vehicle impact system technology") ||
      lowerMessage.includes("smart vehicle impact system project description") ||
      lowerMessage.includes("smart vehicle impact system student project")
    ) {
      return "A tech system to detect crashes and automatically trigger emergency calls.";
    }
    if (
      lowerMessage.includes("what was presented at the yesist12 project expo") ||
      lowerMessage.includes("yesist12 project expo presentation") ||
      lowerMessage.includes("ieee yesist12 expo content") ||
      lowerMessage.includes("yesist12 message authentication system") ||
      lowerMessage.includes("yesist12 high-performance applications") ||
      lowerMessage.includes("yesist12 secure system") ||
      lowerMessage.includes("yesist12 project expo details") ||
      lowerMessage.includes("yesist12 project expo topics") ||
      lowerMessage.includes("yesist12 project expo focus") ||
      lowerMessage.includes("yesist12 project expo innovation") ||
      lowerMessage.includes("yesist12 project expo technology") ||
      lowerMessage.includes("yesist12 project expo security") ||
      lowerMessage.includes("yesist12 project expo authentication") ||
      lowerMessage.includes("yesist12 project expo student work") ||
      lowerMessage.includes("yesist12 project expo highlights")
    ) {
      return "A secure system for message authentication in high-performance applications.";
    }
    if (
      lowerMessage.includes("what achievement did students earn at technovate 2k25") ||
      lowerMessage.includes("technovate 2k25 achievement") ||
      lowerMessage.includes("ieee technovate 2k25") ||
      lowerMessage.includes("technovate 2k25 4th place") ||
      lowerMessage.includes("technovate 2k25 smart vehicle impact system") ||
      lowerMessage.includes("technovate 2k25 award") ||
      lowerMessage.includes("technovate 2k25 recognition") ||
      lowerMessage.includes("technovate 2k25 student success") ||
      lowerMessage.includes("technovate 2k25 project recognition") ||
      lowerMessage.includes("technovate 2k25 competition result") ||
      lowerMessage.includes("technovate 2k25 student achievement details") ||
      lowerMessage.includes("technovate 2k25 award details") ||
      lowerMessage.includes("technovate 2k25 project award") ||
      lowerMessage.includes("technovate 2k25 student honor") ||
      lowerMessage.includes("technovate 2k25 student recognition")
    ) {
      return "They won 4th place for their Smart Vehicle Impact System.";
    }
    if (
      lowerMessage.includes("what is drone'acharya 2.0") ||
      lowerMessage.includes("drone'acharya 2.0 details") ||
      lowerMessage.includes("drone'acharya 2.0 hackathon") ||
      lowerMessage.includes("drone'acharya 2.0 national hackathon") ||
      lowerMessage.includes("drone'acharya 2.0 mysuru") ||
      lowerMessage.includes("drone'acharya 2.0 drone building") ||
      lowerMessage.includes("drone'acharya 2.0 competition") ||
      lowerMessage.includes("drone'acharya 2.0 event description") ||
      lowerMessage.includes("drone'acharya 2.0 purpose") ||
      lowerMessage.includes("drone'acharya 2.0 focus") ||
      lowerMessage.includes("drone'acharya 2.0 location") ||
      lowerMessage.includes("drone'acharya 2.0 student participation") ||
      lowerMessage.includes("drone'acharya 2.0 innovation") ||
      lowerMessage.includes("drone'acharya 2.0 technology") ||
      lowerMessage.includes("drone'acharya 2.0 event details")
    ) {
      return "A national drone-building hackathon held in Mysuru.";
    }
    if (
      lowerMessage.includes("where was the ai hackathon 2025 held") ||
      lowerMessage.includes("ai hackathon 2025 location") ||
      lowerMessage.includes("ai hackathon 2025 venue") ||
      lowerMessage.includes("siddhartha academy ai hackathon") ||
      lowerMessage.includes("ai hackathon 2025 andhra pradesh") ||
      lowerMessage.includes("ai hackathon 2025 details") ||
      lowerMessage.includes("ai hackathon 2025 event location") ||
      lowerMessage.includes("ai hackathon 2025 host") ||
      lowerMessage.includes("ai hackathon 2025 university") ||
      lowerMessage.includes("ai hackathon 2025 institute") ||
      lowerMessage.includes("ai hackathon 2025 city") ||
      lowerMessage.includes("ai hackathon 2025 state") ||
      lowerMessage.includes("ai hackathon 2025 regional") ||
      lowerMessage.includes("ai hackathon 2025 venue details") ||
      lowerMessage.includes("ai hackathon 2025 hosting institution")
    ) {
      return "At Siddhartha Academy of Higher Education, Andhra Pradesh.";
    }
    if (
      lowerMessage.includes("what is circuits, chips and charades") ||
      lowerMessage.includes("circuits chips charades details") ||
      lowerMessage.includes("circuits chips charades event") ||
      lowerMessage.includes("circuits chips charades quiz") ||
      lowerMessage.includes("circuits chips charades risc-v") ||
      lowerMessage.includes("circuits chips charades arm processors") ||
      lowerMessage.includes("circuits chips charades technical event") ||
      lowerMessage.includes("circuits chips charades activities") ||
      lowerMessage.includes("circuits chips charades description") ||
      lowerMessage.includes("circuits chips charades purpose") ||
      lowerMessage.includes("circuits chips charades focus") ||
      lowerMessage.includes("circuits chips charades content") ||
      lowerMessage.includes("circuits chips charades winners") ||
      lowerMessage.includes("circuits chips charades event type") ||
      lowerMessage.includes("circuits chips charades technical quiz")
    ) {
      return "A technical event with quizzes and activities on RISC-V and ARM processors.";
    }
    if (
      lowerMessage.includes("which students won circuits, chips & charades") ||
      lowerMessage.includes("circuits chips charades winners") ||
      lowerMessage.includes("mohammed zaid s circuits chips charades") ||
      lowerMessage.includes("leoni circuits chips charades") ||
      lowerMessage.includes("sri krishna circuits chips charades") ||
      lowerMessage.includes("circuits chips charades winning team") ||
      lowerMessage.includes("circuits chips charades top students") ||
      lowerMessage.includes("circuits chips charades awardees") ||
      lowerMessage.includes("circuits chips charades recognized students") ||
      lowerMessage.includes("circuits chips charades student success") ||
      lowerMessage.includes("circuits chips charades individual winners") ||
      lowerMessage.includes("circuits chips charades team members") ||
      lowerMessage.includes("circuits chips charades winning participants") ||
      lowerMessage.includes("circuits chips charades student names") ||
      lowerMessage.includes("circuits chips charades top performers")
    ) {
      return "Mohammed Zaid S, Leoni S, and Sri Krishna.";
    }
    if (
      lowerMessage.includes("what was the theme of engineer's day 2024 at ieee") ||
      lowerMessage.includes("engineer's day 2024 theme") ||
      lowerMessage.includes("ieee engineer's day 2024") ||
      lowerMessage.includes("driving sustainability with engineering solutions embracing ai") ||
      lowerMessage.includes("engineer's day 2024 ieee") ||
      lowerMessage.includes("engineer's day 2024 topic") ||
      lowerMessage.includes("engineer's day 2024 focus") ||
      lowerMessage.includes("engineer's day 2024 sustainability") ||
      lowerMessage.includes("engineer's day 2024 ai") ||
      lowerMessage.includes("engineer's day 2024 engineering solutions") ||
      lowerMessage.includes("engineer's day 2024 ieee theme") ||
      lowerMessage.includes("engineer's day 2024 main idea") ||
      lowerMessage.includes("engineer's day 2024 discussion topic") ||
      lowerMessage.includes("engineer's day 2024 key message") ||
      lowerMessage.includes("engineer's day 2024 central theme")
    ) {
      return "'Driving Sustainability with Engineering Solutions Embracing AI.'";
    }
    if (
      lowerMessage.includes("who is dr. rajiv ranjan singh") ||
      lowerMessage.includes("dr. rajiv ranjan singh details") ||
      lowerMessage.includes("rajiv ranjan singh hod ece") ||
      lowerMessage.includes("rajiv ranjan singh ieee cas executive committee") ||
      lowerMessage.includes("dr. rajiv ranjan singh presidency university") ||
      lowerMessage.includes("rajiv ranjan singh ieee role") ||
      lowerMessage.includes("rajiv ranjan singh appointment") ||
      lowerMessage.includes("rajiv ranjan singh 2024 appointment") ||
      lowerMessage.includes("rajiv ranjan singh ece department") ||
      lowerMessage.includes("rajiv ranjan singh ieee cas") ||
      lowerMessage.includes("rajiv ranjan singh ieee executive committee") ||
      lowerMessage.includes("rajiv ranjan singh faculty recognition") ||
      lowerMessage.includes("rajiv ranjan singh ieee contribution") ||
      lowerMessage.includes("rajiv ranjan singh professional role") ||
      lowerMessage.includes("rajiv ranjan singh academic role")
    ) {
      return "He is the HOD of ECE at Presidency University and was appointed to the IEEE CAS Executive Committee in 2024.";
    }
    if (
      lowerMessage.includes("who is dr. joseph anthony prathap") ||
      lowerMessage.includes("dr. joseph anthony prathap details") ||
      lowerMessage.includes("joseph anthony prathap newsletter editor") ||
      lowerMessage.includes("joseph anthony prathap ieee pels") ||
      lowerMessage.includes("joseph anthony prathap ieee ies") ||
      lowerMessage.includes("joseph anthony prathap 2025 appointment") ||
      lowerMessage.includes("joseph anthony prathap ieee role") ||
      lowerMessage.includes("joseph anthony prathap faculty recognition") ||
      lowerMessage.includes("joseph anthony prathap ieee contribution") ||
      lowerMessage.includes("joseph anthony prathap professional role") ||
      lowerMessage.includes("joseph anthony prathap academic role") ||
      lowerMessage.includes("joseph anthony prathap ieee appointment") ||
      lowerMessage.includes("joseph anthony prathap ieee newsletter") ||
      lowerMessage.includes("joseph anthony prathap ieee society") ||
      lowerMessage.includes("joseph anthony prathap ieee recognition")
    ) {
      return "He was appointed newsletter editor for IEEE PELS and IES for 2025.";
    }
    if (
      lowerMessage.includes("what do these faculty recognitions mean") ||
      lowerMessage.includes("faculty recognitions significance") ||
      lowerMessage.includes("ieee faculty recognition importance") ||
      lowerMessage.includes("ieee faculty global community") ||
      lowerMessage.includes("ieee faculty leadership") ||
      lowerMessage.includes("ieee faculty respect") ||
      lowerMessage.includes("ieee faculty prestige") ||
      lowerMessage.includes("ieee faculty honors") ||
      lowerMessage.includes("ieee faculty influence") ||
      lowerMessage.includes("ieee faculty standing") ||
      lowerMessage.includes("ieee faculty contribution recognition") ||
      lowerMessage.includes("ieee faculty professional standing") ||
      lowerMessage.includes("ieee faculty academic standing") ||
      lowerMessage.includes("ieee faculty global leaders") ||
      lowerMessage.includes("ieee faculty recognition impact")
    ) {
      return "It means the professors are respected leaders in the IEEE global community.";
    }
    if (
      lowerMessage.includes("are these faculty awards important") ||
      lowerMessage.includes("faculty awards importance") ||
      lowerMessage.includes("ieee faculty awards significance") ||
      lowerMessage.includes("ieee faculty awards pride") ||
      lowerMessage.includes("ieee faculty awards prestige") ||
      lowerMessage.includes("ieee faculty awards institution benefit") ||
      lowerMessage.includes("ieee faculty awards student growth") ||
      lowerMessage.includes("ieee faculty awards impact") ||
      lowerMessage.includes("ieee faculty awards value") ||
      lowerMessage.includes("ieee faculty awards contribution") ||
      lowerMessage.includes("ieee faculty awards recognition benefits") ||
      lowerMessage.includes("ieee faculty awards academic value") ||
      lowerMessage.includes("ieee faculty awards professional value") ||
      lowerMessage.includes("ieee faculty awards institutional pride") ||
      lowerMessage.includes("ieee faculty awards student support")
    ) {
      return "Yes! They bring pride and prestige to the institution and support student growth.";
    }
    if (
      lowerMessage.includes("can students interact with these recognized faculty") ||
      lowerMessage.includes("student interaction with faculty") ||
      lowerMessage.includes("ieee faculty mentorship") ||
      lowerMessage.includes("ieee student projects faculty") ||
      lowerMessage.includes("ieee faculty student engagement") ||
      lowerMessage.includes("ieee faculty student collaboration") ||
      lowerMessage.includes("ieee faculty student guidance") ||
      lowerMessage.includes("ieee faculty student support") ||
      lowerMessage.includes("ieee faculty student learning") ||
      lowerMessage.includes("ieee faculty student access") ||
      lowerMessage.includes("ieee faculty student exposure") ||
      lowerMessage.includes("ieee faculty student interaction opportunities") ||
      lowerMessage.includes("ieee faculty student project mentorship") ||
      lowerMessage.includes("ieee faculty student research collaboration") ||
      lowerMessage.includes("ieee faculty student direct interaction") ||
      lowerMessage.includes("ieee faculty student guidance for projects")
    ) {
      return "Yes. Many of them mentor IEEE student projects directly.";
    }
    if (
      lowerMessage.includes("is ieee connected to the wider ieee bangalore section") ||
      lowerMessage.includes("ieee bangalore section connection") ||
      lowerMessage.includes("ieee regional connection") ||
      lowerMessage.includes("ieee bangalore chapter support") ||
      lowerMessage.includes("ieee bangalore section awards") ||
      lowerMessage.includes("ieee bangalore section events") ||
      lowerMessage.includes("ieee bangalore section relationship") ||
      lowerMessage.includes("ieee bangalore section affiliation") ||
      lowerMessage.includes("ieee bangalore section collaboration") ||
      lowerMessage.includes("ieee bangalore section support details") ||
      lowerMessage.includes("ieee bangalore section network") ||
      lowerMessage.includes("ieee bangalore section resources") ||
      lowerMessage.includes("ieee bangalore section partnership") ||
      lowerMessage.includes("ieee bangalore section involvement") ||
      lowerMessage.includes("ieee bangalore section chapter link")
    ) {
      return "Definitely. Many awards and events are supported by the IEEE Bangalore Chapter.";
    }
    if (
      lowerMessage.includes("what is an excom member") ||
      lowerMessage.includes("excom member definition") ||
      lowerMessage.includes("excom member role") ||
      lowerMessage.includes("excom member responsibilities") ||
      lowerMessage.includes("excom member appointment") ||
      lowerMessage.includes("excom member ieee section") ||
      lowerMessage.includes("excom member ieee society") ||
      lowerMessage.includes("excom member executive committee") ||
      lowerMessage.includes("excom member function") ||
      lowerMessage.includes("excom member duties") ||
      lowerMessage.includes("excom member meaning") ||
      lowerMessage.includes("excom member significance") ||
      lowerMessage.includes("excom member importance") ||
      lowerMessage.includes("excom member professional role") ||
      lowerMessage.includes("excom member leadership role")
    ) {
      return "A person appointed to the Executive Committee of an IEEE Section or Society.";
    }
    if (
      lowerMessage.includes("what is ieee cas") ||
      lowerMessage.includes("ieee cas definition") ||
      lowerMessage.includes("ieee cas meaning") ||
      lowerMessage.includes("ieee cas focus") ||
      lowerMessage.includes("ieee cas electronics innovation") ||
      lowerMessage.includes("ieee cas circuits and systems society") ||
      lowerMessage.includes("ieee cas part of ieee") ||
      lowerMessage.includes("ieee cas technology area") ||
      lowerMessage.includes("ieee cas research area") ||
      lowerMessage.includes("ieee cas scope") ||
      lowerMessage.includes("ieee cas mission") ||
      lowerMessage.includes("ieee cas objectives") ||
      lowerMessage.includes("ieee cas purpose") ||
      lowerMessage.includes("ieee cas importance") ||
      lowerMessage.includes("ieee cas role")
    ) {
      return "Circuits and Systems Society - part of IEEE focusing on electronics innovation.";
    }
    if (
      lowerMessage.includes("is ieee actively involved in regional ieee activities") ||
      lowerMessage.includes("ieee regional involvement") ||
      lowerMessage.includes("ieee section-level events") ||
      lowerMessage.includes("ieee student regional activities") ||
      lowerMessage.includes("ieee faculty regional activities") ||
      lowerMessage.includes("ieee regional representation") ||
      lowerMessage.includes("ieee regional participation") ||
      lowerMessage.includes("ieee regional engagement") ||
      lowerMessage.includes("ieee regional network") ||
      lowerMessage.includes("ieee regional collaboration") ||
      lowerMessage.includes("ieee regional support") ||
      lowerMessage.includes("ieee regional presence") ||
      lowerMessage.includes("ieee regional impact") ||
      lowerMessage.includes("ieee regional contribution") ||
      lowerMessage.includes("ieee regional event participation")
    ) {
      return "Yes! Both students and faculty represent the chapter at IEEE section-level events.";
    }
    if (
      lowerMessage.includes("how do faculty appointments help students") ||
      lowerMessage.includes("faculty appointments student benefits") ||
      lowerMessage.includes("ieee faculty appointments impact") ||
      lowerMessage.includes("ieee faculty appointments collaborations") ||
      lowerMessage.includes("ieee faculty appointments competitions") ||
      lowerMessage.includes("ieee faculty appointments ieee networks") ||
      lowerMessage.includes("ieee faculty appointments opportunities") ||
      lowerMessage.includes("ieee faculty appointments student growth") ||
      lowerMessage.includes("ieee faculty appointments student access") ||
      lowerMessage.includes("ieee faculty appointments student exposure") ||
      lowerMessage.includes("ieee faculty appointments student learning") ||
      lowerMessage.includes("ieee faculty appointments student career") ||
      lowerMessage.includes("ieee faculty appointments student professional development") ||
      lowerMessage.includes("ieee faculty appointments student research") ||
      lowerMessage.includes("ieee faculty appointments student mentorship")
    ) {
      return "They open doors to collaborations, higher-level competitions, and IEEE networks.";
    }
    if (
      lowerMessage.includes("what technology was used in the ai hackathon project") ||
      lowerMessage.includes("ai hackathon project technology") ||
      lowerMessage.includes("ai hackathon autonomous systems") ||
      lowerMessage.includes("ai hackathon soaring 2ntelligence") ||
      lowerMessage.includes("ai hackathon project tech stack") ||
      lowerMessage.includes("ai hackathon project tools") ||
      lowerMessage.includes("ai hackathon project innovation") ||
      lowerMessage.includes("ai hackathon project focus") ||
      lowerMessage.includes("ai hackathon project theme") ||
      lowerMessage.includes("ai hackathon project description") ||
      lowerMessage.includes("ai hackathon project details") ||
      lowerMessage.includes("ai hackathon project development") ||
      lowerMessage.includes("ai hackathon project implementation") ||
      lowerMessage.includes("ai hackathon project solution") ||
      lowerMessage.includes("ai hackathon project application")
    ) {
      return "AI-powered autonomous systems under the theme 'Soaring 2ntelligence.'";
    }
    if (
      lowerMessage.includes("what is hash-based message authentication") ||
      lowerMessage.includes("hash-based message authentication definition") ||
      lowerMessage.includes("hash-based message authentication meaning") ||
      lowerMessage.includes("hash-based message authentication cryptography") ||
      lowerMessage.includes("hash-based message authentication authenticity") ||
      lowerMessage.includes("hash-based message authentication integrity") ||
      lowerMessage.includes("hash-based message authentication messages") ||
      lowerMessage.includes("hash-based message authentication purpose") ||
      lowerMessage.includes("hash-based message authentication function") ||
      lowerMessage.includes("hash-based message authentication security") ||
      lowerMessage.includes("hash-based message authentication verification") ||
      lowerMessage.includes("hash-based message authentication high-performance") ||
      lowerMessage.includes("hash-based message authentication applications") ||
      lowerMessage.includes("hash-based message authentication technology") ||
      lowerMessage.includes("hash-based message authentication explanation")
    ) {
      return "A cryptography method used to verify the authenticity and integrity of messages.";
    }
    if (
      lowerMessage.includes("why is fault analysis important in data security") ||
      lowerMessage.includes("fault analysis importance data security") ||
      lowerMessage.includes("fault analysis weaknesses") ||
      lowerMessage.includes("fault analysis protection against attacks") ||
      lowerMessage.includes("fault analysis security benefits") ||
      lowerMessage.includes("fault analysis system improvement") ||
      lowerMessage.includes("fault analysis data protection") ||
      lowerMessage.includes("fault analysis security measures") ||
      lowerMessage.includes("fault analysis security vulnerabilities") ||
      lowerMessage.includes("fault analysis security risks") ||
      lowerMessage.includes("fault analysis security enhancement") ||
      lowerMessage.includes("fault analysis security implications") ||
      lowerMessage.includes("fault analysis security best practices") ||
      lowerMessage.includes("fault analysis security strategy") ||
      lowerMessage.includes("fault analysis security role")
    ) {
      return "It helps detect weaknesses in systems and improves protection against attacks.";
    }
    if (
      lowerMessage.includes("what processors were part of the quiz competition") ||
      lowerMessage.includes("quiz competition processors") ||
      lowerMessage.includes("risc-v processors quiz") ||
      lowerMessage.includes("arm processors quiz") ||
      lowerMessage.includes("processors in circuits, chips & charades") ||
      lowerMessage.includes("quiz competition cpu architectures") ||
      lowerMessage.includes("quiz competition processor types") ||
      lowerMessage.includes("quiz competition processor focus") ||
      lowerMessage.includes("quiz competition processor topics") ||
      lowerMessage.includes("quiz competition processor details") ||
      lowerMessage.includes("quiz competition processor knowledge") ||
      lowerMessage.includes("quiz competition processor questions") ||
      lowerMessage.includes("quiz competition processor content") ||
      lowerMessage.includes("quiz competition processor architectures covered") ||
      lowerMessage.includes("quiz competition processor types discussed")
    ) {
      return "RISC-V and ARM processor architectures.";
    }
    if (
      lowerMessage.includes("how does ieee promote sustainable engineering") ||
      lowerMessage.includes("ieee sustainable engineering promotion") ||
      lowerMessage.includes("ieee eco-friendly tech") ||
      lowerMessage.includes("ieee ai and sustainability") ||
      lowerMessage.includes("ieee idea competitions sustainability") ||
      lowerMessage.includes("ieee sustainable engineering initiatives") ||
      lowerMessage.includes("ieee sustainable engineering focus") ||
      lowerMessage.includes("ieee sustainable engineering projects") ||
      lowerMessage.includes("ieee sustainable engineering solutions") ||
      lowerMessage.includes("ieee sustainable engineering innovation") ||
      lowerMessage.includes("ieee sustainable engineering development") ||
      lowerMessage.includes("ieee sustainable engineering practices") ||
      lowerMessage.includes("ieee sustainable engineering efforts") ||
      lowerMessage.includes("ieee sustainable engineering contribution") ||
      lowerMessage.includes("ieee sustainable engineering role")
    ) {
      return "Through idea competitions focused on AI and eco-friendly tech.";
    }
    if (
      lowerMessage.includes("what kind of hardware is used in drone projects") ||
      lowerMessage.includes("drone projects hardware") ||
      lowerMessage.includes("uav systems drone projects") ||
      lowerMessage.includes("embedded controllers drone projects") ||
      lowerMessage.includes("real-time flight mechanics drone projects") ||
      lowerMessage.includes("drone project components") ||
      lowerMessage.includes("drone project technology") ||
      lowerMessage.includes("drone project hardware details") ||
      lowerMessage.includes("drone project hardware requirements") ||
      lowerMessage.includes("drone project hardware types") ||
      lowerMessage.includes("drone project hardware examples") ||
      lowerMessage.includes("drone project hardware specifications") ||
      lowerMessage.includes("drone project hardware implementation") ||
      lowerMessage.includes("drone project hardware design") ||
      lowerMessage.includes("drone project hardware focus")
    ) {
      return "UAV systems, embedded controllers, and real-time flight mechanics.";
    }
    if (
      lowerMessage.includes("what are autonomous systems in the hackathon about") ||
      lowerMessage.includes("autonomous systems hackathon details") ||
      lowerMessage.includes("autonomous systems hackathon meaning") ||
      lowerMessage.includes("autonomous systems hackathon ai") ||
      lowerMessage.includes("autonomous systems hackathon human input") ||
      lowerMessage.includes("autonomous systems hackathon operation") ||
      lowerMessage.includes("autonomous systems hackathon vehicles") ||
      lowerMessage.includes("autonomous systems hackathon machines") ||
      lowerMessage.includes("autonomous systems hackathon purpose") ||
      lowerMessage.includes("autonomous systems hackathon focus") ||
      lowerMessage.includes("autonomous systems hackathon technology") ||
      lowerMessage.includes("autonomous systems hackathon innovation") ||
      lowerMessage.includes("autonomous systems hackathon development") ||
      lowerMessage.includes("autonomous systems hackathon definition") ||
      lowerMessage.includes("autonomous systems hackathon explanation")
    ) {
      return "Machines or vehicles that can operate without human input using AI.";
    }
    if (
      lowerMessage.includes("what does the vehicle impact system detect") ||
      lowerMessage.includes("vehicle impact system detection") ||
      lowerMessage.includes("vehicle impact system crash intensity") ||
      lowerMessage.includes("vehicle impact system emergency alerts") ||
      lowerMessage.includes("vehicle impact system functionality") ||
      lowerMessage.includes("vehicle impact system purpose") ||
      lowerMessage.includes("vehicle impact system benefits") ||
      lowerMessage.includes("vehicle impact system technology") ||
      lowerMessage.includes("vehicle impact system innovation") ||
      lowerMessage.includes("vehicle impact system description") ||
      lowerMessage.includes("vehicle impact system details") ||
      lowerMessage.includes("vehicle impact system operation") ||
      lowerMessage.includes("vehicle impact system features") ||
      lowerMessage.includes("vehicle impact system student project") ||
      lowerMessage.includes("vehicle impact system safety")
    ) {
      return "It detects crash intensity and automates emergency alerts.";
    }
    if (
      lowerMessage.includes("are these projects hardware-only or software too") ||
      lowerMessage.includes("projects hardware and software") ||
      lowerMessage.includes("ieee projects tech stack") ||
      lowerMessage.includes("ieee projects embedded systems") ||
      lowerMessage.includes("ieee projects ai models") ||
      lowerMessage.includes("ieee projects software control") ||
      lowerMessage.includes("ieee projects combined tech") ||
      lowerMessage.includes("ieee projects full stack") ||
      lowerMessage.includes("ieee projects integrated systems") ||
      lowerMessage.includes("ieee projects technology combination") ||
      lowerMessage.includes("ieee projects hardware software mix") ||
      lowerMessage.includes("ieee projects development approach") ||
      lowerMessage.includes("ieee projects system components") ||
      lowerMessage.includes("ieee projects tech overview") ||
      lowerMessage.includes("ieee projects comprehensive development")
    ) {
      return "They combine both with embedded systems, AI models, and software control.";
    }
    if (
      lowerMessage.includes("can students publish papers on these projects") ||
      lowerMessage.includes("publish papers on ieee projects") ||
      lowerMessage.includes("ieee projects for research publication") ||
      lowerMessage.includes("ieee projects for ieee conferences") ||
      lowerMessage.includes("ieee projects publishing opportunities") ||
      lowerMessage.includes("ieee projects research output") ||
      lowerMessage.includes("ieee projects academic publication") ||
      lowerMessage.includes("ieee projects conference presentation") ||
      lowerMessage.includes("ieee projects research dissemination") ||
      lowerMessage.includes("ieee projects scholarly output") ||
      lowerMessage.includes("ieee projects publication eligibility") ||
      lowerMessage.includes("ieee projects research impact") ||
      lowerMessage.includes("ieee projects academic recognition") ||
      lowerMessage.includes("ieee projects research opportunities") ||
      lowerMessage.includes("ieee projects publication process")
    ) {
      return "Yes! Many projects are eligible for research publication and IEEE conferences.";
    }
    if (
      lowerMessage.includes("who are some notable student achievers") ||
      lowerMessage.includes("ieee notable students") ||
      lowerMessage.includes("ieee top students") ||
      lowerMessage.includes("ieee student success stories") ||
      lowerMessage.includes("ieee student awardees") ||
      lowerMessage.includes("ieee student recognition") ||
      lowerMessage.includes("ieee student leaders") ||
      lowerMessage.includes("ieee student contributors") ||
      lowerMessage.includes("ieee student talent") ||
      lowerMessage.includes("ieee student achievements list") ||
      lowerMessage.includes("ieee student names") ||
      lowerMessage.includes("ieee student highlights") ||
      lowerMessage.includes("ieee student excellence") ||
      lowerMessage.includes("ieee student role models") ||
      lowerMessage.includes("ieee student recognition examples")
    ) {
      return "Mohammed Zaid S, Monika P, Chandana T, Shreyas Yadav M, and others.";
    }
    if (
      lowerMessage.includes("is ieee famous for innovation") ||
      lowerMessage.includes("ieee innovation reputation") ||
      lowerMessage.includes("ieee leading student branches") ||
      lowerMessage.includes("ieee innovation recognition") ||
      lowerMessage.includes("ieee innovation excellence") ||
      lowerMessage.includes("ieee innovation leadership") ||
      lowerMessage.includes("ieee innovation hub") ||
      lowerMessage.includes("ieee innovation achievements") ||
      lowerMessage.includes("ieee innovation prestige") ||
      lowerMessage.includes("ieee innovation track record") ||
      lowerMessage.includes("ieee innovation status") ||
      lowerMessage.includes("ieee innovation standing") ||
      lowerMessage.includes("ieee innovation contribution") ||
      lowerMessage.includes("ieee innovation impact") ||
      lowerMessage.includes("ieee innovation student branch")
    ) {
      return "Yes! It's one of the leading student branches in Bengaluru for innovation.";
    }
    if (
      lowerMessage.includes("do students get certificates for winning competitions") ||
      lowerMessage.includes("ieee competition certificates") ||
      lowerMessage.includes("ieee winning certificates") ||
      lowerMessage.includes("ieee endorsed certificates") ||
      lowerMessage.includes("ieee cash prizes") ||
      lowerMessage.includes("ieee internships for winners") ||
      lowerMessage.includes("ieee competition awards") ||
      lowerMessage.includes("ieee competition recognition") ||
      lowerMessage.includes("ieee competition benefits") ||
      lowerMessage.includes("ieee competition rewards") ||
      lowerMessage.includes("ieee competition incentives") ||
      lowerMessage.includes("ieee competition honors") ||
      lowerMessage.includes("ieee competition student recognition") ||
      lowerMessage.includes("ieee competition certificate types") ||
      lowerMessage.includes("ieee competition prize details")
    ) {
      return "Yes! Winners receive certificates, and some competitions offer cash prizes or internships.";
    }
    if (
      lowerMessage.includes("how often does ieee win awards") ||
      lowerMessage.includes("ieee award frequency") ||
      lowerMessage.includes("ieee awards per semester") ||
      lowerMessage.includes("ieee consistent awards") ||
      lowerMessage.includes("ieee award winning regularity") ||
      lowerMessage.includes("ieee awards track record") ||
      lowerMessage.includes("ieee awards consistency") ||
      lowerMessage.includes("ieee awards history") ||
      lowerMessage.includes("ieee awards rate") ||
      lowerMessage.includes("ieee awards success rate") ||
      lowerMessage.includes("ieee awards performance") ||
      lowerMessage.includes("ieee awards recognition frequency") ||
      lowerMessage.includes("ieee awards winning streak") ||
      lowerMessage.includes("ieee awards continuous success") ||
      lowerMessage.includes("ieee awards ongoing recognition")
    ) {
      return "Almost every semester thanks to active participation and strong mentoring.";
    }
    if (
      lowerMessage.includes("are ieee projects funded") ||
      lowerMessage.includes("ieee project funding") ||
      lowerMessage.includes("ieee project sponsorship") ||
      lowerMessage.includes("ieee project financial support") ||
      lowerMessage.includes("ieee project grants") ||
      lowerMessage.includes("ieee project investment") ||
      lowerMessage.includes("ieee project financial assistance") ||
      lowerMessage.includes("ieee project budget") ||
      lowerMessage.includes("ieee project resources") ||
      lowerMessage.includes("ieee project financial backing") ||
      lowerMessage.includes("ieee project funding opportunities") ||
      lowerMessage.includes("ieee project funding sources") ||
      lowerMessage.includes("ieee project financial aid") ||
      lowerMessage.includes("ieee project financial planning") ||
      lowerMessage.includes("ieee project financial management")
    ) {
      return "Some may receive funding support or sponsorship from IEEE or the college.";
    }
    if (
      lowerMessage.includes("does ieee help students go abroad") ||
      lowerMessage.includes("ieee international travel") ||
      lowerMessage.includes("ieee global opportunities") ||
      lowerMessage.includes("ieee international exposure for students") ||
      lowerMessage.includes("ieee international conferences") ||
      lowerMessage.includes("ieee global competitions") ||
      lowerMessage.includes("ieee yesist12 malaysia") ||
      lowerMessage.includes("ieee student international experience") ||
      lowerMessage.includes("ieee student global travel") ||
      lowerMessage.includes("ieee student international programs") ||
      lowerMessage.includes("ieee student global learning") ||
      lowerMessage.includes("ieee student international networking") ||
      lowerMessage.includes("ieee student global career") ||
      lowerMessage.includes("ieee student international recognition") ||
      lowerMessage.includes("ieee student international opportunities")
    ) {
      return "Yes! Like the YESIST12 team going to Malaysia for the international finale.";
    }

    // --- Events Section ---
    if (
      lowerMessage.includes("what types of events does ieee presidency university conduct") ||
      lowerMessage.includes("types of events") ||
      lowerMessage.includes("what events") ||
      lowerMessage.includes("ieee event categories") ||
      lowerMessage.includes("ieee event types list") ||
      lowerMessage.includes("ieee workshops and webinars") ||
      lowerMessage.includes("ieee colloquiums and hackathons") ||
      lowerMessage.includes("ieee panel discussions and training") ||
      lowerMessage.includes("ieee event formats") ||
      lowerMessage.includes("ieee event offerings") ||
      lowerMessage.includes("ieee event portfolio") ||
      lowerMessage.includes("ieee event range") ||
      lowerMessage.includes("ieee event variety") ||
      lowerMessage.includes("ieee event scope") ||
      lowerMessage.includes("ieee event types overview")
    ) {
      return "IEEE Presidency University conducts workshops, webinars, colloquiums, hackathons, panel discussions, and training programs.";
    }
    if (
      lowerMessage.includes("are events technical or general") ||
      lowerMessage.includes("event types") ||
      lowerMessage.includes("ieee event focus") ||
      lowerMessage.includes("ieee technical events") ||
      lowerMessage.includes("ieee general events") ||
      lowerMessage.includes("ieee electronics events") ||
      lowerMessage.includes("ieee ai events") ||
      lowerMessage.includes("ieee iot events") ||
      lowerMessage.includes("ieee vlsi events") ||
      lowerMessage.includes("ieee event audience") ||
      lowerMessage.includes("ieee learning focus") ||
      lowerMessage.includes("ieee event content") ||
      lowerMessage.includes("ieee event subject matter") ||
      lowerMessage.includes("ieee event technical vs non-technical") ||
      lowerMessage.includes("ieee event learning objectives")
    ) {
      return "Most are technical, focusing on electronics, AI, IoT, and VLSI, but open to all learners.";
    }
    if (
      lowerMessage.includes("who can attend events") ||
      lowerMessage.includes("event attendance") ||
      lowerMessage.includes("ieee event eligibility") ||
      lowerMessage.includes("are ieee events open to non-members") ||
      lowerMessage.includes("can faculty attend ieee events") ||
      lowerMessage.includes("can outsiders attend ieee events") ||
      lowerMessage.includes("ieee event access") ||
      lowerMessage.includes("ieee event participation rules") ||
      lowerMessage.includes("ieee event audience types") ||
      lowerMessage.includes("ieee event inclusivity") ||
      lowerMessage.includes("ieee event open to public") ||
      lowerMessage.includes("ieee event student access") ||
      lowerMessage.includes("ieee event faculty access") ||
      lowerMessage.includes("ieee event external access") ||
      lowerMessage.includes("ieee event participation criteria")
    ) {
      return "Yes! Most events are open to students, and some are even open to faculty and outsiders.";
    }
    if (
      lowerMessage.includes("how often are events held") ||
      lowerMessage.includes("event frequency") ||
      lowerMessage.includes("ieee event schedule") ||
      lowerMessage.includes("ieee event regularity") ||
      lowerMessage.includes("how many events per semester") ||
      lowerMessage.includes("ieee event calendar") ||
      lowerMessage.includes("ieee event frequency per month") ||
      lowerMessage.includes("ieee event occurrence") ||
      lowerMessage.includes("ieee event timeline") ||
      lowerMessage.includes("ieee event planning") ||
      lowerMessage.includes("ieee event periodicity") ||
      lowerMessage.includes("ieee event consistency") ||
      lowerMessage.includes("ieee event rhythm") ||
      lowerMessage.includes("ieee event flow") ||
      lowerMessage.includes("ieee event pace")
    ) {
      return "Almost every month - with several events per semester.";
    }
    if (
      lowerMessage.includes("where do events take place") ||
      lowerMessage.includes("event venue") ||
      lowerMessage.includes("ieee event locations") ||
      lowerMessage.includes("ieee event physical location") ||
      lowerMessage.includes("ieee event online platform") ||
      lowerMessage.includes("ieee event campus location") ||
      lowerMessage.includes("ieee event virtual location") ||
      lowerMessage.includes("ieee event microsoft teams") ||
      lowerMessage.includes("ieee event physical venue") ||
      lowerMessage.includes("ieee event virtual venue") ||
      lowerMessage.includes("ieee event setting") ||
      lowerMessage.includes("ieee event environment") ||
      lowerMessage.includes("ieee event geographical location") ||
      lowerMessage.includes("ieee event digital platform") ||
      lowerMessage.includes("ieee event place")
    ) {
      return "Mostly at Presidency University, Bengaluru, and some are conducted online via Microsoft Teams.";
    }
    if (
      lowerMessage.includes("do events offer hands-on learning") ||
      lowerMessage.includes("hands-on events") ||
      lowerMessage.includes("ieee practical sessions") ||
      lowerMessage.includes("ieee learning by doing") ||
      lowerMessage.includes("ieee workshops hands-on") ||
      lowerMessage.includes("ieee pcb workshop hands-on") ||
      lowerMessage.includes("ieee vlsi workshop hands-on") ||
      lowerMessage.includes("ieee matlab workshop hands-on") ||
      lowerMessage.includes("ieee practical experience events") ||
      lowerMessage.includes("ieee experiential learning") ||
      lowerMessage.includes("ieee skill application events") ||
      lowerMessage.includes("ieee interactive events") ||
      lowerMessage.includes("ieee applied learning") ||
      lowerMessage.includes("ieee practical training") ||
      lowerMessage.includes("ieee hands-on workshops")
    ) {
      return "Yes! Many include practical sessions, especially in workshops on PCB, VLSI, and MATLAB.";
    }
    if (
      lowerMessage.includes("what was quiz-cuits") ||
      lowerMessage.includes("about quiz-cuits") ||
      lowerMessage.includes("explain quiz-cuits") ||
      lowerMessage.includes("quiz-cuits event details") ||
      lowerMessage.includes("quiz-cuits levels") ||
      lowerMessage.includes("quiz-cuits participants") ||
      lowerMessage.includes("quiz-cuits date") ||
      lowerMessage.includes("quiz-cuits location") ||
      lowerMessage.includes("quiz-cuits topics") ||
      lowerMessage.includes("quiz-cuits digital circuits") ||
      lowerMessage.includes("quiz-cuits logic") ||
      lowerMessage.includes("quiz-cuits technical riddles") ||
      lowerMessage.includes("quiz-cuits 1st year students") ||
      lowerMessage.includes("quiz-cuits event description") ||
      lowerMessage.includes("quiz-cuits event overview")
    ) {
      return "QUIZ-CUITS was a 3-level quiz for 1st-year students testing digital circuits, logic, and technical riddles. It was held on April 11, 2025, at Presidency University and had over 20+ participants.";
    }
    if (
      lowerMessage.includes("what was the industrial iot 4.0 workshop about") ||
      lowerMessage.includes("industrial iot 4.0 workshop") ||
      lowerMessage.includes("iot workshop") ||
      lowerMessage.includes("smart factory systems workshop") ||
      lowerMessage.includes("industry 4.0 tools workshop") ||
      lowerMessage.includes("industrial iot 4.0 workshop date") ||
      lowerMessage.includes("industrial iot 4.0 workshop location") ||
      lowerMessage.includes("industrial iot 4.0 workshop attendees") ||
      lowerMessage.includes("industrial iot 4.0 workshop speakers") ||
      lowerMessage.includes("industrial iot 4.0 workshop collaborators") ||
      lowerMessage.includes("industrial iot 4.0 workshop content") ||
      lowerMessage.includes("industrial iot 4.0 workshop focus") ||
      lowerMessage.includes("industrial iot 4.0 workshop details") ||
      lowerMessage.includes("industrial iot 4.0 workshop overview") ||
      lowerMessage.includes("industrial iot 4.0 workshop description")
    ) {
      return "The Industrial IoT 4.0 Workshop focused on smart factory systems, IoT applications, and Industry 4.0 tools. It was held on March 7, 2025, at Presidency University, Bengaluru, and had over 100+ attendees. Speakers included Ms. Lakshmi Lakshmana Rao, Mr. Sundaresan Poovalingam, Ms. Sanchitha Mukherjee, and Mr. Aravind S. Infosys Limited and Edutech India Pvt. Ltd. collaborated for this workshop.";
    }
    if (
      lowerMessage.includes("what was the ai in neuroscience workshop about") ||
      lowerMessage.includes("ai in neuroscience workshop") ||
      lowerMessage.includes("neuroscience ai") ||
      lowerMessage.includes("ai-powered brain diagnostics workshop") ||
      lowerMessage.includes("neuroimaging tools workshop") ||
      lowerMessage.includes("brain-computer interfaces workshop") ||
      lowerMessage.includes("ai in neuroscience workshop date") ||
      lowerMessage.includes("ai in neuroscience workshop attendees") ||
      lowerMessage.includes("ai in neuroscience workshop speaker") ||
      lowerMessage.includes("ai in neuroscience workshop tools") ||
      lowerMessage.includes("ai in neuroscience workshop content") ||
      lowerMessage.includes("ai in neuroscience workshop focus") ||
      lowerMessage.includes("ai in neuroscience workshop details") ||
      lowerMessage.includes("ai in neuroscience workshop overview") ||
      lowerMessage.includes("ai in neuroscience workshop description")
    ) {
      return "The AI in Neuroscience workshop explored AI-powered brain diagnostics, neuroimaging tools, and brain-computer interfaces. It was held on March 7, 2025 (Online) with 30+ attendees. Dr. Abhishek Appaji conducted the session, showcasing tools like NeuroBridge and smart eye kiosks.";
    }
    if (
      lowerMessage.includes("what was the hemts workshop about") ||
      lowerMessage.includes("hemts workshop") ||
      lowerMessage.includes("about hemts") ||
      lowerMessage.includes("high electron mobility transistors workshop") ||
      lowerMessage.includes("5g rf applications workshop") ||
      lowerMessage.includes("gallium nitride materials workshop") ||
      lowerMessage.includes("indium phosphide materials workshop") ||
      lowerMessage.includes("hemts workshop date") ||
      lowerMessage.includes("hemts workshop speaker") ||
      lowerMessage.includes("hemts workshop content") ||
      lowerMessage.includes("hemts workshop focus") ||
      lowerMessage.includes("hemts workshop details") ||
      lowerMessage.includes("hemts workshop overview") ||
      lowerMessage.includes("hemts workshop description")
    ) {
      return "The HEMT workshop discussed High Electron Mobility Transistors used in 5G and RF applications, specifically Gallium Nitride (GaN) and Indium Phosphide (InP) materials. It was held on February 28, 2025, and led by Dr. Ajayan.";
    }
    if (
      lowerMessage.includes("what was the passive radar session about") ||
      lowerMessage.includes("passive radar") ||
      lowerMessage.includes("about passive radar") ||
      lowerMessage.includes("passive radar technology workshop") ||
      lowerMessage.includes("detecting objects external radio signals") ||
      lowerMessage.includes("stealth applications radar") ||
      lowerMessage.includes("passive radar session date") ||
      lowerMessage.includes("passive radar session speaker") ||
      lowerMessage.includes("passive radar session content") ||
      lowerMessage.includes("passive radar session focus") ||
      lowerMessage.includes("passive radar session details") ||
      lowerMessage.includes("passive radar session overview") ||
      lowerMessage.includes("passive radar session description") ||
      lowerMessage.includes("passive radar past present future") ||
      lowerMessage.includes("passive radar benefits")
    ) {
      return "Passive Radar technology involves detecting objects using external radio signals, useful for stealth applications. The session was delivered by Dr. Mohammad Shahnawaz Hussain on February 14, 2025.";
    }
    if (
      lowerMessage.includes("what was the metamaterials in antenna design workshop about") ||
      lowerMessage.includes("metamaterials in antenna design") ||
      lowerMessage.includes("antenna metamaterials") ||
      lowerMessage.includes("engineered materials antenna") ||
      lowerMessage.includes("enhance antenna performance workshop") ||
      lowerMessage.includes("metamaterials in antenna design date") ||
      lowerMessage.includes("metamaterials in antenna design speaker") ||
      lowerMessage.includes("metamaterials in antenna design content") ||
      lowerMessage.includes("metamaterials in antenna design focus") ||
      lowerMessage.includes("metamaterials in antenna design details") ||
      lowerMessage.includes("metamaterials in antenna design overview") ||
      lowerMessage.includes("metamaterials in antenna design description") ||
      lowerMessage.includes("metamaterials in antenna design benefits") ||
      lowerMessage.includes("metamaterials in antenna design innovation")
    ) {
      return "Metamaterials are engineered materials used to enhance antenna performance. Dr. Prabhu T, Assistant Professor at Presidency University, conducted this workshop on January 31, 2025.";
    }
    if (
      lowerMessage.includes("what was the qiskit quantum workshop about") ||
      lowerMessage.includes("qiskit quantum workshop") ||
      lowerMessage.includes("quantum workshop") ||
      lowerMessage.includes("quantum computing principles workshop") ||
      lowerMessage.includes("ibm qiskit platform workshop") ||
      lowerMessage.includes("qiskit quantum workshop date") ||
      lowerMessage.includes("qiskit quantum workshop speaker") ||
      lowerMessage.includes("qiskit quantum workshop content") ||
      lowerMessage.includes("qiskit quantum workshop focus") ||
      lowerMessage.includes("qiskit quantum workshop details") ||
      lowerMessage.includes("qiskit quantum workshop overview") ||
      lowerMessage.includes("qiskit quantum workshop description") ||
      lowerMessage.includes("qiskit quantum workshop introduction") ||
      lowerMessage.includes("qiskit quantum workshop benefits")
    ) {
      return "The Qiskit Quantum Workshop introduced students to quantum computing principles and IBM’s Qiskit platform. It was conducted by Dr. Madihally Nagaraja from SSIT Tumakuru on October 21, 2024.";
    }
    if (
      lowerMessage.includes("what was the ai colloquium about") ||
      lowerMessage.includes("ai colloquium") ||
      lowerMessage.includes("about ai colloquium") ||
      lowerMessage.includes("ai impact enterprise workshop") ||
      lowerMessage.includes("ai creativity workshop") ||
      lowerMessage.includes("ai ethical concerns workshop") ||
      lowerMessage.includes("ai colloquium date") ||
      lowerMessage.includes("ai colloquium speaker") ||
      lowerMessage.includes("ai colloquium content") ||
      lowerMessage.includes("ai colloquium focus") ||
      lowerMessage.includes("ai colloquium details") ||
      lowerMessage.includes("ai colloquium overview") ||
      lowerMessage.includes("ai colloquium description") ||
      lowerMessage.includes("ai colloquium keynote") ||
      lowerMessage.includes("ai colloquium maersk")
    ) {
      return "The AI Colloquium focused on AI's impact on enterprise, creativity, and ethical concerns. Dr. Sunil Chinnamgari from Maersk was the keynote speaker on September 20, 2024.";
    }
    if (
      lowerMessage.includes("what was the ieee student chapter inauguration about") ||
      lowerMessage.includes("ieee student chapter inauguration") ||
      lowerMessage.includes("chapter inauguration") ||
      lowerMessage.includes("ieee student chapter inauguration date") ||
      lowerMessage.includes("ieee student chapter inauguration speakers") ||
      lowerMessage.includes("ieee student chapter inauguration topics") ||
      lowerMessage.includes("ieee student chapter inauguration 5g") ||
      lowerMessage.includes("ieee student chapter inauguration sdr") ||
      lowerMessage.includes("ieee student chapter inauguration soc design") ||
      lowerMessage.includes("ieee student chapter inauguration ai telecom") ||
      lowerMessage.includes("ieee student chapter inauguration details") ||
      lowerMessage.includes("ieee student chapter inauguration overview") ||
      lowerMessage.includes("ieee student chapter inauguration description") ||
      lowerMessage.includes("ieee student chapter inauguration highlights") ||
      lowerMessage.includes("ieee student chapter inauguration key takeaways")
    ) {
      return "The IEEE Student Chapters Inauguration was held on September 13, 2024. Key speakers included Dr. Anindya Saha, Dr. Megha P. Arakeri, Dr. Veena S. Chakravarthi, and Dr. Sumit Soman. Topics discussed were 5G, software-defined radios, SoC design, and AI in telecom.";
    }
    if (
      lowerMessage.includes("what was the vlsi workshop about") ||
      lowerMessage.includes("vlsi workshop") ||
      lowerMessage.includes("about vlsi workshop") ||
      lowerMessage.includes("verilog design workshop") ||
      lowerMessage.includes("cadence simulation workshop") ||
      lowerMessage.includes("cmos amplifier analysis workshop") ||
      lowerMessage.includes("alu creation workshop") ||
      lowerMessage.includes("vlsi workshop date") ||
      lowerMessage.includes("vlsi workshop hardware tools") ||
      lowerMessage.includes("vlsi workshop speakers") ||
      lowerMessage.includes("vlsi workshop content") ||
      lowerMessage.includes("vlsi workshop focus") ||
      lowerMessage.includes("vlsi workshop details") ||
      lowerMessage.includes("vlsi workshop overview") ||
      lowerMessage.includes("vlsi workshop description")
    ) {
      return "The VLSI workshop taught Verilog design, Cadence simulation, CMOS amplifier analysis, and ALU creation. Hardware tools used included Xilinx FPGA Boards and Cadence Virtuoso. Speakers were Mr. Shivaprasad B K, Dr. Ashutosh Anand, and Ms. Renuka Bhagwat. It was held on July 29-30, 2024.";
    }
    if (
      lowerMessage.includes("what was the pcb design workshop about") ||
      lowerMessage.includes("pcb design workshop") ||
      lowerMessage.includes("about pcb workshop") ||
      lowerMessage.includes("kicad workshop") ||
      lowerMessage.includes("gerber files workshop") ||
      lowerMessage.includes("soldering workshop") ||
      lowerMessage.includes("real pcb printing workshop") ||
      lowerMessage.includes("pcb design workshop date") ||
      lowerMessage.includes("pcb design workshop speakers") ||
      lowerMessage.includes("pcb design workshop content") ||
      lowerMessage.includes("pcb design workshop focus") ||
      lowerMessage.includes("pcb design workshop details") ||
      lowerMessage.includes("pcb design workshop overview") ||
      lowerMessage.includes("pcb design workshop description")
    ) {
      return "The PCB Design workshop covered KiCad, Gerber files, soldering, and real PCB printing. It was held from December 7-9, 2023, with Dr. Elango and Mr. Duraisamy as speakers.";
    }
    if (
      lowerMessage.includes("what was the microfluidics webinar about") ||
      lowerMessage.includes("microfluidics webinar") ||
      lowerMessage.includes("about microfluidics") ||
      lowerMessage.includes("detecting microplastics webinar") ||
      lowerMessage.includes("water sensor tech webinar") ||
      lowerMessage.includes("microfluidics webinar date") ||
      lowerMessage.includes("microfluidics webinar presenter") ||
      lowerMessage.includes("microfluidics webinar content") ||
      lowerMessage.includes("microfluidics webinar focus") ||
      lowerMessage.includes("microfluidics webinar details") ||
      lowerMessage.includes("microfluidics webinar overview") ||
      lowerMessage.includes("microfluidics webinar description") ||
      lowerMessage.includes("microfluidics for microplastics detection") ||
      lowerMessage.includes("microfluidics sensor technology")
    ) {
      return "The webinar on Microfluidics was about detecting microplastics in water using sensor tech. Dr. Jegatha Nambi Krishnan presented it on September 21, 2023.";
    }
    if (
      lowerMessage.includes("what was the cmos bipolar analog design session about") ||
      lowerMessage.includes("cmos bipolar analog design") ||
      lowerMessage.includes("analog design session") ||
      lowerMessage.includes("circuit design advanced analog principles") ||
      lowerMessage.includes("translinear functions workshop") ||
      lowerMessage.includes("square roots filters logarithmic amplifiers") ||
      lowerMessage.includes("cmos bipolar analog design date") ||
      lowerMessage.includes("cmos bipolar analog design leader") ||
      lowerMessage.includes("cmos bipolar analog design content") ||
      lowerMessage.includes("cmos bipolar analog design focus") ||
      lowerMessage.includes("cmos bipolar analog design details") ||
      lowerMessage.includes("cmos bipolar analog design overview") ||
      lowerMessage.includes("cmos bipolar analog design description") ||
      lowerMessage.includes("cmos bipolar analog circuit design") ||
      lowerMessage.includes("bipolar and cmos analog circuit design")
    ) {
      return "The session on CMOS/Bipolar Analog Design covered circuit design using advanced analog principles, including translinear functions like square roots, filters, and logarithmic amplifiers. Dr. Raj Senani led it on May 27, 2023.";
    }
    if (
      lowerMessage.includes("what was mathworks industry day about") ||
      lowerMessage.includes("mathworks industry day") ||
      lowerMessage.includes("matlab simulink event") ||
      lowerMessage.includes("hands-on matlab simulink") ||
      lowerMessage.includes("simscape workshop") ||
      lowerMessage.includes("signal processing workshop") ||
      lowerMessage.includes("mathworks industry day date") ||
      lowerMessage.includes("mathworks industry day content") ||
      lowerMessage.includes("mathworks industry day focus") ||
      lowerMessage.includes("mathworks industry day details") ||
      lowerMessage.includes("mathworks industry day overview") ||
      lowerMessage.includes("mathworks industry day description") ||
      lowerMessage.includes("mathworks industry day benefits") ||
      lowerMessage.includes("mathworks industry day learning objectives")
    ) {
      return "MathWorks Industry Day was a 2-day hands-on MATLAB/Simulink event held on April 21-22, 2023, covering SimScape and signal processing.";
    }
    if (
      lowerMessage.includes("what was the ieee cass student skill program about") ||
      lowerMessage.includes("ieee cass student skill program") ||
      lowerMessage.includes("cass program") ||
      lowerMessage.includes("entrepreneurship session") ||
      lowerMessage.includes("fpga ml session") ||
      lowerMessage.includes("ieee cass student skill program speakers") ||
      lowerMessage.includes("ieee cass student skill program date") ||
      lowerMessage.includes("ieee cass student skill program content") ||
      lowerMessage.includes("ieee cass student skill program focus") ||
      lowerMessage.includes("ieee cass student skill program details") ||
      lowerMessage.includes("ieee cass student skill program overview") ||
      lowerMessage.includes("ieee cass student skill program description") ||
      lowerMessage.includes("ieee cass student skill program benefits") ||
      lowerMessage.includes("ieee cass student skill program learning objectives")
    ) {
      return "The IEEE CASS Student Skill Program included sessions on entrepreneurship and FPGA ML. Speakers were Dr. G. S. Javed and Dr. Joseph Prathap, held on July 5, 2024.";
    }
    if (
      lowerMessage.includes("which event had the highest attendance") ||
      lowerMessage.includes("highest attendance event") ||
      lowerMessage.includes("most attended event") ||
      lowerMessage.includes("ieee event attendance record") ||
      lowerMessage.includes("ieee industrial iot workshop attendance") ||
      lowerMessage.includes("ieee event with most attendees") ||
      lowerMessage.includes("ieee highest participation event") ||
      lowerMessage.includes("ieee popular events") ||
      lowerMessage.includes("ieee event attendance statistics") ||
      lowerMessage.includes("ieee event attendance numbers") ||
      lowerMessage.includes("ieee event attendance details") ||
      lowerMessage.includes("ieee event attendance overview") ||
      lowerMessage.includes("ieee event attendance highlights") ||
      lowerMessage.includes("ieee event attendance success") ||
      lowerMessage.includes("ieee event attendance popularity")
    ) {
      return "The Industrial IoT Workshop had the highest attendance with over 100 attendees.";
    }
    if (
      lowerMessage.includes("are there any online events") ||
      lowerMessage.includes("online events") ||
      lowerMessage.includes("virtual events") ||
      lowerMessage.includes("ieee online events") ||
      lowerMessage.includes("ieee virtual events") ||
      lowerMessage.includes("ieee microsoft teams events") ||
      lowerMessage.includes("ieee online workshop examples") ||
      lowerMessage.includes("ieee virtual session examples") ||
      lowerMessage.includes("ieee online event attendance") ||
      lowerMessage.includes("ieee virtual event details") ||
      lowerMessage.includes("ieee online event overview") ||
      lowerMessage.includes("ieee virtual event description") ||
      lowerMessage.includes("ieee online event benefits") ||
      lowerMessage.includes("ieee virtual event accessibility") ||
      lowerMessage.includes("ieee online event participation")
    ) {
      return "Yes! Events like 'AI in Neuroscience' and 'CMOS Design' had 30–85+ attendees and were conducted online via Microsoft Teams.";
    }
    if (
      lowerMessage.includes("who can i contact for event registration help") ||
      lowerMessage.includes("event registration help") ||
      lowerMessage.includes("register for events") ||
      lowerMessage.includes("monika p event coordinator") ||
      lowerMessage.includes("beryl t binu event coordinator") ||
      lowerMessage.includes("ieee event registration contact") ||
      lowerMessage.includes("ieee event registration support") ||
      lowerMessage.includes("ieee event registration assistance") ||
      lowerMessage.includes("ieee event registration queries") ||
      lowerMessage.includes("ieee event registration details") ||
      lowerMessage.includes("ieee event registration phone number") ||
      lowerMessage.includes("ieee event registration email") ||
      lowerMessage.includes("ieee event registration process") ||
      lowerMessage.includes("ieee event registration guidance") ||
      lowerMessage.includes("ieee event registration helpdesk")
    ) {
      return "You can contact Monika P (+91 91489 02320) and Beryl T Binu (+91 90199 95449), our Student Event Coordinators, for registration help.";
    }
    if (
      lowerMessage.includes("are events archived or recorded") ||
      lowerMessage.includes("events archived") ||
      lowerMessage.includes("recorded events") ||
      lowerMessage.includes("past event gallery") ||
      lowerMessage.includes("ieee event recordings") ||
      lowerMessage.includes("ieee event archives") ||
      lowerMessage.includes("ieee event photo gallery") ||
      lowerMessage.includes("ieee event video recordings") ||
      lowerMessage.includes("ieee event documentation") ||
      lowerMessage.includes("ieee event history access") ||
      lowerMessage.includes("ieee event past content") ||
      lowerMessage.includes("ieee event media") ||
      lowerMessage.includes("ieee event visual records") ||
      lowerMessage.includes("ieee event highlights access") ||
      lowerMessage.includes("ieee event photo access")
    ) {
      return "While not all events are recorded, most have a photo gallery under the 'Event Gallery' section on our website.";
    }
    if (
      lowerMessage.includes("how do i find information about upcoming events") ||
      lowerMessage.includes("upcoming events") ||
      lowerMessage.includes("future events") ||
      lowerMessage.includes("ieee upcoming events") ||
      lowerMessage.includes("ieee future events") ||
      lowerMessage.includes("ieee event schedule updates") ||
      lowerMessage.includes("ieee event registration links") ||
      lowerMessage.includes("ieee event email updates") ||
      lowerMessage.includes("ieee event whatsapp groups") ||
      lowerMessage.includes("ieee event page for updates") ||
      lowerMessage.includes("ieee event calendar for upcoming") ||
      lowerMessage.includes("ieee event announcements") ||
      lowerMessage.includes("ieee event notifications") ||
      lowerMessage.includes("ieee event information release") ||
      lowerMessage.includes("ieee event latest schedule")
    ) {
      return "Registration links for upcoming IEEE PU events are shared on the website, email, or WhatsApp groups ahead of each event. Check our 'Events' page for the latest schedule!";
    }
    if (
      lowerMessage.includes("can I see events from specific years like 2024-2025") ||
      lowerMessage.includes("events 2024-2025") ||
      lowerMessage.includes("events in 2024") ||
      lowerMessage.includes("events in 2025") ||
      lowerMessage.includes("ieee events by year") ||
      lowerMessage.includes("ieee event history by year") ||
      lowerMessage.includes("ieee event categorization by year") ||
      lowerMessage.includes("ieee event archives by year") ||
      lowerMessage.includes("ieee event past years") ||
      lowerMessage.includes("ieee event specific year access") ||
      lowerMessage.includes("ieee event timeline by year") ||
      lowerMessage.includes("ieee event historical data") ||
      lowerMessage.includes("ieee event year filter") ||
      lowerMessage.includes("ieee event date range") ||
      lowerMessage.includes("ieee event historical records")
    ) {
      return "The IEEE Events page is categorized by year, including 2024–2025 and 2023–2024. You can check there for specific events from those periods.";
    }
    if (
      lowerMessage.includes("what was the microsoft r&d lab event about") ||
      lowerMessage.includes("microsoft r&d lab event") ||
      lowerMessage.includes("microsoft lab event") ||
      lowerMessage.includes("microsoft r&d lab event date") ||
      lowerMessage.includes("microsoft r&d lab event details") ||
      lowerMessage.includes("microsoft r&d lab event overview") ||
      lowerMessage.includes("microsoft r&d lab event description") ||
      lowerMessage.includes("microsoft r&d lab event focus") ||
      lowerMessage.includes("microsoft r&d lab event content") ||
      lowerMessage.includes("microsoft r&d lab event highlights") ||
      lowerMessage.includes("microsoft r&d lab event purpose") ||
      lowerMessage.includes("microsoft r&d lab event benefits") ||
      lowerMessage.includes("microsoft r&d lab event learning objectives") ||
      lowerMessage.includes("microsoft r&d lab event innovation") ||
      lowerMessage.includes("microsoft r&d lab event technology")
    ) {
      return "The 'Microsoft R&D Lab' event was held on June 17, 2025.";
    }
    if (
      lowerMessage.includes("when was the ieee project expo 2025") ||
      lowerMessage.includes("ieee project expo 2025") ||
      lowerMessage.includes("project expo 2025") ||
      lowerMessage.includes("ieee project expo 2025 date") ||
      lowerMessage.includes("ieee project expo 2025 details") ||
      lowerMessage.includes("ieee project expo 2025 overview") ||
      lowerMessage.includes("ieee project expo 2025 description") ||
      lowerMessage.includes("ieee project expo 2025 focus") ||
      lowerMessage.includes("ieee project expo 2025 content") ||
      lowerMessage.includes("ieee project expo 2025 highlights") ||
      lowerMessage.includes("ieee project expo 2025 purpose") ||
      lowerMessage.includes("ieee project expo 2025 benefits") ||
      lowerMessage.includes("ieee project expo 2025 learning objectives") ||
      lowerMessage.includes("ieee project expo 2025 innovation") ||
      lowerMessage.includes("ieee project expo 2025 technology")
    ) {
      return "The 'IEEE Project Expo 2025' was held on May 7, 2025.";
    }
    if (
      lowerMessage.includes("when did the deep learning and llms session take place") ||
      lowerMessage.includes("deep learning and llms session date") ||
      lowerMessage.includes("llms session date") ||
      lowerMessage.includes("deep learning llms session when") ||
      lowerMessage.includes("deep learning llms session details") ||
      lowerMessage.includes("deep learning llms session overview") ||
      lowerMessage.includes("deep learning llms session description") ||
      lowerMessage.includes("deep learning llms session focus") ||
      lowerMessage.includes("deep learning llms session content") ||
      lowerMessage.includes("deep learning llms session highlights") ||
      lowerMessage.includes("deep learning llms session purpose") ||
      lowerMessage.includes("deep learning llms session benefits") ||
      lowerMessage.includes("deep learning llms session learning objectives") ||
      lowerMessage.includes("deep learning llms session innovation") ||
      lowerMessage.includes("deep learning llms session technology")
    ) {
      return "The 'Deep Learning and LLMs' session took place on April 21, 2025.";
    }
    if (
      lowerMessage.includes("what was the cense bangalore event about") ||
      lowerMessage.includes("cense bangalore event") ||
      lowerMessage.includes("iisc cense") ||
      lowerMessage.includes("cense bangalore event date") ||
      lowerMessage.includes("cense bangalore event details") ||
      lowerMessage.includes("cense bangalore event overview") ||
      lowerMessage.includes("cense bangalore event description") ||
      lowerMessage.includes("cense bangalore event focus") ||
      lowerMessage.includes("cense bangalore event content") ||
      lowerMessage.includes("cense bangalore event highlights") ||
      lowerMessage.includes("cense bangalore event purpose") ||
      lowerMessage.includes("cense bangalore event benefits") ||
      lowerMessage.includes("cense bangalore event learning objectives") ||
      lowerMessage.includes("cense bangalore event innovation") ||
      lowerMessage.includes("cense bangalore event technology") ||
      lowerMessage.includes("industrial visit to cense iisc bengaluru") ||
      lowerMessage.includes("cense iisc bengaluru visit date")
    ) {
      return "A visit or session by CeNSE, Bangalore, occurred on April 4, 2025, and an industrial visit to CeNSE, IISc Bengaluru, on October 11, 2024.";
    }
    if (
      lowerMessage.includes("what was the advancing land cover mapping event about") ||
      lowerMessage.includes("advancing land cover mapping") ||
      lowerMessage.includes("land cover mapping event") ||
      lowerMessage.includes("advancing land cover mapping date") ||
      lowerMessage.includes("advancing land cover mapping details") ||
      lowerMessage.includes("advancing land cover mapping overview") ||
      lowerMessage.includes("advancing land cover mapping description") ||
      lowerMessage.includes("advancing land cover mapping focus") ||
      lowerMessage.includes("advancing land cover mapping content") ||
      lowerMessage.includes("advancing land cover mapping highlights") ||
      lowerMessage.includes("advancing land cover mapping purpose") ||
      lowerMessage.includes("advancing land cover mapping benefits") ||
      lowerMessage.includes("advancing land cover mapping learning objectives") ||
      lowerMessage.includes("advancing land cover mapping innovation") ||
      lowerMessage.includes("advancing land cover mapping technology")
    ) {
      return "The 'Advancing Land Cover Mapping' event was on March 28, 2025.";
    }
    if (
      lowerMessage.includes("what was the fpga implementation of triple des algorithm event about") ||
      lowerMessage.includes("fpga implementation of triple des algorithm") ||
      lowerMessage.includes("triple des fpga") ||
      lowerMessage.includes("fpga triple des event") ||
      lowerMessage.includes("fpga implementation of triple des algorithm date") ||
      lowerMessage.includes("fpga implementation of triple des algorithm details") ||
      lowerMessage.includes("fpga implementation of triple des algorithm overview") ||
      lowerMessage.includes("fpga implementation of triple des algorithm description") ||
      lowerMessage.includes("fpga implementation of triple des algorithm focus") ||
      lowerMessage.includes("fpga implementation of triple des algorithm content") ||
      lowerMessage.includes("fpga implementation of triple des algorithm highlights") ||
      lowerMessage.includes("fpga implementation of triple des algorithm purpose") ||
      lowerMessage.includes("fpga implementation of triple des algorithm benefits") ||
      lowerMessage.includes("fpga implementation of triple des algorithm learning objectives") ||
      lowerMessage.includes("fpga implementation of triple des algorithm innovation") ||
      lowerMessage.includes("fpga implementation of triple des algorithm technology")
    ) {
      return "The 'FPGA implementation of Triple DES Algorithm' event was held on February 28, 2025.";
    }
    if (
      lowerMessage.includes("what was the fpga for neural network in power switches seminar about") ||
      lowerMessage.includes("fpga for neural network in power switches") ||
      lowerMessage.includes("neural network fpga") ||
      lowerMessage.includes("fpga power switches seminar") ||
      lowerMessage.includes("fpga for neural network in power switches date") ||
      lowerMessage.includes("fpga for neural network in power switches details") ||
      lowerMessage.includes("fpga for neural network in power switches overview") ||
      lowerMessage.includes("fpga for neural network in power switches description") ||
      lowerMessage.includes("fpga for neural network in power switches focus") ||
      lowerMessage.includes("fpga for neural network in power switches content") ||
      lowerMessage.includes("fpga for neural network in power switches highlights") ||
      lowerMessage.includes("fpga for neural network in power switches purpose") ||
      lowerMessage.includes("fpga for neural network in power switches benefits") ||
      lowerMessage.includes("fpga for neural network in power switches learning objectives") ||
      lowerMessage.includes("fpga for neural network in power switches innovation") ||
      lowerMessage.includes("fpga for neural network in power switches technology")
    ) {
      return "The 'FPGA for Neural Network in Power Switches' seminar was on February 21, 2025.";
    }
    if (
      lowerMessage.includes("what was the fpga implementation of hmac algorithm event about") ||
      lowerMessage.includes("fpga implementation of hmac algorithm") ||
      lowerMessage.includes("hmac fpga") ||
      lowerMessage.includes("fpga hmac event") ||
      lowerMessage.includes("fpga implementation of hmac algorithm date") ||
      lowerMessage.includes("fpga implementation of hmac algorithm details") ||
      lowerMessage.includes("fpga implementation of hmac algorithm overview") ||
      lowerMessage.includes("fpga implementation of hmac algorithm description") ||
      lowerMessage.includes("fpga implementation of hmac algorithm focus") ||
      lowerMessage.includes("fpga implementation of hmac algorithm content") ||
      lowerMessage.includes("fpga implementation of hmac algorithm highlights") ||
      lowerMessage.includes("fpga implementation of hmac algorithm purpose") ||
      lowerMessage.includes("fpga implementation of hmac algorithm benefits") ||
      lowerMessage.includes("fpga implementation of hmac algorithm learning objectives") ||
      lowerMessage.includes("fpga implementation of hmac algorithm innovation") ||
      lowerMessage.includes("fpga implementation of hmac algorithm technology")
    ) {
      return "The 'FPGA implementation of HMAC algorithm' event was held on February 14, 2025.";
    }
    if (
      lowerMessage.includes("what was the digital image forensics – achievements & challenges event about") ||
      lowerMessage.includes("digital image forensics") ||
      lowerMessage.includes("image forensics") ||
      lowerMessage.includes("digital image forensics event") ||
      lowerMessage.includes("digital image forensics date") ||
      lowerMessage.includes("digital image forensics details") ||
      lowerMessage.includes("digital image forensics overview") ||
      lowerMessage.includes("digital image forensics description") ||
      lowerMessage.includes("digital image forensics focus") ||
      lowerMessage.includes("digital image forensics content") ||
      lowerMessage.includes("digital image forensics highlights") ||
      lowerMessage.includes("digital image forensics purpose") ||
      lowerMessage.includes("digital image forensics benefits") ||
      lowerMessage.includes("digital image forensics learning objectives") ||
      lowerMessage.includes("digital image forensics innovation") ||
      lowerMessage.includes("digital image forensics technology")
    ) {
      return "The 'Digital Image Forensics – Achievements & Challenges' event was conducted on January 24, 2025.";
    }
    if (
      lowerMessage.includes("what was the women safety and self defence session about") ||
      lowerMessage.includes("women safety and self defence") ||
      lowerMessage.includes("safety session") ||
      lowerMessage.includes("women safety session") ||
      lowerMessage.includes("self defence session") ||
      lowerMessage.includes("women safety and self defence date") ||
      lowerMessage.includes("women safety and self defence details") ||
      lowerMessage.includes("women safety and self defence overview") ||
      lowerMessage.includes("women safety and self defence description") ||
      lowerMessage.includes("women safety and self defence focus") ||
      lowerMessage.includes("women safety and self defence content") ||
      lowerMessage.includes("women safety and self defence highlights") ||
      lowerMessage.includes("women safety and self defence purpose") ||
      lowerMessage.includes("women safety and self defence benefits") ||
      lowerMessage.includes("women safety and self defence learning objectives") ||
      lowerMessage.includes("women safety and self defence innovation") ||
      lowerMessage.includes("women safety and self defence technology")
    ) {
      return "A safety session on 'Women Safety and Self Defence' was held on December 13, 2024.";
    }
    if (
      lowerMessage.includes("what was the kvl and kcl hindi session about") ||
      lowerMessage.includes("kvl and kcl hindi session") ||
      lowerMessage.includes("hindi session") ||
      lowerMessage.includes("kvl kcl hindi event") ||
      lowerMessage.includes("kvl and kcl hindi session date") ||
      lowerMessage.includes("kvl and kcl hindi session details") ||
      lowerMessage.includes("kvl and kcl hindi session overview") ||
      lowerMessage.includes("kvl and kcl hindi session description") ||
      lowerMessage.includes("kvl and kcl hindi session focus") ||
      lowerMessage.includes("kvl and kcl hindi session content") ||
      lowerMessage.includes("kvl and kcl hindi session highlights") ||
      lowerMessage.includes("kvl and kcl hindi session purpose") ||
      lowerMessage.includes("kvl and kcl hindi session benefits") ||
      lowerMessage.includes("kvl and kcl hindi session learning objectives") ||
      lowerMessage.includes("kvl and kcl hindi session innovation") ||
      lowerMessage.includes("kvl and kcl hindi session technology")
    ) {
      return "The KVL and KCL Hindi session was organized on December 6, 2024.";
    }
    if (
      lowerMessage.includes("when was the ieee student branch meet 2024") ||
      lowerMessage.includes("ieee student branch meet 2024") ||
      lowerMessage.includes("student branch meet") ||
      lowerMessage.includes("ieee student branch meet 2024 date") ||
      lowerMessage.includes("ieee student branch meet 2024 details") ||
      lowerMessage.includes("ieee student branch meet 2024 overview") ||
      lowerMessage.includes("ieee student branch meet 2024 description") ||
      lowerMessage.includes("ieee student branch meet 2024 focus") ||
      lowerMessage.includes("ieee student branch meet 2024 content") ||
      lowerMessage.includes("ieee student branch meet 2024 highlights") ||
      lowerMessage.includes("ieee student branch meet 2024 purpose") ||
      lowerMessage.includes("ieee student branch meet 2024 benefits") ||
      lowerMessage.includes("ieee student branch meet 2024 learning objectives") ||
      lowerMessage.includes("ieee student branch meet 2024 innovation") ||
      lowerMessage.includes("ieee student branch meet 2024 technology") ||
      lowerMessage.includes("ieee student branch meet august 2024") ||
      lowerMessage.includes("ieee student branch meet november 2024")
    ) {
      return "The 'IEEE Student Branch Meet 2024' was held on November 15, 2024, and another in August 2024 on August 31.";
    }
    if (
      lowerMessage.includes("what was the ai virtual companion presentation about") ||
      lowerMessage.includes("ai virtual companion") ||
      lowerMessage.includes("virtual companion") ||
      lowerMessage.includes("ai virtual companion presentation date") ||
      lowerMessage.includes("ai virtual companion presentation details") ||
      lowerMessage.includes("ai virtual companion presentation overview") ||
      lowerMessage.includes("ai virtual companion presentation description") ||
      lowerMessage.includes("ai virtual companion presentation focus") ||
      lowerMessage.includes("ai virtual companion presentation content") ||
      lowerMessage.includes("ai virtual companion presentation highlights") ||
      lowerMessage.includes("ai virtual companion presentation purpose") ||
      lowerMessage.includes("ai virtual companion presentation benefits") ||
      lowerMessage.includes("ai virtual companion presentation learning objectives") ||
      lowerMessage.includes("ai virtual companion presentation innovation") ||
      lowerMessage.includes("ai virtual companion presentation technology")
    ) {
      return "The 'AI Virtual Companion' presentation was on October 4, 2024.";
    }
    if (
      lowerMessage.includes("when was ieee day 2024 celebrated") ||
      lowerMessage.includes("ieee day celebration 2024") ||
      lowerMessage.includes("ieee day") ||
      lowerMessage.includes("ieee day 2024 date") ||
      lowerMessage.includes("ieee day 2024 technical quiz") ||
      lowerMessage.includes("ieee day 2024 2nd year ece students") ||
      lowerMessage.includes("ieee day 2024 details") ||
      lowerMessage.includes("ieee day 2024 overview") ||
      lowerMessage.includes("ieee day 2024 description") ||
      lowerMessage.includes("ieee day 2024 focus") ||
      lowerMessage.includes("ieee day 2024 content") ||
      lowerMessage.includes("ieee day 2024 highlights") ||
      lowerMessage.includes("ieee day 2024 purpose") ||
      lowerMessage.includes("ieee day 2024 benefits") ||
      lowerMessage.includes("ieee day 2024 learning objectives") ||
      lowerMessage.includes("ieee day 2024 innovation") ||
      lowerMessage.includes("ieee day 2024 technology")
    ) {
      return "IEEE Day 2024 was celebrated on October 1, 2024, along with a 'Technical Quiz for 2nd Year ECE Students'.";
    }
    if (
      lowerMessage.includes("what was the fundamentals of cybersecurity event about") ||
      lowerMessage.includes("fundamentals of cybersecurity") ||
      lowerMessage.includes("cybersecurity event") ||
      lowerMessage.includes("fundamentals of cybersecurity date") ||
      lowerMessage.includes("fundamentals of cybersecurity details") ||
      lowerMessage.includes("fundamentals of cybersecurity overview") ||
      lowerMessage.includes("fundamentals of cybersecurity description") ||
      lowerMessage.includes("fundamentals of cybersecurity focus") ||
      lowerMessage.includes("fundamentals of cybersecurity content") ||
      lowerMessage.includes("fundamentals of cybersecurity highlights") ||
      lowerMessage.includes("fundamentals of cybersecurity purpose") ||
      lowerMessage.includes("fundamentals of cybersecurity benefits") ||
      lowerMessage.includes("fundamentals of cybersecurity learning objectives") ||
      lowerMessage.includes("fundamentals of cybersecurity innovation") ||
      lowerMessage.includes("fundamentals of cybersecurity technology")
    ) {
      return "The 'Fundamentals of Cybersecurity' event was held on September 27, 2024.";
    }
    if (
      lowerMessage.includes("what was the artificial intelligence and its impact session about") ||
      lowerMessage.includes("artificial intelligence and its impact") ||
      lowerMessage.includes("ai impact session") ||
      lowerMessage.includes("artificial intelligence and its impact date") ||
      lowerMessage.includes("artificial intelligence and its impact details") ||
      lowerMessage.includes("artificial intelligence and its impact overview") ||
      lowerMessage.includes("artificial intelligence and its impact description") ||
      lowerMessage.includes("artificial intelligence and its impact focus") ||
      lowerMessage.includes("artificial intelligence and its impact content") ||
      lowerMessage.includes("artificial intelligence and its impact highlights") ||
      lowerMessage.includes("artificial intelligence and its impact purpose") ||
      lowerMessage.includes("artificial intelligence and its impact benefits") ||
      lowerMessage.includes("artificial intelligence and its impact learning objectives") ||
      lowerMessage.includes("artificial intelligence and its impact innovation") ||
      lowerMessage.includes("artificial intelligence and its impact technology")
    ) {
      return "The 'Artificial Intelligence and Its Impact' session was conducted on September 20, 2024.";
    }
    if (
      lowerMessage.includes("what was the nano-tech design & applications event about") ||
      lowerMessage.includes("nano-tech design & applications") ||
      lowerMessage.includes("nano tech event") ||
      lowerMessage.includes("ieee ntc sponsored event") ||
      lowerMessage.includes("ieee societies inauguration") ||
      lowerMessage.includes("cis comsoc sensor council nano tech council") ||
      lowerMessage.includes("nano-tech design & applications date") ||
      lowerMessage.includes("nano-tech design & applications details") ||
      lowerMessage.includes("nano-tech design & applications overview") ||
      lowerMessage.includes("nano-tech design & applications description") ||
      lowerMessage.includes("nano-tech design & applications focus") ||
      lowerMessage.includes("nano-tech design & applications content") ||
      lowerMessage.includes("nano-tech design & applications highlights") ||
      lowerMessage.includes("nano-tech design & applications purpose") ||
      lowerMessage.includes("nano-tech design & applications benefits") ||
      lowerMessage.includes("nano-tech design & applications learning objectives") ||
      lowerMessage.includes("nano-tech design & applications innovation") ||
      lowerMessage.includes("nano-tech design & applications technology")
    ) {
      return "An IEEE NTC-sponsored event on Nano-Tech Design & Applications, along with the inauguration of IEEE Societies like CIS, ComSoc, Sensor Council, and Nano Tech Council, happened on September 13–14, 2024.";
    }
    if (
      lowerMessage.includes("what was the into corporate space and beyond engineering webinar about") ||
      lowerMessage.includes("into corporate space and beyond engineering") ||
      lowerMessage.includes("corporate space webinar") ||
      lowerMessage.includes("into corporate space and beyond engineering date") ||
      lowerMessage.includes("into corporate space and beyond engineering details") ||
      lowerMessage.includes("into corporate space and beyond engineering overview") ||
      lowerMessage.includes("into corporate space and beyond engineering description") ||
      lowerMessage.includes("into corporate space and beyond engineering focus") ||
      lowerMessage.includes("into corporate space and beyond engineering content") ||
      lowerMessage.includes("into corporate space and beyond engineering highlights") ||
      lowerMessage.includes("into corporate space and beyond engineering purpose") ||
      lowerMessage.includes("into corporate space and beyond engineering benefits") ||
      lowerMessage.includes("into corporate space and beyond engineering learning objectives") ||
      lowerMessage.includes("into corporate space and beyond engineering innovation") ||
      lowerMessage.includes("into corporate space and beyond engineering technology")
    ) {
      return "The webinar 'Into Corporate Space and Beyond Engineering' was on August 30, 2024.";
    }
    if (
      lowerMessage.includes("what was the research opportunities in ai & ml webinar about") ||
      lowerMessage.includes("research opportunities in ai & ml") ||
      lowerMessage.includes("ai ml research") ||
      lowerMessage.includes("research opportunities in ai & ml date") ||
      lowerMessage.includes("research opportunities in ai & ml details") ||
      lowerMessage.includes("research opportunities in ai & ml overview") ||
      lowerMessage.includes("research opportunities in ai & ml description") ||
      lowerMessage.includes("research opportunities in ai & ml focus") ||
      lowerMessage.includes("research opportunities in ai & ml content") ||
      lowerMessage.includes("research opportunities in ai & ml highlights") ||
      lowerMessage.includes("research opportunities in ai & ml purpose") ||
      lowerMessage.includes("research opportunities in ai & ml benefits") ||
      lowerMessage.includes("research opportunities in ai & ml learning objectives") ||
      lowerMessage.includes("research opportunities in ai & ml innovation") ||
      lowerMessage.includes("research opportunities in ai & ml technology")
    ) {
      return "The webinar 'Research Opportunities in AI & ML' was on August 23, 2024.";
    }
    if (
      lowerMessage.includes("what was the time frequency analysis of signals webinar about") ||
      lowerMessage.includes("time frequency analysis of signals") ||
      lowerMessage.includes("signal analysis webinar") ||
      lowerMessage.includes("time frequency analysis of signals date") ||
      lowerMessage.includes("time frequency analysis of signals details") ||
      lowerMessage.includes("time frequency analysis of signals overview") ||
      lowerMessage.includes("time frequency analysis of signals description") ||
      lowerMessage.includes("time frequency analysis of signals focus") ||
      lowerMessage.includes("time frequency analysis of signals content") ||
      lowerMessage.includes("time frequency analysis of signals highlights") ||
      lowerMessage.includes("time frequency analysis of signals purpose") ||
      lowerMessage.includes("time frequency analysis of signals benefits") ||
      lowerMessage.includes("time frequency analysis of signals learning objectives") ||
      lowerMessage.includes("time frequency analysis of signals innovation") ||
      lowerMessage.includes("time frequency analysis of signals technology")
    ) {
      return "The webinar 'Time Frequency Analysis of Signals' was on August 9, 2024.";
    }
    if (
      lowerMessage.includes("what was the technovanza idea presentation about") ||
      lowerMessage.includes("technovanza idea presentation") ||
      lowerMessage.includes("technovanza") ||
      lowerMessage.includes("technovanza idea presentation date") ||
      lowerMessage.includes("technovanza idea presentation details") ||
      lowerMessage.includes("technovanza idea presentation overview") ||
      lowerMessage.includes("technovanza idea presentation description") ||
      lowerMessage.includes("technovanza idea presentation focus") ||
      lowerMessage.includes("technovanza idea presentation content") ||
      lowerMessage.includes("technovanza idea presentation highlights") ||
      lowerMessage.includes("technovanza idea presentation purpose") ||
      lowerMessage.includes("technovanza idea presentation benefits") ||
      lowerMessage.includes("technovanza idea presentation learning objectives") ||
      lowerMessage.includes("technovanza idea presentation innovation") ||
      lowerMessage.includes("technovanza idea presentation technology")
    ) {
      return "TECHNOVANZA Idea Presentation was on July 25, 2024.";
    }
    if (
      lowerMessage.includes("what was the remote sensing & navigation – indian & global view event about") ||
      lowerMessage.includes("remote sensing & navigation") ||
      lowerMessage.includes("remote sensing event") ||
      lowerMessage.includes("remote sensing & navigation date") ||
      lowerMessage.includes("remote sensing & navigation details") ||
      lowerMessage.includes("remote sensing & navigation overview") ||
      lowerMessage.includes("remote sensing & navigation description") ||
      lowerMessage.includes("remote sensing & navigation focus") ||
      lowerMessage.includes("remote sensing & navigation content") ||
      lowerMessage.includes("remote sensing & navigation highlights") ||
      lowerMessage.includes("remote sensing & navigation purpose") ||
      lowerMessage.includes("remote sensing & navigation benefits") ||
      lowerMessage.includes("remote sensing & navigation learning objectives") ||
      lowerMessage.includes("remote sensing & navigation innovation") ||
      lowerMessage.includes("remote sensing & navigation technology")
    ) {
      return "The 'Remote Sensing & Navigation – Indian & Global View' event was held on July 26, 2024.";
    }
    if (
      lowerMessage.includes("what was the vlsi design workshop 2023 about") ||
      lowerMessage.includes("vlsi design workshop 2023") ||
      lowerMessage.includes("2023 vlsi workshop") ||
      lowerMessage.includes("vlsi design workshop 2023 date") ||
      lowerMessage.includes("vlsi design workshop 2023 details") ||
      lowerMessage.includes("vlsi design workshop 2023 overview") ||
      lowerMessage.includes("vlsi design workshop 2023 description") ||
      lowerMessage.includes("vlsi design workshop 2023 focus") ||
      lowerMessage.includes("vlsi design workshop 2023 content") ||
      lowerMessage.includes("vlsi design workshop 2023 highlights") ||
      lowerMessage.includes("vlsi design workshop 2023 purpose") ||
      lowerMessage.includes("vlsi design workshop 2023 benefits") ||
      lowerMessage.includes("vlsi design workshop 2023 learning objectives") ||
      lowerMessage.includes("vlsi design workshop 2023 innovation") ||
      lowerMessage.includes("vlsi design workshop 2023 technology")
    ) {
      return "The 'VLSI Design' workshop was conducted on July 23–24, 2024.";
    }
    if (
      lowerMessage.includes("what was the women in wicas technology event about") ||
      lowerMessage.includes("women in wicas technology") ||
      lowerMessage.includes("wicas technology event") ||
      lowerMessage.includes("women in wicas technology date") ||
      lowerMessage.includes("women in wicas technology details") ||
      lowerMessage.includes("women in wicas technology overview") ||
      lowerMessage.includes("women in wicas technology description") ||
      lowerMessage.includes("women in wicas technology focus") ||
      lowerMessage.includes("women in wicas technology content") ||
      lowerMessage.includes("women in wicas technology highlights") ||
      lowerMessage.includes("women in wicas technology purpose") ||
      lowerMessage.includes("women in wicas technology benefits") ||
      lowerMessage.includes("women in wicas technology learning objectives") ||
      lowerMessage.includes("women in wicas technology innovation") ||
      lowerMessage.includes("women in wicas technology technology")
    ) {
      return "The 'Women in WiCAS Technology' event was held on June 28, 2024.";
    }
    if (
      lowerMessage.includes("what was the ai tools for research event about") ||
      lowerMessage.includes("ai tools for research") ||
      lowerMessage.includes("research ai tools") ||
      lowerMessage.includes("ai tools for research date") ||
      lowerMessage.includes("ai tools for research details") ||
      lowerMessage.includes("ai tools for research overview") ||
      lowerMessage.includes("ai tools for research description") ||
      lowerMessage.includes("ai tools for research focus") ||
      lowerMessage.includes("ai tools for research content") ||
      lowerMessage.includes("ai tools for research highlights") ||
      lowerMessage.includes("ai tools for research purpose") ||
      lowerMessage.includes("ai tools for research benefits") ||
      lowerMessage.includes("ai tools for research learning objectives") ||
      lowerMessage.includes("ai tools for research innovation") ||
      lowerMessage.includes("ai tools for research technology")
    ) {
      return "The 'AI Tools for Research' event was held on April 11, 2024.";
    }
    if (
      lowerMessage.includes("what was the ieee international conference on smart tech about") ||
      lowerMessage.includes("ieee international conference on smart tech") ||
      lowerMessage.includes("smart tech conference") ||
      lowerMessage.includes("ieee international conference on smart tech date") ||
      lowerMessage.includes("ieee international conference on smart tech details") ||
      lowerMessage.includes("ieee international conference on smart tech overview") ||
      lowerMessage.includes("ieee international conference on smart tech description") ||
      lowerMessage.includes("ieee international conference on smart tech focus") ||
      lowerMessage.includes("ieee international conference on smart tech content") ||
      lowerMessage.includes("ieee international conference on smart tech highlights") ||
      lowerMessage.includes("ieee international conference on smart tech purpose") ||
      lowerMessage.includes("ieee international conference on smart tech benefits") ||
      lowerMessage.includes("ieee international conference on smart tech learning objectives") ||
      lowerMessage.includes("ieee international conference on smart tech innovation") ||
      lowerMessage.includes("ieee international conference on smart tech technology")
    ) {
      return "The IEEE International Conference on Smart Tech was held on March 8–9, 2024.";
    }
    if (
      lowerMessage.includes("what was bytebash about") ||
      lowerMessage.includes("bytebash") ||
      lowerMessage.includes("software hackathon") ||
      lowerMessage.includes("bytebash date") ||
      lowerMessage.includes("bytebash details") ||
      lowerMessage.includes("bytebash overview") ||
      lowerMessage.includes("bytebash description") ||
      lowerMessage.includes("bytebash focus") ||
      lowerMessage.includes("bytebash content") ||
      lowerMessage.includes("bytebash highlights") ||
      lowerMessage.includes("bytebash purpose") ||
      lowerMessage.includes("bytebash benefits") ||
      lowerMessage.includes("bytebash learning objectives") ||
      lowerMessage.includes("bytebash innovation") ||
      lowerMessage.includes("bytebash technology")
    ) {
      return "BYTEBASH was a software hackathon held on March 1, 2024.";
    }
    if (
      lowerMessage.includes("what was the pcb design & fabrication 2024 about") ||
      lowerMessage.includes("pcb design & fabrication 2024") ||
      lowerMessage.includes("2024 pcb event") ||
      lowerMessage.includes("pcb design & fabrication 2024 date") ||
      lowerMessage.includes("pcb design & fabrication 2024 details") ||
      lowerMessage.includes("pcb design & fabrication 2024 overview") ||
      lowerMessage.includes("pcb design & fabrication 2024 description") ||
      lowerMessage.includes("pcb design & fabrication 2024 focus") ||
      lowerMessage.includes("pcb design & fabrication 2024 content") ||
      lowerMessage.includes("pcb design & fabrication 2024 highlights") ||
      lowerMessage.includes("pcb design & fabrication 2024 purpose") ||
      lowerMessage.includes("pcb design & fabrication 2024 benefits") ||
      lowerMessage.includes("pcb design & fabrication 2024 learning objectives") ||
      lowerMessage.includes("pcb design & fabrication 2024 innovation") ||
      lowerMessage.includes("pcb design & fabrication 2024 technology")
    ) {
      return "PCB Design & Fabrication was held on February 23, 2024.";
    }
    if (
      lowerMessage.includes("what was techvolution about") ||
      lowerMessage.includes("techvolution") ||
      lowerMessage.includes("about techvolution") ||
      lowerMessage.includes("techvolution date") ||
      lowerMessage.includes("techvolution details") ||
      lowerMessage.includes("techvolution overview") ||
      lowerMessage.includes("techvolution description") ||
      lowerMessage.includes("techvolution focus") ||
      lowerMessage.includes("techvolution content") ||
      lowerMessage.includes("techvolution highlights") ||
      lowerMessage.includes("techvolution purpose") ||
      lowerMessage.includes("techvolution benefits") ||
      lowerMessage.includes("techvolution learning objectives") ||
      lowerMessage.includes("techvolution innovation") ||
      lowerMessage.includes("techvolution technology")
    ) {
      return "TECHVOLUTION was organized from December 7–9, 2023.";
    }
    if (
      lowerMessage.includes("what was the hardware security architecture for emerging technologies event about") ||
      lowerMessage.includes("hardware security architecture") ||
      lowerMessage.includes("hardware security event") ||
      lowerMessage.includes("hardware security architecture for emerging technologies date") ||
      lowerMessage.includes("hardware security architecture for emerging technologies details") ||
      lowerMessage.includes("hardware security architecture for emerging technologies overview") ||
      lowerMessage.includes("hardware security architecture for emerging technologies description") ||
      lowerMessage.includes("hardware security architecture for emerging technologies focus") ||
      lowerMessage.includes("hardware security architecture for emerging technologies content") ||
      lowerMessage.includes("hardware security architecture for emerging technologies highlights") ||
      lowerMessage.includes("hardware security architecture for emerging technologies purpose") ||
      lowerMessage.includes("hardware security architecture for emerging technologies benefits") ||
      lowerMessage.includes("hardware security architecture for emerging technologies learning objectives") ||
      lowerMessage.includes("hardware security architecture for emerging technologies innovation") ||
      lowerMessage.includes("hardware security architecture for emerging technologies technology")
    ) {
      return "The 'Hardware Security Architecture for Emerging Technologies' event was on November 25, 2023.";
    }
    if (
      lowerMessage.includes("what was the pcb workshop using kicad about") ||
      lowerMessage.includes("pcb workshop using kicad") ||
      lowerMessage.includes("kicad pcb workshop") ||
      lowerMessage.includes("pcb workshop using kicad date") ||
      lowerMessage.includes("pcb workshop using kicad details") ||
      lowerMessage.includes("pcb workshop using kicad overview") ||
      lowerMessage.includes("pcb workshop using kicad description") ||
      lowerMessage.includes("pcb workshop using kicad focus") ||
      lowerMessage.includes("pcb workshop using kicad content") ||
      lowerMessage.includes("pcb workshop using kicad highlights") ||
      lowerMessage.includes("pcb workshop using kicad purpose") ||
      lowerMessage.includes("pcb workshop using kicad benefits") ||
      lowerMessage.includes("pcb workshop using kicad learning objectives") ||
      lowerMessage.includes("pcb workshop using kicad innovation") ||
      lowerMessage.includes("pcb workshop using kicad technology")
    ) {
      return "The PCB workshop using KiCad was on October 18, 2023.";
    }
    if (
      lowerMessage.includes("when was ieee day 2023 celebrated") ||
      lowerMessage.includes("ieee day 2023") ||
      lowerMessage.includes("ieee day celebration") ||
      lowerMessage.includes("ieee day 2023 date") ||
      lowerMessage.includes("ieee day 2023 freshers") ||
      lowerMessage.includes("ieee day 2023 senior members") ||
      lowerMessage.includes("ieee day 2023 details") ||
      lowerMessage.includes("ieee day 2023 overview") ||
      lowerMessage.includes("ieee day 2023 description") ||
      lowerMessage.includes("ieee day 2023 focus") ||
      lowerMessage.includes("ieee day 2023 content") ||
      lowerMessage.includes("ieee day 2023 highlights") ||
      lowerMessage.includes("ieee day 2023 purpose") ||
      lowerMessage.includes("ieee day 2023 benefits") ||
      lowerMessage.includes("ieee day 2023 learning objectives") ||
      lowerMessage.includes("ieee day 2023 innovation") ||
      lowerMessage.includes("ieee day 2023 technology")
    ) {
      return "IEEE Day 2023 celebrations for both senior IEEE members and freshers were on October 1, 2023.";
    }
    if (
      lowerMessage.includes("what was the microfluidics for microplastics detection session about") ||
      lowerMessage.includes("microfluidics for microplastics detection") ||
      lowerMessage.includes("microplastics detection") ||
      lowerMessage.includes("microfluidics for microplastics detection date") ||
      lowerMessage.includes("microfluidics for microplastics detection details") ||
      lowerMessage.includes("microfluidics for microplastics detection overview") ||
      lowerMessage.includes("microfluidics for microplastics detection description") ||
      lowerMessage.includes("microfluidics for microplastics detection focus") ||
      lowerMessage.includes("microfluidics for microplastics detection content") ||
      lowerMessage.includes("microfluidics for microplastics detection highlights") ||
      lowerMessage.includes("microfluidics for microplastics detection purpose") ||
      lowerMessage.includes("microfluidics for microplastics detection benefits") ||
      lowerMessage.includes("microfluidics for microplastics detection learning objectives") ||
      lowerMessage.includes("microfluidics for microplastics detection innovation") ||
      lowerMessage.includes("microfluidics for microplastics detection technology")
    ) {
      return "The 'Microfluidics for Microplastics Detection' session was on September 21, 2023.";
    }
    if (
      lowerMessage.includes("what was the iot & vlsi design with eda tools session about") ||
      lowerMessage.includes("iot & vlsi design with eda tools") ||
      lowerMessage.includes("eda tools workshop") ||
      lowerMessage.includes("iot & vlsi design with eda tools date") ||
      lowerMessage.includes("iot & vlsi design with eda tools details") ||
      lowerMessage.includes("iot & vlsi design with eda tools overview") ||
      lowerMessage.includes("iot & vlsi design with eda tools description") ||
      lowerMessage.includes("iot & vlsi design with eda tools focus") ||
      lowerMessage.includes("iot & vlsi design with eda tools content") ||
      lowerMessage.includes("iot & vlsi design with eda tools highlights") ||
      lowerMessage.includes("iot & vlsi design with eda tools purpose") ||
      lowerMessage.includes("iot & vlsi design with eda tools benefits") ||
      lowerMessage.includes("iot & vlsi design with eda tools learning objectives") ||
      lowerMessage.includes("iot & vlsi design with eda tools innovation") ||
      lowerMessage.includes("iot & vlsi design with eda tools technology")
    ) {
      return "The 'IoT & VLSI Design with EDA Tools' session was on September 21, 2023.";
    }
    if (
      lowerMessage.includes("what was the organic devices workshop about") ||
      lowerMessage.includes("organic devices workshop") ||
      lowerMessage.includes("organic devices") ||
      lowerMessage.includes("organic devices workshop date") ||
      lowerMessage.includes("organic devices workshop details") ||
      lowerMessage.includes("organic devices workshop overview") ||
      lowerMessage.includes("organic devices workshop description") ||
      lowerMessage.includes("organic devices workshop focus") ||
      lowerMessage.includes("organic devices workshop content") ||
      lowerMessage.includes("organic devices workshop highlights") ||
      lowerMessage.includes("organic devices workshop purpose") ||
      lowerMessage.includes("organic devices workshop benefits") ||
      lowerMessage.includes("organic devices workshop learning objectives") ||
      lowerMessage.includes("organic devices workshop innovation") ||
      lowerMessage.includes("organic devices workshop technology")
    ) {
      return "The 'Organic Devices' workshop was held from August 21–25, 2023.";
    }
    if (
      lowerMessage.includes("what was the bipolar and cmos analog circuit design event about") ||
      lowerMessage.includes("bipolar and cmos analog circuit design") ||
      lowerMessage.includes("cmos analog design") ||
      lowerMessage.includes("bipolar and cmos analog circuit design date") ||
      lowerMessage.includes("bipolar and cmos analog circuit design details") ||
      lowerMessage.includes("bipolar and cmos analog circuit design overview") ||
      lowerMessage.includes("bipolar and cmos analog circuit design description") ||
      lowerMessage.includes("bipolar and cmos analog circuit design focus") ||
      lowerMessage.includes("bipolar and cmos analog circuit design content") ||
      lowerMessage.includes("bipolar and cmos analog circuit design highlights") ||
      lowerMessage.includes("bipolar and cmos analog circuit design purpose") ||
      lowerMessage.includes("bipolar and cmos analog circuit design benefits") ||
      lowerMessage.includes("bipolar and cmos analog circuit design learning objectives") ||
      lowerMessage.includes("bipolar and cmos analog circuit design innovation") ||
      lowerMessage.includes("bipolar and cmos analog circuit design technology")
    ) {
      return "The 'Bipolar and CMOS Analog Circuit Design' event was held from July 17–22, 2023.";
    }
    if (
      lowerMessage.includes("are events open to all departments") ||
      lowerMessage.includes("events for all students") ||
      lowerMessage.includes("ieee events for all branches") ||
      lowerMessage.includes("ieee events open to all disciplines") ||
      lowerMessage.includes("ieee events inclusivity") ||
      lowerMessage.includes("ieee events for non-ece students") ||
      lowerMessage.includes("ieee events for all academic backgrounds") ||
      lowerMessage.includes("ieee events for all fields") ||
      lowerMessage.includes("ieee events for everyone") ||
      lowerMessage.includes("ieee events participation eligibility") ||
      lowerMessage.includes("ieee events broad audience") ||
      lowerMessage.includes("ieee events cross-disciplinary") ||
      lowerMessage.includes("ieee events all departments welcome") ||
      lowerMessage.includes("ieee events open access") ||
      lowerMessage.includes("ieee events for all students")
    ) {
      return "Yes, IEEE events are open to students from all backgrounds.";
    }
    if (
      lowerMessage.includes("do i get a certificate for attending events") ||
      lowerMessage.includes("certificate for attending events") ||
      lowerMessage.includes("event certificates") ||
      lowerMessage.includes("ieee event participation certificates") ||
      lowerMessage.includes("ieee event attendance certificates") ||
      lowerMessage.includes("ieee event completion certificates") ||
      lowerMessage.includes("ieee event recognition certificates") ||
      lowerMessage.includes("ieee event certificates benefits") ||
      lowerMessage.includes("ieee event certificates value") ||
      lowerMessage.includes("ieee event certificates recognition") ||
      lowerMessage.includes("ieee event certificates eligibility") ||
      lowerMessage.includes("ieee event certificates process") ||
      lowerMessage.includes("ieee event certificates availability") ||
      lowerMessage.includes("ieee event certificates for all attendees") ||
      lowerMessage.includes("ieee event certificates for participants") ||
      lowerMessage.includes("ieee event certificates for completion")
    ) {
      return "Most events provide participation certificates to attendees.";
    }
    if (
      lowerMessage.includes("are events repeated every year") ||
      lowerMessage.includes("annual events") ||
      lowerMessage.includes("ieee recurring events") ||
      lowerMessage.includes("ieee yearly events") ||
      lowerMessage.includes("ieee flagship events") ||
      lowerMessage.includes("ieee annual workshops") ||
      lowerMessage.includes("ieee annual wicas") ||
      lowerMessage.includes("ieee annual ieee day") ||
      lowerMessage.includes("ieee event repetition") ||
      lowerMessage.includes("ieee event frequency annual") ||
      lowerMessage.includes("ieee event calendar annual") ||
      lowerMessage.includes("ieee event consistency annual") ||
      lowerMessage.includes("ieee event regularity annual") ||
      lowerMessage.includes("ieee event annual schedule") ||
      lowerMessage.includes("ieee event annual planning")
    ) {
      return "Some flagship events like VLSI workshops, WiCAS, and IEEE Day are annual.";
    }
    if (
      lowerMessage.includes("how can i check past ieee events") ||
      lowerMessage.includes("check past ieee events") ||
      lowerMessage.includes("past events info") ||
      lowerMessage.includes("ieee chapter events section") ||
      lowerMessage.includes("ieee event history access") ||
      lowerMessage.includes("ieee event archives access") ||
      lowerMessage.includes("ieee event past records") ||
      lowerMessage.includes("ieee event historical data") ||
      lowerMessage.includes("ieee event past years") ||
      lowerMessage.includes("ieee event history by year") ||
      lowerMessage.includes("ieee event past categorization") ||
      lowerMessage.includes("ieee event past details") ||
      lowerMessage.includes("ieee event past overview") ||
      lowerMessage.includes("ieee event past description") ||
      lowerMessage.includes("ieee event past highlights")
    ) {
      return "Visit the 'Chapter Events' section on our website, which includes 2023–2024 and 2024–2025 separately.";
    }
    if (
      lowerMessage.includes("is there a gallery for events") ||
      lowerMessage.includes("gallery for events") ||
      lowerMessage.includes("event photos") ||
      lowerMessage.includes("ieee event gallery") ||
      lowerMessage.includes("ieee event photo album") ||
      lowerMessage.includes("ieee event visual records") ||
      lowerMessage.includes("ieee event image collection") ||
      lowerMessage.includes("ieee event pictures") ||
      lowerMessage.includes("ieee event photo access") ||
      lowerMessage.includes("ieee event visual documentation") ||
      lowerMessage.includes("ieee event photo archives") ||
      lowerMessage.includes("ieee event photo highlights") ||
      lowerMessage.includes("ieee event photo display") ||
      lowerMessage.includes("ieee event photo section") ||
      lowerMessage.includes("ieee event photo tab")
    ) {
      return "Yes, visit the 'Event Gallery' tab on the website.";
    }
    if (
      lowerMessage.includes("are events held online or offline") ||
      lowerMessage.includes("online vs offline events") ||
      lowerMessage.includes("ieee event format") ||
      lowerMessage.includes("ieee event delivery method") ||
      lowerMessage.includes("ieee event campus vs virtual") ||
      lowerMessage.includes("ieee event hybrid format") ||
      lowerMessage.includes("ieee event physical vs digital") ||
      lowerMessage.includes("ieee event location type") ||
      lowerMessage.includes("ieee event mode") ||
      lowerMessage.includes("ieee event platform") ||
      lowerMessage.includes("ieee event venue type") ||
      lowerMessage.includes("ieee event remote participation") ||
      lowerMessage.includes("ieee event in-person attendance") ||
      lowerMessage.includes("ieee event virtual attendance") ||
      lowerMessage.includes("ieee event campus attendance") ||
      lowerMessage.includes("ieee event microsoft teams platform")
    ) {
      return "Most events are held offline on campus; some are webinars conducted on Microsoft Teams.";
    }
    if (
      lowerMessage.includes("can students present ideas at events") ||
      lowerMessage.includes("present idea at events") ||
      lowerMessage.includes("student presentations") ||
      lowerMessage.includes("ieee student ideas") ||
      lowerMessage.includes("ieee hackathons for ideas") ||
      lowerMessage.includes("ieee presentations opportunities") ||
      lowerMessage.includes("ieee student innovation showcase") ||
      lowerMessage.includes("ieee student project presentations") ||
      lowerMessage.includes("ieee student speaking opportunities") ||
      lowerMessage.includes("ieee student idea sharing") ||
      lowerMessage.includes("ieee student project pitching") ||
      lowerMessage.includes("ieee student exhibition") ||
      lowerMessage.includes("ieee student demonstration") ||
      lowerMessage.includes("ieee student speaking engagements") ||
      lowerMessage.includes("ieee student idea pitching")
    ) {
      return "Yes! Events like TECHNOVANZA and BYTEBASH are open for student ideas, hackathons, and presentations.";
    }
    if (
      lowerMessage.includes("are there any quantum computing events") ||
      lowerMessage.includes("quantum computing events") ||
      lowerMessage.includes("quantum events") ||
      lowerMessage.includes("foundations of quantum computing and qiskit") ||
      lowerMessage.includes("quantum computing workshop") ||
      lowerMessage.includes("quantum computing principles") ||
      lowerMessage.includes("quantum computing qiskit") ||
      lowerMessage.includes("quantum computing event date") ||
      lowerMessage.includes("quantum computing event details") ||
      lowerMessage.includes("quantum computing event overview") ||
      lowerMessage.includes("quantum computing event description") ||
      lowerMessage.includes("quantum computing event focus") ||
      lowerMessage.includes("quantum computing event content") ||
      lowerMessage.includes("quantum computing event highlights") ||
      lowerMessage.includes("quantum computing event purpose") ||
      lowerMessage.includes("quantum computing event benefits") ||
      lowerMessage.includes("quantum computing event learning objectives") ||
      lowerMessage.includes("quantum computing event innovation") ||
      lowerMessage.includes("quantum computing event technology")
    ) {
      return "The 'Foundations of Quantum Computing and Qiskit' event was on October 21, 2024.";
    }
    if (
      lowerMessage.includes("were ai ethics topics discussed") ||
      lowerMessage.includes("ai ethics topics") ||
      lowerMessage.includes("ethics in ai") ||
      lowerMessage.includes("artificial intelligence and its impact ethics") ||
      lowerMessage.includes("ai virtual companion ethics") ||
      lowerMessage.includes("ai ethics discussions") ||
      lowerMessage.includes("ai ethics sessions") ||
      lowerMessage.includes("ai ethics content") ||
      lowerMessage.includes("ai ethics focus") ||
      lowerMessage.includes("ai ethics details") ||
      lowerMessage.includes("ai ethics overview") ||
      lowerMessage.includes("ai ethics description") ||
      lowerMessage.includes("ai ethics highlights") ||
      lowerMessage.includes("ai ethics purpose") ||
      lowerMessage.includes("ai ethics benefits") ||
      lowerMessage.includes("ai ethics learning objectives") ||
      lowerMessage.includes("ai ethics innovation") ||
      lowerMessage.includes("ai ethics technology")
    ) {
      return "Yes, AI ethics topics were discussed in 'Artificial Intelligence and Its Impact' and 'AI Virtual Companion'.";
    }
    if (
      lowerMessage.includes("are there any cybersecurity events") ||
      lowerMessage.includes("cybersecurity event") ||
      lowerMessage.includes("cyber security") ||
      lowerMessage.includes("fundamentals of cybersecurity") ||
      lowerMessage.includes("fpga hmac sessions cybersecurity") ||
      lowerMessage.includes("cybersecurity event date") ||
      lowerMessage.includes("cybersecurity event details") ||
      lowerMessage.includes("cybersecurity event overview") ||
      lowerMessage.includes("cybersecurity event description") ||
      lowerMessage.includes("cybersecurity event focus") ||
      lowerMessage.includes("cybersecurity event content") ||
      lowerMessage.includes("cybersecurity event highlights") ||
      lowerMessage.includes("cybersecurity event purpose") ||
      lowerMessage.includes("cybersecurity event benefits") ||
      lowerMessage.includes("cybersecurity event learning objectives") ||
      lowerMessage.includes("cybersecurity event innovation") ||
      lowerMessage.includes("cybersecurity event technology")
    ) {
      return "Yes, 'Fundamentals of Cybersecurity' was on September 27, 2024, and FPGA HMAC sessions in 2025.";
    }
    if (
      lowerMessage.includes("are there any hardware-based workshops") ||
      lowerMessage.includes("hardware-based workshops") ||
      lowerMessage.includes("hardware workshops") ||
      lowerMessage.includes("pcb design workshop hardware") ||
      lowerMessage.includes("vlsi workshop hardware") ||
      lowerMessage.includes("fpga workshop hardware") ||
      lowerMessage.includes("remote sensing workshop hardware") ||
      lowerMessage.includes("ieee hardware events") ||
      lowerMessage.includes("ieee hardware training") ||
      lowerMessage.includes("ieee hardware practicals") ||
      lowerMessage.includes("ieee hardware skills") ||
      lowerMessage.includes("ieee hardware development") ||
      lowerMessage.includes("ieee hardware innovation") ||
      lowerMessage.includes("ieee hardware technology") ||
      lowerMessage.includes("ieee hardware learning")
    ) {
      return "Yes, PCB Design, VLSI, FPGA, and Remote Sensing workshops were conducted.";
    }
    if (
      lowerMessage.includes("are there any ieee society events") ||
      lowerMessage.includes("ieee society events") ||
      lowerMessage.includes("society events") ||
      lowerMessage.includes("ieee cass events") ||
      lowerMessage.includes("ieee comsoc events") ||
      lowerMessage.includes("ieee sensor council events") ||
      lowerMessage.includes("ieee nano tech events") ||
      lowerMessage.includes("ieee ai ml events") ||
      lowerMessage.includes("ieee society events") ||
      lowerMessage.includes("ieee society specific events") ||
      lowerMessage.includes("ieee society related events") ||
      lowerMessage.includes("ieee society collaboration") ||
      lowerMessage.includes("ieee society partnership") ||
      lowerMessage.includes("ieee society focus") ||
      lowerMessage.includes("ieee society topics")
    ) {
      return "Yes, including IEEE CASS, ComSoc, Sensor Council, Nano Tech, and AI/ML focused sessions.";
    }
    if (
      lowerMessage.includes("how often is the events page updated") ||
      lowerMessage.includes("events page updated") ||
      lowerMessage.includes("event updates") ||
      lowerMessage.includes("ieee event page update frequency") ||
      lowerMessage.includes("ieee event page update schedule") ||
      lowerMessage.includes("ieee event page update regularity") ||
      lowerMessage.includes("ieee event page update timeline") ||
      lowerMessage.includes("ieee event page update process") ||
      lowerMessage.includes("ieee event page update details") ||
      lowerMessage.includes("ieee event page update overview") ||
      lowerMessage.includes("ieee event page update description") ||
      lowerMessage.includes("ieee event page update highlights") ||
      lowerMessage.includes("ieee event page update purpose") ||
      lowerMessage.includes("ieee event page update benefits") ||
      lowerMessage.includes("ieee event page update learning objectives") ||
      lowerMessage.includes("ieee event page update innovation") ||
      lowerMessage.includes("ieee event page update technology")
    ) {
      return "The events page is usually updated after every major event — typically every 2–3 weeks.";
    }

    // --- Join Page ---
    if (
      lowerMessage.includes("what is ieee student chapter at presidency university join page") ||
      lowerMessage.includes("join page chapter info") ||
      lowerMessage.includes("ieee student chapter join page") ||
      lowerMessage.includes("about ieee student chapter join page") ||
      lowerMessage.includes("explain ieee student chapter join page") ||
      lowerMessage.includes("ieee student chapter join page purpose") ||
      lowerMessage.includes("ieee student chapter join page focus") ||
      lowerMessage.includes("ieee student chapter join page benefits") ||
      lowerMessage.includes("ieee student chapter join page overview") ||
      lowerMessage.includes("ieee student chapter join page description") ||
      lowerMessage.includes("ieee student chapter join page highlights") ||
      lowerMessage.includes("ieee student chapter join page community") ||
      lowerMessage.includes("ieee student chapter join page innovation") ||
      lowerMessage.includes("ieee student chapter join page networking") ||
      lowerMessage.includes("ieee student chapter join page global opportunities")
    ) {
      return "It's a student-run community that helps you explore tech, innovation, networking, and global opportunities through IEEE.";
    }
    if (
      lowerMessage.includes("never heard of ieee can i still join") ||
      lowerMessage.includes("new to ieee join") ||
      lowerMessage.includes("can i join ieee if i don't know anything") ||
      lowerMessage.includes("ieee for beginners") ||
      lowerMessage.includes("ieee for curious students") ||
      lowerMessage.includes("ieee for willing to learn") ||
      lowerMessage.includes("ieee no prior knowledge required") ||
      lowerMessage.includes("ieee open to all levels") ||
      lowerMessage.includes("ieee learning environment") ||
      lowerMessage.includes("ieee inclusive for new comers") ||
      lowerMessage.includes("ieee for non-experts") ||
      lowerMessage.includes("ieee for those interested in tech") ||
      lowerMessage.includes("ieee for those who want to learn") ||
      lowerMessage.includes("ieee for all experience levels") ||
      lowerMessage.includes("ieee for aspiring tech enthusiasts")
    ) {
      return "Absolutely! You don’t need to know anything technical beforehand — just curiosity and a willingness to learn.";
    }
    if (
      lowerMessage.includes("why should i join ieee presidency university") ||
      lowerMessage.includes("reasons to join ieee") ||
      lowerMessage.includes("benefits of joining ieee") ||
      lowerMessage.includes("advantages of ieee membership") ||
      lowerMessage.includes("what do i gain from ieee") ||
      lowerMessage.includes("ieee competitions access") ||
      lowerMessage.includes("ieee innovation labs access") ||
      lowerMessage.includes("ieee networking access") ||
      lowerMessage.includes("ieee workshops access") ||
      lowerMessage.includes("ieee global exposure access") ||
      lowerMessage.includes("ieee membership perks") ||
      lowerMessage.includes("ieee growth opportunities") ||
      lowerMessage.includes("ieee skill development") ||
      lowerMessage.includes("ieee career advantages") ||
      lowerMessage.includes("ieee professional growth")
    ) {
      return "You’ll gain access to competitions, innovation labs, networking, workshops, and global exposure.";
    }
    if (
      lowerMessage.includes("do i need to be from a tech branch to join") ||
      lowerMessage.includes("non-tech students join") ||
      lowerMessage.includes("ieee for all branches") ||
      lowerMessage.includes("ieee for non-engineering students") ||
      lowerMessage.includes("ieee for all departments") ||
      lowerMessage.includes("ieee for any student") ||
      lowerMessage.includes("ieee open to all disciplines") ||
      lowerMessage.includes("ieee inclusivity for branches") ||
      lowerMessage.includes("ieee student branch eligibility") ||
      lowerMessage.includes("ieee student department eligibility") ||
      lowerMessage.includes("ieee student field eligibility") ||
      lowerMessage.includes("ieee student background eligibility") ||
      lowerMessage.includes("ieee student academic eligibility") ||
      lowerMessage.includes("ieee student major eligibility") ||
      lowerMessage.includes("ieee student study area eligibility")
    ) {
      return "No! Any student from Presidency University, regardless of branch, can join.";
    }
    if (
      lowerMessage.includes("is there an online form to join") ||
      lowerMessage.includes("online join form") ||
      lowerMessage.includes("ieee online registration") ||
      lowerMessage.includes("ieee registration form online") ||
      lowerMessage.includes("ieee digital registration") ||
      lowerMessage.includes("ieee web form for joining") ||
      lowerMessage.includes("ieee online application") ||
      lowerMessage.includes("ieee digital application") ||
      lowerMessage.includes("ieee online enrollment") ||
      lowerMessage.includes("ieee web enrollment") ||
      lowerMessage.includes("ieee online signup") ||
      lowerMessage.includes("ieee web signup") ||
      lowerMessage.includes("ieee online membership form") ||
      lowerMessage.includes("ieee digital membership form") ||
      lowerMessage.includes("ieee online join process")
    ) {
      return "Yes, just fill out the registration form on the Join Page and follow the steps.";
    }
    if (
      lowerMessage.includes("what does eeva mean one form away") ||
      lowerMessage.includes("eeva one form away") ||
      lowerMessage.includes("meaning of eeva one form away") ||
      lowerMessage.includes("eeva's message one form away") ||
      lowerMessage.includes("eeva's slogan one form away") ||
      lowerMessage.includes("eeva's motto one form away") ||
      lowerMessage.includes("eeva's phrase one form away") ||
      lowerMessage.includes("eeva's saying one form away") ||
      lowerMessage.includes("eeva's statement one form away") ||
      lowerMessage.includes("eeva's promise one form away") ||
      lowerMessage.includes("eeva's commitment one form away") ||
      lowerMessage.includes("eeva's assurance one form away") ||
      lowerMessage.includes("eeva's simple joining process") ||
      lowerMessage.includes("eeva's easy registration") ||
      lowerMessage.includes("eeva's quick join")
    ) {
      return "It means joining is simple — just fill out the form to begin your IEEE journey!";
    }
    if (
      lowerMessage.includes("how do i join ieee presidency university student chapter") ||
      lowerMessage.includes("steps to join ieee") ||
      lowerMessage.includes("ieee joining process") ||
      lowerMessage.includes("ieee membership steps") ||
      lowerMessage.includes("how to become an ieee member") ||
      lowerMessage.includes("ieee registration process") ||
      lowerMessage.includes("ieee enrollment steps") ||
      lowerMessage.includes("ieee signup process") ||
      lowerMessage.includes("ieee membership application steps") ||
      lowerMessage.includes("ieee how to get membership") ||
      lowerMessage.includes("ieee joining guide") ||
      lowerMessage.includes("ieee membership guide") ||
      lowerMessage.includes("ieee registration guide") ||
      lowerMessage.includes("ieee enrollment guide") ||
      lowerMessage.includes("ieee signup guide")
    ) {
      return "Step 1 – Fill the registration form, Step 2 – Complete your IEEE membership, Step 3 – Start attending events!";
    }
    if (
      lowerMessage.includes("what information is required in the form") ||
      lowerMessage.includes("join form requirements") ||
      lowerMessage.includes("ieee registration form fields") ||
      lowerMessage.includes("ieee membership form details") ||
      lowerMessage.includes("ieee signup form info") ||
      lowerMessage.includes("ieee enrollment form data") ||
      lowerMessage.includes("ieee application form requirements") ||
      lowerMessage.includes("ieee personal info for joining") ||
      lowerMessage.includes("ieee contact info for joining") ||
      lowerMessage.includes("ieee student id for joining") ||
      lowerMessage.includes("ieee email for joining") ||
      lowerMessage.includes("ieee phone number for joining") ||
      lowerMessage.includes("ieee name for joining") ||
      lowerMessage.includes("ieee roll number for joining") ||
      lowerMessage.includes("ieee necessary information for joining")
    ) {
      return "You’ll need your name, roll number, contact number, and email ID.";
    }
    if (
      lowerMessage.includes("where can i find the ieee registration form") ||
      lowerMessage.includes("find registration form") ||
      lowerMessage.includes("ieee registration form location") ||
      lowerMessage.includes("ieee join page form") ||
      lowerMessage.includes("ieee open registration form button") ||
      lowerMessage.includes("ieee website registration form") ||
      lowerMessage.includes("ieee online registration form link") ||
      lowerMessage.includes("ieee registration form access") ||
      lowerMessage.includes("ieee registration form availability") ||
      lowerMessage.includes("ieee registration form where to click") ||
      lowerMessage.includes("ieee registration form how to find") ||
      lowerMessage.includes("ieee registration form direct link") ||
      lowerMessage.includes("ieee registration form navigation") ||
      lowerMessage.includes("ieee registration form page") ||
      lowerMessage.includes("ieee registration form button")
    ) {
      return "On the IEEE Presidency University website’s 'Join' page — look for the 'Open Registration Form' button.";
    }
    if (
      lowerMessage.includes("do i need to be an official ieee member to participate") ||
      lowerMessage.includes("official ieee member to participate") ||
      lowerMessage.includes("member participation") ||
      lowerMessage.includes("ieee event participation for non-members") ||
      lowerMessage.includes("ieee benefits for official members") ||
      lowerMessage.includes("ieee membership requirement for events") ||
      lowerMessage.includes("ieee membership for full access") ||
      lowerMessage.includes("ieee membership for all benefits") ||
      lowerMessage.includes("ieee membership for special events") ||
      lowerMessage.includes("ieee membership for exclusive access") ||
      lowerMessage.includes("ieee membership for priority access") ||
      lowerMessage.includes("ieee membership for full participation") ||
      lowerMessage.includes("ieee membership for complete experience") ||
      lowerMessage.includes("ieee membership for all opportunities") ||
      lowerMessage.includes("ieee membership for full engagement")
    ) {
      return "To access all benefits, yes. But some events may allow non-members too.";
    }
    if (
      lowerMessage.includes("what is the difference between the chapter form and ieee official membership") ||
      lowerMessage.includes("difference between chapter form and ieee official membership") ||
      lowerMessage.includes("chapter vs official membership") ||
      lowerMessage.includes("ieee local vs global membership") ||
      lowerMessage.includes("ieee chapter form purpose") ||
      lowerMessage.includes("ieee official membership benefits") ||
      lowerMessage.includes("ieee local connection vs global access") ||
      lowerMessage.includes("ieee chapter form vs ieee membership benefits") ||
      lowerMessage.includes("ieee chapter form vs ieee membership scope") ||
      lowerMessage.includes("ieee chapter form vs ieee membership tools") ||
      lowerMessage.includes("ieee chapter form vs ieee membership journals") ||
      lowerMessage.includes("ieee chapter form vs ieee membership communities") ||
      lowerMessage.includes("ieee chapter form vs ieee membership resources") ||
      lowerMessage.includes("ieee chapter form vs ieee membership network") ||
      lowerMessage.includes("ieee chapter form vs ieee membership opportunities")
    ) {
      return "The chapter form connects you locally, while the IEEE membership gives you global access to tools, journals, and communities.";
    }
    if (
      lowerMessage.includes("is ieee membership free") ||
      lowerMessage.includes("free membership") ||
      lowerMessage.includes("ieee free membership") ||
      lowerMessage.includes("ieee membership cost") ||
      lowerMessage.includes("ieee free membership eligibility") ||
      lowerMessage.includes("ieee free membership sponsorship") ||
      lowerMessage.includes("ieee free membership availability") ||
      lowerMessage.includes("ieee free membership limited") ||
      lowerMessage.includes("ieee free membership conditions") ||
      lowerMessage.includes("ieee free membership terms") ||
      lowerMessage.includes("ieee free membership criteria") ||
      lowerMessage.includes("ieee free membership benefits") ||
      lowerMessage.includes("ieee free membership options") ||
      lowerMessage.includes("ieee free membership opportunities") ||
      lowerMessage.includes("ieee free membership details")
    ) {
      return "Some memberships may be free for a limited number of students based on eligibility or sponsorship.";
    }
    if (
      lowerMessage.includes("do i need to pay every year") ||
      lowerMessage.includes("annual fee") ||
      lowerMessage.includes("ieee annual membership fee") ||
      lowerMessage.includes("ieee recurring membership fee") ||
      lowerMessage.includes("ieee yearly membership cost") ||
      lowerMessage.includes("ieee membership renewal") ||
      lowerMessage.includes("ieee membership payment frequency") ||
      lowerMessage.includes("ieee membership annual payment") ||
      lowerMessage.includes("ieee membership recurring payment") ||
      lowerMessage.includes("ieee membership yearly payment") ||
      lowerMessage.includes("ieee membership renewal process") ||
      lowerMessage.includes("ieee membership renewal cost") ||
      lowerMessage.includes("ieee membership renewal details") ||
      lowerMessage.includes("ieee membership renewal information") ||
      lowerMessage.includes("ieee membership renewal policy")
    ) {
      return "Yes, IEEE membership is typically renewed annually.";
    }
    if (
      lowerMessage.includes("what do i get after paying the membership fee") ||
      lowerMessage.includes("paid membership benefits") ||
      lowerMessage.includes("ieee paid membership perks") ||
      lowerMessage.includes("ieee paid membership advantages") ||
      lowerMessage.includes("ieee paid membership resources") ||
      lowerMessage.includes("ieee paid membership journals") ||
      lowerMessage.includes("ieee paid membership events") ||
      lowerMessage.includes("ieee paid membership certifications") ||
      lowerMessage.includes("ieee paid membership global access") ||
      lowerMessage.includes("ieee paid membership tools") ||
      lowerMessage.includes("ieee paid membership opportunities") ||
      lowerMessage.includes("ieee paid membership value") ||
      lowerMessage.includes("ieee paid membership benefits list") ||
      lowerMessage.includes("ieee paid membership advantages list") ||
      lowerMessage.includes("ieee paid membership access")
    ) {
      return "Access to global IEEE resources, journals, events, and certifications.";
    }
    if (
      lowerMessage.includes("what activities can i join as an ieee member") ||
      lowerMessage.includes("member activities") ||
      lowerMessage.includes("ieee member opportunities") ||
      lowerMessage.includes("ieee member programs") ||
      lowerMessage.includes("ieee member workshops") ||
      lowerMessage.includes("ieee member seminars") ||
      lowerMessage.includes("ieee member competitions") ||
      lowerMessage.includes("ieee member research projects") ||
      lowerMessage.includes("ieee member networking events") ||
      lowerMessage.includes("ieee member leadership programs") ||
      lowerMessage.includes("ieee member activities list") ||
      lowerMessage.includes("ieee member engagement opportunities") ||
      lowerMessage.includes("ieee member participation opportunities") ||
      lowerMessage.includes("ieee member involvement opportunities") ||
      lowerMessage.includes("ieee member growth opportunities")
    ) {
      return "Workshops, seminars, competitions, research projects, networking events, and leadership programs.";
    }
    if (
      lowerMessage.includes("will i get hands-on experience") ||
      lowerMessage.includes("hands-on experience") ||
      lowerMessage.includes("ieee hands-on learning") ||
      lowerMessage.includes("ieee practical experience") ||
      lowerMessage.includes("ieee innovation labs experience") ||
      lowerMessage.includes("ieee coding sessions experience") ||
      lowerMessage.includes("ieee practical design workshops experience") ||
      lowerMessage.includes("ieee applied learning opportunities") ||
      lowerMessage.includes("ieee experiential learning opportunities") ||
      lowerMessage.includes("ieee skill application opportunities") ||
      lowerMessage.includes("ieee interactive learning") ||
      lowerMessage.includes("ieee practical training opportunities") ||
      lowerMessage.includes("ieee hands-on projects") ||
      lowerMessage.includes("ieee hands-on activities") ||
      lowerMessage.includes("ieee practical skill development")
    ) {
      return "Yes! You can join innovation labs, coding sessions, and practical design workshops.";
    }
    if (
      lowerMessage.includes("can i lead or coordinate events") ||
      lowerMessage.includes("leadership roles") ||
      lowerMessage.includes("ieee leadership opportunities") ||
      lowerMessage.includes("ieee event coordination roles") ||
      lowerMessage.includes("ieee volunteer roles") ||
      lowerMessage.includes("ieee leadership positions") ||
      lowerMessage.includes("ieee event management roles") ||
      lowerMessage.includes("ieee student leadership") ||
      lowerMessage.includes("ieee student coordination") ||
      lowerMessage.includes("ieee student volunteerism") ||
      lowerMessage.includes("ieee student leadership development") ||
      lowerMessage.includes("ieee student event organization") ||
      lowerMessage.includes("ieee student event planning") ||
      lowerMessage.includes("ieee student event execution") ||
      lowerMessage.includes("ieee student event leadership")
    ) {
      return "Yes! Members often take up leadership and volunteer roles.";
    }
    if (
      lowerMessage.includes("can i publish my research through ieee") ||
      lowerMessage.includes("publish research") ||
      lowerMessage.includes("ieee research publication") ||
      lowerMessage.includes("ieee journals for research") ||
      lowerMessage.includes("ieee conferences for research") ||
      lowerMessage.includes("ieee research dissemination") ||
      lowerMessage.includes("ieee academic publication") ||
      lowerMessage.includes("ieee scholarly publishing") ||
      lowerMessage.includes("ieee research opportunities for members") ||
      lowerMessage.includes("ieee research output") ||
      lowerMessage.includes("ieee research visibility") ||
      lowerMessage.includes("ieee research impact") ||
      lowerMessage.includes("ieee research recognition") ||
      lowerMessage.includes("ieee research presentation") ||
      lowerMessage.includes("ieee research platform")
    )
    {
      return "Yes, active members can explore publishing in IEEE journals and conferences.";
    }
    // --- General Fallback/Default Response ---
    return "I'm constantly learning about our website content to provide better assistance. For detailed information, feel free to explore our various pages using the navigation menu, or ask me about specific topics like events, achievements, joining IEEE, or how to find different sections. Is there something specific about IEEE Presidency University Student Chapter you'd like to know? 🤔";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response delay for more natural conversation
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Tailwind CSS Custom Colors */}
      <style>{`
        .bg-ieee-blue { background-color: ${ieeeColors.blue}; }
        .to-ieee-blue { --tw-gradient-to: ${ieeeColors.blue}; }
        .from-ieee-orange { --tw-gradient-from: ${ieeeColors.orange}; }
        .to-ieee-orange { --tw-gradient-to: ${ieeeColors.orange}; }
        .hover\\:bg-ieee-dark-blue:hover { background-color: ${ieeeColors.darkBlue}; }

        /* Custom Animations */
        @keyframes pulse-soft {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
          }
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s infinite ease-in-out;
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
        }
      `}</style>

      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-ieee-blue to-ieee-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-soft"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col animate-slide-in-right">
          {/* Header */}
          <div className="flex items-center p-4 bg-gradient-to-r from-ieee-blue to-ieee-orange text-white rounded-t-2xl">
            <Bot className="w-6 h-6 mr-2" />
            <div>
              <h3 className="font-semibold">Eeva</h3>
              <p className="text-xs opacity-90">IEEE Content Assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                {message.isBot && (
                  <div className="w-6 h-6 bg-ieee-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-ieee-blue text-white"
                  }`}
                >
                  {message.text}
                </div>
                {!message.isBot && (
                  <div className="w-6 h-6 bg-ieee-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
                onKeyPress={handleKeyPress}
                placeholder="Ask me about our events, achievements..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-ieee-blue hover:bg-ieee-dark-blue text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;