
const StepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Fill the Registration Form",
      description: "Complete our simple online registration form with your details and interests."
    },
    {
      number: 2,
      title: "Complete IEEE Membership",
      description: "Register for official IEEE membership to access all benefits and resources."
    },
    {
      number: 3,
      title: "Start Your Journey",
      description: "Begin participating in events, projects, and networking opportunities."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Join</h2>
          <p className="text-xl text-gray-600">Simple steps to become an IEEE member</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-ieee-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-ieee-light-blue transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
