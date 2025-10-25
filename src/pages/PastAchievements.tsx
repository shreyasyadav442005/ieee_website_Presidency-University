import { Trophy, Award, Calendar, MapPin, Users, Medal, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { useState } from "react";

const PastAchievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const specificAchievements = [
    {
       id: 9,
       title: "Presidency University Secures Top Positions at IEEE PELS and IES Event 2025",
       description: `On 27th September 2025, students from Presidency University participated in the Student Congress event held at Dayananda Sagar College of Engineering, organized by IEEE PELS and IES. The 3rd-year ECE team comprising M Aishwarya, Mohammed Zaid S, Jayalakshmi Jhansi M N, and Shreyas Yadav M proudly secured the 2nd prize in the Project Expo, while the 2nd-year team consisting of Ashwanth G, Sai Prasad, and Nagabushan also achieved the 2nd prize in the Ideathon Project category showcasing innovation, teamwork, and technical excellence from both teams.`,

       category: "Innovation",
       date: "2025-09-27",
       organization: "Dayananda Sagar College Of Engineering, Bengaluru",
       //team: [ "M Aishwarya", "Mohammed Zaid S", "Jayalakshmi Jhansi M N", "Shreyas Yadav M", "Ashwanth G", "Sai Prasad", "Nagabushan" ],

       photos:[
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751719391/KANTI_Prasad_r2e6uj.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917396/NITTE_1_u9ysda.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917395/NITTE_2_ms8yzn.jpg"
]

     },
       {
       id: 8,
       title: "Best Project Award – IEEE YESIST12 Prelims",
       description: `A highly innovative student team from Presidency University, Karnataka, was honored with the Best Project Award at the IEEE YESIST12 Prelims – Kaushalya Open House Project Expo 2025, held on 24th May 2025 at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru. The event was jointly organized by the Department of Electronics and Communication Engineering and the IEEE Student Branch, NMIT, in association with the IEEE Bangalore Section.

Their project, "Fault Analysis in Optimised Hash-Based Message Authentication for High Performance", proposed a novel and efficient technique to strengthen data security through optimized fault analysis in hash-based message authentication systems—particularly significant in high-performance embedded and communication applications.

 In recognition of their innovation and impact, the team has been shortlisted for the YESIST12 Grand Finale, set to take place in Malaysia in August 2025, where they will represent the university on an international stage.`,

       category: "Innovation",
       date: "2025-05-24",
       organization: "Nitte Meenakshi Institute Of Technology, Bengaluru",
       team: ["Gagan K. S", "Jiteesh P", "Kanti Prasad J", "Poonnacha C. N", "Ritu Patnaik"],

       photos:[
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751719391/KANTI_Prasad_r2e6uj.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917396/NITTE_1_u9ysda.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917395/NITTE_2_ms8yzn.jpg"
]

     },
     {
       id: 7,
       title: "1st Place at IEEE I2CONECCT-2025, Mangaluru",
       description: `A significant victory at the IEEE I2CONECCT-2025 Project Competition, hosted at Mangalore Institute of Technology & Engineering, Moodabidire, on April 19th, 2025. Our project, "The Smart Driver Safety with Call Management and Emergency Notification," secured an outstanding 1st Place in the track of Innovation / Humanitarian Technology / Sustainable Development. This top honor reaffirms our leadership in developing solutions that prioritize human safety and well-being through cutting-edge technology, supported by IEEE-Mangalore Sub-Section.`,
       category: "Innovation",
       date: "2025-04-19",
       organization: "MITE, Mangaluru",
       team: ["Chandana T", "Monika P", "Shreyas Yadav M", "Tejaswini C N"],
       photos: [
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704159/MANGALURU_pj7grq.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917398/MITE_1_rcx92f.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917398/MITE_2_tegsre.jpg"
]

     },
     {
       id: 6,
       title: " 'Smart Vehicle' Project Earns 4th Place in National Expo",
       description: `At the National Level IEEE Technical Symposium "TECHNOVATE-2K25," organized by the Department of Electronics and Communication Engineering at HKBK College of Engineering on April 16th & 17th, 2025, our team's project, "Smart Vehicle Impact and Call Handling System," secured an impressive 4th place among the top 10 entries. This achievement underscores our dedication to enhancing road and driver safety through innovative technological solutions.`,
       category: "Innovation",
       date: "2025-04-17",
       organization: "HKBK College of Engineering, Bengaluru",
       team: ["Chandana T", "Monika P", "Shreyas Yadav M", "Tejaswini C N"],

       photos: [
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917420/HKBK_2_n0exdv.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917769/hkbk3_onanfm.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917397/HKBK_1_zcxxuj.jpg"
]

     },
     {
       id: 5,
       title: "DRONE’ACHARYA 2.0 (National Level Drone Hackathon)",
       description: `A dynamic student team from Presidency University, Karnataka successfully participated in the prestigious National Level Drone Build Hackathon – DRONE’ACHARYA 2.0, hosted by Vidya Vikas Institute of Engineering and Technology (VVIET), Mysuru.
The team showcased their technical skills by working on drone development and control, exploring real-time UAV systems, flight mechanics, and embedded electronics — gaining practical exposure to the growing field of drone technologies.`,
       category: "Innovation",
       date: "2024-04-02",
       organization: "Vidya Vikas Institute Of Technology, Mysore",
       team: ["Keerthi M", "Meghana H. S", "Suhas A. Salunke", "Varsha Shree V. S"],

       photos: [
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704159/MYSURU_zcxrpq.png",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917396/DRONACHARYA_2_tac19d.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917396/DRONAACHARYA_1_kmjfss.jpg"
]

     },
     {
       id: 4,
       title: "2nd Prize – AI Autonomous Hackathon 2025 (National Level)",
       description: `A talented team from Presidency University, Karnataka achieved 2nd place at the Industry-Driven National Level AI Autonomous Hackathon 2025, organized by the Department of Computer Science and Engineering, Siddhartha Academy of Higher Education, Andhra Pradesh.

The event was held on 6th and 7th February 2025 under the theme "Soaring 2ntelligence", focusing on AI-powered autonomous systems.`,
       category: "Innovation",
       date: "2025-02-07",
       organization: "Siddhartha Academy Of Higher Education, Vijayawada(AP)",
       team: ["Keerthi M", "Mohammed Zaid", "Suhas A. Salunke", "Varsha Shree V. S"],
       photos:[
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751722661/KEERTHI_VIJW_qnfdbk.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751949174/VJAW_2_bi7q4p.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917397/VIJW_2_hbuvrh.jpg",
    
]
     },
     {
       id: 3,
       title: "3rd Place at CAS Student Design Program – Asia Pacific Shortlist!",
       description: `Our innovative "Smart Vehicle Impact and Call Handling System" project secured a commendable 3rd place at the prestigious IEEE CAS (Circuits and Systems) Student Design Program on February 1st, 2025. This significant achievement not only recognizes our team's dedication and ingenuity but also earns us a coveted spot to represent our institution in the upcoming Asia Pacific regional competition. Our system proposes an advanced solution for enhancing road safety by intelligently detecting vehicle impacts and automating emergency call handling, ensuring rapid response and critical support when it's needed most. We're incredibly proud to contribute to the future of smart, safe transportation and look forward to competing on the international stage!`,
       category: "Innovation",
       date: "2025-02-01",
       organization: "IEEE CAS Bengaluru Section",
       team: ["Chandana T", "Monika P", "Shreyas Yadav M", "Shyam M", "Suhas A. Salunke", "Tejaswini C N"],
       photos:[
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751950710/Screenshot_20250624-110828_WhatsApp_nrfsjf.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751950623/IMG-20250708-WA0005_z5iuqh.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751950622/IMG-20250708-WA0004_zwjsad.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751950622/IMG-20250708-WA0003_h0yoyu.jpg"
]

     },
       {
       id: 2,
       title: "Circuits, Chips and Charades – 1st Place Victory",
       description: `Our student team from ECE, Presidency University—Mohammed Zaid S, Leoni, and Sri Krishna—secured 1st place in the technical event "Circuits, Chips and Charades" held on Monday, October 14, 2024 at B.N.M. Institute of Technology, Bengaluru.

Organized by the IEEE Circuits and Systems Society in association with the IEEE-BNMIT Student Branch, this event was part of the IEEE WEEK Activities. The competition tested participants’ expertise in RISC-V and ARM processors through interactive technical rounds and a challenging quiz.`,
       category: "Excellence",
       date: "2024-10-14",
       organization: "BNM Institute Of Technology, Bengaluru",
       team: ["Leoni S", "Mohammed Zaid", "Sri Krishna"],
       photos: [
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704158/BNMIT_lrwml5.png",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751917396/BNMIT_1_whvg1m.png",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751960458/bnmit_final_qewiql.jpg"
]

     },
       {
       id: 1,
       title: "Best Idea Presentation",
       description: `On this Engineer's Day, celebrated under the theme "Driving Sustainability with Engineering Solutions Embracing the Latest AI Driven Technologies," our chapter proudly secured the "Best Idea Presentation" title. This accolade recognizes the innovative spirit and exceptional clarity with which our sustainable technology concept was shared, showcasing engineering excellence that truly resonates with the theme's vital vision.`,
       category: "Excellence",
       date: "2024-09-15",
       team: ["Monika P", "Mohammed Zaid", "Shreyas Yadav M", "Tejaswini CN"],
       organization: "Institution of Engineers (India), Bengaluru",
       photos: [
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704157/IEI_cuxrik.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751950622/CASS_cun7uz.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751960623/iei_2_hnp5wc.jpg",
   "https://res.cloudinary.com/dk34keh8x/image/upload/v1751960624/iei_3_xdmmlt.jpg"
]

     },
   ];

  const pastAchievements = specificAchievements;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Research: "bg-blue-100 text-blue-800",
      Innovation: "bg-purple-100 text-purple-800",
      Community: "bg-green-100 text-green-800",
      Leadership: "bg-orange-100 text-orange-800",
      Excellence: "bg-red-100 text-red-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Past Achievements</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our comprehensive history of achievements that showcase our dedication
            to excellence, innovation, and leadership in technology.
          </p>
        </div>
      </section>

      {/* Past Achievements Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievement History</h2>
            <p className="text-xl text-gray-600">
              A comprehensive showcase of all the achievements that have defined our chapter's journey
            </p>
          </div>

          <div className="space-y-12">
            {pastAchievements.map((achievement) => (
              <Card key={achievement.id} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Achievement Details */}
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge
                        variant="secondary"
                        className={getCategoryColor(achievement.category)}
                      >
                        {achievement.category}
                      </Badge>
                    </div>

                    {/* Achievement Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>

                    {/* Achievement Description */}
                    <p className="text-gray-600 mb-6">{achievement.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-3 text-ieee-blue" />
                        <span>{formatDate(achievement.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Award className="w-4 h-4 mr-3 text-ieee-blue" />
                        <span>{achievement.organization}</span>
                      </div>
                      {/* Team Members */}
                      {achievement.team && achievement.team.length > 0 && (
                        <div className="flex items-start text-gray-600">
                          <Users className="w-4 h-4 mr-3 text-ieee-blue mt-1" />
                          <div>
                            <span className="font-semibold">Team:</span>{" "}
                            {achievement.team.map((member, index) => (
                              <span key={index}>
                                {member}
                                {index < achievement.team.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>

                  {/* Achievement Photos */}
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Achievement Gallery</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {achievement.photos.map((photo, photoIndex) => (
                        <div key={photoIndex} className="relative cursor-pointer" onClick={() => openImageModal(photo)}>
                          <img
                            src={photo}
                            alt={`${achievement.title} - Photo ${photoIndex + 1}`}
                            className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={closeImageModal}>
          <div className="relative max-w-5xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl" />

          </div>
        </div>
      )}
    </Layout>
  );
};

export default PastAchievements;
