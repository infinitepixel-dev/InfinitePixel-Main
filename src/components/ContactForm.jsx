import { useState } from "react"

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    message: "",
  })

  // State to manage form errors
  const [errors, setErrors] = useState({})

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Validate the form before submission
  const validateForm = () => {
    const newErrors = {}

    // Validation rules for required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Check if form is valid before proceeding
    if (validateForm()) {
      console.log("Form data submitted:", formData)
      // Reset the form after successful submission
      setFormData({
        company: "",
        firstName: "",
        lastName: "",
        message: "",
      })
      setErrors({})
    }
  }

  return (
    <div className="w-full p-20 bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow-lg md:px-10"
      >
        {/* Company Name (Optional) */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
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
            placeholder="Enter your company name"
          />
        </div>

        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
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
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
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
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
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
            placeholder="Enter your message"
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-white transition duration-200 ease-in-out rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:ring-indigo-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
