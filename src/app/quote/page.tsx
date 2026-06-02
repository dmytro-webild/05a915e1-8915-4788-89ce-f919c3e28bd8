"use client";

import React, { useState } from "react";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import Input from "@/components/form/Input";
import ButtonBounceEffect from "@/components/button/ButtonBounceEffect/ButtonBounceEffect";
import { useRouter } from "next/navigation";

export default function QuotePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote Request Submitted:", { name, email, comments });
    alert("Thank you for your quote request! We will be in touch shortly.");
    // Here you would typically send this data to a backend service
    setName("");
    setEmail("");
    setComments("");
  };

  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            brandName="To The Peak Roofing INC."
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Get a Quote", id: "/quote" },
              { name: "Privacy Policy", id: "/privacy-policy" }
            ]}
            button={{ text: "Get a Quote", href: "/quote" }}
            animateOnLoad={false}
          />
        </div>

        <div
          id="quote-section"
          data-section="quote-section"
          className="relative isolate overflow-hidden py-20 md:py-32 bg-background text-foreground"
        >
          <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent ring-1 ring-inset ring-accent/20 mb-4">
                Schedule Now
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Get Your Free Roofing Quote
              </h2>
              <p className="mt-4 text-lg leading-8 text-foreground/80">
                Fill out the form below to receive a detailed, no-obligation estimate for your roofing project. Our experts will be in touch shortly to discuss your needs and schedule an inspection. You can also reach us directly at 250-617-1940.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={setName}
                  required
                  className="mt-2 block w-full rounded-md border-0 bg-card/70 px-3 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/20 focus:ring-2 focus:ring-inset focus:ring-primary-cta sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={setEmail}
                  required
                  className="mt-2 block w-full rounded-md border-0 bg-card/70 px-3 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/20 focus:ring-2 focus:ring-inset focus:ring-primary-cta sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-medium leading-6 text-foreground">
                  Comments or Specific Needs
                </label>
                <textarea
                  id="comments"
                  rows={4}
                  placeholder="Tell us about your roofing project..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="mt-2 block w-full rounded-md border-0 bg-card/70 px-3 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/20 focus:ring-2 focus:ring-inset focus:ring-primary-cta sm:text-sm sm:leading-6"
                />
              </div>
              <ButtonBounceEffect
                type="submit"
                text="Submit My Request"
                className="w-full justify-center"
                textClassName="text-primary-cta-text"
                ariaLabel="Submit quote request"
              />
              <p className="mt-4 text-xs text-center text-foreground/70">
                By submitting, you agree to our privacy policy and to be contacted regarding your request.
              </p>
            </form>
          </div>
        </div>

        <div id="call-us-section" data-section="call-us-section">
          <ContactText
            text="Prefer to talk? Call us directly for immediate assistance at 250-617-1940."
            buttons={[
              { text: "Call Now", href: "tel:2506171940" }
            ]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
            animationType="entrance-slide"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="RoofShield Pro"
            columns={[
              {
                title: "Services",                items: [
                  { label: "Roof Repair", href: "/#services" },
                  { label: "Roof Replacement", href: "/#services" },
                  { label: "New Roof Installation", href: "/#services" },
                  { label: "Roof Maintenance", href: "/#services" }
                ]
              },
              {
                title: "Company",                items: [
                  { label: "About Us", href: "/#about" },
                  { label: "Testimonials", href: "/#testimonials" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Get a Quote", href: "/quote" },
                  { label: "Privacy Policy", href: "/privacy-policy" }
                ]
              },
              {
                title: "Contact",                items: [
                  { label: "250-617-1940", href: "tel:2506171940" },
                  { label: "info@roofshieldpro.com", href: "mailto:info@roofshieldpro.com" },
                  { label: "Prince George, BC, Canada" }
                ]
              }
            ]}
            copyrightText="© 2026 | RoofShield Pro"
            onPrivacyClick={() => router.push('/privacy-policy')}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}