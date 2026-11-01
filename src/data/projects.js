export const projects = [
  {
    title: "NoviStudio – SAP-Integrated AP Automation Platform",
    description: "Technical lead for a 3-engineer team building an SAP-integrated accounts-payable automation platform at Novigo Solutions. Led the re-architecture from PostgreSQL to Snowflake as the single system of record, engineering 21 governed LLM agents on Snowflake Cortex behind a unified guardrail kernel with PII tokenisation, budget controls, and audit trails.",
    image: "/images/logos/uipath_logo.png",
    link: "https://www.linkedin.com/posts/novigo-solutions-pvt-ltd-_invoicetopay-accountspayable-decisionintelligence-activity-7516440692374704130-CDab?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRPTq0B5P7D439NgvJSrKRF_rZIxFK_ocU",
    tags: ["UiPath", "Snowflake", "FastAPI", "GCP", "SAP Integration", "Enterprise"],
    icon: "🏢",
    label: "Novigo Solutions"
  },
  {
    title: "VIM on UiPath Maestro – Agentic AP Invoice Processing Platform",
    description: "Built an end-to-end AP invoice platform on UiPath Maestro (email intake + 7-stage case, per-invoice parallel subflows), cutting robot time per invoice from ~10h 51m to ~7 min (~99%). Engineered GenAI email classification with a code validator and self-correcting retry, and integrated IXP extraction with Action Center Validation Station, 2 UiPath agents, a React/TypeScript Coded Action App, and an SAP posting robot.",
    image: "/images/logos/uipath_logo.png",
    link: null,
    tags: ["UiPath Maestro", "GenAI", "IXP", "Action Center", "SAP Integration"],
    icon: "🧾",
    label: "Novigo Solutions"
  },
  {
    title: "Self-Service BI Platform – AP/DPO Analytics",
    description: "Built a conversational AP/DPO analytics platform using Python, FastAPI, React, PostgreSQL, and Qdrant, powered by a 7-agent LangGraph pipeline covering classification, SQL execution, decomposition, root-cause analysis, and synthesis. Implemented an L0–L4 DPO decomposition engine with 15+ root-cause detectors and a React SSE interface with animated decomposition trees.",
    image: "/images/logos/uipath_logo.png",
    link: null,
    tags: ["LangGraph", "FastAPI", "React", "PostgreSQL", "Qdrant"],
    icon: "📊",
    label: "Novigo Solutions"
  },
  {
    title: "Enterprise RPA & Agentic Automation CoE",
    description: "Leading the Agentic Automation Center of Excellence at Novigo Solutions. Delivered end-to-end UiPath RPA automations reducing 50+ manual hours to minutes, alongside POCs across UiPath Agents, Maestro, Test Cloud, and Computer Vision that drove real client adoption.",
    image: "/images/logos/uipath_logo.png",
    link: null,
    tags: ["UiPath Agents", "UiPath Maestro", "RPA", "Enterprise", "Center of Excellence"],
    icon: "⚙️",
    label: "Novigo Solutions"
  },
  {
    title: "Candi",
    description: "An AI-powered interview preparation assistant that analyzes your resume and job description to generate a comprehensive interview prep guide.",
    image: "/images/projects/Candi_Logo.png",
    link: "https://github.com/Vineeth-03-Shenoy/Candi.git",
    tags: ["Interview Prep", "Gen AI", "Agentic AI", "Vibe Code with Brains"],
    icon: "🎯",
    label: "Personal Project",
    status: "In Development"
  },
  {
    title: "Call Center Analytics Platform",
    description: "Built at UiPath Hackathon 2026: a governed call-center analytics platform using UiPath Maestro BPMN orchestration, Coded Agents, Data Fabric, Action Center HITL, and a React 18/TypeScript Coded App. Turns raw call audio into a supervisor-reviewed 43-field CallReport with an Agent Builder conversational assistant. Powered by an on-prem LangGraph pipeline (faster-whisper ASR, pyannote diarization, wav2vec2 emotion, Ollama LLMs) for compliance judging, fraud-risk scoring, and PII masking.",
    image: "/images/projects/Call_Analytics.png",
    link: "https://github.com/melroyd-nov/uipath_hackathon26_756",
    tags: ["UiPath Maestro", "LangGraph", "UiPath AgentHack 2026", "React 18", "Claude Code"],
    icon: "📞",
    label: "Hackathon Project"
  },
  {
    title: "Agentic Consultation Management",
    description: "An end-to-end Agentic Consultation Management process presented at GITEX 2025. Showcased UiPath's Agentic Capabilities to streamline the appointment booking-to-consultation process. This solution garnered health care client prospects for Novigo Solutions.",
    image: "/images/projects/Consultaion_Solution_Architecture.png",
    link: "https://forum.uipath.com/t/agentic-consultation-management-process/2878370",
    tags: ["UiPath Agents", "Agentic AI", "UiPath AgentHack 2025", "Healthcare", "GenAI"],
    icon: "🤖",
    label: "Hackathon Project"
  },
  {
    title: "GenAI Email Management System",
    description: "Runner-up project at Novigo GenAI Hackathon. A GenAI-based email management system built using MERN stack, integrated with Outlook, Graph API, and OpenAI API (GPT-4o-mini). Automated email classification and response generation.",
    image: null,
    link: null,
    tags: ["MERN Stack", "OpenAI API", "Graph API", "Hackathon"],
    icon: "📧",
    label: "Hackathon Project",
    status: "Private Source Code"
  },
  {
    title: "Food Rendezvous",
    description: "My Food Blogging Website platform for sharing culinary experiences and recipes.",
    image: null,
    link: null,
    tags: ["Web Development", "Blogging", "React"],
    icon: "🍲",
    label: "Personal Project",
    status: "Development Halted"
  }
];
