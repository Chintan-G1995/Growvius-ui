const stats = [
  { value: "60%", label: "Efficiency Increase" },
  { value: "50+", label: "Projects" },
  { value: "24/7", label: "Automation" },
  { value: "98%", label: "Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="px-2 sm:px-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#2563EB] font-bold">{s.value}</h3>
            <p className="text-xs sm:text-sm md:text-base text-[#334155] mt-1 sm:mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
