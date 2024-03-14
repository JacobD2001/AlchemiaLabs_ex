const request = require('supertest');
const app = require('../app'); 

//npm test - for running the tests

// Test the /api/easyFunction endpoint
describe('GET /api/easyFunction', () => {
  it('responds with json containing the sum', done => {
    request(app)
      .get('/api/easyFunction?num1=5&num2=3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        sum: 8
      }, done);
  });
});

// Test the /api/fibonacci endpoint
describe('POST /api/fibo', () => {
  it('calculates Fibonacci number correctly', async () => {
    const n = 10; 
    const expectedFibonacciNumber = 55; 

    const response = await request(app)
      .post('/api/fibo')
      .send({ n })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.fibonacciNumber).toEqual(expectedFibonacciNumber);
  });

  it('handles invalid input', async () => {
    const n = -1; 

    await request(app)
      .post('/api/fibo')
      .send({ n })
      .expect('Content-Type', /json/)
      .expect(400); 
  });
});

// Test the /api/sort endpoint
describe('POST /api/sort', () => {
  it('sorts array in ascending order', async () => {
    const array = [34, 7, 23, 32, 5, 62]; 
    const expectedSortedArray = [5, 7, 23, 32, 34, 62]; 

    const response = await request(app)
      .post('/api/sort')
      .send({ array })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.sortedArray).toEqual(expectedSortedArray);
  });

  it('handles invalid input', async () => {
    const array = "not an array"; 

    await request(app)
      .post('/api/sort')
      .send({ array })
      .expect('Content-Type', /json/)
      .expect(400); 
  });
});