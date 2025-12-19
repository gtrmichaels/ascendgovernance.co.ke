'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [whatsappExpanded, setWhatsappExpanded] = useState(false);

  return (
    <>
      <div className="h-16" />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/nai-8.jpg" alt="Nairobi Skyline" className="w-full h-full object-cover" style={{objectPosition: 'center 30%'}} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-400/85 via-primary-500/88 to-primary-400/85" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" className="overlay">
            <defs>
              {/* More visible gradients */}
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: 'rgba(255,255,255,0.15)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgba(200,255,220,0.25)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.2)', stopOpacity: 1}} />
              </linearGradient>
              <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.4)', stopOpacity: 1}} />
                <stop offset="70%" style={{stopColor: 'rgba(255,255,255,0.1)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: 1}} />
              </radialGradient>
            </defs>
            {/* Semi-transparent background */}
            <rect width="100%" height="100%" fill="rgba(0,0,0,0.1)" />
            {/* Single swaying wave layer */}
            <path d="M0,450 Q480,380 960,450 Q1440,520 1920,450 L1920,1080 L0,1080 Z" fill="url(#waveGradient2)" opacity="0.6">
              <animate attributeName="d" values="M0,450 Q480,380 960,450 Q1440,520 1920,450 L1920,1080 L0,1080 Z;
                        M0,450 Q480,420 960,450 Q1440,480 1920,450 L1920,1080 L0,1080 Z;
                        M0,450 Q480,380 960,450 Q1440,520 1920,450 L1920,1080 L0,1080 Z" dur="6s" repeatCount="indefinite" />
            </path>
            {/* Single interactive moving circle */}
            <circle id="interactiveBall" cx={100} cy={200} r={8} fill="rgba(255,255,255,0.6)">
              <animateTransform id="defaultAnimation" attributeName="transform" type="translate" values="0,0;2020,0" dur="20s" repeatCount="indefinite" />
              <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
            </circle>
            <style dangerouslySetInnerHTML={{__html: "\n                .overlay {\n                  width: 100%;\n                  height: 100%;\n                  position: absolute;\n                  top: 0;\n                  left: 0;\n                  pointer-events: none;\n                  z-index: 1;\n                  user-select: none;\n                  -webkit-user-select: none;\n                  -moz-user-select: none;\n                  -ms-user-select: none;\n                }\n                \n                /* Allow pointer events only on the interactive ball */\n                #interactiveBall {\n                  pointer-events: auto;\n                  user-select: none;\n                  -webkit-user-select: none;\n                  -moz-user-select: none;\n                  -ms-user-select: none;\n                }\n              " }} />
          </svg>
        </div>
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#D4AF37] text-lg font-medium mb-6 animate-fade-in">Elevating Leadership. Strengthening Governance.</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Excellence in Corporate Governance Consultancy
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Empowering boards and executives with strategic governance solutions, comprehensive training, and expert consultancy services for sustainable business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href="/services" className="btn-accent text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">Explore Services</Link>
            <Link href="/contact" className="bg-white/10 backdrop-blur-sm text-white border border-primary-400/50 px-8 py-4 rounded-lg font-medium hover:bg-primary-400/20 hover:border-primary-400 transition-all duration-300">Schedule Consultation</Link>
            <Link href="/signup" className="bg-white/10 backdrop-blur-sm text-white border border-primary-400/50 px-8 py-4 rounded-lg font-medium hover:bg-primary-400/20 hover:border-primary-400 transition-all duration-300">Register as Consultant</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative bg-gradient-to-br from-primary-50 to-secondary-100" style={{backgroundImage: 'radial-gradient(rgba(34,197,94,0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom right, #E9F5EE, #F8F9FA)', backgroundSize: '22px 22px, auto', backgroundPosition: '0 0, center'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="w-full" 
              style={{transition: 'transform 300ms var(--ease-out)', willChange: 'transform'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
            >
              <svg viewBox="0 0 800 600" className="w-full h-auto" role="img" aria-label="About content inside computer screen">
                <rect x={40} y={40} width={720} height={440} rx={24} fill="#295D44" />
                <rect x={60} y={60} width={680} height={360} rx={12} fill="#FFFFFF" style={{filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.08))'}} />
                <rect x={60} y={420} width={680} height={40} rx={10} fill="#295D44" />
                <rect x={365} y={500} width={70} height={20} rx={6} fill="#295D44" />
                <path d="M360 520 L440 520 L470 560 Q400 575 330 560 Z" fill="#295D44" />
                <foreignObject x={70} y={70} width={660} height={340}>
                  <div className="h-full w-full p-6 md:p-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Who We Are</h2>
                    <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-text-secondary mb-4">
                      We elevate corporate governance through strategic consultancy, targeted training, and expert guidance—strengthening leadership and ensuring regulatory compliance across your organization.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-text-secondary mb-6">
                      With decades of experience, we deliver tailored solutions that drive sustainable growth while upholding integrity and transparency.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        <img src="/images/swklogo.png" alt="SWK Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary object-contain bg-white p-1" />
                        <img src="/images/capitalogo.png" alt="Capita Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary object-contain bg-white p-1" />
                      </div>
                      <span className="text-base md:text-lg text-text-secondary">Trusted by leading legal organizations</span>
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
            <div 
              className="relative rounded-lg shadow-floating" 
              style={{transition: 'transform 300ms var(--ease-out), box-shadow 300ms var(--ease-out)', willChange: 'transform, box-shadow'}}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'; 
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.25)'; 
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = 'none'; 
                e.currentTarget.style.boxShadow = ''; 
              }}
            >
              <img src="/images/board.png" alt="Governance and leadership" className="w-full h-96 object-cover rounded-lg" />
              <div className="absolute -right-6 text-white p-4 shadow-floating" style={{bottom: '-3rem', backgroundColor: '#295D44'}}>
                <div className="text-xl font-bold">Expertise</div>
                <div className="text-sm">Founded by professionals with <br />deep industry knowledge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{backgroundColor: '#FAFCFB'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Governance Solutions
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From board evaluations to specialized training programs, we offer a complete suite of governance services tailored to your organization&apos;s needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="card group hover:shadow-floating transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Board Evaluations</h3>
              <p className="text-text-secondary mb-4">Comprehensive assessment of board effectiveness and governance practices.</p>
              <Link href="/services" className="text-[#D4AF37] font-medium hover:text-[#B8962F] transition-colors duration-200">Learn More →</Link>
            </div>
            {/* Service Card 2 */}
            <div className="card group hover:shadow-floating transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Board Trainings</h3>
              <p className="text-text-secondary mb-4">Specialized training programs for board members and directors.</p>
              <Link href="/services" className="text-[#D4AF37] font-medium hover:text-[#B8962F] transition-colors duration-200">Learn More →</Link>
            </div>
            {/* Service Card 3 */}
            <div className="card group hover:shadow-floating transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Secretarial Trainings</h3>
              <p className="text-text-secondary mb-4">Professional development for company secretaries and compliance officers.</p>
              <Link href="/services" className="text-[#D4AF37] font-medium hover:text-[#B8962F] transition-colors duration-200">Learn More →</Link>
            </div>
            {/* Service Card 4 */}
            <div className="card group hover:shadow-floating transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Corporate Governance Trainings</h3>
              <p className="text-text-secondary mb-4">Comprehensive governance training for all organizational levels.</p>
              <Link href="/services" className="text-[#D4AF37] font-medium hover:text-[#B8962F] transition-colors duration-200">Learn More →</Link>
            </div>
            {/* Service Card 5 */}
            <div className="card group hover:shadow-floating transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Governance Consultancy</h3>
              <p className="text-text-secondary mb-4">Strategic advisory services for governance framework development.</p>
              <Link href="/services" className="text-[#D4AF37] font-medium hover:text-[#B8962F] transition-colors duration-200">Learn More →</Link>
            </div>
            {/* Service Card 6 */}
            <div className="card group hover:shadow-floating transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Committee Trainings</h3>
              <p className="text-text-secondary mb-4">Specialized training for board committees and working groups.</p>
              <Link href="/services" className="text-[#D4AF37] font-medium hover:text-[#B8962F] transition-colors duration-200">Learn More →</Link>
            </div>
            {/* Service Card 7 */}
            <div className="card group hover:shadow-floating transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Board Recruitment</h3>
              <p className="text-text-secondary mb-4">Executive search and recruitment services for board positions.</p>
              <Link href="/services" className="text-[#D4AF37] font-medium hover:text-[#B8962F] transition-colors duration-200">Learn More →</Link>
            </div>
            {/* Service Card 8 */}
            <div className="card group hover:shadow-floating transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Board Induction</h3>
              <p className="text-text-secondary mb-4">Comprehensive onboarding programs for new board members.</p>
              <Link href="/services" className="text-[#D4AF37] font-medium hover:text-[#B8962F] transition-colors duration-200">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-20" style={{backgroundColor: '#E8EDF1'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Ascend Governance
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our commitment to excellence is built on four foundational pillars that ensure exceptional service delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Confidentiality</h3>
              <p className="text-text-secondary">Absolute discretion and confidentiality in all client engagements and sensitive governance matters.</p>
            </div>
            {/* Pillar 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Strategic Expertise</h3>
              <p className="text-text-secondary">Deep industry knowledge and strategic insights from seasoned governance professionals.</p>
            </div>
            {/* Pillar 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Compliance-Oriented</h3>
              <p className="text-text-secondary">Ensuring full regulatory compliance and adherence to best governance practices.</p>
            </div>
            {/* Pillar 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Tailored Training Modules</h3>
              <p className="text-text-secondary">Customized training programs designed to meet specific organizational needs and objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-16" style={{backgroundColor: '#FAFCFB'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">Trusted by Leading Organizations</h2>
            <p className="text-text-secondary">We partner with industry leaders to deliver exceptional governance solutions</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-24 opacity-70">
            {/* Partner Logo 1 */}
            <div className="flex items-center justify-center h-16">
              <img src="/images/capitalogo.png" alt="Capita Registrars Logo" className="h-12 object-contain" />
            </div>
            {/* Partner Logo 2 */}
            <div className="flex items-center justify-center h-16">
              <img src="/images/swklogo.png" alt="SWK Advocates Logo" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 overflow-hidden" style={{backgroundColor: '#E8EDF1'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Elevate Your Governance?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Contact us today to discuss how we can strengthen your organization&apos;s governance framework and leadership capabilities.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="card">
              <h3 className="text-xl font-semibold text-primary mb-6">Send us a Message</h3>
              <form id="contact-form" className="space-y-6" action="/api/contact" method="POST">
                <input type="hidden" name="form_type" defaultValue="contact" />
                <input type="hidden" name="csrf_token" defaultValue="" />
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{position: 'absolute', left: '-10000px'}} />
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="input-field" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="input-field" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="input-field" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">Company</label>
                  <input type="text" id="company" name="company" className="input-field" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">Service Interest</label>
                  <select id="service" name="service" className="input-field">
                    <option value="">Select a service</option>
                    <option value="board-evaluation">Board Evaluations</option>
                    <option value="board-training">Board Trainings</option>
                    <option value="secretarial-training">Secretarial Trainings</option>
                    <option value="governance-training">Corporate Governance Trainings</option>
                    <option value="consultancy">Governance Consultancy</option>
                    <option value="committee-training">Committee Trainings</option>
                    <option value="board-recruitment">Board Recruitment</option>
                    <option value="board-induction">Board Induction</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="input-field" placeholder="Tell us about your governance needs..." defaultValue="" />
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
            {/* Contact Information & Map */}
            <div className="space-y-6 lg:space-y-8">
              {/* Contact Details */}
              <div className="card">
                <h3 className="text-xl font-semibold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-primary">Office Address</div>
                      <div className="text-text-secondary text-sm sm:text-base">Royal Offices |1st Floor | No. 17 Mogotio Rd,<br />Off Chiromo Lane Westlands</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-primary">Phone</div>
                      <div className="text-text-secondary text-sm sm:text-base">+254 (726) 328-555</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-primary">Email</div>       
                      <div className="text-text-secondary text-sm sm:text-base break-words">info@ascendgovernance.co.ke</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-primary">Business Hours</div>
                      <div className="text-text-secondary text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="card p-0 overflow-hidden">
                <div className="h-64 bg-surface flex items-center justify-center">
                  <div className="w-full h-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6566.817973212294!2d36.810072!3d-1.267393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c2cc63abf%3A0x8a56926007976f30!2sRoyal%20Offices!5e1!3m2!1sen!2ske!4v1754032528876!5m2!1sen!2ske" 
                      className="w-full h-full" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated on Governance Best Practices
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, regulatory updates, and governance trends delivered to your inbox.
          </p>
          <form id="newsletter-form" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/api/newsletter" method="POST">
            <input type="hidden" name="form_type" defaultValue="newsletter" />
            <input type="hidden" name="csrf_token" defaultValue="" />
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{position: 'absolute', left: '-10000px'}} />
            <input type="email" id="newsletter-email" name="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-lg bg-white text-text-primary border-0 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm" required />
            <button id="newsletter-submit" type="submit" className="btn-accent whitespace-nowrap">Subscribe</button>
          </form>
          <div id="newsletter-feedback" className="mt-4 text-sm text-white/90" />
        </div>
      </section>

      {/* Floating WhatsApp CTA - Bottom Right */}
      <a 
        href="https://wa.me/254726328555" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat on WhatsApp" 
        title="Chat on WhatsApp" 
        className={`fixed z-50 rounded-full shadow-floating border hover:shadow-elevated transition-all duration-300 ease-in-out cursor-pointer flex items-center ${whatsappExpanded ? 'w-[240px] rounded-[28px] justify-start pr-4 bg-white' : 'w-14 h-14 justify-center bg-background'} overflow-hidden`}
        style={{right: '20px', bottom: '20px', borderColor: 'rgba(37,211,102,.4)'}}
        onMouseEnter={() => setWhatsappExpanded(true)}
        onMouseLeave={() => setWhatsappExpanded(false)}
      >
        <span className="whatsapp-icon flex-shrink-0" style={{width: '56px', height: '56px', background: whatsappExpanded ? '#FFFFFF' : '#FAFCFB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{width: '24px', height: '24px', flexShrink: 0}}>
            <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.767-1.519-.94-2.206-.172-.706-.346-.573-.52-.646-.173-.075-.372-.112-.57-.112-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.636.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1-3.648-.235-.374c-.911-1.439-1.371-3.02-1.371-4.7 0-5.47 4.463-9.934 9.934-9.934 2.65 0 5.18 1.03 7.07 2.91 1.89 1.88 2.93 4.39 2.93 7.07 0 5.47-4.463 9.934-9.935 9.934m8.033-18.297C19.25 1.837 15.082-.5 10.5-.5 4.701-.5.5 3.701.5 8.5c0 2.15.547 4.236 1.58 6.06L.5 24.5l9.75-2.58c1.824 1.02 3.91 1.58 6.06 1.58 4.799 0 9.19-4.201 9.19-9.5 0-3.25-1.24-6.33-3.5-8.5" />
          </svg>
        </span>
        <span 
          className="whatsapp-text transition-all duration-300 ease-in-out" 
          style={{
            opacity: whatsappExpanded ? 1 : 0,
            marginLeft: whatsappExpanded ? '12px' : '0',
            width: whatsappExpanded ? 'auto' : '0',
            overflow: 'hidden',
            display: 'inline-block',
            color: 'var(--color-text-primary,#213B31)',
            fontWeight: 600,
            whiteSpace: 'nowrap'
          }}
        >
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
}
