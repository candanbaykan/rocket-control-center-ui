export class WeatherModel {
  temperature?: number;
  humidity?: number;
  pressure?: number;
  precipitation?: {
    probability?: number;
    rain?: boolean;
    snow?: boolean;
    sleet?: boolean;
    hail?: boolean;
  };
  wind: {
    direction?: string;
    angle?: number;
    speed?: number;
  };
  time?: string;
}
