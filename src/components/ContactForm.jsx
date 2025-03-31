import { useState, useRef } from "react";
import ScrollingIconsBar from "./utility/ScrollingIconsBar";

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
      <ScrollingIconsBar />
      <div
        id="contact-form"
        className="bg-texture-pattern bg-white p-20 w-full"
      >
        <form
          ref={formRef}
          action="https://formsubmit.co/49b3ec7186e27ea9fd61c9e9f858330c"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 bg-white shadow-lg mx-auto p-6 md:px-10 rounded-lg max-w-3xl"
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
            className="bg-gradient-to-r from-blue-500 hover:from-blue-600 to-indigo-600 hover:to-indigo-700 py-3 rounded-md focus:ring-4 focus:ring-indigo-300 w-full text-white transition duration-200 ease-in-out select-none"
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
