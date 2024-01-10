-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suport_card" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "descriptin" TEXT,
    "tasks" TEXT[],
    "solution" TEXT,
    "priority" TEXT,
    "createdAt" TEXT,
    "updatedAt" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "suport_card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "suport_card" ADD CONSTRAINT "suport_card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
