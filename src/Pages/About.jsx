import React from "react";

const About = () => {
  return (
    <div className=" lg:pl-16  lg:pr-16 gap-3  sm:mt-7 lg:mt-12 p-12 text-white">
      <h4 className="text-2xl font-bold"> About me</h4>
      <p className="sm:p-1 xs:p-1 lg:p-14 text-sm lg:text-lg">
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem. I have experience working on a variety of projects,
        including building and maintaining single page applications, integrating
        with REST APIs, and implementing responsive design principles. I am also
        proficient in using tools such as Webpack, npm, and Git for development
        and deployment. In addition to my technical skills, I am a strong
        communicator and team player. I am able to work effectively with
        cross-functional teams and am comfortable taking on new challenges and
        learning new technologies as needed.
      </p>
      <div className="text-center  lg:mt-40  sm:mt-12">
        <h3 className='text-xl font-semibold'>Let us create awesome products!</h3>
        <p className=" sm:mt-2 lg:mt-4 ">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
      </div>{" "}
    </div>
  );
};

export default About;
