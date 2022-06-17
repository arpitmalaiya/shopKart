export class Product {
  public productName: string;
  public productId: string;
  public productSKU: string;
  public productPrice: number;
  public availableQty : number;

  constructor(
    productName: string,
    productId: string,
    productSKU: string,
    productPrice: number,
    availableQty : number
  ) {
    this.productName = productName;
    this.productId = productId;
    this.productSKU = productSKU;
    this.productPrice = productPrice;
    this.availableQty = availableQty
  }
}
