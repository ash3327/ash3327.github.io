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
              Nice to meet you! I'm Sam, an AI enthusiast and app developer in my fourth year at the Chinese University of Hong Kong, graduating in Summer 2025.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              My experience primarily revolves around Python, TensorFlow, and PyTorch. I actively engage in working on personal projects and regularly read research papers in the field. I also have some experience in Java and am eager to learn new skills as needed.
            </p>
            <p className="text-lg text-gray-700">
              I’m always excited to embrace new challenges and contribute to innovative projects in AI and backend development.
            </p>
            {/* <div className="text-left">
              <BlackButton href="/resume.pdf" download>
                Download Resume
              </BlackButton>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}