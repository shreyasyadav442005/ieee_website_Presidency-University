import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Societies = () => {
  const societies = [
    {
      id: 1,
      name: "IEEE Circuits and Systems Society (CASS)",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484845/IEEE_CAS_Logo_pktwle.png",
      officeBearers: {
        facultyAdvisor: { 
          name: "Dr. Rajiv Ranjan Singh", 
          year: "Professor & HOD", 
          branch: "ECE",
          image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/ECE_HoD_wha6os.jpg"
        },
        chairperson: { name: "M Aishwarya", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793577/AISHWARYA_oogqkf.jpg" },
        viceChair: { name: "Sri Krishna", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757862976/SriKrishna_sitmxs.jpg" },
        secretary: { name: "Nagabushan", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793577/NAGABUSHAN_uasfwr.jpg" },
       treasurer: { name: "Chandana T", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793581/CHANDANA_qofn8g.jpg" }
      }
    },
    {
      id: 2,
      name: "IEEE Signal Processing Society",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484847/SPS_Logo_Color_RGB_TM_imjau6.png",
      officeBearers: {
        facultyAdvisor: { name: "Dr. Veena C.S", year: "Professor", branch: "ECE", image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392324/Veena_mam_n74pu8.jpg" },
        chairperson: { name: "M B Akshay", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793576/AKSHAY_j2zyy8.jpg" },
        viceChair: { name: "Varshashree V S", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793578/VARSHASHREE_hvnu78.jpg" },
        secretary: { name: "Monish M K", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757862647/MONISH_zp5ym0.jpg" },
        treasurer: { name: "Sai Prasad", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793577/SAIPRASAD_hh1voq.jpg" }
      }
    },
    {
      id: 3,
      name: "IEEE Computational Society (ComSoc)",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484846/ieee-comsoc_lmlzia.png",
      officeBearers: {
        facultyAdvisor: { name: "Dr. K. Rafeeq Ahemed", year: "Professor", branch: "ECE", image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/KRA_sir_h55rv7.jpg" },
        chairperson: { name: "Sabroni Bhattacharya", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793581/SABRONI_e9fiwb.jpg" },
        viceChair: { name: "Abhisheik A Nair", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793580/ABHISHEIK_iw4x3r.jpg" },
        secretary: { name: "Keerthi M", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793581/KEERTHI_luza04.jpg" },
       treasurer: { name: "Shyam K", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793578/SHYAM_K_dbkbq7.jpg" }
      }
    },
    {
      id: 4,
      name: "IEEE Computational Intelligence Society",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484845/IEEE_CIS_logo_RGB_300ppi_j6ulqr.png",
      officeBearers: {
        facultyAdvisor: { name: "Dr. Joseph Anthony Prathap", year: "Associate Professor", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757862712/JAP-SIR_lgfbuq.jpg" },
        chairperson: { name: "Beryl T Binu", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793579/BERYL_b4u6nr.jpg" },
        viceChair: { name: "S Harish", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793579/HARISH_yxty48.jpg" },
        secretary: { name: "Rakshith", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793580/RAKSHITH_bfqph6.jpg" },
        treasurer: { name: "Shyam M", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793580/SHYAM_M_hb2gey.jpg" }
      }
    },
    {
      id: 5,
      name: "IEEE Nanotechnology Society",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484846/IEEE_Nanotechnology_Council_Logo_p6xcxx.png",
      officeBearers: {
        facultyAdvisor: { name: "Dr. Joseph Anthony Prathap", year: "Associate Professor", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757862712/JAP-SIR_lgfbuq.jpg" },
        chairperson: { name: "Leoni", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793574/LEONI_doefl7.jpg" },
        viceChair: { name: "Sarika", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/SARIKA_cltxqx.jpg" },
        secretary: { name: "Srusti Saraha", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/SRUSTI_dltqf6.jpg" },
        treasurer: { name: "Anshuneel Nayak", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793574/ANSHUNEEL_na2q0d.jpg" }
      }
    },
    {
      id: 6,
      name: "IEEE Sensors Council",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484846/IEEE_Sensors_Council_Logo_jnavsy.png",
      officeBearers: {
        facultyAdvisor: { name: "Dr. Joseph Anthony Prathap", year: "Associate Professor", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757862712/JAP-SIR_lgfbuq.jpg" },
        chairperson: { name: "Venkanna E", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793577/VENKANNA_boi00m.jpg" },
        viceChair: { name: "K Sneha", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/K_SNEHA_qtp0mw.jpg" },
        secretary: { name: "Tejaswini C N", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/TEJASWINI_CN_oqlzos.jpg" },
        treasurer: { name: "Meghana", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/MEGHANA_HS_gxgbjt.jpg" }
      }
    },
    {
      id: 7,
      name: "IEEE Power Electronics Society (PELS)",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1757566956/pels-square_ctexx7.jpg",
      officeBearers: {
        facultyAdvisor: { name: "Dr. Dharmesh Kumar Srivastava", year: "Associate Professor", branch: "ECE", image: "https://presidencyuniversity.in/uploads/mentor/67de94fec163b1742640382.jpg" },
        chairperson: { name: "Shreyas Yadav M", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757794752/123_yvddfl_qrxaky.jpg" },
        viceChair: { name: "Monika P", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/MONIKA_P_yzzdga.jpg" },
        secretary: { name: "Pankaj", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/PANKAJ_ghbmtq.jpg" },
        treasurer: { name: "Manoj Kumar", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/MANOJ_KUMAR_yvskth.jpg" }
      }
    },
    {
      id: 8,
      name: "IEEE Industrial Electronics Society (IES)",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1757566955/OIP_2_bl26us.webp",
      officeBearers: {
        facultyAdvisor: { name: "Dr. Azra Jeelani", year: "Associate Professor", branch: "ECE", image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/HAzra_mam_hbakjy.jpg" },
        chairperson: { name: "Jayalakshmi Jhansi M N", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793574/JHANSI_zzspnm.jpg" },
        viceChair: { name: "Adithya G R", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793574/ADITHYA_GR_mzzl8j.jpg" },
        secretary: { name: "Ashwath", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793575/ASHWATH_o9w6aa.jpg" },
        treasurer: { name: "Ritish Pani", year: "3rd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757862614/RITISH_PANI_hq9f4o.jpg" }
      }
    },
    {
      id: 9,
      name: "IEEE Council on Electronic Design Automation (CEDA)",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1757566955/IEEE_CEDA_Logo-01_o8ry32.png",
      officeBearers: {
        facultyAdvisor: { name: "Dr. Aniloy Augustine Frank", year: "Professor", branch: "ECE", image: "https://presidencyuniversity.in/uploads/mentor/66d1a47d2b1f41725015165.jpg" },
        chairperson: { name: "Mohammed Zaid S", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1752673439/Dev_2_gyzl6t.png" },
        viceChair: { name: "R Suhas", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793578/SUHAS_mvnfkm.jpg" },
        secretary: { name: "Vindu", year: "2nd Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793579/VINDU_b7l20h.jpg" },
        treasurer: { name: "Thanu T", year: "3rd Year", branch: "ECE-VLSI", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793578/THANU_mccjrm.jpg" }
      }
    },
    {
      id: 10,
      name: "IEEE Consumer Technology Society (CTSoc)",
      logo: "https://res.cloudinary.com/dk34keh8x/image/upload/v1757566956/IEEE_CT_Soc_Logo_RGB_wscqph.png",
      officeBearers: {
        facultyAdvisor: { name: "Dr. Sandhya Dass", year: "Associate Professor", branch: "ECE", image: "https://presidencyuniversity.in/uploads/mentor/ece/11.%20Dr.%20Sandhya%20Dass.webp" },
        chairperson: { name: "Sriraksha Shetty", year: "4th Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793582/SEN4_ywyuus.jpg" },
        viceChair: { name: "Sanjana P", year: "4th Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793582/SEN1_gqe9zo.jpg" },
        secretary: { name: "Suman R", year: "4th Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793582/SEN2_vhlsv5.jpg" },
        treasurer: { name: "Rakshitha S R", year: "4th Year", branch: "ECE", image: "https://res.cloudinary.com/diq8du9mi/image/upload/v1757793582/SEN3_khmyhu.jpg" }
      }
    }
  ]
  ;

  const roleLabels = {
    facultyAdvisor: "Faculty Advisor",
    chairperson: "Chairperson",
    viceChair: "Vice-Chair",
    secretary: "Secretary",
    treasurer: "Treasurer"
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">
            IEEE Student Branch <span className="text-ieee-orange">Office Bearers</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our diverse range of technical societies, each led by dedicated office bearers 
            committed to advancing technology and fostering innovation.
          </p>
        </div>
      </section>

      {/* Societies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {societies.map((society) => (
              <Card key={society.id} className="hover-lift border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-stretch">
                    {/* Society Logo */}
                    <div className="flex-shrink-0 bg-gray-50 p-8 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-2xl p-6 shadow-lg flex items-center justify-center">
                        <img 
                          src={society.logo} 
                          alt={`${society.name} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Society Info */}
                    <div className="flex-grow p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">{society.name}</h2>
                      <div className="grid grid-cols-5 gap-6">
                        {Object.entries(society.officeBearers).map(([role, person]) => (
                          <div key={role} className="text-center">
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                              <img
                                src={person.image}
                                alt={person.name}
                                className="w-24 h-24 rounded-lg mx-auto mb-3 object-cover border-2 border-ieee-blue"
                              />
                              <h3 className="text-ieee-blue font-semibold text-sm mb-2">
                                {roleLabels[role as keyof typeof roleLabels]}
                              </h3>
                              <p className="text-gray-900 font-medium text-sm mb-1">{person.name}</p>
                              <p className="text-gray-600 text-xs">{person.year}</p>
                              <p className="text-gray-500 text-xs">{person.branch}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    {/* Society Logo and Name */}
                    <div className="text-center p-6 bg-gray-50 border-b">
                      <div className="w-24 h-24 bg-white rounded-xl p-4 shadow-lg mx-auto mb-4 flex items-center justify-center">
                        <img 
                          src={society.logo} 
                          alt={`${society.name} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{society.name}</h2>
                    </div>
                    
                    {/* Office Bearers */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(society.officeBearers).map(([role, person]) => (
                          <div key={role} className="bg-gray-50 rounded-lg p-4 text-center">
                            <img
                              src={person.image}
                              alt={person.name}
                              className="w-24 h-24 rounded-lg mx-auto mb-3 object-cover border-2 border-ieee-blue"
                            />
                            <h3 className="text-ieee-blue font-semibold text-sm mb-2">
                              {roleLabels[role as keyof typeof roleLabels]}
                            </h3>
                            <p className="text-gray-900 font-medium text-sm mb-1">{person.name}</p>
                            <p className="text-gray-600 text-xs">{person.year}</p>
                            <p className="text-gray-500 text-xs">{person.branch}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Societies;