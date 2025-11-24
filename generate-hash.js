const bcrypt = require('bcryptjs');

const password = 'admin123';
const hash = bcrypt.hashSync(password, 10);

console.log('Password:', password);
console.log('Hash:', hash);
console.log('\nSQL to run in Supabase:');
console.log(`INSERT INTO users (username, password) VALUES ('admin', '${hash}');`);
