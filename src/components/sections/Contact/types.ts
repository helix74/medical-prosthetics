export interface ContactInfo {
  title: string;
  value: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactData {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  info: {
    title: string;
    description: string;
    items: ContactInfo[];
  };
  form: {
    title: string;
    description: string;
  };
} 