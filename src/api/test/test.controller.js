import { getTest } from './test.services';

export default async function handleGetTest(res) {
  try {
    const hotels = await getTest();
    return res.status(200).json(hotels);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
