import { google } from 'googleapis';

const CLIENT_ID =
  '918589291462-vblmapmlqocrbgmnq0dgne8qrbh4rlcl.apps.googleusercontent.com';
const CLIENT_SECRET = 'HpJggSMJEesAwf6wkVuJ_0Ru';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN =
  '1//04236JL5OkMX-CgYIARAAGAQSNwF-L9IrXm0hIUCwYknu-Irlc4XyhSfu5p3XWdB3up7swiOq6oLPAqWxGy-CRvxZacH8Mc29MAM';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default google.drive({
  version: 'v3',
  auth: oauth2Client,
});
