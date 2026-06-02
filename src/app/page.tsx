"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ShieldCheck, Wrench, DollarSign } from "lucide-react";

export default function HvacPage() {
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
            brandName="AirPro HVAC"
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" }
            ]}
            button={{ text: "Get a Quote", href: "#contact" }}
            animateOnLoad={false}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlay
            title="Your Comfort Is Our Priority"
            description="Professional heating, ventilation, and air conditioning services for homes and businesses. From installations to emergency repairs, we keep your climate perfect year-round."
            avatars={[
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.jpg", alt: "Client" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.jpg", alt: "Client" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.jpg", alt: "Client" }
            ]}
            avatarText="Trusted by 500+ clients"
            buttons={[
              { text: "Schedule Service", href: "#contact" },
              { text: "Our Services", href: "#services" }
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-1.jpg"
            imageAlt="HVAC technician performing system maintenance"
            showDimOverlay={true}
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            tag="About Us"
            title="ProtectingHomes.Earning Trust. "
            description="For years, we've helped homeowners protect what matters most with quality roofing solutions built to last. From repairs and replacements to complete roof installations, our experienced team delivers exceptional craftsmanship, honest communication, and attention to every detail. We take pride in exceeding expectations and ensuring every customer is confident in the finished result. When the job is complete, your roof is stronger, your home is protected, and your satisfaction is our success."
            metrics={[
              {
                value: "10+",                title: "Years in Business"
              },
              {
                value: "98%",                title: "Customer satisfaction rate"
              }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/tmp/remake-that-before-and-after-image-witho-1780371325762-c29beb04.png"
            imageAlt="Commercial HVAC units on rooftop"
            mediaBadge={{
              text: "Active Now",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-3.jpg",              avatarAlt: "Technician"
            }}
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>
        <div id="services" data-section="services">
          <FeatureCardOne
            title="Our Services"
            description="From installations to emergency repairs, we have your comfort covered."
            buttons={[{ text: "Get a Quote", href: "#contact" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "AC Installation",                description: "Expert installation of high-efficiency air conditioning systems for homes and commercial spaces.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368970943-884ohiiv.png",                imageAlt: "AC installation service"
              },
              {
                title: "Heating Systems",                description: "Complete furnace and heat pump installations to keep you warm through every winter.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368970943-054s7lu2.png",                imageAlt: "Heating system service"
              },
              {
                title: "Maintenance Plans",                description: "Preventative maintenance programs that extend the life of your system and reduce energy costs.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368864068-g7y4zzcd.png",                imageAlt: "HVAC maintenance"
              },
              {
                title: "Emergency Repairs",                description: "24/7 emergency repair service — we respond fast when your system breaks down unexpectedly.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368864068-ekekc7j6.png",                imageAlt: "Emergency HVAC repair"
              },
              {
                title: "Duct Cleaning",                description: "Professional duct cleaning to improve air quality and system efficiency throughout your property.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368864068-35f1otob.png",                imageAlt: "Duct cleaning service"
              },
              {
                title: "System Inspections",                description: "Thorough inspections with detailed reports and transparent recommendations — no hidden fees.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368744961-40lhnvum.png",                imageAlt: "HVAC system inspection"
              }
            ]}
            gridVariant="uniform-all-items-equal"
            uniformGridCustomHeightClasses="aspect-square"
            gridClassName="md:!grid-cols-3"
            carouselThreshold={7}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
        <FeatureBorderGlow
          title="Why Choose AirPro"
          description="What sets us apart from the rest"
          features={[
            {
              icon: ShieldCheck,
              title: "Reliability & Trust",              description: "Looking for a dependable HVAC company? We arrive on time and do the job right."
            },
            {
              icon: Wrench,
              title: "Quality Workmanship",              description: "Our skilled technicians excel in various HVAC repairs, using only top-quality materials."
            },
            {
              icon: DollarSign,
              title: "Fair & Transparent Pricing",              description: "No surprises here! We offer clear quotes and fair pricing for quality work."
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />

        <FeatureCardEight
          title="How It Works"
          description="Our simple process from first call to finished job"
          features={[
            {
              title: "Schedule a Call",              description: "Contact us by phone or online to describe your HVAC issue. We'll find a time that works for you.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-6.jpg?_wi=2",              imageAlt: "Scheduling a service call"
            },
            {
              title: "On-Site Diagnosis",              description: "A certified technician arrives on time, inspects your system, and explains the issue with a clear quote.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-7.jpg?_wi=2",              imageAlt: "Technician diagnosing HVAC system"
            },
            {
              title: "Expert Repair or Install",              description: "We complete the work using premium parts and proven techniques — most jobs done same day.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-4.jpg?_wi=2",              imageAlt: "HVAC repair in progress"
            },
            {
              title: "Quality Guarantee",              description: "We test everything before we leave and back all work with our satisfaction guarantee.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-8.jpg?_wi=2",              imageAlt: "Final quality check"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="What Our Clients Say"
            description="Hear from homeowners and businesses who trust AirPro HVAC."
            testimonials={[
              {
                id: "1",                name: "James R.",                handle: "Homeowner, Austin TX",                testimonial: "AirPro replaced our entire AC system in one day. The crew was professional, clean, and the new unit runs quieter than anything we've had before. Highly recommend.",                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.jpg",                imageAlt: "James R."
              },
              {
                id: "2",                name: "Linda M.",                handle: "Business Owner, Dallas TX",                testimonial: "We use AirPro for all three of our office locations. Their maintenance plans have saved us thousands in emergency repairs. Always on time, always honest.",                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.jpg",                imageAlt: "Linda M."
              },
              {
                id: "3",                name: "Carlos D.",                handle: "Homeowner, Houston TX",                testimonial: "Our furnace broke down on the coldest night of the year. AirPro had someone at our door within two hours. Fixed it on the spot. Can't thank them enough.",                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.jpg",                imageAlt: "Carlos D."
              }
            ]}
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Frequently Asked Questions"
            buttons={[{ text: "Contact Us", href: "#contact" }]}
            buttonAnimation="slide-up"
            faqsAnimation="slide-up"
            textPosition="left"
            useInvertedBackground={false}
            faqs={[
              {
                id: "1",                title: "How long does a typical roof inspection take?",                content: "A standard roof inspection for a residential property usually takes about 30-60 minutes, depending on the size and complexity of the roof. Commercial properties may take longer."
              },
              {
                id: "2",                title: "What are the signs that my roof needs repair or replacement?",                content: "Common signs include missing or curled shingles, granules in gutters, leaks or water spots on ceilings, sagging roof deck, and moss or algae growth. A professional inspection can confirm the issues."
              },
              {
                id: "3",                title: "Do you offer free estimates for roof repairs or replacements?",                content: "Yes, we provide free, no-obligation estimates for all roofing services. We'll assess your roof's condition and provide a detailed quote with transparent pricing."
              },
              {
                id: "4",                title: "What types of roofing materials do you work with?",                content: "We specialize in a variety of roofing materials including asphalt shingles, metal roofing, tile roofs, flat roofs (TPO, PVC), and more. We can help you choose the best option for your needs."
              },
              {
                id: "5",                title: "Is your company licensed and insured?",                content: "Absolutely. We are fully licensed, bonded, and insured, providing peace of mind and protection for our clients and our team throughout every project."
              }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            text="Ready for a Professional Roof Inspection? Ensure your roof is in top condition. Schedule a comprehensive inspection today to identify any potential issues and prevent costly damage."
            buttons={[
              { text: "Schedule Inspection", href: "#contact" },
              { text: "Call for Consultation", href: "tel:5559876543" }
            ]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
            animationType="entrance-slide"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="AirPro HVAC"
            columns={[
              {
                title: "Services",                items: [
                  { label: "Roof Repair", href: "#services" },
                  { label: "Roof Replacement", href: "#services" },
                  { label: "New Roof Installation", href: "#services" },
                  { label: "Roof Maintenance", href: "#services" }
                ]
              },
              {
                title: "Company",                items: [
                  { label: "About Us", href: "#about" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" }
                ]
              },
              {
                title: "Contact",                items: [
                  { label: "(555) 123-4567", href: "tel:5551234567" },
                  { label: "info@airprohvac.com", href: "mailto:info@airprohvac.com" },
                  { label: "City, State" }
                ]
              }
            ]}
            copyrightText="© 2026 | AirPro HVAC"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}