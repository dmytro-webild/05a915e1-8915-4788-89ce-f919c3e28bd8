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
            subtitle="Last Updated: June 2, 2026"
            sections={[
              {
                heading: "1. Introduction",                content: [
                  { type: "paragraph", text: "Welcome to To The Peak Roofing INC. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you regarding your information. By using our website, requesting a quote, or contacting us through our website, you agree to the collection and use of information in accordance with this Privacy Policy." }
                ]
              },
              {
                heading: "2. Information We Collect",                content: [
                  { type: "paragraph", text: "We may collect the following types of information:" },
                  { type: "paragraph", text: "Personal Information" },
                  { type: "paragraph", text: "Information you voluntarily provide to us, including:" },
                  { type: "list", items: ["Full name", "Email address", "Phone number", "Physical address", "Property information related to roofing projects", "Any information submitted through contact forms, quote requests, emails, or phone calls"] },
                  { type: "paragraph", text: "Website Usage Information" },
                  { type: "paragraph", text: "We may automatically collect certain information when you visit our website, including:" },
                  { type: "list", items: ["IP address", "Browser type and version", "Device information", "Pages visited", "Time and date of visits", "Time spent on pages", "Referring website addresses"] }
                ]
              },
              {
                heading: "3. How We Use Your Information",                content: [
                  { type: "paragraph", text: "We use the information we collect to:" },
                  { type: "list", items: ["Respond to quote requests and inquiries", "Schedule consultations and appointments", "Provide roofing services", "Communicate with you regarding projects and estimates", "Improve our website and customer experience", "Monitor website performance and usage", "Prevent fraud and enhance website security", "Comply with legal obligations", "Send service-related updates and communications"] }
                ]
              },
              {
                heading: "4. Cookies and Analytics",                content: [
                  { type: "paragraph", text: "Our website may use cookies and similar technologies to improve your browsing experience and analyze website traffic. Cookies may collect information such as:" },
                  { type: "list", items: ["Browser preferences", "Website usage patterns", "Device information", "Visitor behavior"] },
                  { type: "paragraph", text: "We may use third-party analytics services such as Google Analytics to better understand how visitors use our website. You can disable cookies through your browser settings; however, some website features may not function properly." }
                ]
              },
              {
                heading: "5. Sharing Your Information",                content: [
                  { type: "paragraph", text: "We do not sell, rent, or trade your personal information. We may share information only in the following situations:" },
                  { type: "paragraph", text: "Service Providers" },
                  { type: "paragraph", text: "We may work with trusted third-party companies that help us operate our website, process inquiries, manage communications, or provide business services. These providers are required to keep your information confidential and use it only for authorized purposes." },
                  { type: "paragraph", text: "Legal Requirements" },
                  { type: "paragraph", text: "We may disclose information if required to:" },
                  { type: "list", items: ["Comply with legal obligations", "Respond to lawful requests from government authorities", "Protect our rights and property", "Prevent fraud or illegal activity", "Protect the safety of our customers or the public"] }
                ]
              },
              {
                heading: "6. Data Retention",                content: [
                  { type: "paragraph", text: "We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, provide services, comply with legal requirements, resolve disputes, and enforce our agreements. When information is no longer required, we take reasonable steps to securely delete or destroy it." }
                ]
              },
              {
                heading: "7. Security of Information",                content: [
                  { type: "paragraph", text: "We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security." }
                ]
              },
              {
                heading: "8. Marketing Communications",                content: [
                  { type: "paragraph", text: "If you submit a contact form, request a quote, or otherwise provide your contact information, we may contact you regarding:" },
                  { type: "list", items: ["Estimates and quotes", "Appointments", "Roofing services", "Project updates", "Customer service matters"] },
                  { type: "paragraph", text: "You may opt out of receiving promotional communications at any time by contacting us directly." }
                ]
              },
              {
                heading: "9. Third-Party Links",                content: [
                  { type: "paragraph", text: "Our website may contain links to external websites, including social media platforms, review websites, and other third-party services. We are not responsible for the privacy practices, policies, or content of these external websites. We encourage users to review the privacy policies of any website they visit." }
                ]
              },
              {
                heading: "10. Children's Privacy",                content: [
                  { type: "paragraph", text: "Our services are intended for adults and property owners. We do not knowingly collect personal information from individuals under the age of 13. If we become aware that personal information has been collected from a child under 13 without parental consent, we will take reasonable steps to remove that information." }
                ]
              },
              {
                heading: "11. Your Privacy Rights",                content: [
                  { type: "paragraph", text: "Depending on applicable laws, you may have the right to:" },
                  { type: "list", items: ["Access personal information we hold about you", "Correct inaccurate information", "Request deletion of your personal information", "Withdraw consent where applicable", "Request information about how your data is used"] },
                  { type: "paragraph", text: "To exercise any of these rights, please contact us using the information below." }
                ]
              },
              {
                heading: "12. Canadian Privacy Compliance",                content: [
                  { type: "paragraph", text: "To The Peak Roofing INC. is committed to protecting personal information in accordance with applicable Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA)." }
                ]
              },
              {
                heading: "13. Changes to This Privacy Policy",                content: [
                  { type: "paragraph", text: "We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. Any updates will be posted on this page with a revised \"Last Updated\" date. We encourage you to review this Privacy Policy regularly." }
                ]
              },
              {
                heading: "14. Contact Us",                content: [
                  { type: "paragraph", text: "If you have any questions regarding this Privacy Policy or your personal information, please contact us:" },
                  { type: "paragraph", text: "To The Peak Roofing INC." },
                  { type: "paragraph", text: "Email: info@tothepeakroofing.com" },
                  { type: "paragraph", text: "Phone: 250-617-1940" },
                  { type: "paragraph", text: "Prince George, British Columbia, Canada" }
                ]
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="To The Peak Roofing INC."
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
                  { label: "info@tothepeakroofing.com", href: "mailto:info@tothepeakroofing.com" },
                  { label: "Prince George, BC, Canada" }
                ]
              }
            ]}
            copyrightText="© 2026 | To The Peak Roofing INC."
            onPrivacyClick={() => router.push('/privacy-policy')}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}