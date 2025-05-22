export const runtime = "nodejs";

// If you use Prisma in any server action, API route, or page, you must also add
// export const runtime = "nodejs"; to those files as well.

import { PrismaClient } from "@prisma/client";
import { cache } from "react";

export const getPrisma = cache(() => {
  return new PrismaClient();
});
