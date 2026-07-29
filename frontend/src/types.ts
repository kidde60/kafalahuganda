export type Screen =
  | 'home'
  | 'campaigns'
  | 'detail'
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
