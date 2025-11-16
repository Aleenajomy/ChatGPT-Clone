const mockResponses = [
  {
    id: 1,
    question: "What are the top programming languages?",
    answer: "Here are the most popular programming languages based on various metrics:",
    tableData: [
      { rank: 1, language: "JavaScript", usage: "67.7%", category: "Web Development" },
      { rank: 2, language: "Python", usage: "44.1%", category: "Data Science" },
      { rank: 3, language: "Java", usage: "35.3%", category: "Enterprise" },
      { rank: 4, language: "TypeScript", usage: "34.8%", category: "Web Development" },
      { rank: 5, language: "C#", usage: "27.9%", category: "Enterprise" }
    ]
  },
  {
    id: 2,
    question: "What are the benefits of cloud computing?",
    answer: "Cloud computing offers numerous advantages for businesses and individuals:",
    tableData: [
      { benefit: "Cost Efficiency", description: "Reduced infrastructure costs", impact: "High" },
      { benefit: "Scalability", description: "Easy resource scaling", impact: "High" },
      { benefit: "Accessibility", description: "Access from anywhere", impact: "Medium" },
      { benefit: "Security", description: "Enterprise-grade security", impact: "High" },
      { benefit: "Backup & Recovery", description: "Automated data protection", impact: "Medium" }
    ]
  },
  {
    id: 3,
    question: "What are the latest web development trends?",
    answer: "Current web development trends shaping the industry:",
    tableData: [
      { trend: "AI Integration", adoption: "85%", difficulty: "High", timeframe: "2024" },
      { trend: "Progressive Web Apps", adoption: "72%", difficulty: "Medium", timeframe: "2023" },
      { trend: "Serverless Architecture", adoption: "68%", difficulty: "High", timeframe: "2023" },
      { trend: "Micro-frontends", adoption: "45%", difficulty: "High", timeframe: "2024" },
      { trend: "WebAssembly", adoption: "32%", difficulty: "Very High", timeframe: "2025" }
    ]
  }
];

const sessions = new Map();

module.exports = { mockResponses, sessions };