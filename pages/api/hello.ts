// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from 'components/organisms/Offers/data/fakeData';
import { ICard } from 'components/organisms/Offers/types';
type Data = {
	offersList: ICard[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ offersList: fakeData });
}
