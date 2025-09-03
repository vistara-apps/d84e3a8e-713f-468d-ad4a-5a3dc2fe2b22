'use client';

import { QrCode, TrendingUp } from 'lucide-react';
import { TipButton } from './TipButton';

export function TippingCards() {
  return (
    <div className="glass-card rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Creator Profile Card */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
              alt="Profile" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Like USDC Tips</h3>
              <p className="text-gray-600 text-sm">Fit USDC</p>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">$250</div>
            <div className="text-sm text-gray-600">
              QR Line<br/>
              48 PA Vowed
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center">
              <QrCode className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Tip Actions */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b5e8?w=40&h=40&fit=crop&crop=face" 
              alt="Creator" 
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h4 className="font-medium text-white">Blincreagen Dien</h4>
              <p className="text-sm text-white/60">Co Creator Postitor</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">19.</span>
              <TipButton 
                amount="1" 
                onClick={() => console.log('Tip clicked')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
