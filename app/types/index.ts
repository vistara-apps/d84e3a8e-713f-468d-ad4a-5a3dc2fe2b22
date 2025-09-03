export interface User {
  userId: string;
  farcasterId?: string;
  walletAddress: string;
  creationDate: Date;
}

export interface Post {
  postId: string;
  creatorId: string;
  content: string;
  creationDate: Date;
  likeCount: number;
}

export interface Tip {
  tipId: string;
  postId: string;
  senderId: string;
  receiverId: string;
  amount: number;
  token: string;
  transactionHash?: string;
  timestamp: Date;
}
