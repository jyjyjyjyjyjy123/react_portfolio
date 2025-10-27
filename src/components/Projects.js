import React, { useState, useEffect } from "react";
import "../css/Projects.css";

import icon_github from "../assets/icons/icon_github.svg";
import icon_hyperlink from "../assets/icons/icon_hyperlink.svg";

import project1_1 from "../assets/images/project1_portfolio1.png";
import project1_2 from "../assets/images/project1_portfolio2.png";
import project1_3 from "../assets/images/project1_portfolio3.png";
import project1_4 from "../assets/images/project1_portfolio4.png";
import project1_5 from "../assets/images/project1_portfolio5.png";
import project1_6 from "../assets/images/project1_portfolio6.png";
import project2_1 from "../assets/images/project2_portfolio1.png";
import project2_2 from "../assets/images/project2_portfolio2.png";
import project2_3 from "../assets/images/project2_portfolio3.png";
import project2_4 from "../assets/images/project2_portfolio4.png";
import project2_5 from "../assets/images/project2_portfolio5.png";
import project2_6 from "../assets/images/project2_portfolio6.png";
import project3_1 from "../assets/images/project2_portfolio1.png";
import project3_2 from "../assets/images/project2_portfolio2.png";
import project3_3 from "../assets/images/project2_portfolio3.png";
import project3_4 from "../assets/images/project2_portfolio4.png";
import project3_5 from "../assets/images/project2_portfolio5.png";
import project3_6 from "../assets/images/project2_portfolio6.png";

const projectsData = [
    {
        id: 1,
        title: "MAPPLE",
        period: "2025.09.29 - 2025.10.27",
        description: "모바일 화면 기준의 맛집 혹은 추천하는 장소를 게시글로 작성하여 다른 사람과 공유하는 커뮤니티 웹사이트",
        details: ["글, 이미지, 장소를 등록하여 게시글 작성을 작성하여 다른사람의 즐겨찾기, 좋아요, 댓글을 통한 커뮤니티하고 원하는 지역의 추천 가게 및 장소를 볼수있는 웹사이트이다.",
                   "작성한 장소와 게시글의 로그를 통계내어 실시간으로 인기많은 장소와 게시글을 추천하며 포인트맵을 통해 원하는 지역의 추천 가게 및 장소와 해당 게시글을 볼수있는 웹사이트이다."],
        features: ["게시글 작성", "게시글 검색 및 페이징 정렬", "내정보 수정", "카카오맵을 통한 위치 표시"],
        tech: ["React", "Spring Boot", "PostgreSQL", "MyBatis", "Render", "kakaoMap API"],
        contribution: ["전체 프로젝트 설계 및 제작"],
        images: [project3_1, project3_2, project3_3, project3_4, project3_5, project3_6],
        git: "https://github.com/jyjyjyjyjyjy123/wara",
        address: "https://wara-ooug.onrender.com",
    },
    {
        id: 2,
        title: "아파! 어디가?",
        period: "2023.12.18 - 2023.12.27",
        description: "증상을 선택하여 병원 검색 및 예약 가능하며 의학 정보 제공하는 플랫폼입니다.",
        details: ["병원과 약국을 검색 및 예약 가능하며 의학 정보 제공을 통해 사용자들이 효율적으로 의료 서비스를 이용할 수 있도록 구축된 플랫폼입니다.",
                   "환자들에게 쉬운 접근성을 제공하여 적절한 병원이나 약국을 찾고 예약할 수 있도록 하여 의료 서비스 이용을 향상시키며 의료 정보 제공을 통해 환자들이 질병 예방에 도움을 주며, 의료 기관과의 효율적인 의사소통을 촉진하기 위함이 목적입니다."],
        features: ["증상을 선택해 병원 조회", "병원 및 약국 예약", "리뷰, 자녀정보 등록 및 수정, 삭제", "병원회원 환자 호출 및 관리, 진료내역 작성", "의학상담 작성(일반회원)및 답변(병원회원)", "의학 테스트"],
        tech: ["Java", "Spring MVC", "Oracle", "jQuery", "MyBatis", "Open API - 카카오 지도 API", "Open API - 우편번호 API"],
        contribution: ["증상을 선택해 병원 조회 기능 설계", "API를 활용한 병원 상세페이지 및 예약", "Spring Security 비밀번호 암호화 및 토큰 사용 설계에 기여", "기획 단계부터 참여하여 프로젝트 설계에 기여"],
        images: [project1_1, project1_2, project1_3, project1_4, project1_5, project1_6],
        git: "https://github.com/jyjyjyjyjyjy123/SY_spring_Project",
    },
    {
        id: 3,
        title: "아틀란 뱅크",
        period: "2024.01.03 - 2024.02.08",
        description: "금융 서비스 제공 및 고객 경험 개선하기 위한 은행 서비스 입니다.",
        details: ["병원과 약국을 검색 및 예약 가능하며 의학 정보 제공을 통해 사용자들이 효율적으로 의료 서비스를 이용할 수 있도록 구축된 플랫폼입니다.",
                   "계좌관리, 금융 상품 및 서비스를 조회하고 신청이 가능하며 은행 조회 및 상세 정보를 볼수 있으며 환율 조회도 가능한 금융 서비스 제공 및 고객 경험 개선을 한 금융 서비스 플랫폼입니다."],
        features: ["계좌 관리 (개설, 조회, 입출금, 이체, 거래내역 조회)", "금융 상품(카드, 대출) 및 서비스 조회 및 신청", "은행 상세정보 및 즐겨찾기", "환율 조회"],
        tech: ["Java", "Spring Boot", "Oracle", "jQuery", "MyBatis"],
        contribution: ["대출 상품 조회, 신청 설계", "대출 계산기 설계", "웹페이지 구조 설계에 기여", "기획 단계부터 참여하여 프로젝트 설계에 기여"],
        images: [project2_1, project2_2, project2_3, project2_4, project2_5, project2_6],
        git: "https://github.com/Isaac-Seungwon/atlan-bank",
    },

];

function Projects() {
    const [selected, setSelected] = useState(null);
    const [currentImg, setCurrentImg] = useState(0);

    const openModal = (project) => {
        setSelected(project);
        setCurrentImg(0);

        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelected(null);
        document.body.style.overflow = '';
    };

    const prevImage = () => {
        if (!selected) return;
        setCurrentImg(
            (prev) => (prev - 1 + selected.images.length) % selected.images.length
        );
    };

    const nextImage = () => {
        if (!selected) return;
        setCurrentImg((prev) => (prev + 1) % selected.images.length);
    };

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEsc = (e) => {
          if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-cards">
            {projectsData.map((p) => (
              <div key={p.id} className="project-card" onClick={() => openModal(p)}>
                <img src={p.images[0]} alt={p.title} className="project-img" />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>

          {selected && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                {/* 프로젝트 제목 & 기간 */}
                <h3>{selected.title}</h3>
                <p className="duration">{selected.period}</p>

                {/* 이미지 슬라이드 */}
                {selected.images.length > 0 && (
                  <div className="image-slider">
                    <button className="prev-btn" onClick={prevImage}>
                      &#10094;
                    </button>
                    <img
                      src={selected.images[currentImg]}
                      alt={`${selected.title} ${currentImg + 1}`}
                    />
                    <button className="next-btn" onClick={nextImage}>
                      &#10095;
                    </button>
                  </div>
                )}

                {/* 상세 설명 */}
                {selected.details && (
                  <div className="description">
                        {selected.details.map((f, i) => (
                          <p>{f}</p>
                        ))}
                  </div>
                )}

                {/* 주요 기능 */}
                {selected.features && (
                  <div className="features">
                    <h4>주요 기능 및 특징</h4>
                    <ul>
                      {selected.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 사용 기술 */}
                {selected.tech && (
                  <div className="technologies">
                    <h4>사용 기술 및 언어</h4>
                    <ul>
                      {selected.tech.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 작업 기여도 */}
                {selected.contribution && (
                  <div className="contribution">
                    <h4>작업 기여도</h4>
                    <ul>
                      {selected.contribution.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 오른쪽 외부 버튼 그룹 */}
              <div className="modal-buttons">
                {/* 닫기 버튼 */}
                <button className="circle-btn close-btn-out" onClick={closeModal}>
                  &times;
                </button>

                {/* 깃허브 버튼 */}
                <a
                  href={selected.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn github-btn"
                    onClick={(e) => e.stopPropagation()} // 모달 클릭 이벤트 전파 막기
                >
                    <img src={icon_github} alt="GitHub" className="github-icon" />
                </a>
                {/* 웹페이지 버튼 */}
                {selected.address && (
                  <a
                    href={selected.address}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="circle-btn address-btn"
                    onClick={(e) => e.stopPropagation()} // 모달 클릭 이벤트 전파 막기
                  >
                    <img src={icon_hyperlink} alt="address" className="address-icon" />
                  </a>
                )}
              </div>
            </div>
          )}
        </section>
      );
}

export default Projects;
