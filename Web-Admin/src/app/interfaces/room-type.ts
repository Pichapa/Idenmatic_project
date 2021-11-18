export class RoomType {

  constructor(
    public name?: string,
    public maxUser?: number,
    public bedRoom?: number,
    public bathRoom?: number,
    public size?: string,
    public image?: string
  ) {}

  public static initialize() {
    return new RoomType(
      undefined, undefined, undefined, undefined, undefined, undefined
    )
  }

}
