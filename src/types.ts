export interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}

export interface ApiResponse {
  results: ImageData[];
  total_pages: number;
}
