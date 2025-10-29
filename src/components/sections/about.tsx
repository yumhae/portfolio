export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              I'm Clariz Joy Lolong, a student who enjoys reading stories on Wattpad and playing online games in my free time. 
              I may not be very skilled with computers yet, but I have some basic knowledge of HTML and I'm always eager to learn more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              I believe that with patience and dedication, I can continue to grow and improve my skills day by day. 
              Every challenge is an opportunity to learn something new, and I'm excited about the journey ahead.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["HTML", "CSS", "Learning JavaScript", "Problem Solving"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Things I Love</h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>• Reading stories on Wattpad</li>
              <li>• Playing online games</li>
              <li>• Learning new technologies</li>
              <li>• Exploring web development</li>
              <li>• Connecting with friends online</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}