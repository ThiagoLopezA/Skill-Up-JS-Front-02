import React from "react";

const Footer = () => {
  const socialMedia = [
    {
      name: "linkedIn",
      icon: <i className="bi bi-linkedin"></i>,
      link: "https://www.linkedin.com/",
    },
    {
      name: "Instagram",
      icon: <i className="bi bi-instagram"></i>,
      link: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: <i className="bi bi-facebook"></i>,
      link: "https://www.facebook.com/",
    },
  ];
  return (
    <div>
      <footer className="text-black py-4 bg-white">
        <div className="container align-items-center">
          <nav className="row">
            <div className="text-start col">
              <p className="fs-6"> © Copyright, 2022. All rights reserved</p>
            </div>
            <ul className="col list-unstyled d-flex justify-content-end">
              {socialMedia.map((data) => {
                return (
                  <li key={data.name} className="px-4">
                    <a href={data.link} target="_blank" className="text-reset">
                      {data.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
