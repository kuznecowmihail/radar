export class Certification {
  name: string;
  startDate: string;
  endDate?: string | null;
  constructor(name: string, startDate: string, endDate?: string) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
