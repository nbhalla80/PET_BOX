"use client";

import {
  ChevronRight,
  ShoppingCart,
  Menu,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CartModal from "./components/cart-modal";
import MobileNav from "./components/mobile-nav";
import TestimonialCarousel from "./components/testimonial-carousel";
import NewsletterSection from "./sections/newsletter-section";

// Define social links
const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: <Twitter className="w-6 h-6" />,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: <Youtube className="w-6 h-6" />,
  },
];

// Define quick links
const quickLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
];

// Define support links
const supportLinks = [
  { href: "#", label: "FAQs" },
  { href: "#", label: "Shipping Policy" },
  { href: "#", label: "Returns & Refunds" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pet Box Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="text-2xl font-bold text-primary-teal">Pet Box</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#how-it-works"
              className="text-dark-text hover:text-primary-teal transition-colors"
            >
              How It Works
            </a>
            <a
              href="#whats-inside"
              className="text-dark-text hover:text-primary-teal transition-colors"
            >
              What's Inside
            </a>
            <a
              href="#pricing"
              className="text-dark-text hover:text-primary-teal transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-dark-text hover:text-primary-teal transition-colors"
            >
              Testimonials
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <CartButton />
            <MobileMenuButton />
          </div>
        </div>
      </header>

      <MobileNav />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary-teal relative overflow-hidden">
          {/* Radial rays background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0 bg-white"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, white 0%, transparent 70%)",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-golden-yellow leading-tight mb-4 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]">
                Tail-Wagging Joy
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text leading-tight mb-4">
                DELIVERED MONTHLY
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Personalized Pet Boxes Tailored to Your Furry Friend
              </p>
              <Button
                size="lg"
                className="bg-golden-yellow hover:bg-golden-yellow/90 text-dark-text"
              >
                Get Started - 50% Off First 3 Months{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
              {/* Video Container */}
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-full text-gray-500">
                  <video
                    src="/video-delivery.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
              </div>
            </div>
        </section>

      {/* What's in the Box Section */}
      <section id="whats-inside" className="py-16 bg-golden-yellow/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
            What's in the Box
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Items Container */}
            <div className="space-y-8">
            {boxContents.map((item, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-md hover:shadow-lg transition-shadow bg-white"
                  >
                    <CardHeader className="flex flex-col items-center pb-2">
                      <div className="w-16 h-16 rounded-full bg-primary-teal/10 flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <CardTitle className="text-center">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-dark-text/80">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Image Container */}
            <div className="h-full">
              <Image
                src="/creative.jpeg"
                alt="creative"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Video Container */}
              <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-full text-gray-500">
                  <video
                    src="/video-box.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                </div>
              </div>

              {/* Steps Container */}
              <div className="space-y-8">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-20 h-20 rounded-full bg-primary-teal/10 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-dark-text/80">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section id="pricing" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`border-none shadow-md hover:shadow-lg transition-shadow ${
                    index === 1 ? "border-t-4 border-t-primary-teal" : ""
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-center text-2xl">{plan.title}</CardTitle>
                    <CardDescription className="text-center">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-dark-text mb-6">
                      ${plan.price}
                      <span className="text-lg font-normal">/month</span>
                    </p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary-teal mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-primary-teal hover:bg-primary-teal/90 text-white"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent("add-to-cart", {
                            detail: {
                              plan: plan.title,
                              price: plan.price,
                            },
                          }),
                        )
                      }
                    >
                      Select Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-golden-yellow/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-4">
              What Pet Parents Say
            </h2>
            <p className="text-xl text-center text-dark-text/80 mb-12">
              Loved by 50,000+ Pet Parents
            </p>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <footer className="bg-dark-text text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pet Box</h3>
              <p className="mb-4">
                Bringing joy to pets and their humans every month.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white hover:text-primary-teal transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="not-italic">
                <p className="mb-2">1234 Pet Street</p>
                <p className="mb-2">Pawsville, CA 90210</p>
                <p className="mb-2">Email: hello@petbox.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Pet Box. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CartModal />
    </div>
  );
}

function CartButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Shopping cart"
      className="relative"
      onClick={() => window.dispatchEvent(new CustomEvent("toggle-cart"))}
    >
      <ShoppingCart className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 bg-pet-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center cart-count">
        0
      </span>
    </Button>
  );
}

function MobileMenuButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      aria-label="Menu"
      onClick={() => window.dispatchEvent(new CustomEvent("toggle-menu"))}
    >
      <Menu className="h-6 w-6" />
    </Button>
  );
}

const howItWorksSteps = [
  {
    title: "Choose Your Plan",
    description:
      "Select the perfect subscription plan based on your pet's size, age, and preferences.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-teal"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Tell Us About Your Pet",
    description:
      "Share details about your furry friend so we can personalize each box to their needs.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-teal"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Unbox the Joy",
    description:
      "Receive a monthly box of premium goodies tailored specifically for your pet's enjoyment.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-teal"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        ></path>
      </svg>
    ),
  },
];

const boxContents = [
  {
    title: "Premium Dog Food",
    description: "High-quality, nutritious food samples from top brands.",
    icon: (
      <svg
        className="w-8 h-8 text-primary-teal"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Gourmet Treats",
    description: "Delicious, healthy treats your pet will love.",
    icon: (
      <svg
        className="w-8 h-8 text-primary-teal"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        ></path>
      </svg>
    ),
  },
  {
    title: "Interactive Toys",
    description: "Fun, durable toys to keep your pet engaged and active.",
    icon: (
      <svg
        className="w-8 h-8 text-primary-teal"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Grooming Essentials",
    description:
      "Premium grooming products to keep your pet looking their best.",
    icon: (
      <svg
        className="w-8 h-8 text-primary-teal"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        ></path>
      </svg>
    ),
  },
];

const pricingPlans = [
  {
    title: "Puppy Plan",
    description: "Perfect for puppies up to 12 months",
    price: 29.99,
    features: [
      "Age-appropriate toys",
      "Puppy training treats",
      "Teething aids",
      "Puppy-safe grooming products",
      "Monthly training guide",
    ],
  },
  {
    title: "Adult Dog Plan",
    description: "Ideal for dogs 1-7 years old",
    price: 34.99,
    features: [
      "Durable toys for active play",
      "Premium treats variety",
      "Full-size grooming products",
      "Seasonal themed items",
      "Activity suggestions",
    ],
  },
  {
    title: "Senior Dog Plan",
    description: "Tailored for dogs 8+ years",
    price: 32.99,
    features: [
      "Gentle toys for older teeth",
      "Joint-supporting treats",
      "Comfort items",
      "Senior-specific grooming",
      "Health monitoring tips",
    ],
  },
];
