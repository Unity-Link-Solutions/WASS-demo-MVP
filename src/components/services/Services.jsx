import React from "react";
import img from "../../assets/images/services.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import "./services.css";

const Services = () => {
  const services = [
    {
      icon: <i className="fa-solid fa-file-shield"></i>,
      title: "Verified Property Listings",
      description:
        "We ensure every property listed undergoes a rigorous verification process, including document verification, physical inspections, and transparency reports.",
    },
    {
      icon: <i className="fa-solid fa-lock"></i>,
      title: "Secure Transactions",
      description:
        "Our platform includes a secure payment gateway with escrow services, multi-currency support, and instant payment notifications for safe and transparent transactions.",
    },
    {
      icon: <i className="fa-solid fa-vr-cardboard"></i>,
      title: "Virtual Property Tours",
      description:
        "Explore properties remotely with 360-degree virtual tours, narrated highlights, and options for booking in-person visits.",
    },
    {
      icon: <i className="fa-solid fa-gavel"></i>,
      title: "Legal and Insurance Support",
      description:
        "Access integrated legal and insurance services to protect your investment and ensure compliance with Ethiopian property laws.",
    },
    {
      icon: <i className="fa-solid fa-chart-line"></i>,
      title: "Buyer’s Dashboard",
      description:
        "Manage your properties and investments in one place, with tools for tracking rental income, market value, and sales performance.",
    },
    {
      icon: <i className="fa-solid fa-house-user"></i>,
      title: "Property Rental Services",
      description:
        "List your properties for short-term or long-term rentals, manage bookings, and secure payments all in one platform.",
    },
    {
      icon: <i className="fa-solid fa-hands-helping"></i>,
      title: "Crowdfunding for Home Buyers",
      description:
        "Support low-income buyers through crowdfunding campaigns, enabling affordable homeownership opportunities.",
    },
    {
      icon: <i className="fa-solid fa-hand-holding-usd"></i>,
      title: "Home Equity Loan Services",
      description:
        "Leverage your property’s value to secure loans from Zemen Bank, ensuring financial flexibility without selling your home.",
    },
    {
      icon: <i className="fa-solid fa-shield-alt"></i>,
      title: "Escrow & Financial Security",
      description:
        "Zemen Bank acts as a trusted escrow provider, ensuring funds are securely held and released only after transaction conditions are met.",
    },
    {
      icon: <i className="fa-solid fa-users"></i>,
      title: "Investment-Based Real Estate Crowdfunding",
      description:
        "Join real estate investment pools and co-finance large-scale projects with secure fund management through Zemen Bank.",
    },
    {
      icon: <i className="fa-solid fa-truck"></i>,
      title: "Diaspora Purchasing & Shipping Service",
      description:
        "Buy Ethiopian products, raw materials, or personal goods remotely with our verified purchasing and shipping services.",
    },
    {
      icon: <i className="fa-solid fa-wallet"></i>,
      title: "Monthly Family Payment System",
      description:
        "Securely send structured monthly payments for rent, education, healthcare, and essentials to your family in Ethiopia.",
    },
    {
      icon: <i className="fa-solid fa-building"></i>,
      title: "Business Entry Facilitation for Foreign Companies",
      description:
        "Get assistance in finding office spaces, rental properties, and business setup services in Ethiopia.",
    },
  ];

  return (
    <>
      <section className="services mb">
        <Back name="Services" title="Services - All Services" cover={img} />
        <div className="container services-content">
          <div className="grid3">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
