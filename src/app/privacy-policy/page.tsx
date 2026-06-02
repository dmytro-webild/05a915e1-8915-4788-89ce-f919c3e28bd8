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
                  { type: "paragraph", text: "Welcome to To The Peak Roofing INC. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your information. We are committed to protecting your privacy." }
                ]
              },
              {
                heading: "2. Information We Collect",                content: [
                  { type: "paragraph", text: "We collect various types of information to provide and improve our Service to you. The types of information we collect include:" },
                  {
                    type: "list",                    items: [
                      "Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address, Cookies and Usage Data.",                      "Usage Data: We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device. This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."
                    ]
                  }
                ]
              },
              {
                heading: "3. How We Use Your Information",                content: [
                  { type: "paragraph", text: "To The Peak Roofing INC. uses the collected data for various purposes:" },
                  {
                    type: "list",                    items: [
                      "To provide and maintain the Service",                      "To notify you about changes to our Service",                      "To allow you to participate in interactive features of our Service when you choose to do so",                      "To provide customer support",                      "To gather analysis or valuable information so that we can improve the Service",                      "To monitor the usage of the Service",                      "To detect, prevent and address technical issues",                      "To manage your requests"
                    ]
                  }
                ]
              },
              {
                heading: "4. Cookies and Analytics",                content: [
                  { type: "paragraph", text: "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."},                  { type: "paragraph", text: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."}
                ]
              },
              {
                heading: "5. Sharing Your Information",                content: [
                  { type: "paragraph", text: "We may share your information in the following situations:" },
                  {
                    type: "list",                    items: [
                      "With Service Providers: We may share your personal information with service providers to monitor and analyze the use of our Service, for payment processing, to contact you.",                      "For Business Transfers: We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",                      "With Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners or other companies that we control or that are under common control with us.",                      "With Business Partners: We may share your information with our business partners to offer you certain products, services or promotions.",                      "With Your Consent: We may disclose your personal information for any other purpose with your consent."
                    ]
                  }
                ]
              },
              {
                heading: "6. Data Retention",                content: [
                  { type: "paragraph", text: "To The Peak Roofing INC. will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies."},                  { type: "paragraph", text: "To The Peak Roofing INC. will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods."}
                ]
              },
              {
                heading: "7. Security of Information",                content: [
                  { type: "paragraph", text: "The security of your Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security." }
                ]
              },
              {
                heading: "8. Marketing Communications",                content: [
                  { type: "paragraph", text: "We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us." }
                ]
              },
              {
                heading: "9. Third-Party Links",                content: [
                  { type: "paragraph", text: "Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."},                  { type: "paragraph", text: "We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services."}
                ]
              },
              {
                heading: "10. Children's Privacy",                content: [
                  { type: "paragraph", text: "Our Service does not address anyone under the age of 13 (\"Children\")."},
                  { type: "paragraph", text: "We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."}
                ]
              },
              {
                heading: "11. Your Privacy Rights",                content: [
                  { type: "paragraph", text: "Depending on your location, you may have the following data protection rights:" },
                  {
                    type: "list",                    items: [
                      "The right to access, update or delete the information we have on you.",                      "The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.",                      "The right to object. You have the right to object to our processing of your Personal Data.",                      "The right of restriction. You have the right to request that we restrict the processing of your personal information.",                      "The right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format.",                      "The right to withdraw consent. You also have the right to withdraw your consent at any time where To The Peak Roofing INC. relied on your consent to process your personal information."
                    ]
                  }
                ]
              },
              {
                heading: "12. Canadian Privacy Compliance",                content: [
                  { type: "paragraph", text: "We operate in Canada and comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial privacy legislation such as British Columbia's Personal Information Protection Act (PIPA).
As a Canadian company, we are committed to upholding the highest standards of privacy for our customers. Your personal information will be collected, used, and disclosed only for purposes that a reasonable person would consider appropriate in the circumstances, and with your knowledge and consent, unless otherwise required or permitted by law."}
                ]
              },
              {
                heading: "13. Changes to This Privacy Policy",                content: [
                  { type: "paragraph", text: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the 'Last Updated' date at the top of this Privacy Policy."},                  { type: "paragraph", text: "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page." }
                ]
              },
              {
                heading: "14. Contact Us",                content: [
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