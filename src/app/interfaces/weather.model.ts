export class Weather {
  constructor(
    public cityName: string,
    public date: string,
    public description: string,
    public img: string,
    public temp: string,
    public temp_max: string,
    public temp_min: string,
    public humidity: string,
    public wind_speed: string
  ) {}
}
