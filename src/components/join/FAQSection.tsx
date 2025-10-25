
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can join the IEEE Student Chapter?",
      answer: "Any enrolled student at Presidency University can join our IEEE Student Chapter, regardless of their branch of study."
    },
    {
      question: "What is the membership fee?",
      answer: "The fee will be the same as the amount from the IEEE website, and a few memberships will be free."
    },
    {
      question: "What activities can I participate in?",
      answer: "Members can participate in workshops, seminars, competitions, research projects, and networking events throughout the year."
    },
    {
      question: "Do I need prior technical experience?",
      answer: "No prior experience is required! We welcome students from all backgrounds and provide learning opportunities for beginners."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers!</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
