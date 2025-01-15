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
              title="WASS - Integrated Real Estate Platform"
              subtitle="Empowering home buyers with secure and transparent real estate transactions in Ethiopia."
            />

            <p>
              WASS is an integrated real estate platform designed to meet the
              unique needs of buyers, developers, and property owners investing
              in Ethiopian real estate. Our mission is to provide a secure,
              transparent, and trustworthy environment for purchasing, managing,
              and investing in real estate in Ethiopia. We aim to solve the
              common challenges faced by the market, such as material shortages,
              high costs, complex regulations, and the risk of fraud.
            </p>

            <h3>Core Features</h3>

            <h4>Verified Property Listings</h4>
            <p>
              Every property listed on WASS undergoes a rigorous verification
              process, ensuring that ownership documents are valid, physical
              conditions are inspected, and all legal requirements are met.
            </p>

            <h4>Secure Transactions</h4>
            <p>
              WASS includes a secure payment gateway that facilitates all
              financial transactions between buyers and sellers. With escrow
              services and multi-currency support, international buyers can
              invest confidently.
            </p>

            <h4>Virtual Property Tours</h4>
            <p>
              Explore properties remotely with 360-degree virtual tours,
              narrated highlights, and booking options for in-person visits,
              ensuring convenience for international and local buyers.
            </p>

            <h4>Legal and Insurance Support</h4>
            <p>
              WASS integrates legal and insurance services, providing buyers
              access to expert advisors, compliance checks, and property
              insurance directly through the platform.
            </p>

            <button className="btn2">Learn More</button>
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
