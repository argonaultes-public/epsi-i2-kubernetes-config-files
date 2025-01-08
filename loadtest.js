import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';


export default function () {
  const res = http.get('http://192.168.59.100:32458');
  check(res, {
    'verify it works is displayed': (r) =>
      r.body.includes('it works'),
  });
  sleep(1);
}

export function handleSummary(data) {
  return {
    'stdout': textSummary(data, { indent: '\t', enableColors: true}),
    '/result/result.json': JSON.stringify(data)
  };
}
