import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  emailjs.init("ZAoJEVFTiMidNy-cW");

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setEmailError("");

    try {
      // Get form data
      const form = e.target;
      const name = form.elements[0].value;
      const email = form.elements[1].value;
      const Contact_No = form.elements[2].value;
      const projectDetails = form.elements[3].value;

      // Validate email
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        return;
      }

      setLoading(true);
      const response = await emailjs.send(
        "service_5dfihx3", // Service ID from EmailJS
        "template_phld4os", // Template ID from EmailJS
        {
          to_email: "info@growvius.com",
          from_name: name,
          from_email: email,
          Contact_No: Contact_No,
          project_details: projectDetails,
        }
      );  

      if (response.status === 200) {
        setMessage("✓ Message sent successfully! We'll contact you soon.");
        form.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("✗ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#F8FAFC] p-6 sm:p-8 rounded-xl border border-gray-200"
        >
          <h3 className="text-xl sm:text-2xl mb-5 sm:mb-6 text-[#0F172A]">Start Your AI Journey</h3>
          {["Name", "Email", "Contact"].map((f) => (
            <div key={f}>
              <input
                placeholder={f}
                required
                type={f === "Email" ? "email" : "text"}
                className={`w-full mb-2 p-3 bg-white border rounded focus:outline-none focus:ring-2 text-[#0F172A] transition ${
                  f === "Email" && emailError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:ring-[#2563EB]"
                }`}
              />
              {f === "Email" && emailError && (
                <p className="text-red-500 text-sm mb-4">{emailError}</p>
              )}
            </div>
          ))}
          <textarea
            placeholder="Project Details"
            required
            className="w-full mb-4 p-3 bg-white border border-gray-200 rounded text-[#0F172A]"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#2563EB] w-full py-3 rounded font-semibold text-white hover:bg-[#1D4ED8] transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {message && (
            <p
              className={`mt-4 text-sm font-semibold ${
                message.includes("✓")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        <div>
          <h3 className="text-2xl sm:text-3xl mb-6 text-[#0F172A]">Get In Touch</h3>
          <h4 className="text-base sm:text-lg font-semibold mt-6 sm:mt-8 mb-2 sm:mb-3 text-[#0F172A]">Email</h4>
          <p className="mb-4 text-sm sm:text-base text-[#334155]">📧 info@growvius.com</p>
          <h4 className="text-base sm:text-lg font-semibold mt-6 sm:mt-8 mb-2 sm:mb-3 text-[#0F172A]">Contact</h4>
          <p className="mb-4 text-sm sm:text-base text-[#334155]">📞 +91 73832 81968</p>
          
          <h4 className="text-base sm:text-lg font-semibold mt-6 sm:mt-8 mb-2 sm:mb-3 text-[#0F172A]">India</h4>
          <p className="mb-6 text-xs sm:text-sm md:text-base text-[#334155]">📍E-112, Titanium City Center, 100.ft road, Prahladnagar, Ahmedabad - 380015</p>
          
          <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#0F172A]">Dubai</h4>
          <p className="mb-6 text-xs sm:text-sm md:text-base text-[#334155]">📍403, Al Youseef Tower, Khalid Bin Walid Bank Street, Al Fahidi, Dubai, UAE</p>
          
          <h4 className="text-base sm:text-lg font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4 text-[#0F172A]">Follow Us</h4>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/company/growvius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A] hover:text-[#2563EB] transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.facebook.com/growvius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A] hover:text-[#2563EB] transition"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/growvius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A] hover:text-[#2563EB] transition"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
