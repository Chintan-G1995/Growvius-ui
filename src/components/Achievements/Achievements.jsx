const achievements = [
  {
    number: "2023",
    title: "Company Founded",
    desc: "Started our journey in AI automation",
  },
  {
    number: "200+",
    title: "Clients Served",
    desc: "Businesses transformed globally",
  },
  {
    number: "25+",
    title: "Team Members",
    desc: "AI experts and developers",
  },
  {
    number: "99.9%",
    title: "Uptime",
    desc: "Reliable AI systems",
  },
  {
    number: "12",
    title: "Countries",
    desc: "Global presence",
  },
  {
    number: "$1M+",
    title: "Cost Savings",
    desc: "Generated for clients",
  },
];

export default function Achievements() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0F172A]">
            Remarkable Achievements & Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="text-center p-6 sm:p-8 rounded-xl bg-[#F8FAFC] border border-gray-200 hover:border-[#2563EB] transition"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] mb-2">
                {item.number}
              </div>
              <h4 className="font-semibold mb-1 text-sm sm:text-base text-[#0F172A]">{item.title}</h4>
              <p className="text-xs sm:text-sm text-[#334155]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
