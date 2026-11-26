import React from "react";
import profileImg from "../assets/images/ljy.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="section-shell">
        <h2 className="section-title">About Me</h2>
        <div className="aboutme-container">
          <div className="aboutme-img-container">
            <img src={profileImg} alt="프로필 이미지" className="aboutme-img" />
          </div>

          <div className="aboutme-info-container">
            <p className="aboutme-intro">
              안녕하세요, 개발자 이재용입니다.<br />
              누구나 편하게 사용할 수 있는 화면과 기능을 설계하고, 안정적인 서비스를 만들어 사용자의 신뢰를 높이기 위해 노력하겠습니다.
            </p>

            <dl className="profile-details">
              <div><dt>이름</dt><dd>이재용</dd></div>
              <div><dt>생년월일</dt><dd>1999. 10. 24.</dd></div>
              <div><dt>연락처</dt><dd>010-7255-2428</dd></div>
              <div><dt>이메일</dt><dd>jly72552428@gmail.com</dd></div>
              <div><dt>학력</dt><dd>울산과학대학교 IT응용기술학부 졸업</dd></div>
              <div>
                <dt>GitHub</dt>
                <dd className="profile-links">
                  <a href="https://github.com/geniusljy7255-coder">geniusljy7255-coder</a>
                  <a href="https://github.com/jyjyjyjyjyjy123">jyjyjyjyjyjy123</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <section className="internship" aria-labelledby="internship-title">
          <h3 id="internship-title">인턴 경험</h3>
          <div className="internship-card">
            <div className="internship-heading">
              <div>
                <h4>(주)천재교육</h4>
                <p>T셀파사업본부 디지털사업팀</p>
              </div>
              <p className="internship-period">2026. 03. ~ 2026. 06.</p>
            </div>
            <p>고용노동부 미래내일일경험 프로그램(인턴형 IT 직무)에 참여해 에듀테크 서비스의 프론트엔드 개발과 콘텐츠 운영을 지원했습니다.</p>
            <ul>
              <li>온도·밝기·소리·초음파 등 과학 센서 14종의 데이터를 시각화하는 SVG를 제작해 웹 대시보드 템플릿에 적용했습니다.</li>
              <li>다양한 기기와 웹 접근성을 고려한 교육용 웹 시뮬레이션 템플릿 프로토타입 4종을 제작했습니다.</li>
              <li>실무자가 생성형 AI를 활용해 신규 콘텐츠를 만들거나 기존 코드를 최신화할 수 있도록 업무에 맞는 프롬프트를 설계했습니다.</li>
            </ul>
            <h5>유지보수 개선</h5>
            <p>교사분들이 원하는 교육용 웹 시뮬레이션을 바이브 코딩으로 직접 쉽게 수정할 수 있도록, 템플릿 4종을 각각 단일 HTML 파일로 제작했습니다. 이 구조에서는 AI에 일부 기능만 수정하도록 요청해도 유지해야 할 다른 기능까지 바뀌는 문제가 있었습니다. 수정할 수 있는 부분만 한 파일에 남겨 두고, 나머지 코드는 기능별로 JavaScript 모듈을 분리해 컴포넌트를 정리했습니다.</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutMe;
