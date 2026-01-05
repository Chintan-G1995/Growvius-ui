const stats = [
  { value: "60%", label: "Efficiency Increase" },
  { value: "50+", label: "Projects" },
  { value: "24/7", label: "Automation" },
  { value: "98%", label: "Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <h3 className="text-4xl text-[#2563EB] font-bold">{s.value}</h3>
            <p className="text-[#334155]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
