import http from 'http';
import app from '@/server';

const server = http.createServer(app);
const port = 5000;
server.listen(5000);

test('server - returns 200', (done) => {
  http.get(`http://localhost:${port}`, (res) => {
    expect(res.statusCode).toBe(200);

    let response = '';
    res.on('data', (chunk) => {
      response += chunk;
    });

    res.on('end', () => {
      expect(response).toContain('kommunity.app');
      done();
    });
  });
});

afterAll((done) => {
  server.close(done);
});
