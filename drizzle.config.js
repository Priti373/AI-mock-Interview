/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-interview-mocker_owner:9ckErPSu2Ciz@ep-long-fire-a5s6jfjz.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
  }
};

