import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Appliactions & Resume Ratings</h1>
          <h2>Review Your submissions and check AI-powered feedback.</h2>
        </div>
     
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <div>
              <ResumeCard key={resume.id} resume={resume} />
            </div>
          ))}
        </div>
      )}
       </section>
    </main>
  );
}
