export interface Club {
  id: string;
  name: string;
  category: string;
  description: string;
  selectivity: "Low" | "Medium" | "High" | "Very High";
  commitment: string;
  application_steps: string[];
  insider_tips: string[];
  website_url?: string;
  deadline?: string | null;
  deadline_label?: string | null;
  transfer_friendly?: boolean;
  updated_at?: string;
}
