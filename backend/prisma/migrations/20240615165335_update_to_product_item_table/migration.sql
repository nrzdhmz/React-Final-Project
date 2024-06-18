/*
  Warnings:

  - Added the required column `productId` to the `ProductItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    CONSTRAINT "ProductItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductItem" ("cartId", "count", "id") SELECT "cartId", "count", "id" FROM "ProductItem";
DROP TABLE "ProductItem";
ALTER TABLE "new_ProductItem" RENAME TO "ProductItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
