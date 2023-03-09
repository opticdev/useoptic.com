import { NextApiRequest, NextApiResponse } from "next";
import Analytics from "analytics-node";

export default function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const analytics = new Analytics(process.env.SEGMENT_KEY || "", {
      // Handle errors thrown here
      errorHandler: (err) => {},
    });
    analytics.track({
      event: "marketing.sign_up_click",
      anonymousId: new Date().getTime().toString(36),
    });
  } catch (e) {
    console.log(e);
  }

  res.redirect("https://app.useoptic.com");
}
