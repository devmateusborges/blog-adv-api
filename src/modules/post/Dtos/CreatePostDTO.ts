export interface CreatePostDTO {
  id?: string;
  title: string;
  subtitle: string;
  subject: string;
  url_photo: string;
  date_post?: string;
  user_id: string;
  Post_Group?: {
    groupId: string;
  };
}
