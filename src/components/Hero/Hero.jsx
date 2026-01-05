import decorImage from "../../assets/decor.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#F8FAFC] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-extrabold mb-4 leading-tight text-[#0F172A]">
            {/* Automate Your Business with{" "} */}
            AI Automation Built to Drive {" "}
            {/* <span className="text-red-500">AI-Powered Solutions</span> */}
            <span className="text-[#2563EB]">Real Business Results</span>
          </h1>
          <p className="text-[#334155] text-lg mb-8">
            From local operations to mid-market enterprises, we design intelligent systems that scale with your growth.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1D4ED8] transition"
          >
            Schedule a Free Consultation
          </a>
        </div>

        <div className="relative h-[500px] rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#F8FAFC] flex items-center justify-center border border-gray-200">
          <div className="bg-transparent p-8 rounded-xl text-center">
            {/* <h3 className="text-xl font-semibold mb-2">
              Drive efficiency with AI
            </h3>
            <p className="text-sm text-gray-200">
              Transform operations using automation
            </p> */}
            <img src={decorImage} alt="Main image" />
          </div>
        </div>
      </div>
    </section>
  );
}
