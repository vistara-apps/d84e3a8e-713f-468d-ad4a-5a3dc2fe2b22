'use client';

import { Home, User, Gift, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { icon: Home, label: 'Home', active: false },
  { icon: User, label: 'Profile', active: true },
  { icon: Gift, label: 'Get Reaction', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Profile');

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <span className="text-black font-bold">L2T</span>
          </div>
          Like2Tip
        </h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === activeItem;
          
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                isActive 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
