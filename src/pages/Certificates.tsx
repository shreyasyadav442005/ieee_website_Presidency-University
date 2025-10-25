import { Award, User, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Layout from "@/components/Layout";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const openCertificate = (imageUrl: string) => {
    setSelectedCertificate(imageUrl);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  // Define a list of certificates with all details, including team members and participation type
  const certificateData = [
    {
      id: 15,
      name: "Kanti Prasad J",
      award: "Best Project",
      location: "Nitte Meenakshi Institute Of Technology, Bengaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751719391/KANTI_Prasad_r2e6uj.jpg",
      teamMembers: ["Jiteesh P","Poonnacha C N","Ritu Patnaik","Gagan K S"],
      participation: "External"
    },
    {
      id: 14,
      name: "Monika P",
      award: "1st Prize Winners",
      location: "MITE, Mangaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704159/MANGALURU_pj7grq.jpg",
      teamMembers: ["Chandana T","Shreyas Yadav M","Tejaswini C N"],
      participation: "External"
    },
    {
      id: 13,
      name: "Chandana T",
      award: "Top 4th Innovative Project",
      location: "HKBK College Of Engineering, Bengaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704158/HKBK_vdwogx.jpg",
      teamMembers: ["Monika P","Shreyas Yadav M", "Tejaswini C N"],
      participation: "External"
    },
    {
      id: 12,
      name: "Varsha Shree V S",
      award: "Second Prize Winners",
      location: "Vidya Vikas Institute Of Technology, Mysore",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704159/MYSURU_zcxrpq.png",
      teamMembers: ["Keerthi M","Meghana H S","Suhas A Salunke"],
      participation: "External"
    },
    {
      id: 11,
      name: "Leoni S",
      award: "Active Group Participation",
      location: "Siddhartha Academy Of Higher Education, Vijayawada(AP)",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704159/VIJAYAWADA_gys3rj.png",
      teamMembers: ["Beryl T Binu","M Aishwarya","Venkanna E"],
      participation: "External"
    },
    {
      id: 10,
      name: "Keerthi M",
      award: "Second Prize Winners",
      location: "Siddhartha Academy Of Higher Education, Vijayawada(AP)",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751722661/KEERTHI_VIJW_qnfdbk.jpg",
      teamMembers: ["Mohammed Zaid","Suhas A Salunke","Varsha Shree V S"],
      participation: "External"
    },

    {
      id: 9,
      name: "D D Aishwarya",
      award: "Active Group Participation",
      location: "Presidency University, Bengaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751719565/Aishwarys_lgfucy.jpg",
      teamMembers: ["Aneeqha Tarannum S"],
      participation: "Internal"
    },
    {
      id: 8,
      name: "Sneha D V",
      award: "Best Top-70 Project, (Innovative Projects Using Raspberry Pi)",
      location: "Presidency Univeristy, Bengaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751726979/Sneha_DV_IPR_oy2owh.jpg",
      teamMembers: ["Aswathi V","Hemanth J R","Kushi G","Savitha","Shreyas Yadav M"],
      participation: "Internal"
    },
    {
      id: 7,
      name: "Siddesh B S",
      award: "Active Participation",
      location: "BMS College Of Engineering, Bengaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751720656/Siddesh_B_S_huvmz6.png",
      participation: "External"
    },
    {
      id: 6,
      name: "Beryl T Binu",
      award: "Active Group Participation",
      location: "Nokia tower, Manyata Tech Park, Bengaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704158/NOKIA_f6ogxd.png",
      teamMembers: ["IEEE Students of Presidency University"],
      participation: "External"
    },
    {
      id: 5,
      name: "M Aishwarya",
      award: "Active Group Participation",
      location: "NIE South Campus, Mysore",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704157/LOGIC_CRAFT_sgkguo.jpg",
      teamMembers: [ "IEEE Students of 3VLSI01"],
      participation: "External"
    },
    {
      id: 4,
      name: "Mohammed Zaid",
      award: "1st Prize Winners",
      location: "BNM Institute Of Technology",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704158/BNMIT_lrwml5.png",
      teamMembers: ["Leoni S","Sri Krishna"],
      participation: "External" // Example of internal participation
    },
    {
      id: 3,
      name: "Shreyas Yadav M",
      award: "Best Idea Presentation",
      location: "Institution of Engineers (India), Bengaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751704157/IEI_cuxrik.jpg",
      teamMembers: ["Monika P","Mohammed Zaid","Tejaswini C N"],
      participation: "External"
    },
    {
      id: 2,
      name: "Monika B S",
      award: "Active Group Participation",
      location: "Vidya Vikas Institute Of Engineering & Technology, Mysore",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751719565/YESIST_ypcjuw.jpg",
      teamMembers: ["Aneeqha Tarannum S"],
      participation: "External" // Example of internal participation
    },
    {
      id: 1,
      name: "Keerthi M",
      award: "Active Group Participation",
      location: "Presidency University, Bengaluru",
      imageUrl: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751719391/Anveshana_Vlsi_nxh1h5.jpg",
      teamMembers: ["Shreyas Yadav M", "Tejaswini C N","Varsha Shree V S"],
      participation: "Internal"
    },
  ];

  const getParticipationBadgeClass = (type: string) => {
    if (type === "Internal") {
      return "bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium";
    } else if (type === "External") {
      return "bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium";
    }
    return "bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium"; // Default
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Student Certificates</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Celebrating the achievements and recognition earned by our students
            in various competitions and events.
          </p>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificateData.map((cert) => (
              <Card key={cert.id} className="hover-lift border-0 shadow-lg overflow-hidden cursor-pointer">
                <div
                  className="relative group"
                  onClick={() => openCertificate(cert.imageUrl)}
                >
                  <img
                    src={cert.imageUrl}
                    alt="Certificate"
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {cert.participation && (
                    <div className="absolute top-4 left-4">
                      <span className={getParticipationBadgeClass(cert.participation)}>
                        {cert.participation} Participation
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-ieee-blue" />
                      <span>{cert.award}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-ieee-blue" />
                      <span>{cert.location}</span>
                    </div>
                    {cert.teamMembers && cert.teamMembers.length > 0 && (
                      <div className="flex items-start text-sm text-gray-700 mt-3">
                        <User className="w-4 h-4 mr-2 text-ieee-orange flex-shrink-0 mt-0.5" />
                        <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                          <span className="font-semibold text-gray-800">Team:</span>
                          {cert.teamMembers.map((member, index) => (
                            <span key={index} className="flex items-center">
                              {member}
                              {index < cert.teamMembers.length - 1 && <span className="ml-0.5 mr-0.5">,</span>}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal for Enlarged View */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeCertificate}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={selectedCertificate}
              alt="Certificate Enlarged"
              className="w-full h-full object-contain rounded-lg"
            />
            <Button
              className="absolute top-4 right-4 bg-white/20 hover:bg-blue/20 text-black border-white/50"
              onClick={closeCertificate}
              size="sm"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Certificates;