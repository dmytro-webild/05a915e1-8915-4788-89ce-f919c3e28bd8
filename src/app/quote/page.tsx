"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function QuotePage() {
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
              { name: "Get a Quote", id: "/quote" }
            ]}
            button={{ text: "Get a Quote", href: "/quote" }}
            animateOnLoad={false}
          />
        </div>

        <div id="quote-section" data-section="quote-section">
          <ContactSplit
            tag="Schedule Now"
            title="Get Your Free Roofing Quote"
            description="Fill out the form below to receive a detailed, no-obligation estimate for your roofing project. Our experts will be in touch shortly to discuss your needs and schedule an inspection. You can also reach us directly at 250-617-1940."
            background={{ variant: "plain" }}
            useInvertedBackground={false}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780390644896-dmh5enaz.png?_wi=2"
            imageAlt="Roofer providing a quote or performing an inspection"
            mediaPosition="right"
            inputPlaceholder="Your Email Address"
            buttonText="Submit My Request"
            termsText="By submitting, you agree to our privacy policy and to be contacted regarding your request."
            onSubmit={(email) => alert(`Quote request submitted for ${email}`)}
          />
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
                  { label: "Get a Quote", href: "/quote" }
                ]
              },
              {
                title: "Contact",                items: [
                  { label: "250-617-1940", href: "tel:2506171940" },
                  { label: "info@roofshieldpro.com", href: "mailto:info@roofshieldpro.com" },
                  { label: "City, State" }
                ]
              }
            ]}
            copyrightText="© 2026 | RoofShield Pro"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}