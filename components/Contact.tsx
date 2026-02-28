"use client";

import { Button } from "@/components/ui/button"
import { Calendar, Loader2, Mail, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

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
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I&apos;ll get back to you soon.',
        });
        setFormData({ email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
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
    <main className="min-h-[calc(100vh-7rem)] flex items-center px-6 py-24 mt-16">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email Card */}
          <article className="group relative rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-md hover:border-primary/20">
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Send us an Email</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Reach out directly — we typically respond within 24 hours.
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

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

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
            <h2 className="text-xl font-semibold mb-2">Book a Demo</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              See Browzer in action with a personalized 15-minute walkthrough.
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

        {/* Additional Info */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Usually respond within 25 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact