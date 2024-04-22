import React from "react";
import Profileimg from "../Assets/profileimg.png";
const Home = () => {
  return (
    <div>
      <div class="flex lg:p-5 gap-3 mt-10 p-6 ">
        <img  className='sm:h-32 xs:h-32 md:h-56 lg:h-1/2'src={Profileimg} />

        <div className=" text-white lg:mr-24 sm:text-sm xs:text-sm lg:text-lg">
          <h1 className="text-2xl font-semibold">Palwasha</h1>

          <div className="text-2xl font-semibold">
            <h2>Full Stack Web Developer</h2>
          </div>
          <p className="text-lg sm:text-sm xs:text-sm lg:text-lg md:text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem maxime minus officia dicta suscipit aliquam iusto
            veniam voluptate quis, blanditiis, saepe fugit eius omnis voluptatem
            laboriosam voluptas, ipsam ab temporibus.
          </p>
        </div>
      </div>
      <div className="text-center md:mt-48 lg:mt-48 sm:mt-8 xs:mt-8 text-white p-2 sm:text-sm xs:text-xs">
        <h3 className='text-xl font-semibold'>Let us create awesome products!</h3>
        <p>
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
      </div>
    </div>
  );
};

export default Home;
