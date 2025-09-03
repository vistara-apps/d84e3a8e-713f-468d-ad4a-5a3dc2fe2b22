'use client';

import { ProfileStats } from './ProfileStats';
import { TippingCards } from './TippingCards';

export function MainContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Like2Tip</h1>
        <p className="text-lg text-white/80 mb-8">
          Like 2 Tip is something drastic, you so encourage your fans, your something fans.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          ⚡ Solana
        </button>
        
        <div className="flex justify-center gap-4 mt-8 text-sm text-white/60">
          <span className="bg-white/10 px-4 py-2 rounded-full">Frellor</span>
          <span>Cristalization</span>
          <span>Total by USDC</span>
          <span>Incentives</span>
          <span>Engagement ⌄</span>
          <span>Enclosing</span>
        </div>
      </div>

      <ProfileStats />
      <TippingCards />
    </div>
  );
}
