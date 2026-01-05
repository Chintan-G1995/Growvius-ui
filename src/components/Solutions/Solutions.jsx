const solutions = [
  "🏥 Healthcare Automation",
  "🏦 Financial Services",
  "🛒 E-commerce Solutions",
  "🏭 Manufacturing Optimization",
  "📚 Education Technology",
  "🏨 Hospitality Management",
  "🚚 Logistics & Supply Chain",
  "🏢 Real Estate Solutions",
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0F172A]">
            Tailored Automation Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left list */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-6 text-[#0F172A]">
              Industry-Specific Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-gray-200 pb-3 cursor-pointer hover:text-[#2563EB] text-[#334155] transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right visual */}
          <div className="md:col-span-2">
            <div className="h-[400px] rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#F8FAFC] flex items-center justify-center text-center p-8 border border-gray-200">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#0F172A]">
                  Custom AI Solutions
                </h3>
                <p className="text-[#334155] max-w-md">
                  We design and deploy AI automation tailored exactly to your
                  industry needs, workflows, and growth goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
