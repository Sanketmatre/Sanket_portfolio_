import { Router, type IRouter } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, message } = parsed.data;

  await db.insert(contactMessagesTable).values({
    senderName: name,
    senderEmail: email,
    message,
  });

  res.status(201).json({ message: "Message submitted successfully" });
});

export default router;
