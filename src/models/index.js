// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { User, BasicInfos } = initSchema(schema);

export {
  User,
  BasicInfos,
  Gender
};