"use client";

import React from "react";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {
  const router = useRouter();
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

        <div id="privacy-policy" data-section="privacy-policy">
          <LegalSection
            layout="page"
            title="Privacy Policy"
            subtitle="Last updated: October 26, 2023"
            sections={[
              {
                heading: "1. Introduction",                content: [
                  { type: "paragraph", text: "Welcome to To The Peak Roofing INC. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your information. We are committed to protecting your privacy." }
                ]
              },
              {
                heading: "2. Information We Collect",                content: [
                  { type: "paragraph", text: "We collect information to provide better services to all our users. The types of information we collect include:" },
                  {
                    type: "list",                    items: [
                      "Personal Identification Information: Name, email address, phone number, and physical address when you request a quote or contact us.",                      "Usage Data: Information on how the service is accessed and used (e.g., IP address, browser type, pages visited, time spent on pages)."
                    ]
                  }
                ]
              },
              {
                heading: "3. How We Use Your Information",                content: [
                  { type: "paragraph", text: "We use the collected information for various purposes:" },
                  {
                    type: "list",                    items: [
                      "To provide and maintain our Service.",                      "To notify you about changes to our Service.",                      "To allow you to participate in interactive features of our Service when you choose to do so.",                      "To provide customer support.",                      "To gather analysis or valuable information so that we can improve our Service.",                      "To monitor the usage of our Service.",                      "To detect, prevent and address technical issues.",                      "To fulfill any other purpose for which you provide it."
                    ]
                  }
                ]
              },
              {
                heading: "4. Sharing Your Information",                content: [
                  { type: "paragraph", text: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except in specific cases:" },
                  {
                    type: "list",                    items: [
                      "Service Providers: We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",                      "Legal Requirements: We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of To The Peak Roofing INC., prevent or investigate possible wrongdoing in connection with the Service, protect the personal safety of users of the Service or the public, or protect against legal liability."
                    ]
                  }
                ]
              },
              {
                heading: "5. Security of Data",                content: [
                  { type: "paragraph", text: "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security." }
                ]
              },
              {
                heading: "6. Your Data Protection Rights",                content: [
                  { type: "paragraph", text: "Depending on your location, you may have the following data protection rights:" },
                  {
                    type: "list",                    items: [
                      "The right to access, update or delete the information we have on you.",                      "The right to rectify your information if that information is inaccurate or incomplete.",                      "The right to object to our processing of your Personal Data.",                      "The right to request that we restrict the processing of your personal information.",                      "The right to data portability for your information.",                      "The right to withdraw consent."
                    ]
                  }
                ]
              },
              {
                heading: "7. Changes to This Privacy Policy",                content: [
                  { type: "paragraph", text: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
                  }
                ]
              },
              {
                heading: "8. Contact Us",                content: [
                  { type: "paragraph", text: "If you have any questions about this Privacy Policy, please contact us:" },
                  {
                    type: "list",                    items: [
                      "By email: info@tothepeakroofing.com",                      "By phone: 250-617-1940"
                    ]
                  }
                ]
              }
            ]}
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