import React, { useState } from 'react';
import { Card } from "@/components/ui/card"

const InteractiveBarChart = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [barData, setBarData] = useState([
    { day: 'Mon', value: 30, label: 'Monday' },
    { day: 'Tue', value: 85, label: 'Tuesday' },
    { day: 'Wed', value: 65, label: 'Wednesday' },
    { day: 'Thurs', value: 45, label: 'Thursday' },
    { day: 'Fri', value: 55, label: 'Friday' },
    { day: 'Sat', value: 40, label: 'Saturday' },
    { day: 'Sun', value: 50, label: 'Sunday' },
    { day: 'Mon', value: 35, label: 'Monday' }
  ]);

  const maxValue = 100;

  const updateBarValue = (index, newValue) => {
    const updated = [...barData];
    updated[index].value = Math.min(Math.max(newValue, 0), maxValue);
    setBarData(updated);
  };

  return (
    <div className="h-[300px]  bg-gray-950 flex items-center justify-center p-8 rounded-[12px]">
      <div className="w-full max-w-4xl">
        <div className="relative">
            <div className='text-[22px] flex gap-2'><p className='underline decoration-blue-600'>Daily</p>    Sales Breakdowwn</div>
          {/* Bars Container */}
          <div className="flex items-end justify-around gap-2 h-64 px-4">
            {barData.map((bar, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center flex-1 h-full"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {/* Tooltip */}
                {hoveredBar === index && (
                  <Card className="absolute -top-32 left-1/2 -translate-x-1/2 bg-gray-800 border-gray-700 p-4 z-10 min-w-48">
                    <div className="flex items-center gap-2 mb-2">
                      <button className="text-white hover:bg-gray-700 p-1 rounded">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <h3 className="text-white font-semibold">Expenses Breakdown</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-gray-300">$ 43.65</span>
                        <span className="text-gray-400 ml-auto">Base Pay</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-gray-300">$ 47.3</span>
                        <span className="text-gray-400 ml-auto">Bonus</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-gray-300">$ 86.65</span>
                        <span className="text-gray-400 ml-auto">Monthly</span>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Bar */}
                <div className="relative w-full h-full flex items-end">
                  <div
                    className="w-full rounded-t-xl relative overflow-hidden cursor-pointer transition-all duration-300"
                    style={{
                      height: `${(bar.value / maxValue) * 100}%`,
                      background: index === 2 
                        ? 'linear-gradient(180deg, #4F46E5 0%, #818CF8 100%)'
                        : 'repeating-linear-gradient(45deg, #374151, #374151 10px, #4B5563 10px, #4B5563 20px)'
                    }}
                  >
                    {/* Input overlay for editing */}
                    <input
                      type="range"
                      min="0"
                      max={maxValue}
                      value={bar.value}
                      onChange={(e) => updateBarValue(index, parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Day Label */}
                <div className="text-gray-400 text-sm mt-3">{bar.day}</div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          
        </div>
      </div>
    </div>
  );
};

export default InteractiveBarChart;