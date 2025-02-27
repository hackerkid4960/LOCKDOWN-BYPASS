import { FiUsers, FiAward, FiTarget } from 'react-icons/fi';
import { HiLightBulb, HiGlobe } from 'react-icons/hi';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="text-white flex items-center mb-8 hover:text-blue-400">
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            About Us
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            We're passionate about creating amazing experiences for our users
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="about-card">
            <HiLightBulb className="text-4xl text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-300">Pushing boundaries with creative solutions</p>
          </div>

          <div className="about-card">
            <FiTarget className="text-4xl text-red-400" />
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p className="text-gray-300">Delivering excellence in every project</p>
          </div>

          <div className="about-card">
            <HiGlobe className="text-4xl text-green-400" />
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-gray-300">Serving clients worldwide</p>
          </div>
        </div>

        <div className="mt-16 bg-white bg-opacity-10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((member) => (
              <div key={member} className="team-card">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4" />
                <h4 className="text-xl font-semibold">Team Member {member}</h4>
                <p className="text-gray-400">Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 