import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../../assets/immio.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="WASS -  is an integrated Smart Mortgage, Property Management &
              real estate platform"
              subtitle="Empowering home buyers with secure, transparent, and innovative real estate solutions in Ethiopia."
            />

            <p>
              WASS is an integrated Smart Mortgage, Property Management System &
              real estate platform designed to meet the unique needs of buyers,
              developers, and property owners investing in Ethiopian real
              estate. In partnership with Zemen Bank, WASS provides secure,
              transparent, and fully digital property acquisition and management
              services tailored for both local and diaspora communities. Our
              mission is to simplify real estate transactions, ensuring trust,
              compliance, and financial security for all stakeholders.
            </p>

            <h3>Core Features</h3>

            <h4>✅ Verified Property Listings</h4>
            <p>
              Every property listed on WASS undergoes a rigorous verification
              process, ensuring that ownership documents are valid, physical
              conditions are inspected, and all legal requirements are met.
            </p>

            <h4>✅ Secure Transactions with Escrow</h4>
            <p>
              WASS includes a secure payment gateway with escrow services
              provided by Zemen Bank. This ensures funds are safely held until
              all transaction conditions are met, reducing fraud risks.
            </p>

            <h4>✅ Virtual Property Tours</h4>
            <p>
              Explore properties remotely through immersive 360-degree virtual
              tours, complete with narrated highlights and in-person viewing
              options for buyers.
            </p>

            <h4>✅ Legal and Insurance Support</h4>
            <p>
              WASS integrates legal consultation and property insurance
              services, providing buyers with expert advice and compliance
              checks for secure transactions.
            </p>

            <h4>✅ Home Equity Loan Services</h4>
            <p>
              Property owners can leverage their real estate assets as
              collateral to secure loans from Zemen Bank, offering financial
              flexibility without selling their property.
            </p>

            <h4>✅ Real Estate Crowdfunding</h4>
            <p>
              Invest in large-scale real estate projects through crowdfunding
              models, allowing both diaspora and local investors to participate
              in high-value developments.
            </p>

            <h4>✅ Post-Purchase Property Management</h4>
            <p>
              Manage your property after purchase with rental services, resale
              options, and access to property financing for continuous growth of
              your investment portfolio.
            </p>

            <h4>✅ Diaspora Financial Solutions</h4>
            <p>
              WASS offers tailored services for the Ethiopian diaspora,
              including purchasing assistance, monthly family payment systems,
              and investment facilitation.
            </p>

            <button className="btn2">Discover More Features</button>
          </div>

          <div className="right row">
            <img src={img} alt="About WASS" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
