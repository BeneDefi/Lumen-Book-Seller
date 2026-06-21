"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const simulateSendEmail = async (data: ContactFormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { success: true };
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [success, setSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: simulateSendEmail,
    onSuccess: (res) => {
      setSuccess(true);
      reset();
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <div className="flex-1 mx-auto max-w-[1440px] px-5 py-16 w-full lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9A35D4]">
              Get In Touch
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#181818] mt-2 mb-6">
              Contact Lumen Books
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Have any questions, feedback, or inquiries? Fill out the form or
              email us directly at{" "}
              <a
                href="mailto:lumenbooks.contact@gmail.com"
                className="text-[#9A35D4] font-semibold hover:underline"
              >
                lumenbooks.contact@gmail.com
              </a>
              .
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f3fb] text-[#9A35D4]">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Gmail Support</h3>
                  <p className="text-sm text-gray-500">lumenbooks.contact@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfaff] rounded-3xl p-8 border border-[#eedcf5] shadow-sm">
            {success ? (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500 mb-6">
                  <CheckCircle size={36} />
                </div>
                <h2 className="text-2xl font-bold text-[#181818] mb-2">
                  Message Sent!
                </h2>
                <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                  Thank you for reaching out. We will respond to your email as soon as possible.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="h-12 rounded-md bg-[#9A35D4] px-8 text-sm font-semibold text-white shadow-md hover:bg-[#8E26C7] transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <User size={16} className="text-gray-400" /> Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full h-12 rounded-xl bg-white px-4 text-sm text-[#222] outline-none border border-gray-200 focus:border-[#9A35D4] transition"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Mail size={16} className="text-gray-400" /> Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full h-12 rounded-xl bg-white px-4 text-sm text-[#222] outline-none border border-gray-200 focus:border-[#9A35D4] transition"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full h-12 rounded-xl bg-white px-4 text-sm text-[#222] outline-none border border-gray-200 focus:border-[#9A35D4] transition"
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-gray-400" /> Message
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#222] outline-none border border-gray-200 focus:border-[#9A35D4] transition resize-none"
                    placeholder="Write your message here..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full h-12 rounded-xl bg-[#9A35D4] text-white font-semibold shadow-md hover:bg-[#8E26C7] transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {mutation.isPending ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
