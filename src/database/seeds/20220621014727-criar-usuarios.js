const bcriptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'John Doe',
        email: 'john@doemail.com',
        password_hash: await bcriptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Fernando',
        email: 'fernando@email.com',
        password_hash: await bcriptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz',
        email: 'luizfernando@email.com',
        password_hash: await bcriptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      ],
    );
  },
};
// É não funcionou
