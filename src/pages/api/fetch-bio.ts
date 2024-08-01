import type { NextApiRequest, NextApiResponse } from 'next';
import plAxios from '@/app/services/axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = '/api/globals/bio-global?locale=undefined&draft=false&depth=1';

    // const headers = {
    //   'x-api-key': process.env.PAYLOAD_SECRET,
    // };

    const response = await plAxios.get(url);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500);
  }
}
