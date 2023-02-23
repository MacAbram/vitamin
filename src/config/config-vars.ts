export const NASDAQ_API_URL: string = process.env.REACT_APP_NASDAQ_API_URL || '';
export const NASDAQ_API_KEY: string = process.env.REACT_APP_NASDAQ_API_KEY || '';

const requiredEnv = ['REACT_APP_NASDAQ_API_URL', 'REACT_APP_NASDAQ_API_KEY'];

const unsetEnv = requiredEnv.filter((env) => typeof process.env[env] === 'undefined');

if (unsetEnv.length > 0) {
  console.error('Required ENV variables are not set: [' + unsetEnv.join(', ') + ']');
}
