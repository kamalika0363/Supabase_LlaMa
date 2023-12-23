import { query } from '@/utils/query';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { inputs } = req.body;

        try {
            const response = await query({ inputs });
            res.status(200).json(response);
        } catch (error) {
            console.error('Error processing query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
