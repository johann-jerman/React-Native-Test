import { CategorieModel } from "./CategorieModel";

export class CostModel {
  public ID: number | null = null;
  public Description: string = "";
  public Amount: number | null = null;
  public CategoryID: number | null = null;
  public Category: CategorieModel | null = null;
  public CreatedAt: string | null = null;
  public UpdatedAt: string | null = null;
  public DeletedAt: string | null = null;

  public constructor() {}
}
