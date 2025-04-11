// src/pages/ContactPage.tsx
import React, { useState } from "react";
import axios from "axios";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    user: "1",
    name: "",
    email: "",
    details: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await axios.post("http://localhost:8000/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("✅ Success:", response.data);
      setSubmitSuccess(true);
      setFormData({
        user: "1",
        name: "",
        email: "",
        details: "",
        message: "",
      });
    } catch (error: any) {
      console.error("❌ Error:", error);
      setSubmitError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Contact Us</h2>
      {submitSuccess && <p style={{ color: "green" }}>Message sent successfully!</p>}
      {submitError && <p style={{ color: "red" }}>{submitError}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>Details</label>
          <input
            type="text"
            name="details"
            value={formData.details}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
