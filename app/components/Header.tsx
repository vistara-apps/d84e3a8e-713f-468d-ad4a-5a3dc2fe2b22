'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Identity, Avatar, Name } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';

export function Header() {
  const { address } = useAccount();

  return (
    <header className="flex justify-between items-center p-6 border-b border-white/10">
      <div />
      <div className="flex items-center gap-4">
        {address ? (
          <Identity 
            address={address}
            className="text-white"
          >
            <Avatar className="w-8 h-8" />
            <Name className="text-white" />
          </Identity>
        ) : (
          <ConnectWallet className="bg-white text-black hover:bg-gray-100" />
        )}
      </div>
    </header>
  );
}
