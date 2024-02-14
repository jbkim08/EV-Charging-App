import axios from 'axios';

//구글 places api(new)의 기본주소이고 POST 요청시 검색위치와 검색유형이 필요함
const BASE_URL = 'https://places.googleapis.com/v1/places:searchNearby';
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': apiKey,
    'X-Goog-FieldMask': [
      'places.displayName',
      'places.formattedAddress',
      'places.location',
      'places.evChargeOptions',
      'places.photos',
    ],
  },
};

const NewNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
  NewNearByPlace,
};
