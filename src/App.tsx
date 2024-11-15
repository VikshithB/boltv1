import { NavButton } from '@/components/ui/nav-button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState<'design' | 'development'>('design');

  return (
    <div className="min-h-screen bg-[#FCFFFC]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FCFFFC]">
        <div className="max-w-[1920px] mx-auto px-32 h-20">
          <div className="w-full h-fit flex justify-between items-center py-8">
            <h1 className="text-[#98FB98] font-bold text-2xl leading-[120%] tracking-tight">
              VIKSHITH BOMMELLA
            </h1>
            <div className="flex items-center gap-6">
              <NavButton variant="filled">Work</NavButton>
              <NavButton>Contact</NavButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-between px-32 py-20">
        <div className="max-w-[1920px] mx-auto w-full flex-1 flex flex-col items-center justify-center">
          <h2 className="text-[91px] text-[#1a2b34] leading-[120%] font-bold text-center mb-16 md:mb-24">
            Turning every Interaction
            <br />
            into a{' '}
            <span className="font-serif italic">Swe-joyable</span> moment
          </h2>

          {/* Toggle Section */}
          <div className="relative w-full max-w-[800px] flex p-1.5 rounded-full border-2 border-[#98FB98]">
            <button
              onClick={() => setActiveTab('design')}
              className={cn(
                'flex-1 px-20 py-16 rounded-full text-[61px] font-medium leading-[120%] transition-all relative',
                activeTab === 'design'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Design
              {activeTab === 'design' && (
                <div className="absolute inset-0 bg-[#98FB98] rounded-full -z-10" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('development')}
              className={cn(
                'flex-1 px-20 py-16 rounded-full text-[61px] font-medium leading-[120%] transition-all relative',
                activeTab === 'development'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Development
              {activeTab === 'development' && (
                <div className="absolute inset-0 bg-[#98FB98] rounded-full -z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Work Label */}
        <div className="max-w-[1920px] mx-auto w-full">
          <h3 className="text-xl text-[#1a2b34] font-medium tracking-wide leading-[120%]">
            WORK
          </h3>
        </div>
      </section>
    </div>
  );
}

export default App;