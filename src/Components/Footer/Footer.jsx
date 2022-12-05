import React from "react";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      name: "linkedIn",
      icon: <i class="bi bi-linkedin"></i>,
      link: "https://www.linkedin.com/",
    },
    {
      id: 2,
      name: "Instagram",
      icon: <i class="bi bi-instagram"></i>,
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      name: "Facebook",
      icon: <i class="bi bi-facebook"></i>,
      link: "https://www.facebook.com/",
    },
  ];
  return (
    <div>
      <footer className="text-black py-4 bg-white">
        <div className="container">
          <div>{socialMedia.map(({ id, name, icon, link }) => {
            <div key={id}>

            </div>
          })}</div>
          <div className="text-start">
            © Copyrigth, 2022. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
