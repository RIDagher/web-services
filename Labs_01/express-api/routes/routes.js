const router = (app) => {
  app.get('/', (req, res) => {
    res.json({
      message: 'Node.js and Express REST API',
    });
  });

  // create users
  const users = [
    {
      id: 1,
      name: 'Richard Hendricks',
      email: 'richard@piedpiper.com',
    },
    {
      id: 2,
      name: 'Bertram Gilfoyle',
      email: 'gilfoyle@piedpiper.com',
    },
  ];

  app.get('/users', (req, res) => {
    res.json(users);
  });
};

export default router;
