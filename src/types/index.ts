export type Run = {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  distance: number;
  duration: number;
  pace: number;
  calories: number;
  avgHr: number;
  maxHr: number;
  notes?: string;
};
