import { FC } from 'react';
import Link from 'next/link';

const About: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 mt-16 overflow-scroll scroll-smooth">
      <h1 className="text-3xl font-bold mb-4">Hi, I'm Armaan and this is XQuotes</h1>
      <p className="text-lg mb-6">
        XQuotes allows you to create images of text with customizations. This is version 1.0.0, and you can use it in your daily life.
      </p>
      
      <div className="mb-6">
        <video width="640" height="360" controls>
          <source src="/video/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <Link href="/" passHref>
        <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600 transition duration-300">
          Start Using
        </button>
      </Link>
    </div>
  );
};

export default About;
