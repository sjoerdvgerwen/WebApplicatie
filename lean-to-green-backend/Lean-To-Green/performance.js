import http from 'k6/http';
import { sleep } from 'k6';

export const options ={
    duration: '1m',
    vus: 50,
    thresholds: {
        http_req_duration: ['p(95)<50'],
      },
}

export default function () {
  const res = http.get('https://localhost:5001/user/user');
  sleep(1);
}