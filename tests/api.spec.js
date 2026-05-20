const { test, expect } = require('@playwright/test');


test('GET Posts API Test', async ({ request }) => {

  // send GET request
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  // verify status code
  expect(response.status()).toBe(200);

  // convert response to json
  const responseBody = await response.json();

  // print response
  console.log(responseBody);

  // verify response data
  expect(responseBody.id).toBe(1);

});

test('POST API Test', async ({ request }) => {

  // send POST request
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {

      data: {

        title: 'Playwright Automation',

        body: 'API Testing Learning',

        userId: 1

      }

    }
  );

  // verify status code
  expect(response.status()).toBe(201);

  // convert response to json
  const responseBody = await response.json();

  // print response
  console.log(responseBody);

  // verify response data
  expect(responseBody.title)
    .toBe('Playwright Automation');

});