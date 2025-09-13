'use client';

import { BODY_RECORD_DATA } from '@/lib/constants';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface BodyRecordGraphProps {
  id?: string;
}

export function BodyRecordGraph({ id }: BodyRecordGraphProps) {
  return (
    <section id={id} className="bg-gray-800 text-white p-6 rounded-lg mb-14">
      <div className="flex items-center mb-6">
        <div className="text-sm font-medium mr-4">
          BODY<br />RECORD
        </div>
        <div className="text-2xl font-light">2021.05.21</div>
      </div>
      
      <div className="h-64 w-full mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={BODY_RECORD_DATA}>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#ffffff', fontSize: 12 }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#FFCC21"
              strokeWidth={3}
              dot={{ fill: '#FFCC21', strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: '#FFCC21' }}
            />
            <Line
              type="monotone"
              dataKey="bodyFat"
              stroke="#8FE9D0"
              strokeWidth={3}
              dot={{ fill: '#8FE9D0', strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: '#8FE9D0' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex space-x-2">
        <button className="px-4 py-2 rounded-full bg-white text-[#FFCC21] text-sm font-medium hover:bg-gray-500">
          日
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#FFCC21] text-sm font-medium hover:bg-gray-500"> 
          週
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#FFCC21] text-sm font-medium hover:bg-gray-500">
          月
        </button>
        <button className="px-4 py-2 rounded-full bg-yellow-400 text-white text-sm font-medium hover:bg-gray-500">
          年
        </button>
      </div>
    </section>
  );
}
