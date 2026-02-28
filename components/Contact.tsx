"use client";

import { Button } from "@/components/ui/button"
import { Calendar, Loader2, Mail, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormData({ email: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
   <section className="py-24" id="contact">
    <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&lsquo;s <span className="text-primary">Build together</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email Card */}
          <article className="group relative rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-md hover:border-primary/20">
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Send an Email</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            I typically respond within <strong className="text-primary">27 minutes.</strong>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </article>

          {/* Book Demo Card */}
          <article className="group relative rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-md hover:border-primary/20">
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
              <Calendar className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Book a Call</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Direct One to One demo with me
            </p>
            <Button asChild className="w-full text-white">
              <Link
                href="https://cal.com/abhinandan07/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </Link>
            </Button>
          </article>
        </div>
      </div>
   </section>
  )
}

export default Contact