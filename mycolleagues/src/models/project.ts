export class Project {
  name: string;
  startDate: string;
  endDate?: string | null;
  constructor(name: string, startDate: string, endDate?: string | null) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
