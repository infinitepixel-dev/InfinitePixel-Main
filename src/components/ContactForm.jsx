import { useState, useRef } from "react"
import ScrollingIconsBar from "./utility/ScrollingIconsBar"

const ContactForm = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const maxMessageLength = 250 // Maximum character limit for the message

  const email = import.meta.env.VITE_FORM_EMAIL // Ensure you have this in your .env file

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email format"
    }

    // Optional: Block suspicious TLDs or domains
    const spammyPatterns = ["@tempmail", "@10minutemail", "@mailinator"]
    if (
      spammyPatterns.some((pattern) =>
        formData.email.toLowerCase().includes(pattern)
      )
    ) {
      newErrors.email = "Please use a real email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    if (!validateForm()) {
      setSubmitting(false)
      return
    }

    const payload = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value)
    })

    // FormSubmit required hidden fields
    payload.append("_template", "table")
    payload.append("_subject", "New Contact Submission")
    payload.append("_captcha", "false")

    try {
      //import VIte Email from env
      const response = await fetch(email, {
        method: "POST",
        body: payload,
      })

      if (response.ok) {
        setShowThankYou(true)
        setFormData({
          company: "",
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
        setErrors({})
      } else {
        alert("There was a problem submitting the form.")
      }
    } catch (error) {
      console.error("Error submitting the form:", error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <ScrollingIconsBar />
      <div
        id="contact-form"
        className="flex justify-center w-full p-4 bg-texture-pattern bg-zinc-800 md:p-20"
      >
        <form
          ref={formRef}
          action="https://formsubmit.co/49b3ec7186e27ea9fd61c9e9f858330c"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-screen-md p-6 space-y-6 bg-white rounded-lg shadow-lg md:px-10"
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
              className="block text-sm font-medium select-none text-sky-950"
            >
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="block w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              placeholder="Business Name"
            />
          </div>

          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium select-none text-sky-950"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium select-none text-sky-950"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium select-none text-sky-950"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium select-none text-sky-950"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
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
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 text-white transition duration-200 ease-in-out rounded-md select-none bg-gradient-to-r from-blue-500 hover:from-blue-600 to-indigo-600 hover:to-indigo-700 focus:ring-4 focus:ring-indigo-300"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-sm p-8 text-center bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-green-600">
              Thank You!
            </h2>
            <p className="text-gray-700">
              Your message has been submitted successfully.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="px-4 py-2 mt-6 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm
