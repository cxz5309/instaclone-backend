-- CreateTable
CREATE TABLE "_Followrelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Followrelation_AB_unique" ON "_Followrelation"("A", "B");

-- CreateIndex
CREATE INDEX "_Followrelation_B_index" ON "_Followrelation"("B");

-- AddForeignKey
ALTER TABLE "_Followrelation" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Followrelation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
