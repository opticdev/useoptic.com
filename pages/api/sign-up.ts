import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log("LOG SIGN UP ATTEMPT");
  res.redirect("https://app.useoptic.com");
}
