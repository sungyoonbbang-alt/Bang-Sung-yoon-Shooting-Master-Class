export interface NavItem {
  label: string;
  path: string;
}

export interface ForumPost {
  id: number;
  category: string;
  title: string;
  author: string;
  likes: number;
  comments: number;
  date: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fullMark?: number;
}
