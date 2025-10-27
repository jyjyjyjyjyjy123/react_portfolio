import React from "react";
import profileImg from "../assets/images/ljy.jpg";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <section id="aboutme">
      <h2 className="section-title">About Me</h2>
      <div className="aboutme-container">
        <div className="aboutme-img-container">
          <img src={profileImg} alt="프로필 이미지" className="aboutme-img" />
        </div>

        <div className="aboutme-info-container">
          <p className="aboutme-intro">
            안녕하세요! 개발자 이재용입니다.<br/>
            사용자 경험과 효율적인 시스템 설계를 중요하게 생각하며, 직관적이고 안정적인 서비스를 추구합니다.
          </p>

          <div className="aboutme-cards">
            <div className="info-card">
              <span className="icon">👤</span>
              <span className="info-text">이름: 이재용</span>
            </div>
            <div className="info-card">
              <span className="icon">🎂</span>
              <span className="info-text">생년월일: 1999.10.24</span>
            </div>
            <div className="info-card">
              <span className="icon">📞</span>
              <span className="info-text">연락처: 010-7255-2428</span>
            </div>
            <div className="info-card">
              <span className="icon">📧</span>
              <span className="info-text">이메일: jly72552428@gmail.com</span>
            </div>
            <div className="info-card">
              <span className="icon">🎓</span>
              <span className="info-text">학력: 울산과학대학교 IT응용기술학부 졸업</span>
            </div>
            <div className="info-card">
              <span className="icon">🔗</span>
              <span className="info-text"><a href="https://github.com/jyjyjyjyjyjy123">GitHub</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
