export default function ExperienceSection() {
  const experiences = [
    {
      role: "Senior UX Designer",
      company: "Google",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      duration: "Jan 2020 – Present · 3 yrs 8 mos",
      location: "Mountain View, California, United States",
      description:
        "Leading design initiatives for the Search team. Collaborating with product managers, engineers, and researchers to define product direction, create wireframes, and conduct usability testing."
    },
    {
      role: "Product Designer",
      company: "Microsoft",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      duration: "Jun 2016 – Dec 2019 · 3 yrs 6 mos",
      location: "Redmond, Washington, United States",
      description:
        "Worked on improving user flows and enhancing UI consistency for Office 365 products. Designed prototypes, conducted A/B tests, and optimized accessibility compliance."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 border-b pb-6 last:border-0 last:pb-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={exp.companyLogo}
                alt={exp.company}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{exp.role}</h3>
              <p className="text-sm text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="text-sm text-gray-500">{exp.location}</p>
              <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
