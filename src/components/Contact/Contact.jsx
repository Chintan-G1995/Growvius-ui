export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We’ll contact you soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <form
          onSubmit={handleSubmit}
          className="bg-[#F8FAFC] p-8 rounded-xl border border-gray-200"
        >
          <h3 className="text-2xl mb-6 text-[#0F172A]">Start Your AI Journey</h3>
          {["Name", "Email", "Company"].map((f) => (
            <input
              key={f}
              placeholder={f}
              required
              className="w-full mb-4 p-3 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#0F172A]"
            />
          ))}
          <textarea
            placeholder="Project Details"
            required
            className="w-full mb-4 p-3 bg-white border border-gray-200 rounded text-[#0F172A]"
          />
          <button className="bg-[#2563EB] w-full py-3 rounded font-semibold text-white hover:bg-[#1D4ED8] transition">
            Send Message
          </button>
        </form>

        <div>
          <h3 className="text-3xl mb-6 text-[#0F172A]">Get In Touch</h3>
          <p className="mb-4 text-[#334155]">📧 info@growvius.com</p>
          <p className="mb-4 text-[#334155]">📞 +91 73832 81968</p>
          <p className="text-[#334155]">📍E-112, Titanium City Center, 100.ft road, Prahladnagar, Ahmedabad - 380015</p>
        </div>
      </div>
    </section>
  );
}
