import { useState, useRef } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const maxMessageLength = 250; // Maximum character limit for the message

  const email = import.meta.env.VITE_FORM_EMAIL; // Ensure you have this in your .env file

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    // Optional: Block suspicious TLDs or domains
    const spammyPatterns = ["@tempmail", "@10minutemail", "@mailinator"];
    if (
      spammyPatterns.some((pattern) =>
        formData.email.toLowerCase().includes(pattern)
      )
    ) {
      newErrors.email = "Please use a real email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!validateForm()) {
      setSubmitting(false);
      return;
    }

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    // FormSubmit required hidden fields
    payload.append("_template", "table");
    payload.append("_subject", "New Contact Submission");
    payload.append("_captcha", "false");

    try {
      //import VIte Email from env
      const response = await fetch(email, {
        method: "POST",
        body: payload,
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          company: "",
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        setErrors({});
      } else {
        alert("There was a problem submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <svg
        className="block -mt-1 w-full h-auto"
        viewBox="0 300 900 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1 */}
        <path fill="#1a46a4">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
        M0,400 C150,350 300,450 450,400 C600,350 750,450 900,400 L900,600 L0,600Z;
        M0,420 C150,380 300,460 450,420 C600,380 750,460 900,420 L900,600 L0,600Z;
        M0,400 C150,350 300,450 450,400 C600,350 750,450 900,400 L900,600 L0,600Z"
          />
        </path>

        {/* Layer 2 */}
        <path fill="#225ad3" opacity="0.6">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
        M0,420 C200,370 400,470 600,420 C800,370 1000,470 1200,420 L1200,600 L0,600Z;
        M0,430 C200,390 400,490 600,430 C800,390 1000,490 1200,430 L1200,600 L0,600Z;
        M0,420 C200,370 400,470 600,420 C800,370 1000,470 1200,420 L1200,600 L0,600Z"
          />
        </path>

        {/* Layer 3 */}
        <path fill="#2664eb" opacity="0.4">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
        M0,440 C250,390 500,510 750,440 C1000,390 1250,510 1500,440 L1500,600 L0,600Z;
        M0,450 C250,410 500,520 750,450 C1000,410 1250,520 1500,450 L1500,600 L0,600Z;
        M0,440 C250,390 500,510 750,440 C1000,390 1250,510 1500,440 L1500,600 L0,600Z"
          />
        </path>

        {/* Layer 4 */}
        <path fill="#2664eb" opacity="1">
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
        M0,460 C300,410 600,530 900,460 C1200,410 1500,530 1800,460 L1800,600 L0,600Z;
        M0,470 C300,430 600,540 900,470 C1200,430 1500,540 1800,470 L1800,600 L0,600Z;
        M0,460 C300,410 600,530 900,460 C1200,410 1500,530 1800,460 L1800,600 L0,600Z"
          />
        </path>
      </svg>

      <div
        id="contact-form"
        className="flex justify-center bg-texture-pattern bg-gradient-to-b from-blue-600 to-blue-500 p-4 md:p-20 w-full to"
      >
        <form
          ref={formRef}
          action="https://formsubmit.co/49b3ec7186e27ea9fd61c9e9f858330c"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-50 shadow-lg p-6 md:px-10 rounded-lg w-full max-w-screen-md"
        >
          {/* Hidden FormSubmit inputs */}
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Contact Submission" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5174/"
          ></input>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block font-medium text-sky-950 text-sm select-none"
            >
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="block mt-1 p-3 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full transition duration-150 ease-in-out"
              placeholder="Business Name"
            />
          </div>

          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block font-medium text-sky-950 text-sm select-none"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block mt-1 p-3 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full transition duration-150 ease-in-out"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block font-medium text-sky-950 text-sm select-none"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block mt-1 p-3 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full transition duration-150 ease-in-out"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="lastName"
              className="block font-medium text-sky-950 text-sm select-none"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block mt-1 p-3 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full transition duration-150 ease-in-out"
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-medium text-sky-950 text-sm select-none"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block mt-1 p-3 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full transition duration-150 ease-in-out"
              rows="4"
              placeholder="Message"
              maxLength={maxMessageLength} // <-- Character limit
            ></textarea>
            <div
              className={`text-sm text-right ${
                formData.message.length >= maxMessageLength
                  ? "text-red-800"
                  : formData.message.length >= maxMessageLength - 20
                  ? "text-orange-600"
                  : "text-slate-400"
              }`}
            >
              {formData.message.length}/{maxMessageLength} characters
            </div>

            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-zinc-950 hover:bg-zinc-950/85 px-6 py-3 rounded-full w-full font-semibold text-white text-lg transition-all duration-300 ease-in-out"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white shadow-lg p-8 rounded-lg max-w-sm text-center">
            <h2 className="mb-4 font-bold text-green-600 text-2xl">
              Thank You!
            </h2>
            <p className="text-gray-700">
              Your message has been submitted successfully.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-blue-600 hover:bg-blue-700 mt-6 px-4 py-2 rounded text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
