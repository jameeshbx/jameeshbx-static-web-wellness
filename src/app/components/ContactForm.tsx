"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactForm } from "../data/contact";
import { log } from "console";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  service: z.string().min(1, "Service is required"),
  note: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setSuccessMessage("");
    try {
        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipientEmail: data.email,
                name: data.name,
                phone: data.phone,
                service: data.service,
                note: data.note,
            }),
        });

        const result = await response.json();

        if (result.success) {
            setSuccessMessage("Thank you! Your message has been sent.");
            console.log(data.email);
            
        } else {
            throw new Error(result.error || "Failed to send email.");
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong. Please try again.");
    } finally {
        setLoading(false);
    }
};


  return (
    <div>
      <section className="bg-pink py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-Manrope text-lg uppercase tracking-wider text-darkpink mb-4">
              {contactForm.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
              {contactForm.title}
            </h2>
            <p className="text-gray-600 px-14">{contactForm.des}</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-14 mx-8">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                  <img
                    src="/contactuser.png"
                    alt=""
                    className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                  />
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Name"
                    className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>
                <div className="relative">
                  <img
                    src="/contactemail.png"
                    alt=""
                    className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                  />
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div className="relative">
                  <img
                    src="/contactphone.png"
                    alt=""
                    className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                  />
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Phone"
                    className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>
                <div className="relative">
                  <img
                    src="/contactbook.png"
                    alt=""
                    className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                  />
                  <input
                    type="text"
                    {...register("service")}
                    placeholder="Service You Need"
                    className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  {errors.service && (
                    <p className="text-red-500 text-sm">{errors.service.message}</p>
                  )}
                </div>
                <div className="relative">
                  <img
                    src="/contactnote.png"
                    alt=""
                    className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                  />
                  <textarea
                    {...register("note")}
                    placeholder="Any Note For Us"
                    className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent min-h-[100px]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-md ease-in-out"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "SUBMIT"}
                </button>
              </form>
              {successMessage && (
                <p className="text-green-500 text-center mt-4">{successMessage}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
