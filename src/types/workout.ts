export interface Workout {
  id: string | number;
  name: string;
  category: string[];
  equipment: string;
  duration: number | string;
  calories: number | string;
  rating: number | string;
  image: string;
  description?: string;
}