import { NextApiRequest, NextApiResponse } from "next";
import Analytics from "@segment/analytics-node";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const analytics = new Analytics({ writeKey: process.env.SEGMENT_KEY! });

  analytics.track({
    event: "marketing.sign_up_click",
    anonymousId: new Date().getTime().toString(36),
  });

  await analytics.closeAndFlush();

  res.redirect("https://app.useoptic.com");
}
