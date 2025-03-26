"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getInputClasses } from "@/lib/neobrutalism";
import { useForm, ValidationError } from "@formspree/react";

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

  // Replace YOUR_FORM_ID with the actual form ID from Formspree
  const [formState, handleFormspreeSubmit] = useForm("mdkedvpo");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      await handleFormspreeSubmit(e);
      if (formState.succeeded) {
        setFormData({ name: "", email: "", message: "" });
      }
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
            disabled={formState.submitting}
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        <ValidationError prefix="Name" field="name" errors={formState.errors} />
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
            disabled={formState.submitting}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <ValidationError prefix="Email" field="email" errors={formState.errors} />
      </div>
      
      <div className="space-y-1">
        <div className={`border-2 border-border p-2 h-32 ${errors.message ? 'border-red-500' : ''}`}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-full bg-transparent outline-none resize-none"
            disabled={formState.submitting}
          />
        </div>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        <ValidationError prefix="Message" field="message" errors={formState.errors} />
      </div>
      
      <div className="self-start">
        {formState.succeeded ? (
          <div className="bg-green-500 text-white border-2 border-border p-2 rounded-base">
            Message sent successfully!
          </div>
        ) : (
          <Button type="submit" disabled={formState.submitting}>
            {formState.submitting ? "Sending..." : "Send Message"}
          </Button>
        )}
      </div>
    </form>
  );
} 