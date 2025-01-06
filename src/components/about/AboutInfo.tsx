import { motion } from 'framer-motion';
import InfoBox from './InfoBox';

export default function AboutInfo() {
  return (
    <div className="space-y-8 mt-16">
      <InfoBox title="What is NAVADA?">
        <p className="text-gray-300 mb-6">
          NAVADA stands for <span className="text-purple-400">Navigating Artistic Visions with Advanced Digital Assistance</span>. 
          It is an innovative open-source initiative designed to harness the power of 
          <span className="text-purple-400"> AI (Artificial Intelligence)</span> and 
          <span className="text-pink-400"> Web3 technologies</span> to empower individuals and businesses.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>AI-powered predictive analytics for smarter decision-making</li>
          <li>Web3 platforms for decentralized collaboration and blockchain-driven financial solutions</li>
          <li>Programs for skill development, employment creation, and community engagement</li>
        </ul>
      </InfoBox>

      <InfoBox title="Why NAVADA?">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Addressing Unemployment</h4>
            <p className="text-gray-400">Millions of individuals face challenges finding meaningful work due to skill mismatches or limited opportunities. NAVADA aims to close this gap by equipping communities with in-demand skills and connecting them to job opportunities.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Empowering Businesses</h4>
            <p className="text-gray-400">Small and medium enterprises often struggle to stay competitive in the rapidly evolving digital landscape. NAVADA offers tools and strategies to help these businesses thrive.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Promoting Transparency</h4>
            <p className="text-gray-400">With an open-source approach, NAVADA ensures that all operations, funding, and progress are transparent, fostering trust and accountability.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Fostering Sustainability</h4>
            <p className="text-gray-400">By leveraging decentralized technologies and environmentally conscious practices, NAVADA supports a greener, more sustainable future.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Driving Economic Growth</h4>
            <p className="text-gray-400">Empowered individuals and optimized businesses contribute to a thriving local economy, creating a ripple effect of positive change.</p>
          </div>
        </div>
      </InfoBox>

      <InfoBox title="How Does NAVADA Work?">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Skill Development</h4>
              <p className="text-gray-400">Provide training in AI, Web3, and blockchain technologies to upskill individuals.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Technology Platforms</h4>
              <p className="text-gray-400">Develop AI and Web3 tools for business optimization and collaboration.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Community Engagement</h4>
              <p className="text-gray-400">Create forums for idea exchange and foster collaborations.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Open Source</h4>
              <p className="text-gray-400">Publish progress and invite community contributions.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Pilot Programs</h4>
              <p className="text-gray-400">Launch projects in underserved regions to demonstrate impact.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Strategic Partnerships</h4>
              <p className="text-gray-400">Collaborate with tech companies and institutions to maximize reach.</p>
            </div>
          </div>
        </div>
      </InfoBox>
    </div>
  );
}