'use client';

import { BodyRecordGraph } from '../record/body-record-graph';

export function HeroSection() {
  return (
    <div>
      
        {/* Content */}
        <div className="relative z-10 flex items-center justify-between h-[312px]">
          {/* Left side - Background image with centered progress circle */}
          <div className="relative w-full h-[372px] bg-[url('/images/main_photo.png')] bg-cover bg-center bg-no-repeat flex-1">
            
            {/* Centered progress circle container */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-[180px] h-[180px]">
                
                {/* Progress circle */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="transparent"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={`${75 * 2.83} ${(100 - 75) * 2.83}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="font-light text-center">
                    <span>05/21</span>&nbsp;
                    <span className='text-2xl'>75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Right side - Graph */}
        <div className="flex-2">
            <BodyRecordGraph />
        </div>
      </div>
    </div>
  );
}
