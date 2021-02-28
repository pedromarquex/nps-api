import 'dotenv/config';
import app from './app';

app.listen(process.env.APP_PORT || 3333, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🚀 Server running at ${process.env.APP_URL}`);
  }
});
