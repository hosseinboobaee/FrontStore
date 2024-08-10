import { VideoModel } from "./VideoModel";

export class ProductModel {
  public id: number;
  public productName: string;
  public price: number;
  public videos : VideoModel[];
}
