export type Screen =
  | 'home'
  | 'campaigns'
  | 'detail'
  | 'students'
  | 'student-detail'
  | 'donate'
  | 'admin-login'
  | 'admin'
  | 'gallery';

export interface Campaign {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  gradient: string;
  raised: number;
  goal: number;
  donors?: number;
  tags?: string[];
}

export interface GalleryItem {
  id: string;
  icon: string;
  gradient: string;
  title: string;
  campaign: string;
  date: string;
}

export interface Student {
  id: string;
  fullName: string;
  dateOfBirth: string;
  location: string;
  school: string;
  grade: string;
  sponsorGoal: number;
  received: number;
  avatar: string;
  summary: string;
  feeStructure: Array<{ item: string; amount: string }>;
  academicReports: Array<{ term: string; report: string; attendance: string }>;
  paymentReceipts: Array<{ receipt: string; date: string; amount: string; status: string }>;
}
