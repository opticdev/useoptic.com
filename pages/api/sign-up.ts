import { NextApiRequest, NextApiResponse } from "next";
import Analytics from "analytics-node";
import * as process from "process";

export default function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const analytics = new Analytics(process.env.SEGMENT_KEY || "", {
      // Handle errors thrown here
      errorHandler: (err) => {},
    });
    analytics.track({ event: "marketing.sign_up_click" });
  } catch (e) {}

  res.redirect("https://app.useoptic.com");
}
