import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, GitBranch, Milestone } from "lucide-react";

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

const RoadmapStep = ({ step, isLast }: { step: string, isLast: boolean }) => (
    <div className="relative flex items-start">
        <div className="flex flex-col items-center mr-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary ring-4 ring-background z-10">
                <CheckCircle2 className="w-5 h-5" />
            </div>
            {!isLast && <div className="w-0.5 h-full bg-border -mt-1" />}
        </div>
        <div className="pt-1.5 pb-8">
            <p className="font-medium">{step}</p>
        </div>
    </div>
);

const RoadmapCard = ({ title, description, steps }: typeof roadmaps[0]) => (
    <Card className="w-full">
        <CardContent className="p-6">
            <div className="flex items-start gap-4">
                <GitBranch className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>
            <div className="mt-6">
                {steps.map((step, index) => (
                    <RoadmapStep key={index} step={step} isLast={index === steps.length - 1} />
                ))}
            </div>
        </CardContent>
    </Card>
);

export default function RoadmapsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Milestone className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Career Roadmaps</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your journey to a successful tech career starts here. Follow these expert-curated roadmaps to gain the skills you need.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmaps.map((roadmap, index) => (
              <RoadmapCard key={index} {...roadmap} />
          ))}
      </div>
    </div>
  );
}
