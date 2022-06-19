import React, { useState } from "react";
import githubSvg from "../images/contact/github.svg";
import insSvg from "../images/contact/instagram.svg";
import emailSvg from "../images/contact/email.svg";
import avatarSvg from "../images/contact/avatar.svg";
import { Modal } from "./components/Modal/Modal";
import PartTitle from "./components/PartTitle/PartTitle";
const About = () => {
  // 一些纯样式
  // 空白
  const Blank = () => {
    return <br className="blank" />;
  };

  // part下的内容
  type TextProps = {
    title?: string;
    spicial?: string;
    texts: string[];
  };
  const ContentText = ({ title, texts, spicial }: TextProps) => {
    return (
      <div className="col text">
        <p className="title">
          {title} <span>{spicial}</span>
        </p>
        <Blank />
        {texts.map((str: string) => {
          return <p className="text-line">{str}</p>;
        })}
      </div>
    );
  };
  // part里的文本
  const InfoAboutMe1: string[] = [
    "I used to be a UI designer and wanted to change careers as a programmer. This site places my personal work and experimental projects",
    "Services I can provide: brand logo design, banner production, advanced slide design, Internet competitor survey reports. ",
    "I am full of enthusiasm and curiosity. ",
  ];
  const InfoAboutMe2: string[] = [
    "Born in 1994 / Bachelor degree / Computer Science and Technology",
    "Working experience: 4 years",
    "Desired Position: Junior Web Front-End Engineer",
    "Desired city: Remote or a city that can offer a suitable offer in the world.",
  ];
  const InfoAboutMe3: string[] = [
    "UI：Figma > Adobe XD > Sketch",
    "Vector Graph：Affinity Designer > Vecornator ",
    "Bitmap Edit: Affinity Photo > Adobe PhotoShop",
  ];
  const InfoAboutMe4: string[] = [
    "",
    "Vector Graph：Affinity Designer > Vecornator ",
    "Bitmap Edit: Affinity Photo > Adobe PhotoShop",
  ];
  // 头像部分
  const Avatar = () => {
    return (
      <div className="avatar">
        <img
          src={avatarSvg}
          alt="hello it's me , libregd"
          className="profilo"
        />
      </div>
    );
  };
  // 联系卡片
  type CardProps = {
    title: string;
    src: any;
    href?: string;
    isModal?: Boolean;
  };
  const Card = ({ title, src, href, isModal }: CardProps) => {
    if (isModal === false) {
      return (
        <div className="contact-card">
          <img src={src} alt="s" />
          <p className="title">
            <a href={href} target="_blank" rel="noreferrer">
              {title}
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div className="contact-card">
          <img src={src} alt="s" />
          <p className="title">
            <a href={href} target="_blank" rel="noreferrer">
              {title}
            </a>
          </p>
        </div>
      );
    }
  };
  // 使用modal
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <main className="container">
      <Avatar />

      <div className="part">
        <Blank />
        <ContentText texts={InfoAboutMe1} title="Hi there," spicial="Libregd" />
      </div>
      <div className="part">
        <PartTitle title="Contact Me" />

        <div className="rows-3">
          <button className="contact-card" onClick={toggleModal}>
            <img className="modal-img" src={emailSvg} alt="s" />
            <p className="title">Email</p>
          </button>
          <Modal title={"Email"} isOpen={isModalOpen} onClose={toggleModal}>
            libregd@outlook.com
          </Modal>
          <Card
            title="Instagram"
            src={insSvg}
            href="https://www.instagram.com/libregd/"
          />
          <Card
            title="GitHub"
            src={githubSvg}
            href="https://github.com/libregd"
          />
        </div>
      </div>
      <div className="part">
      <PartTitle title="About me" />
      <ContentText texts={InfoAboutMe2} />
      </div>
      <div className="part">
      <PartTitle title="Design Softwave Preference " />
      <ContentText texts={InfoAboutMe3} />
      </div>
      <div className="part">
      <PartTitle title="Project Experience" />
      <ContentText texts={InfoAboutMe4} />
      </div>
    </main>
  );
};

export default About;
