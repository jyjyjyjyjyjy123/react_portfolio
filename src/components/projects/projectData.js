const screenshots = require.context("../../assets/projects", true, /\/[1-6]\.png$/);

function projectImages(project) {
  return screenshots.keys()
    .filter((path) => path.startsWith(`./${project}/`))
    .sort()
    .map((path) => screenshots(path));
}

export const projects = [
  {
    id: 4,
    title: "땅캐라",
    period: "2026년 9월 29일 ~",
    teamSize: 1,
    description: "메이플스토리의 사냥·보스 알림, 제작 수익 계산, 캐릭터 일정 관리를 한곳에 모은 웹사이트",
    role: "개인 프로젝트 · 게임 화면 인식과 음성 알림 구현",
    details: [
      "메이플스토리를 플레이하며 놓치기 쉬운 타이밍을 음성으로 알려주는 웹사이트입니다. 사냥 중에는 설치기와 아이템 회수 타이밍을 알려주고, 보스전에서는 주요 패턴과 스킬 재사용 대기시간을 안내합니다. 제작 계산기로는 채집한 재료를 어떻게 가공해 판매하면 이득인지 비교할 수 있습니다.",
      "스케줄러에서 여러 캐릭터의 퀘스트 진행 상황과 보스 수익을 관리할 수 있습니다. 화면 하단에 소환한 캐릭터는 메이플스토리 맵을 돌아다니며 음성 알림에 맞춰 대사를 보여줍니다.",
    ],
    features: [
      "사냥 도우미 · 공유된 게임 화면에서 룬, 버프의 남은 시간, 설치기 상태를 인식해 필요한 시점에 음성으로 알립니다.",
      "보스 도우미 · 스킬 재사용 대기시간과 칼로스·카링의 주요 패턴을 추적합니다. 사냥과 보스전 상태는 PiP 미니 창에서도 확인할 수 있습니다.",
      "제작 계산기 · 재료 시세, 보유 수량, 성공률, 수수료를 반영해 제작 수익을 비교합니다.",
      "캐릭터 스케줄러 · 여러 캐릭터의 콘텐츠 진행 상황을 한눈에 확인하고 보스 수익을 합산합니다.",
      "하단 캐릭터 · 내 캐릭터가 맵의 발판을 따라 걷거나 점프합니다. 마우스 오른쪽 버튼으로 클릭하면 앉기 등 자세를 바꿀 수 있습니다.",
    ],
    tech: [
      "HTML", "CSS (Tailwind CSS)", "Vanilla JavaScript", "Screen Capture API",
      "Canvas 2D", "Web Workers", "Template Matching", "Speech Synthesis API",
      "Document Picture-in-Picture API", "Graph-based Pathfinding",
      "requestAnimationFrame()", "Node.js (node:test)", "ChatGPT (챗지피티)",
    ],
    images: projectImages("ttangkae"),
    git: "https://github.com/geniusljy7255-coder/maple_gather_ver2",
    address: "https://geniusljy7255-coder.github.io/maple_gather_ver2/",
  },
  {
    id: 1,
    title: "MAPPLE",
    teamSize: 1,
    period: "2025.09.29 ~ 2025.10.27",
    description: "맛집과 추천 장소를 게시글로 공유하는 모바일 중심 커뮤니티",
    role: "개인 프로젝트 · 게시글과 지도 기반 장소 추천 구현",
    details: [
      "글과 이미지, 장소를 등록해 게시글을 작성하고, 즐겨찾기·좋아요·댓글로 다른 사용자와 소통할 수 있습니다.",
      "장소 및 게시글 이용 기록을 집계해 인기 장소와 게시글을 실시간으로 추천합니다. 포인트맵에서 원하는 지역의 추천 장소와 관련 게시글을 함께 확인할 수 있습니다.",
    ],
    features: ["게시글 작성", "게시글 검색·정렬 및 페이지 이동", "내 정보 수정", "카카오맵에 장소 표시"],
    tech: ["React", "Spring Boot", "PostgreSQL", "MyBatis", "Render", "카카오 지도 API"],
    images: projectImages("mapple"),
    git: "https://github.com/jyjyjyjyjyjy123/wara",
    address: "https://wara-ooug.onrender.com",
  },
  {
    id: 2,
    title: "아파! 어디가?",
    teamSize: 6,
    period: "2023.12.18 ~ 2023.12.27",
    description: "증상에 맞는 병원을 찾고 예약할 수 있는 의료 정보 플랫폼",
    role: "팀 프로젝트 · 병원 상세 페이지와 예약 기능 개발",
    details: [
      "증상에 맞는 병원을 찾고 병원과 약국을 검색하거나 예약할 수 있습니다. 의학 정보와 테스트를 제공하며, 일반 회원이 남긴 상담 글에 병원 회원이 답변할 수 있습니다.",
      "병원 회원은 환자를 호출하고 진료 내역을 작성하는 등 환자 관리를 할 수 있습니다.",
    ],
    features: [
      "증상별 병원 조회", "병원 및 약국 예약", "리뷰와 자녀 정보 등록·수정·삭제",
      "환자 호출·관리 및 진료 내역 작성(병원 회원)",
      "의학 상담 글 작성(일반 회원) 및 답변(병원 회원)", "의학 테스트",
    ],
    tech: ["Java", "Spring MVC", "Oracle", "jQuery", "MyBatis", "카카오 지도 API", "우편번호 API"],
    contribution: [
      "증상별 병원 조회 기능 설계", "API를 활용한 병원 상세 페이지 및 예약 기능 개발",
      "Spring Security를 활용한 비밀번호 암호화 및 토큰 사용 설계에 참여",
      "기획과 프로젝트 설계에 참여",
    ],
    images: projectImages("hospital"),
    git: "https://github.com/jyjyjyjyjyjy123/SY_spring_Project",
  },
  {
    id: 3,
    title: "아틀란 뱅크",
    teamSize: 6,
    period: "2024.01.03 ~ 2024.02.08",
    description: "계좌를 관리하고 카드·대출 상품을 조회하거나 신청할 수 있는 온라인 뱅킹 서비스",
    role: "팀 프로젝트 · 대출 조회·신청과 대출 계산기 설계",
    portraitCover: true,
    details: [
      "계좌를 개설하고 입출금·이체를 처리하거나 거래 내역을 확인할 수 있습니다. 카드와 대출 상품을 조회하고 신청할 수 있으며, 은행 상세 정보와 환율도 확인할 수 있습니다.",
    ],
    features: ["계좌 개설·조회, 입출금, 이체 및 거래 내역 조회", "카드·대출 등 금융 상품 및 서비스 조회·신청", "은행 상세 정보 조회 및 즐겨찾기", "환율 조회"],
    tech: ["Java", "Spring Boot", "Oracle", "jQuery", "MyBatis"],
    contribution: ["대출 상품 조회 및 신청 기능 설계", "대출 계산기 설계", "웹페이지 구조 및 프로젝트 기획·설계에 참여"],
    images: projectImages("atlan-bank"),
    git: "https://github.com/Isaac-Seungwon/atlan-bank",
  },
];
