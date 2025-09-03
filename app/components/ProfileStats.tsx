'use client';

import { TrendingUp, Plus } from 'lucide-react';

export function ProfileStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Tip on Posts */}
      <div className="glass-card rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Tip on Posts</h3>
            <p className="text-white/60">Creator your recent tips</p>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-white/20 rounded-full"></div>
            <div className="w-3 h-3 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Tip on Like */}
      <div className="glass-card rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Tip on Like</h3>
            <p className="text-2xl font-bold text-white">QR 00.355 <span className="text-sm font-normal">USDC</span></p>
          </div>
          <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Plus size={16} className="text-white" />
          </button>
        </div>
        
        <div className="mt-6 bg-white/5 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-xl font-semibold">Tip on Like</span>
            <button className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </button>
          </div>
          
          {/* Mini Chart */}
          <div className="h-24 flex items-end justify-between gap-1 mt-4">
            {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85].map((height, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-t from-purple-500 to-pink-400 rounded-sm flex-1"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          
          <div className="flex justify-between text-xs text-white/40 mt-2">
            <span>Recent</span>
            <span>Jan</span>
            <span>Feb</span>
            <span>Today</span>
            <span>May</span>
            <span>⚪</span>
          </div>
        </div>
      </div>
    </div>
  );
}
