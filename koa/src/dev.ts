import { config } from 'dotenv';
import path from 'path';

config({ path: path.join(__dirname, '..', '.env') });

// eslint-disable-next-line import/first
import { app } from './app';

app.listen(3000, () => console.log('Listening on port 3000'));
