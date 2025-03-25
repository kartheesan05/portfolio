"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getInputClasses } from "@/lib/neobrutalism";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset submitted status after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-2xl font-heading mb-2">Send a Message</h3>
      
      <div className="space-y-1">
        <div className={`border-2 border-border p-2 ${errors.name ? 'border-red-500' : ''}`}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent outline-none"
            disabled={isSubmitting}
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div className="space-y-1">
        <div className={`border-2 border-border p-2 ${errors.email ? 'border-red-500' : ''}`}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent outline-none"
            disabled={isSubmitting}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <div className="space-y-1">
        <div className={`border-2 border-border p-2 h-32 ${errors.message ? 'border-red-500' : ''}`}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-full bg-transparent outline-none resize-none"
            disabled={isSubmitting}
          />
        </div>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      
      <div className="self-start">
        {submitted ? (
          <div className="bg-green-500 text-white border-2 border-border p-2 rounded-base">
            Message sent successfully!
          </div>
        ) : (
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        )}
      </div>
    </form>
  );
} 