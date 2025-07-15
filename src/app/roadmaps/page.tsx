import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react";


const roadmaps = [
  {
    title: "Software Engineer",
    description: "Build foundational and advanced skills to become a proficient software engineer.",
    steps: [
      "Learn a programming language (Python, Java, or JavaScript)",
      "Understand Data Structures and Algorithms",
      "Learn Git and version control",
      "Master a web framework (React, Angular, or Vue)",
      "Learn about databases (SQL and NoSQL)",
      "Build and deploy projects",
    ],
  },
  {
    title: "Data Scientist",
    description: "Follow this path to analyze data and extract meaningful insights.",
    steps: [
      "Master Python and its data science libraries (Pandas, NumPy, Scikit-learn)",
      "Learn SQL for data manipulation",
      "Understand statistics and probability",
      "Study machine learning algorithms",
      "Learn data visualization tools (Matplotlib, Seaborn, Tableau)",
      "Work on real-world data science projects",
    ],
  },
  {
    title: "DevOps Engineer",
    description: "Bridge the gap between development and operations.",
    steps: [
        "Learn a scripting language (Bash or Python)",
        "Understand Linux fundamentals and networking",
        "Master CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Learn containerization with Docker and Kubernetes",
        "Get familiar with cloud platforms (AWS, Azure, or GCP)",
        "Learn infrastructure as code (Terraform, Ansible)",
    ]
  },
  {
    title: "Cybersecurity Analyst",
    description: "Protect digital assets from cyber threats.",
    steps: [
        "Learn networking fundamentals (TCP/IP, OSI model)",
        "Understand operating systems (Windows, Linux)",
        "Study cybersecurity principles (CIA triad)",
        "Learn about security tools (Wireshark, Nmap, Metasploit)",
        "Get certified (CompTIA Security+, CEH)",
        "Practice on platforms like HackTheBox or TryHackMe",
    ]
  },
  {
    title: "UI/UX Designer",
    description: "Create user-friendly and visually appealing digital products.",
    steps: [
        "Learn design principles (color theory, typography, layout)",
        "Master design tools (Figma, Sketch, Adobe XD)",
        "Understand user research and persona creation",
        "Learn wireframing and prototyping",
        "Study usability testing",
        "Build a strong portfolio with case studies",
    ]
  },
    {
    title: "Product Manager",
    description: "Lead the development and launch of successful products.",
    steps: [
        "Understand the product development lifecycle",
        "Learn market research and competitive analysis",
        "Master project management methodologies (Agile, Scrum)",
        "Develop strong communication and leadership skills",
        "Learn to create product roadmaps and prioritize features",
        "Understand key metrics and data analysis",
    ]
  },
    {
    title: "Full-Stack Developer",
    description: "Master both front-end and back-end development.",
    steps: [
        "Learn HTML, CSS, and JavaScript fundamentals",
        "Master a front-end framework (e.g., React, Vue)",
        "Learn a back-end language and framework (e.g., Node.js/Express, Python/Django)",
        "Understand how to work with databases (SQL, NoSQL)",
        "Learn about APIs and RESTful services",
        "Gain experience with deployment and cloud services",
    ]
  },
    {
    title: "Machine Learning Engineer",
    description: "Build and deploy machine learning models at scale.",
    steps: [
        "Strengthen your Python programming skills",
        "Deepen your knowledge of machine learning algorithms",
        "Learn about ML frameworks (TensorFlow, PyTorch)",
        "Understand data engineering and ML pipelines",
        "Learn about MLOps (model deployment, monitoring)",
        "Gain experience with a cloud platform's ML services",
    ]
  },
    {
    title: "Cloud Engineer",
    description: "Design, manage, and maintain cloud infrastructure.",
    steps: [
        "Choose a cloud platform (AWS, Azure, or GCP) and get certified",
        "Learn networking and security in the cloud",
        "Understand identity and access management (IAM)",
        "Master containerization and orchestration (Docker, Kubernetes)",
        "Learn infrastructure as code (Terraform, CloudFormation)",
        "Gain scripting skills for automation (Python, Bash)",
    ]
  },
    {
    title: "Mobile App Developer",
    description: "Build applications for iOS and Android devices.",
    steps: [
        "Choose a platform: iOS (Swift) or Android (Kotlin/Java)",
        "Alternatively, learn a cross-platform framework (React Native, Flutter)",
        "Understand mobile UI/UX design principles",
        "Learn how to work with mobile APIs and data storage",
        "Practice building and testing mobile applications",
        "Publish an app to the Apple App Store or Google Play Store",
    ]
  }
];

export default function RoadmapsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Career Roadmaps</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your journey to a successful tech career starts here. Follow these expert-curated roadmaps to gain the skills you need.
        </p>
      </div>

      <Card>
        <CardContent className="p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {roadmaps.map((roadmap, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex flex-col text-left">
                    <span>{roadmap.title}</span>
                    <span className="text-sm font-normal text-muted-foreground">{roadmap.description}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pl-4 pt-2">
                    {roadmap.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
