import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, BookOpen, IdCard } from "lucide-react";

// IEEE Members Data - This data is now directly used by the component
const ieeeMembers = {
  "4th Year": [
    {
      name: "Abhishek Patil",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100647253"
    },
    {
      name: "Aditya Ramesh",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100098551"
    },
    {
      name: "Afreen",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100094983"
    },
    {
      name: "Balaji R",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100004376"
    },
    {
      name: "Basawaraj Sidlingoud",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100095043"
    },
    {
      name: "Bharath NN",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100550970"
    },
    {
      name: "Chandan AG",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100697575"
    },
    {
      name: "D Dhanush",
      year: "4th Year",
      branch: "Computer Science and Engineering",
      membershipId: "100010188"
    },
    {
      name: "Deeksha Shantagouda Patil",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100102745"
    },
    {
      name: "Deekshitha NJ",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100010164"
    },
    {
      name: "Gourish Alur",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100646045"
    },
    {
      name: "Harshitha Prasad S G",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "101274183"
    },
    {
      name: "K Syed Shahid Siraj",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100098582"
    },
    {
      name: "Mallikarjun Patil",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100105476"
    },
    {
      name: "Mallinath Bali",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100646238"
    },
    {
      name: "Mamata M",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "101656424"
    },
    {
      name: "Manish",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100646030"
    },
    {
      name: "Mansi Gautam",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100550930"
    },
    {
      name: "Mohammed Mustafa",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100095073"
    },
    {
      name: "Mohammed Saqib Shariff",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100522668"
    },
    {
      name: "Mohammed Shadab Tameem",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100522702"
    },
    {
      name: "Neeraja HC",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100589668"
    },
    {
      name: "R Bhavana",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "101299747"
    },
    {
      name: "Rakshitha SR",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100697666"
    },
    {
      name: "Ram Narayan Gupta",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100697847"
    },
    {
      name: "Sanjana P Poojari",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100697696"
    },
    {
      name: "Santagoud Pavadigoudar",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100128146"
    },
    {
      name: "Shreya Kagale",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100102650"
    },
    {
      name: "Siddesh B S",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100550944"
    },
    {
        name: "Spandana A",
        year: "4th Year",
        branch: "Electronics and Communication",
        membershipId: "100885397"
      },
    {
      name: "Sriraksha Shetty",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100668331"
    },
    {
      name: "Srushti Kumatoli",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100102764"
    },
    {
      name: "Srivallbha Budda",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100701120"
    },
    {
      name: "Srivatsa Mankal",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100646369"
    },
    {
      name: "Sujana Hariyapureddy",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100601678"
    },
    {
      name: "Suman R",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100701189"
    },
    {
      name: "Sumanth S",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100586420"
    },
    {
      name: "Sumit Biradar",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100186677"
    },
    {
      name: "Varun Gangadhar Bhat",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100879791"
    },
    {
      name: "Veeresh",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100646164"
    },
    {
      name: "Yashwanth H B",
      year: "4th Year",
      branch: "Electronics and Communication",
      membershipId: "100648834"
    }
  ],
  "3rd Year": {
    "Electronics and Communication": [
      {
        name: "Abhijit A",
        year: "3rd Year",
        branch: "Electronics and Communication",
        membershipId: "100879850"
      },
      {
        name: "Abhishek A Nair",
        year: "3rd Year",
        branch: "Electronics and Communication",
        membershipId: "100846038"
      },
      {
        name: "Adithya G R",
        year: "3th Year",
        branch: "Electronics and Communication",
        membershipId: "101155589"
      },
      {
        name: "G R Nishanth Sai",
        year: "3rd Year",
        branch: "Electronics and Communication",
        membershipId: "101037546"
      },
      {
        name: "Jayalakshmi Jhansi M N",
        year: "3rd Year",
        branch: "Electronics and Communication",
        membershipId: "101115046"
      },
      {
      name: "Monish M K",
      year: "3rd Year",
      branch: "Electronics and Communication",
      membershipId: "101128661"
    },
    {
        name: "S Rakshith",
        year: "3rd Year",
        branch: "Electronics and Communication",
        membershipId: "101034681"
      }
    ],
    "Electronics and Communication (VLSI)": [
      {
        name: "Anshuneel A Nayak",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "101206815"
      },
      {
        name: "Beryl T Binu",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100605182"
      },
      {
        name: "Chandana T",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100605236"
      },
      {
        name: "Keerthi M",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100606612"
      },
      {
        name: "Leoni S",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100606595"
      },
      {
        name: "M Aishwarya",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100605135"
      },
      {
        name: "Meghana S",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100606531"
      },
      {
        name: "Mohammed Zaid S",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100605118"
      },
      {
        name: "Monika P",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100609237"
      },
      {
        name: "Shreyas Yadav M",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100605178"
      },
      {
        name: "Shyam M",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100609263"
      },
      {
        name: "Srushti Sarah",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100606522"
      },
      {
        name: "Tejaswini CN",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100605169"
      },
      {
        name: "Thanu T",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100605205"
      },
      {
        name: "Varsha Shree V S",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100606533"
      },
      {
        name: "Venkanna.E",
        year: "3rd Year",
        branch: "Electronics and Communication (VLSI)",
        membershipId: "100605108"
      }
    ]
  },
  "2nd Year": [
      {
      name: "Ashwath",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101311280"
    },
    {
      name: "K Sneha",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101619357"
    },
    {
      name: "Manoj Kumar",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101620605"
    },
    {
      name: "Nagabhushan",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101311356"
    },
    {
      name: "Pankaj T N",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101619628"
    },
    {
      name: "Sarika G",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101620639"
    },
    {
      name: "Saiprasad",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101619570"
    },
    {
      name: "S Harish",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101352664"
    },
    {
      name: "Shyam K",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101128682"
    },
    {
      name: "Vindu",
      year: "2nd Year",
      branch: "Electronics and Communication",
      membershipId: "101645429"
    }
  ],
};


const ActiveIEEEMembers = () => {
  // Define the order of years for display
  const yearOrder = ["4th Year", "3rd Year", "2nd Year", "1st Year"];

  // Function to determine badge color based on year
  const getYearColor = (year: string) => {
    switch (year) {
      case "1st Year": return "bg-green-100 text-green-800";
      case "2nd Year": return "bg-blue-100 text-blue-800";
      case "3rd Year": return "bg-purple-100 text-purple-800";
      case "4th Year": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Calculate total members dynamically for the stats card
  const totalMembers = Object.values(ieeeMembers).reduce((total, yearGroup) => {
    if (typeof yearGroup === 'object' && !Array.isArray(yearGroup)) {
      // For 3rd Year (nested branches), sum up members from all branches
      return total + Object.values(yearGroup).reduce((branchTotal, branchMembers) => branchTotal + branchMembers.length, 0);
    }
    // For other years (flat arrays), just add the length
    return total + yearGroup.length;
  }, 0);


  return (
    <Layout>
      {/* Header Section - now with blue background and an orange icon */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon with orange color */}
          <div className="flex justify-center mb-6">
            <div className="bg-primary-foreground/20 p-4 rounded-full">
              <Users className="w-12 h-12 text-orange-400" /> {/* Changed icon color to orange */}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Active IEEE Members
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Meet our dedicated IEEE Student Chapter members who are actively contributing
            to the advancement of technology and innovation.
          </p>
        </div>
      </section>

      {/* Main Content Area - reverted to gradient background */}
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-16">

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">{totalMembers}</h3>
                <p className="text-muted-foreground text-sm">Total Members</p>
              </CardContent>
            </Card>
            {/* Updated card for Faculty Members */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
                {/* Placeholder value for faculty members, update as needed */}
                <h3 className="text-2xl font-bold text-foreground">7</h3>
                <p className="text-muted-foreground text-sm">Faculty Members</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">{yearOrder.length}</h3>
                <p className="text-muted-foreground text-sm">Year Groups</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <IdCard className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">2025</h3>
                <p className="text-muted-foreground text-sm">Active Year</p>
              </CardContent>
            </Card>
          </div>

          {/* Members List - Grouped by Year and Branch */}
          {yearOrder.map(yearKey => {
            const yearData = ieeeMembers[yearKey];
            if (!yearData) return null; // Skip if no data for the year

            return (
              <div key={yearKey} className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">
                  {yearKey}
                </h2>
                {yearKey === "3rd Year" ? (
                  // Handle 3rd Year with nested branches
                  Object.keys(yearData).sort().map(branchKey => (
                    <div key={branchKey} className="mb-8">
                      <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
                        {branchKey}
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {yearData[branchKey].sort((a, b) => a.name.localeCompare(b.name)).map((member, index) => (
                          <Card key={`${branchKey}-${index}`} className="bg-card border-border hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-foreground flex items-center gap-2">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                  <span className="text-primary font-semibold text-sm">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                {member.name}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Year:</span>
                                <Badge className={`text-xs ${getYearColor(member.year)}`}>
                                  {member.year}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Branch:</span>
                                <span className="text-sm text-foreground font-medium">
                                  {member.branch}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <IdCard className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">ID:</span>
                                <Badge variant="outline" className="text-xs">
                                  {member.membershipId}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  // Handle other years (4th, 2nd, 1st)
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {yearData.sort((a, b) => a.name.localeCompare(b.name)).map((member, index) => (
                      <Card key={`${yearKey}-${index}`} className="bg-card border-border hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-foreground flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-primary font-semibold text-sm">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            {member.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Year:</span>
                            <Badge className={`text-xs ${getYearColor(member.year)}`}>
                              {member.year}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Branch:</span>
                            <span className="text-sm text-foreground font-medium">
                              {member.branch}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <IdCard className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">ID:</span>
                            <Badge variant="outline" className="text-xs">
                              {member.membershipId}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Note */}
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Join Our Chapter
              </h3>
              <p className="text-muted-foreground text-sm">
                Interested in becoming an IEEE member? Visit our Join page to learn more
                about membership benefits and the application process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActiveIEEEMembers;
