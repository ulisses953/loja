/*
  Warnings:

  - Added the required column `quantidade` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descrisao" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL
);
INSERT INTO "new_produto" ("descrisao", "id", "nome", "valor") SELECT "descrisao", "id", "nome", "valor" FROM "produto";
DROP TABLE "produto";
ALTER TABLE "new_produto" RENAME TO "produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
