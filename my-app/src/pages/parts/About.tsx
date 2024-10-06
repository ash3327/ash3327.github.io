import { Button } from "@mui/material"
import BlackButton from "../../components/BlackButton"

import ProfilePic from "../../images/face 4.png"

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={ProfilePic}
            alt="Sam Tam, Ka Ho"
            className="w-64 h-64 rounded-full object-cover"
          />
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I'm Sam, an AI engineer and backend developer with a passion for building scalable and intelligent systems. With 5+ years of experience in machine learning, distributed systems, and cloud technologies, I specialize in creating robust backend solutions that power AI-driven applications.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My expertise includes Python, TensorFlow, PyTorch, Apache Kafka, and cloud platforms like AWS and Google Cloud. I'm always excited to take on new challenges and contribute to cutting-edge projects in the AI and backend development space.
            </p>
            <div className="text-left">
              <BlackButton href="/resume.pdf" download>
                Download Resume
              </BlackButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}