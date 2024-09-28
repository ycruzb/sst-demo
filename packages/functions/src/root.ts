import { Handler } from 'aws-lambda';

export const main: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `sst-demo api`,
  };
};
