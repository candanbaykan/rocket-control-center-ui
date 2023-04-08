export class RocketModel {
  id?: string;
  model?: string;
  mass?: number;
  payload?: {
    description?: string;
    weight?: number;
  };
  telemetry?: {
    host?: string;
    port?: number;
  };
  status?: string;
  timestamps?: {
    launched?: string;
    deployed?: string;
    failed?: string;
    cancelled?: string;
  };
  altitude?: number;
  speed?: number;
  acceleration?: number;
  thrust?: number;
  temperature?: number;
}
