The prompt for this project was the following:

Using the following mock data and contract, implement an API server using ExpressJS. Use this array as your initial data. This way GET requests to your server will return data, even though we have not sent POST requests.
[
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

Expose an endpoint (does not require authentication)
Implement GET, POST, and DELETE per the specification