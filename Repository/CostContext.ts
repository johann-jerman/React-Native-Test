import * as Sqlite from "expo-sqlite";

export default class CostContext {
  private readonly DataBaseName: string = "cost.db";
  private readonly ContextDB: Sqlite.SQLiteDatabase;
  private static Instance: CostContext | null = null;

  private constructor() {
    this.ContextDB = Sqlite.openDatabaseSync(this.DataBaseName);
    this.initializeDatabase();
  }

  public static GetInstance(): CostContext {
    if (!CostContext.Instance) {
      CostContext.Instance = new CostContext();
    }
    return CostContext.Instance;
  }

  public GetContext(): Sqlite.SQLiteDatabase {
    return this.ContextDB;
  }

  private initializeDatabase(): void {
    this.ContextDB.withTransactionSync(() => {
      //Creo La Tabla De Catagorias
      this.ContextDB.execSync(`
        CREATE TABLE IF NOT EXISTS CATEGORIES(
          ID INTEGER PRIMARY KEY NOT NULL,
          Description TEXT NOT NULL,
          CreatedAt TEXT DEFAULT CURRENT_TIMESTAMP,
          UpdatedAt TEXT,
          DeletedAt TEXT
        )
      `);

      //Inserto En Categorias La Categoria General Si no existe
      this.ContextDB.execSync(`
        INSERT INTO CATEGORIES (Description)
        SELECT 'General'
        WHERE NOT EXISTS (
          SELECT 1 FROM CATEGORIES WHERE Description = 'General'
        );
      `);

      //Creo La Tabla De Costos
      this.ContextDB.execSync(`
        CREATE TABLE IF NOT EXISTS  COSTS(
          ID INTEGER PRIMARY KEY NOT NULL,
          Description TEXT NOT NULL,
          Amount INTEGER NOT NULL,
          CategoryID INTEGER, 
          CreatedAt TEXT DEFAULT CURRENT_TIMESTAMP,
          UpdatedAt TEXT,
          DeletedAt TEXT
          FOREIGN KEY (CategoryID) REFERENCES CATEGORIES(ID) ON DELETE SET NULL
        )
      `);
    });
  }
}
