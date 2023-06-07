import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { TbArrowTopCircle } from 'react-icons/tb'
import "./footer.css";

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footerCont">
      <button onClick = {handleScrollToTop} className="newBtn"><TbArrowTopCircle/></button>
      <div>
        <h2>Contact</h2>
        <h5>WhatsApp|Viber</h5>
        <h6>+37493977067</h6>
        <h5>Email</h5>
        <h6>HairRemovalSA@gmail.com</h6>
      </div>
      <div>
        <h2>Become Our Friend</h2>
        <BsInstagram className="icon-instagram" />
        <BsFacebook className="icon-facebook" />
      </div>
      <div className="companyDiv">
        <h2>SA Company</h2>
        <h6>
          With a legacy dating back to <strong>2010</strong>, our company has been passionately
          crafting exquisite, tailor-made devices for the worldwide market of
          permanent hair removal. Embracing the artistry of innovation, we've
          pioneered the industry, delivering remarkable solutions that transcend
          expectations.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
