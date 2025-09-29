export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ToolCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  buttonText: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}