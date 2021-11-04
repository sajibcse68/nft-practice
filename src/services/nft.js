import axios from 'axios';

const BASE_API_URL = 'https://api.hyy.pe/api/v1/';

const GET_NFT_DETAILS_URL =
  'token/0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7/1';

export const getNftDetails = async () => {
  try {
    const { data } = await axios(`${BASE_API_URL}${GET_NFT_DETAILS_URL}`);

    return data;
  } catch (error) {
    console.log('error getNftDetails: ', error);
  }
};
