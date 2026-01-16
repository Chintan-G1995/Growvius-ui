const services = [
  { icon: "🤖", title: "AI Chatbots", desc: "24/7 intelligent conversations" },
  { icon: "📈", title: "Marketing Automation", desc: "Smarter campaigns" },
  { icon: "⚡", title: "AI Voice Agents", desc: "Faster workflows" },
  { icon: "📊", title: "Data Analytics", desc: "Actionable insights" },
  { icon: "🔧", title: "Custom AI", desc: "Tailored solutions" },
  { icon: "🚀", title: "Growth Acceleration", desc: "Scale faster" },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#0F172A]">
          AI-Driven Automation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-[#2563EB] hover:-translate-y-2 transition"
            >
              <div className="text-3xl mb-3 sm:mb-4">{s.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0F172A]">{s.title}</h3>
              <p className="text-sm sm:text-base text-[#334155]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
