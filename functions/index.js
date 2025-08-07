import path from 'node:path';
import moduleAlias from 'module-alias';

moduleAlias.addAlias('@', path.join(__dirname, '../lib'));

import { setConfig } from '../lib/config';
setConfig({
    NO_LOGFILES: true,
});

import { handle } from 'hono/vercel';
import app from '../lib/app';
import logger from '../lib/utils/logger';

logger.info(`🎉 RSSHub is running! Cheers!`);

export default handle(app);
