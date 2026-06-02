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
            brandName="RoofShield Pro"
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
            title="Protect Your Home with a Superior Roof"
            description="Expert roofing solutions for residential and commercial properties. From durable installations to reliable repairs, we ensure long-lasting protection and peace of mind."
            avatars={[
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.jpg", alt: "Client" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.jpg", alt: "Client" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.jpg", alt: "Client" }
            ]}
            avatarText="Trusted by 500+ homeowners & businesses"
            buttons={[
              { text: "Schedule Service", href: "#contact" },
              { text: "Our Services", href: "#services" }
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/tmp/straight-on-drone-shot-of-a-big-house-wi-1780382079502-28705898.png"
            imageAlt="Professional roofer inspecting a residential roof"
            showDimOverlay={true}
            showBlur={false}
            titleClassName="text-white drop-shadow-[0_2px_0_rgb(0,0,0)]"
            textBoxClassName="w-full text-center p-4 rounded-3xl"
            descriptionClassName="text-white"
            buttonTextClassName="text-black"
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            tag="About Us"
            title="Protecting Homes, Earning Trust. "
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
            imageAlt="Experienced roofing crew working on a new roof installation"
            mediaBadge={{
              text: "On-site Daily",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-3.jpg",              avatarAlt: "Roofer"
            }}
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>
        <div id="services" data-section="services">
          <FeatureCardOne
            title="Our Comprehensive Roofing Services"
            description="From minor repairs to complete roof overhauls, we provide lasting solutions."
            buttons={[{ text: "Get a Quote", href: "#contact" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "Roof Repairs",                description: "Addressing leaks, storm damage, and wear to extend your roof's life.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368970943-884ohiiv.png",                imageAlt: "Roof repair service"
              },
              {
                title: "Roof Replacements ",                description: "Full roof tear-offs and installations for enhanced protection and curb appeal.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368970943-054s7lu2.png",                imageAlt: "New roof replacement service"
              },
              {
                title: "Asphalt Shingle Roofing",                description: "High-quality asphalt shingle installations for durability and aesthetic versatility.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368864068-g7y4zzcd.png",                imageAlt: "Asphalt shingle roofing installation"
              },
              {
                title: "Leak Detection & Repair",                description: "Advanced techniques to pinpoint and seal leaks, preventing interior damage.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368864068-ekekc7j6.png",                imageAlt: "Roof leak detection and repair"
              },
              {
                title: "Ventilation & Roofing Accessories Installation",                description: "Optimizing roof ventilation and installing crucial accessories for system longevity.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368864068-35f1otob.png",                imageAlt: "Roof ventilation system installation"
              },
              {
                title: "Residential Roofing",                description: "Comprehensive roofing solutions tailored specifically for residential properties.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/uploaded-1780368744961-40lhnvum.png",                imageAlt: "Residential roofing project"
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
          title="Why Choose RoofShield Pro"
          description="The foundations of our trusted roofing service."
          features={[
            {
              icon: ShieldCheck,
              title: "Reliability & Trust",              description: "Dependable roofing solutions delivered on time, every time."
            },
            {
              icon: Wrench,
              title: "Quality Workmanship",              description: "Skilled roofers using premium materials for superior, lasting results."
            },
            {
              icon: DollarSign,
              title: "Fair & Transparent Pricing",              description: "Clear, honest quotes for all roofing projects, no hidden costs."
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />

        <FeatureCardEight
          title="Our Roofing Process: Simple & Seamless"
          description="From your initial inquiry to a perfectly finished roof."
          features={[
            {
              title: "Schedule a Consultation",              description: "Contact us to discuss your roofing needs. We'll find a convenient time for a thorough assessment.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-6.jpg?_wi=2",              imageAlt: "Scheduling a roof consultation"
            },
            {
              title: "Detailed Roof Inspection",              description: "Our expert team conducts a comprehensive inspection, identifying issues and providing a transparent quote.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-7.jpg?_wi=2",              imageAlt: "Roofer performing a detailed roof inspection"
            },
            {
              title: "Expert Installation & Repair",              description: "We perform all work efficiently, using top-grade materials and proven techniques for a durable roof.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/tmp/newly-installed-roof-with-crew-1780368744961-78901.png",              imageAlt: "Roof repair in progress"
            },
            {
              title: "Satisfaction & Warranty",              description: "We ensure your complete satisfaction and back our work with a robust warranty for your peace of mind.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/tmp/satisfied-homeowner-shaking-hands-1780368744961-23456.png",              imageAlt: "New roof with quality guarantee"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="What Our Clients Say About Their New Roofs"
            description="Hear from homeowners who've experienced our commitment to quality roofing."
            testimonials={[
              {
                id: "1",                name: "James R.",                handle: "Homeowner, Austin TX",                testimonial: "RoofShield Pro replaced our old, worn-out roof with incredible efficiency. The team was professional, the site was left spotless, and our new asphalt shingle roof looks fantastic. Highly recommend their roofing expertise!",                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/tmp/homeowner-with-new-roof-1780382079502-12345.jpg",                imageAlt: "James R."
              },
              {
                id: "2",                name: "Linda M.",                handle: "Business Owner, Dallas TX",                testimonial: "After a major storm, RoofShield Pro handled our emergency roof repair quickly and professionally. Their prompt response saved us from further damage, and the quality of their work was outstanding. True lifesavers!",                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/tmp/commercial-building-roof-1780371325762-67890.jpg",                imageAlt: "Linda M."
              },
              {
                id: "3",                name: "Carlos D.",                handle: "Homeowner, Houston TX",                testimonial: "We needed a complete roof replacement, and RoofShield Pro delivered. Their communication was excellent throughout the project, and the craftsmanship is superb. Our home feels safer and looks better than ever.",                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EYnezFJ1ZeM41Reh2j46V6O7DH/tmp/roofer-on-site-happy-client-1780368970943-abcde.jpg",                imageAlt: "Carlos D."
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
            sideTitle="Common Roofing Questions"
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
            logoText="RoofShield Pro"
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
