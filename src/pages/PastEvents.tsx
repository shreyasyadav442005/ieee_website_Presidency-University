import { useState } from "react";
import { Calendar, Users, MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const pastEvents = [
  {
    id: 16,
    title: "QUIZ-CUITS (IEEE Quiz for 1st Years)",
    description: `The Department of Electronics and Communication Engineering at Presidency University, in association with IEEE PRESENCE, organized an engaging and competitive technical quiz event titled "QUIZCUITS" exclusively for 1st-year students.

The quiz was designed in three levels, testing the students’ grasp of core electronics, digital circuits, logical reasoning, and fun technical riddles. It included objective questions, circuit analysis, and creative problem-solving rounds that sparked enthusiasm and critical thinking.`,
    date: "2025-04-11",
    attendees: "20+ Attended",
    location: "Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638253/WhatsApp_Image_2025-07-04_at_18.14.16_eca845de_x4xgrk.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638258/IMG-20250704-WA0015_zk3fcu.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638253/IMG-20250704-WA0016_eomx1x.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638254/WhatsApp_Image_2025-07-04_at_19.28.52_246fe9dc_shguxa.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
  {
    id: 15,
    title: "1 Day Workshop on Industrial IoT 4.0 Revolution",
    description: `A one-day Industrial IoT 4.0 Workshop was successfully conducted in collaboration with Infosys Limited and Edutech India Pvt. Ltd., focusing on the integration of smart factory systems, Industry 4.0, and real-life IoT applications. The hands-on session offered practical insights into the future of connected intelligence.

Renowned speakers from Infosys and Edutech, Ms. Lakshmi Lakshmana Rao, Mr. Sundaresan Poovalingam, Ms. Sanchitha Mukherjee, and Mr. Aravind S, shared real-world experiences and technical expertise. The session was interactive, impactful, and aligned with SDGs related to quality education and sustainable innovation.`,
    date: "2025-03-07",
    attendees: "100+ Attended",
    location: "Presidency Univeristy, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638255/IMG-20250703-WA0058_maavd9.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638255/IMG-20250703-WA0060_llvxow.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638256/IMG-20250703-WA0065_fxptyh.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638256/IMG-20250703-WA0063_ybuhuj.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638257/IMG-20250703-WA0067_smlbce.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638256/IMG-20250703-WA0064_q2mbq7.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
  {
    id: 14,
    title: "AI in Neuroscience",
    description: `This engaging online workshop explored the intersection of Artificial Intelligence (AI) and Neuroscience, including AI-powered brain diagnostics, neuroimaging tools, and brain-computer interfaces. Dr. Abhishek Appaji showcased real-world research from his team, including smart eye kiosks and the NeuroBridge platform, highlighting future trends and ethical concerns in AI-Neuro applications.`,
    date: "2025-03-07",
    attendees: "30+ Attended",
    location: "Microsoft Teams",
    mode: "Online",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638254/WhatsApp_Image_2025-07-04_at_18.01.19_12a350b7_xm1k72.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638255/WhatsApp_Image_2025-07-04_at_18.01.19_90580c97_oqyu9u.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638255/WhatsApp_Image_2025-07-04_at_18.01.19_185fc0c0_pug6hl.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638254/WhatsApp_Image_2025-07-04_at_17.58.43_1e6650f6_umlezt.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
{
    id: 13,
    title: "High Electron Mobility Transistors: A Future Perspective",
    description: `This online workshop introduced participants to the fundamentals, fabrication, and future trends of High Electron Mobility Transistors (HEMTs). Dr. Ajayan explained the distinctions between MOSFETs and HEMTs, materials like GaN and InP, and their role in RF, 5G, and nanoelectronics. Attendees also got insights into ongoing HEMT research and future directions.`,
    date: "2025-02-28",
    attendees: "25+",
    location: "Microsoft Teams",
    mode: "Online",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638255/WhatsApp_Image_2025-07-04_at_17.58.42_55f86548_wmgp2h.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638253/WhatsApp_Image_2025-07-04_at_17.58.42_422ec2a9_bxhyci.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
  {
    id: 12,
    title: "Passive Radar: Past, Present and the Future Challenges",
    description: `This seminar explored the evolution and future prospects of Passive Radar systems, highlighting their stealth capabilities, bistatic and passive geometries, radiation-absorbent materials (RAMs), and commercial applications. The session also covered architectural design and challenges in signal processing and stealth tech integration. Speaker: Dr. Mohammad Shahnawaz Hussain, Assistant Professor, Presidency University
`,
    date: "2025-02-14",
    attendees: "35+ Attended",
    location: "Presidency University, Bengaluru",
    mode: "",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638256/WhatsApp_Image_2025-07-04_at_17.56.44_d69c64f1_la3khq.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638253/WhatsApp_Image_2025-07-04_at_17.56.44_de3cd1b8_sy4rkb.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638253/WhatsApp_Image_2025-07-04_at_17.56.45_7a80dc5b_xsyegx.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638252/WhatsApp_Image_2025-07-04_at_17.56.44_c4b8b028_pn6dia.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
{
    id: 11,
    title: "Metamaterials and Beyond in Antenna Design",
    description: `A technical session titled "Metamaterials and Beyond in Antenna Design: A Research Perspective for Emerging Scholars" was organized to explore advanced concepts in antenna engineering. The session covered metamaterials, microstrip antenna limitations, millimeter and terahertz bands, Maxwell’s laws, and ISRO RESPOND research opportunities. It helped participants gain insights into future research scopes and real-world antenna applications.  Speaker: Dr. Prabhu T, Assistant Professor, Presidency University.
`,
    date: "2025-01-31",
    attendees: "40+ Attended",
    location: "Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638255/WhatsApp_Image_2025-07-04_at_17.54.32_8c9f89cd_ziqabg.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638253/WhatsApp_Image_2025-07-04_at_17.54.32_6321e587_hmtkp8.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751638254/WhatsApp_Image_2025-07-04_at_17.54.32_ac5e3caa_gqsil6.jpg"
      
    ],
    link: "/events/innovation-hackathon"
  },

  {
    id: 10,
    title: "Workshop on Foundations of Quantum Computing and Introduction to Qiskit",
    description: `The Department of Electronics and Communication Engineering, Presidency University, organized a one-day workshop on “Foundations of Quantum Computing and Introduction to Qiskit” to equip students with fundamental concepts and practical tools in this emerging domain.

Dr. Madihally Nagaraja, Professor at SSIT Tumakuru, conducted sessions covering quantum gates, circuits, and real-time Qiskit-based simulations. The workshop provided a strong theoretical foundation along with hands-on exposure to quantum computing frameworks.`,
    date: "2024-10-21",
    attendees: "45+ Attended",
    location: " Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562718/WhatsApp_Image_2025-07-03_at_20.39.12_a41c3877_hh40nf.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562720/WhatsApp_Image_2025-07-03_at_20.39.12_d0cb109c_de3ka4.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562715/WhatsApp_Image_2025-07-03_at_20.39.11_7ba8d634_rjwlsr.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562712/WhatsApp_Image_2025-07-03_at_20.39.11_11dca6a3_sgttyw.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
  {
    id: 9,
    title: "Colloquium on Artificial Intelligence and Its Impact",
    description: `The Department of Electronics and Communication Engineering, Presidency University, hosted a thought-provoking colloquium on Artificial Intelligence and Its Impact, focusing on AI’s integration with engineering and creativity.

Keynote speaker Dr. Sunil Chinnamgari (Senior Engineering Director, Maersk) presented on enterprise applications of Generative AI and demonstrated the use of large language models (LLMs). A multidisciplinary panel featuring experts from engineering, law, and sciences explored AI's role in creativity, ethics, and intellectual property.`,
    date: "2024-09-20",
    attendees: "35+ Attended",
    location: " Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562706/WhatsApp_Image_2025-07-03_at_20.37.11_6b6275d3_q5jorj.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562709/WhatsApp_Image_2025-07-03_at_20.37.11_f541bb14_fsihab.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562701/WhatsApp_Image_2025-07-03_at_20.37.10_a401c7d4_hqpnxq.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562704/WhatsApp_Image_2025-07-03_at_20.37.10_dae33a9c_jtuhbr.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
  {
    id: 8,
    title: "Inauguration of IEEE Student Chapters & Councils",
    description: `Presidency University hosted the Inauguration of IEEE Student Chapters & Councils, bringing together leading experts to inspire students on emerging trends in technology.

Eminent speakers included Dr. Anindya Saha (IEEE ComSoc Chair), Dr. Megha P. Arakeri (IEEE CIS Chair), Dr. Veena S. Chakravarthi (IEEE NTC Chair), and Dr. Sumit Soman (IEEE Sensor Council Chair). Topics ranged from 5G, Software Defined Radios, and computational intelligence to low-power SoC design and generative AI in telecom.`,
    date: "2024-09-13",
    attendees: "50+ Attended",
    location: " Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562692/WhatsApp_Image_2025-07-03_at_20.35.15_602d28b4_malrwd.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562698/WhatsApp_Image_2025-07-03_at_20.35.16_079ecd4c_ankuju.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562689/WhatsApp_Image_2025-07-03_at_20.35.15_33a4d2d9_daekwq.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562695/WhatsApp_Image_2025-07-03_at_20.35.15_7b9a82d5_rgubii.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
  {
    id: 7,
    title: "Two-Day Workshop on VLSI Design",
    description: `The Department of Electronics and Communication Engineering, Presidency University, organized a hands-on workshop on VLSI Design, aimed at introducing students to industry-standard digital and analog design methodologies.

Sessions were led by Mr. Shivaprasad B K (Entuple Technologies), Dr. Ashutosh Anand, and Ms. Renuka Bhagwat, focusing on Verilog-based design, FPGA implementation, and Cadence Virtuoso simulations. Students developed ALUs on Xilinx boards and analyzed CMOS circuits and amplifiers, gaining practical exposure to VLSI workflows.`,
    date: ["2024-07-29", "2024-07-30"],
    attendees: "40+ Attended",
    location: " Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562678/WhatsApp_Image_2025-07-03_at_20.33.04_54f7294b_desxes.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562680/WhatsApp_Image_2025-07-03_at_20.33.04_5cad55ad_jnouiq.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562687/WhatsApp_Image_2025-07-03_at_20.33.05_978c5ce9_obv14m.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562683/WhatsApp_Image_2025-07-03_at_20.33.05_020f2a07_h9srfw.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
{
  id: 6,
  title: "One-Day Colloquium on IEEE CASS Student Skill Development Programme",
  date: "2024-07-05",
  attendees: "85+ Attended",
  location: "Presidency University, Bengaluru",
  mode: "Offline",
  description:`The Department of Electronics and Communication Engineering, Presidency University, hosted a one-day colloquium titled "IEEE CASS Student Skill Development Programme", aimed at enhancing technical and professional competencies among students.

Dr. G. S. Javed (Analog Design Manager, Intel India) delivered two insightful sessions on entrepreneurship in India and the transformative role of IEEE in student careers. Dr. Joseph Anthony Prathap (Associate Professor, Presidency University) concluded the programme with a technical session on real-time FPGA implementation of machine learning algorithms. The event received highly positive feedback for its technical depth, career relevance, and engagement.`,
  photos: [
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562836/WhatsApp_Image_2025-07-03_at_20.29.57_7010ed6f_ryqmek.jpg",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562833/WhatsApp_Image_2025-07-03_at_20.29.57_630dccdd_rkfkbo.jpg",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562839/WhatsApp_Image_2025-07-03_at_20.29.58_562e71eb_ylcmeg.jpg",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562830/WhatsApp_Image_2025-07-03_at_20.29.57_1ade8027_bys7jc.jpg"
  ],
  link: "/events/innovation-hackathon"
  },
  {
    id: 5,
    title: "One-Day Colloquium on Women in WiCAS Technology",
    description: `A one-day colloquium titled “Women in WiCAS Technology” was organized to empower and inspire women in engineering through insightful sessions on sustainable technology and gender equality in academia.`,
    date: "2024-06-28",
    attendees: "70+ Attended",
    location: " Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562802/WhatsApp_Image_2025-07-03_at_21.19.53_64b95df1_xzdoyh.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562813/WhatsApp_Image_2025-07-03_at_21.19.53_9fe2bb83_mn5tn0.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562819/WhatsApp_Image_2025-07-03_at_21.19.54_2de0775b_dwgqau.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562816/WhatsApp_Image_2025-07-03_at_21.19.54_290b99e2_vgsfyn.jpg"
    ],
    link: "/events/innovation-hackathon"
  },
  {
    id: 4,
    title: "Workshop on PCB Design and Fabrication",
    description: `The Department of Electronics and Communication Engineering at Presidency University, in collaboration with the Institution’s Innovation Council (IIC), organized a three-day hands-on workshop on “PCB Design and Fabrication.” Participants were guided through schematic design using Kicad, generation of Gerber files, PCB printing, and soldering techniques.

The sessions were led by Dr. S. Elango, Associate Professor at Bannari Amman Institute of Technology, and Mr. K. Duraisamy, Product Manager at EnthuTech Solutions. The event enabled students to gain practical exposure to real-world electronic circuit development and prototyping workflows.`,
    date: ["2023-12-07", "2023-12-09"],
    attendees: "45+ Attended",
    location: "Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562773/WhatsApp_Image_2025-07-03_at_20.09.07_7c0b1fcf_hwzfpw.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562770/WhatsApp_Image_2025-07-03_at_20.09.07_7267200f_iolnzw.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562787/WhatsApp_Image_2025-07-03_at_20.09.08_1db148a4_c4dqwf.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562789/WhatsApp_Image_2025-07-03_at_20.09.09_a536e43c_gmywsz.jpg"
    ],
    link: "/events/tech-symposium-2023"
  },
  {
    id: 3,
    title: "Webinar on Microfluidics for Environmental Monitoring: Microplastics Detection",
    description: `This impactful webinar, hosted by the Institution’s Innovation Council (IIC), Presidency University, shed light on the rising concern of microplastic pollution and the use of microfluidic technologies for environmental monitoring.

Delivered by Dr. Jegatha Nambi Krishnan, the session covered fundamental concepts of microfluidics, real-world case studies in microplastics detection, and future challenges in this emerging interdisciplinary field. The event was highly relevant to students, researchers, and faculty involved in chemical engineering, environmental science, and nano-sensor technologies.`,
    date: "2023-09-21",
    attendees: "60+ Attended",
    location: "Microsoft Teams",
    mode: "Online",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562767/WhatsApp_Image_2025-07-03_at_12.03.53_8ad185e5_g2mqgz.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562764/WhatsApp_Image_2025-07-03_at_12.03.53_2c66fadd_niq3wl.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562758/IMG-20250703-WA0011_znmwio.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562761/IMG-20250703-WA0012_fedzaa.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562753/IMG-20250703-WA0009_f0iito.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562756/IMG-20250703-WA0010_n3942f.jpg"
    ],
    link: "/events/tech-symposium-2023"
  },
  {
    id: 2,
    title: "Webinar on Bipolar and CMOS Analog Circuit Design",
    description: `This webinar was an insightful technical session conducted under the Institution's Innovation Council (IIC), Presidency University. It brought together students and faculty from the Electronics & Communication Engineering department to explore the fundamentals and applications of Translinear circuits using Bipolar transistors and CMOS devices.

The session was delivered by Dr. Raj Senani, an internationally recognized expert in Analog Integrated Circuits and Signal Processing, and provided hands-on understanding of implementing functions like square roots, filters, and logarithmic circuits using advanced analog design techniques.`,
    date: "2023-05-27",
    attendees: "85+ Attended",
    location: "Microsoft Teams",
    mode: "Online",
    photos: [
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562739/IMG-20250703-WA0002_pngsvp.jpg",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562742/IMG-20250703-WA0003_wbt65r.jpg",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562745/IMG-20250703-WA0004_s1vqmq.jpg",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562751/IMG-20250703-WA0006_d6pmza.jpg"
    ],
    link: "/events/tech-symposium-2023"
  },
  {
    id: 1,
    title: "MathWorks Industry Day",
    description: `Presidency University’s Institution Innovation Council (IIC) organized a two-day workshop titled “MathWorks Industry Day”, designed to bridge academic learning with real-world industry applications of MATLAB and Simulink. The sessions covered practical applications, hands-on training modules, and an introduction to the MathWorks Innovation Project Hub. The workshop offered a deep dive into areas such as signal processing and SimScape, empowering students with essential industry skills and resources.

This interactive workshop enabled students to brainstorm project ideas with experts, gain access to premium MathWorks tools, and explore innovation-driven learning.`,
    date: ["2023-04-21", "2023-04-22"],
    attendees: "85+ Attended",
    location: "Presidency University, Bengaluru",
    mode: "Offline",
    photos: [
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562737/WhatsApp_Image_2025-07-03_at_19.56.54_4a293342_lt0hgw.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562734/IMG-20250703-WA0025_dkcgnd.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562729/IMG-20250703-WA0023_rj0kha.jpg",
      "https://res.cloudinary.com/dk34keh8x/image/upload/v1751562723/IMG-20250703-WA0020_tr9ri3.jpg"
    ],
    link: "/events/tech-symposium-2023"
  }

];

const PastEvents = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const formatDate = (dateInput: string | string[]) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (Array.isArray(dateInput)) {
    return dateInput
      .map((date) => new Date(date).toLocaleDateString("en-US", options))
      .join(" and ");
  } else {
    return new Date(dateInput).toLocaleDateString("en-US", options);
  }
};

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Past Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our successful past events that have shaped our community and 
            contributed to the advancement of technology and innovation.
          </p>
        </div>
      </section>

      {/* Event Cards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {pastEvents.map((event) => (
            <Card key={event.id} className="hover-lift border-0 shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Completed
                    </Badge>
                  </div>

                  {/* Title - Not a link anymore */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h2>

                  <p className="text-gray-600 mb-6">{event.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-ieee-blue" />
                     <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      {event.mode === "Online" ? (
                        <Globe className="w-4 h-4 mr-3 text-ieee-blue" />
                      ) : (
                        <MapPin className="w-4 h-4 mr-3 text-ieee-blue" />
                      )}
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-3 text-ieee-blue" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </CardContent>

                <div className="p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Event Gallery</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {event.photos.map((photo, index) => (
                      <div key={index}>
                        <img
                          src={photo}
                          alt={`Photo ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow"
                          onClick={() => setModalImage(photo)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Image Preview Modal */}
     {modalImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setModalImage(null)}
  >
    {/* Prevent click propagation on image container */}
    <div
      className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={modalImage}
        alt="Preview"
        className="w-full h-auto object-contain"
      />
      <button
        onClick={() => setModalImage(null)}
        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow text-black hover:bg-gray-200"
      >
        ✕
      </button>
    </div>
  </div>
)}

    </Layout>
  );
};

export default PastEvents;
