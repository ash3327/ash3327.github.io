export default function About() {
  return (
    <section id="about">
      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={`${process.env.PUBLIC_URL}/images/face 11.png`}
            alt="Sam Tam, Ka Ho"
            className="size-64 rounded-full object-cover"
          />
          <div className="text-lg space-y-4">
            <h2>About Me</h2>

            <p>
              Hi! I'm Sam, an AI enthusiast and app developer, currently in my final year at the Chinese University of Hong Kong.
            </p>
            <p>
              My experience primarily revolves around Python, TensorFlow, and PyTorch. I actively engage in working on personal projects and regularly read research papers in the field. I also have some experience in Java and am eager to learn new skills as needed.
            </p>
            <p>
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