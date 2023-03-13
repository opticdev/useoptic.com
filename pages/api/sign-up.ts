import { NextApiRequest, NextApiResponse } from "next";
import Analytics from "analytics-node";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const analytics = new Analytics(process.env.SEGMENT_KEY || "", {
    // Handle errors thrown here
    errorHandler: (err) => {},
  });
  analytics.track({
    event: "marketing.sign_up_click",
    anonymousId: new Date().getTime().toString(36),
  });

  res.redirect("https://app.useoptic.com");
}
