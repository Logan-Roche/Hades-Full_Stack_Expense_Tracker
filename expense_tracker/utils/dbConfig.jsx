import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon("REPLACE BEFORE STARTING");
export const db = drizzle(sql,{schema});