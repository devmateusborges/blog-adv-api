export interface GroupDTO {
  id?: string;
  id_group_1?: string;
  name_group: string;
  description: string;
  color_hex: string;
  post?: PostDTO[];
  user_id: string;
  title?: string;
  subtitle?: string;
  group_id?: string;
  created_at?: string;
}

export interface PostDTO {
  id?: string;
  title: string;
  subtitle: string;
}
