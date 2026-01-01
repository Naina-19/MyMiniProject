import { test, expect } from '@playwright/test'
test('API-Get-Request', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1')

    console.log('status :', response.status())
    expect(response.status()).toBe(200)

    console.log(await response.json())
    const data = await response.json();
    expect(data.name).toBe('Leanne Graham');
})

test('API-POST-request', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: "naina",
            body: "SDET",
            userId: 1
        }
    })
    console.log('Status:', response.status());
    console.log('Headers:', response.headers());

    expect(response.status()).toBe(201); // Created

    const responseData = await response.json();
    console.log('Response:', responseData);

    expect(responseData.title).toBe('naina');
    expect(responseData.id).toBe(101); // jsonplaceholder always returns id: 101 for new posts
})


test('API PUT Request', async ({ request }) => {
    // PUT request to update existing resource
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'Nalini',
            body: 'QA',
            userId: 1
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    console.log('PUT Status:', response.status());
    expect(response.status()).toBe(200); // 200 OK for successful update

    const responseData = await response.json();
    console.log('Updated Data:', responseData);

    expect(responseData.title).toBe('Nalini');
    expect(responseData.body).toBe('QA');
});

test('API DELETE Request', async ({ request }) => {
    // DELETE request to remove a resource
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    console.log('DELETE Status:', response.status());
    expect(response.status()).toBe(200); // Success

    // DELETE often returns empty response or confirmation
    const responseBody = await response.text();
    console.log('Response:', responseBody);
});