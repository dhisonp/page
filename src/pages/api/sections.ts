import type { NextApiRequest, NextApiResponse } from 'next';
import { HttpMethods } from '@/pages/types/http-methods-enum';
import plAxios from '@/pages/services/axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === HttpMethods.GET) {
    const url = '/api/section/ordered';
    return plAxios
      .get(url)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        console.error('Error on fetching all sections', error);
        res.status(500).json({ message: error.message });
      });
  }
}
