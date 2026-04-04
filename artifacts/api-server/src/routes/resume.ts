import { Router, type IRouter } from "express";
import https from "https";
import http from "http";

const router: IRouter = Router();

const RESUME_URL =
  "https://miaoda-conversation-file.s3cdn.medo.dev/user-akex0r626m80/conv-akf2mg3zlou8/20260330/file-am6t2meuwd1c.jpg";
const RESUME_FILENAME = "matre_sanket_resume_page-0001.jpg";

router.get("/resume/download", async (req, res): Promise<void> => {
  const protocol = RESUME_URL.startsWith("https://") ? https : http;

  const request = protocol.get(RESUME_URL, (remoteRes) => {
    if (remoteRes.statusCode !== 200) {
      res.status(500).json({ error: "Resume temporarily unavailable" });
      return;
    }

    res.setHeader("Content-Disposition", `attachment; filename="${RESUME_FILENAME}"`);
    res.setHeader("Content-Type", "image/jpeg");
    remoteRes.pipe(res);
  });

  request.on("error", () => {
    res.status(500).json({ error: "Resume temporarily unavailable" });
  });
});

export default router;
