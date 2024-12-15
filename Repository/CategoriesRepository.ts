import { CategorieModel } from "@/Models/CategorieModel";
import { GetDate } from "@/Utils/Date";
import { SQLiteDatabase } from "expo-sqlite";

export class CategoriesRepository {
  private static CategoryTableName: string = "CATEGORIES";

  public static GetByID(id: number, ContextDB: SQLiteDatabase) {
    try {
      return ContextDB.getAllSync(`
        SELECT 
            * 
        FROM ${this.CategoryTableName} C
        WHERE C.ID = ${id}
        WHERE C.DeletedAt IS NULL
      `);
    } catch (error) {}
  }

  public static GetAll(ContextDB: SQLiteDatabase) {
    try {
      return ContextDB.getAllSync(`
        SELECT 
            * 
        FROM ${this.CategoryTableName} C
        WHERE C.DeletedAt IS NULL
      `);
    } catch (error) {}
  }

  public static CreateCategory(
    Category: CategorieModel,
    ContextDB: SQLiteDatabase
  ) {
    try {
      ContextDB.execSync(`
        INSERT INTO ${this.CategoryTableName} 
        (Description, CreatedAt)
        VALUES
        (${Category.Description}, ${Category.CreatedAt ?? GetDate()})

      `);
    } catch (error) {}
  }

  public static UpdateCategory(
    Category: CategorieModel,
    ContextDB: SQLiteDatabase
  ) {
    try {
      ContextDB.execSync(`
        UPDATE ${this.CategoryTableName}
        SET Description = ${Category.Description}
        , UpdatedAt = ${GetDate()}
        WHERE ID = ${Category.ID}
      `);
    } catch (error) {}
  }

  public static DeleteCategory(id: number, ContextDB: SQLiteDatabase) {
    try {
      ContextDB.execSync(`
          UPDATE ${this.CategoryTableName}
          SET DeletedAt = ${GetDate()}
          WHERE ID = ${id}
        `);
    } catch (error) {}
  }
}
