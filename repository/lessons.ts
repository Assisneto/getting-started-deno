import {Client} from 'https://deno.land/x/mysql/mod.ts';

import Lesson from './../model/lesson.ts';

export default async(): Promise<Lesson[]> =>{

  const client = await new Client().connect({
    hostname:"127.0.0.1",
    username:"root",
    password:"test",
    db:"test"
  })

  const records = await client.query("select * from lessons");

  await client.close();

  return records;
}