import Image from "next/image";

// components/About.tsx
export default function About() {
    return (
        <section className="pt-24 pb-12 h-screen bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                    {/* Left Column: Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      
                        <Image
                            src="/profile.jpg"
                            alt="Tarkik"
                            loading="lazy"
                            className="w-64 md:w-72 shadow-lg object-cover"
                            width={750}
                            height={750}
                        />
                    </div>

                    {/* Right Column: Text */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4 text-center md:text-left animate__animated animate__fadeIn animate__delay-1s">
                            About Me
                        </h2>
                        <p className="text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
                            After graduating with a degree in Accounting, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
                        </p>
                        <p className="text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
                            When I'm not coding, I enjoy playing video games, watching movies, and playing with my dog. I also enjoy learning new things. I am currently learning about history and philosophy. I'm also learning how to play the guitar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
