
import {
	mediaHandlerConfig,
	createMediaHandler,
} from 'next-tinacms-s3/dist/handlers'

console.log('[INFO] adsad ')
export const config = mediaHandlerConfig


export default createMediaHandler({
	config: {
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY || '',
			secretAccessKey: process.env.S3_SECRET_KEY || '',
		},
		region: process.env.S3_REGION,
	},
	bucket: process.env.S3_BUCKET || '',
	authorized: async (/*req, _res*/) => {
		return true;
	},
},
	{
		cdnUrl: process.env.S3_CDN_URL,
	})
