import { socialsList } from "./data/socials-list";


export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(socialsList);
  }
};
