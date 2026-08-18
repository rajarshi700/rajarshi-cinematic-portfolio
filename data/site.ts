export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  stack: string[];
  image: string;
  demoVideo: string;
  liveUrl: string;
  codeUrl: string;
};

export const site = {
  name: "Rajarshi",
  role: "Full Stack Developer",
  heroTitle: "Thoughtful Products, Built Around Real Problems.",
  heroText:
    "I enjoy understanding difficult problems, finding the clearest path forward and bringing thoughtful ideas to life.",
  location: "India",
  availability: "Open to opportunities",
  email: "rajarshiroydgp1@gmail.com",
  phone: "+91 7008948510",
  github: "https://github.com/rajarshi700",
  linkedin: "https://www.linkedin.com/in/rajarshiroysde1",
};

export const otherProjects = [
  {
    eyebrow: "GOLANG • FULL STACK",
    title: "MagicStream",
    description:
      "AI-enabled movie streaming platform with secure JWT authentication, personalized recommendations, and OpenAI-powered review ranking.",
    stack: ["Golang", "React", "MongoDB", "LangChainGo"],
    liveUrl: "",
    codeUrl: "https://github.com/rajarshi700/MagicStream-main",
  },
  {
    eyebrow: "Spring Boot/Java ·  Full Stack",
    title: "Cartify",
    description:
      "Built a full-stack Spring Boot e-commerce platform with secure authentication, product management, cart, checkout, order tracking, and email notifications.",
    stack: ["Spring Boot", "MySQL", "Java", "Spring Security"],
    liveUrl: "",
    codeUrl: "https://github.com/rajarshi700/shopping-cart-spring-boot-main/tree/main",
  },
  {
    eyebrow: "Django/Python ·  Full Stack",
    title: "BlogNest",
    description:
      "A Django-based blogging and content management system with authentication, blog/category management, search, comments, image uploads, and an admin dashboard.",
    stack: ["Django", "Python", "Django ORM", "SQLite"],
    liveUrl: "",
    codeUrl: "https://github.com/rajarshi700/BlogNest",
  },
    
];

export const projects: Project[] = [
  {
    title: "VisionAI | Multi-Agent GenAI Platform",
    eyebrow: "",
    description:
      "Built and deployed a production-grade multi-agent GenAI platform using LangChain, LangGraph, RAG, React/Node.js, Docker, GitHub Actions, and AWS ECS/ECR/S3/CloudFront, with specialized AI agents, memory, authentication, billing, and rate limiting.",
    impact: "",
    stack: [],
    image: "/projects/Agentic AI Platform.svg",
    demoVideo: "demos/visonai.mp4",
    liveUrl: "https://visionai-frontend-hvi0.onrender.com",
    codeUrl: "https://github.com/rajarshi700/visionai",
  },
  {
    title: "AI HireBooster | Generative AI Mock Interview Platform",
    eyebrow: "",
    description:
      "Built and deployed AI HireBooster, a full-stack AI mock interview platform with resume analysis, AI-generated interviews, voice support, answer evaluation, analytics, PDF reports, authentication, and payments using React, Node.js, MongoDB, GPT-4o-mini, Firebase, and Razorpay.",
    impact: "",
    stack: [],
    image: "/projects/AiHirebooszter.svg",
    demoVideo: "/demos/AI hire booster.mp4",
    liveUrl: "https://ai-hire-booster.onrender.com",
    codeUrl: "https://github.com/rajarshi700/ai-hire-booster",
  },
  {
    title: "PageChat | RAG | LLMs | Chrome Extension",
    eyebrow: "",
    description:
      "Built and deployed PageChat, a Chrome Extension + FastAPI AI app for chatting with webpages using RAG, Gemini, GPT-4o Mini, DeepSeek, web-search fallback, per-tab memory, rate limiting, and a lightweight retrieval pipeline optimized for Render’s free tier.",
    impact: "",
    stack: [],
    image: "/projects/PageChat.svg",
    demoVideo: "/demos/Page Chat.mp4",
    liveUrl: "https://github.com/rajarshi700/pagechat/releases/tag/v1.0.0",
    codeUrl: "https://github.com/rajarshi700/pagechat",
  },
];

export const experience = [
  {
    period: "Present",
    role: "Software Engineer",
    company: "XORIANT",
    points: [
      "NICE Assist: Developed a full-stack agentic AI interaction intelligence platform using Node.js, Express.js, React, Next.js, TypeScript, PostgreSQL, Redis, AWS SQS, AWS Bedrock, LangChain, LangGraph, RAG, embeddings, and OpenSearch. Designed LangGraph-based AI agents for transcript summarization, response generation, escalation detection, recommendations, and RAG-powered semantic retrieval, reducing manual interaction-review effort by 35%",
      "NICE Guardrails: Engineered a Java Apache Flink DataStream pipeline on AWS Kinesis Data Analytics for distributed async rate-limiting using Kinesis Streams, DynamoDB, Redis, SQS, Lambda and CloudWatch observability, supporting 1M TPS scale API traffic validated using AWS ECS based load testing with sliding-window aggregation and 8s peak load latency with GitHub Actions for automated build and deployment.",
      "Great Southern Bank - PayAuth Engine: Built core Golang & Java/ SpringBoot components for a card authorization gateway, including ISO8583-style parsing, JSON normalization, Redis backed validation, processor routing, and Kafka audit logging; reduced unnecessary downstream processor calls by 20% via gateway-level pre-validation.",
      "Great Southern Bank - Finex: Developed C++, Python, and SQL components for financial-risk platforms covering historical market replay, scenario/sensitivity analytics, validation, testing, and production support across pricing, FX, interest-rate, spread, and volatility data. Used GitHub Copilot and Claude Code for debugging, refactoring, unit testing, root-cause analysis, and documentation, with manual validation of AI-generated code before production use."
    ],
  },
  {
    period: "Earlier",
    role: "Software Developer",
    company: "EDFORA",
    points: [
      "Student Video Analytics Service: Engineered a scalable full-stack video analytics system for 500,000+ videos, using Golang, Java/Spring Boot microservices with MongoDB, Kafka, Redis, Docker, Kubernetes, and cron jobs, and a React dashboard for daily, weekly, and monthly watch statistics. Configured Jenkins CI/CD pipelines for automated deployment workflows and optimized caching/query patterns to improve API response time by 80%.",
      "AI Plagiarism Guard: Implemented an end-to-end AI-enabled plagiarism detection platform for 2M+ questions using React, FastAPI/Python, SQS, LangChain, sentence-transformers, and FAISS. Detected semantic duplicates via cosine similarity, reducing duplicate/plagiarized questions by 95%. Handled legacy batch vectorization from MongoDB using , OCR, and LaTeX extraction.",
      "GRP: Designed and implemented a student registration platform using Java, SpringBoot, Spring Security, PostgreSQL, React, and LLM APIs. Integrated secure RESTful APIs and microservices with OAuth2 login, JWT authentication and Orchestrated an AI-powered chatbot for student course-related queries, automating student support and reducing manual administrative effort by 35%.",
      "CMS Library Page: Redesigned the CMS library page as a responsive, WCAG-aligned React interface using Redux Toolkit, Bootstrap, HTML5, CSS3, reusable components, and a content-bucketing system. Migrated legacy jQuery interactions to modern React patterns, applied OWASP-aligned front-end security practices, and added Jest and React Testing Library coverage. Improved Lighthouse-measured LCP and overall load time by 40% through lazy loading, code splitting, and on-demand data fetching.",
      "Designed and deployed a multi-branch real-time employee attendance system using ASP.Net Core, C#, EF Core, and PostgreSQL, Raspberry Pi for RFID-based check-ins. Leveraged AWS SQS for scalable, asynchronous data handling and implemented SignalR for live HR dashboards with role-based access and multi-tenant architecture."
    ],
  },
];

export const education = [
  {
    degree: "M.Tech",
    school: "IIT KHARAGPUR",
    period: "2023",
    detail: "Materials Science & Engineering - CGPA: 8.73",
  },
  {
    degree: "5 Year Integrated M.Sc.Tech",
    school: "CIPET-IPT BHUBANESWAR",
    period: "2020",
    detail: "Materials Science & Engineering - Percentage: 76.4",
  },
  {
    degree: "12th",
    school: "KENDRIYA VIDYALAYA (KV) CMERI DURGAPUR",
    period: "2015",
    detail: "Science - Percentage: 78.6",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Golang",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "C++",
      "Rust",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Jest",
      "React Testing Library",
    ],
  },
    {
    title: "Backend & Frameworks",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "FastAPI",
      "NestJS",
      "Flask",
      "Django",
    ],
  },
{
  title: "AI Engineering",
  skills: [
    "RAG",
    "Agentic AI",
    "Multi-Agent Systems",
    "LangChain",
    "LangGraph",
    "Llama",
    "LangSmith",
    "Sentence Transformers",
    "FAISS",
    "Embeddings",
    "Semantic Search",
    "OCR",
  ],
},
{
    title: "Databases & Search",
    skills: [
      "PostgreSQL",
      "MySQL",
      "pgvector",
      "Pinecone",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "Elasticsearch",
    ],
  },
    {
    title: "Cloud, Streaming & DevOps",
    skills: [
      "AWS",
      "Amazon Kinesis",
      "Amazon SQS",
      "AWS EC2",
      "AWS Lambda",
      "AWS ECS",
      "Apache Kafka",
      "Apache Flink",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Git",
      "Jira",
      "CI/CD",
    ],
  },
  {
    title: "Observability & Security",
    skills: [
      "Prometheus",
      "ELK Stack",
      "CloudWatch",
      "OAuth 2.0",
      "JWT",
      "OWASP",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Stream Processing",
      "REST APIs",
    ],
  },
  {
    title: "Systems & Engineering Fundamentals",
    skills: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Goroutines",
      "Go Channels",
      "Multithreading",
      "Scalability",
      "Performance Optimization",
    ],
  },
];
