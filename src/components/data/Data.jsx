import h1Image from "../../assets/images/hero/h1.png";
import h2Image from "../../assets/images/hero/h2.png";
import h3Image from "../../assets/images/hero/h3.png";
import h4Image from "../../assets/images/hero/h4.png";
import h6Image from "../../assets/images/hero/h6.png";

import p1Image from "../../assets/images/list/p-1.png";
import p2Image from "../../assets/images/list/p-2.png";
import p3Image from "../../assets/images/list/p-7.png";
import p4Image from "../../assets/images/list/p-4.png";
import p5Image from "../../assets/images/list/p-5.png";
import p6Image from "../../assets/images/list/p-6.png";

import city1Image from "../../assets/images/location/city-1.png";
import city2Image from "../../assets/images/location/city-2.png";
import city3Image from "../../assets/images/location/city-3.png";
import city4Image from "../../assets/images/location/city-4.png";
import city5Image from "../../assets/images/location/city-5.png";
import city6Image from "../../assets/images/location/city-6.png";

import team1Image from "../../assets/images/customer/team-1.jpg";
import team2Image from "../../assets/images/customer/team-2.jpg";
import team3Image from "../../assets/images/customer/team-3.jpg";
import team4Image from "../../assets/images/customer/team-4.jpg";
import team5Image from "../../assets/images/customer/team-5.jpg";
import team6Image from "../../assets/images/customer/team-6.jpg";

export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
];

export const featured = [
  {
    cover: h1Image,
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: h2Image,
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: h3Image,
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: h4Image,
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: h6Image,
    name: "Villa & Condo",
    total: "80 Property",
  },
];

export const list = [
  {
    id: 1,
    cover: p1Image,
    name: "Red Carpet Real Estate",
    location: "Bole, Addis Ababa",
    category: "For Rent",
    price: "ETB 200,000",
    type: "Apartment",
  },
  {
    id: 2,
    cover: p2Image,
    name: "Fairmount Properties",
    location: "Kazanchis, Addis Ababa",
    category: "For Sale",
    price: "ETB 520,000",
    type: "Condos",
  },
  {
    id: 3,
    cover: p3Image,
    name: "The Real Estate Corner",
    location: "Old Airport, Addis Ababa",
    category: "For Rent",
    price: "ETB 310,000",
    type: "Offices",
  },
  {
    id: 4,
    cover: p4Image,
    name: "Herringbone Realty",
    location: "Sar Bet, Addis Ababa",
    category: "For Sale",
    price: "ETB 400,000",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: p5Image,
    name: "Brick Lane Realty",
    location: "Ayat, Addis Ababa",
    category: "For Rent",
    price: "ETB 260,000",
    type: "Commercial",
  },
  {
    id: 6,
    cover: p6Image,
    name: "Banyon Tree Realty",
    location: "Gerji, Addis Ababa",
    category: "For Sale",
    price: "ETB 150,000",
    type: "Apartment",
  },
];

export const location = [
  {
    id: 1,
    name: "Bole, Addis Ababa",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city1Image,
  },
  {
    id: 2,
    name: "Kirkos, Addis Ababa",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city2Image,
  },
  {
    id: 3,
    name: "Arada, Addis Ababa",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city3Image,
  },
  {
    id: 4,
    name: "Yeka, Addis Ababa",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city4Image,
  },
  {
    id: 5,
    name: "Lideta, Addis Ababa",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city5Image,
  },
  {
    id: 6,
    name: "Nifas Silk-Lafto, Addis Ababa",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city6Image,
  },
];

export const team = [
  {
    list: "50",
    cover: team1Image,
    address: "Bole, Addis Ababa",
    name: "Yerer Homes",
  },
  {
    list: "70",
    cover: team2Image,
    address: "Kazanchis, Addis Ababa",
    name: "Sunshine Real Estate",
  },
  {
    list: "80",
    cover: team3Image,
    address: "Old Airport, Addis Ababa",
    name: "Flintstone Homes",
  },
  {
    list: "51",
    cover: team4Image,
    address: "Gerji, Addis Ababa",
    name: "Gift Real Estate",
  },
  {
    list: "42",
    cover: team5Image,
    address: "Sar Bet, Addis Ababa",
    name: "Noah Real Estate",
  },
  {
    list: "38",
    cover: team6Image,
    address: "Ayat, Addis Ababa",
    name: "Ayat Real Estate",
  },
];

export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "5GB Cloud Storage",
      },
      {
        change: "color",
        icon: <i className="fa-solid fa-x"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i className="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i className="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 users, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
];

export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];

// Example for 'awards'
export const awards = [
  {
    icon: <i className="fa-solid fa-trophy"></i>,
    num: "32 M",
    name: "Blue Burmin Award",
  },
  {
    icon: <i className="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i className="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i className="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];
