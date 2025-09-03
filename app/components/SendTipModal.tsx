'use client';

import { useState } from 'react';
import { X, DollarSign } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface SendTipModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
  recipientAddress?: string;
}

export function SendTipModal({ 
  isOpen, 
  onClose, 
  recipientName,
  recipientAddress 
}: SendTipModalProps) {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendTip = async () => {
    if (!amount || parseFloat(amount) <= 0) return;
    
    setLoading(true);
    
    try {
      // TODO: Implement actual tipping logic with OnchainKit
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate transaction
      console.log(`Sending $${amount} USDC to ${recipientName}`);
      onClose();
      setAmount('');
    } catch (error) {
      console.error('Error sending tip:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
          <div className="glass-card rounded-lg p-6 animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <Dialog.Title className="text-xl font-semibold text-white">
                Send Tip
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <X size={16} className="text-white" />
                </button>
              </Dialog.Close>
            </div>

            <div className="mb-6">
              <p className="text-white/80 mb-2">Sending USDC to:</p>
              <p className="font-medium text-white">{recipientName}</p>
              {recipientAddress && (
                <p className="text-sm text-white/60 font-mono">
                  {recipientAddress.slice(0, 6)}...{recipientAddress.slice(-4)}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Amount (USDC)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  step="0.01"
                  min="0"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Dialog.Close asChild>
                <button className="flex-1 px-4 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                onClick={handleSendTip}
                disabled={!amount || parseFloat(amount) <= 0 || loading}
                className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Sending...' : 'Send Tip'}
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
