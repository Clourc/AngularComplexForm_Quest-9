export class Kitten {
  hideDetails: boolean = true;
  constructor(
    public name: string,
    public race: string,
    public birthDate: Date,
    public photoLink: string
  ) {}

  onMouseEnter() {
    this.hideDetails = false;
  }

  onMouseLeave() {
    this.hideDetails = true;
  }
}
