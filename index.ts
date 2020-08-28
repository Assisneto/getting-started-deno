import {writeJsonSync} from 'https://deno.land/std/fs/mod.ts'

import getLessons from './repository/lessons.ts';

const lessonsRecord = await getLessons();

const lessons = lessonsRecord.map(lesson => `${lesson.id} - ${lesson.name} \n`)

writeJsonSync("./lessons.txt",lessons);

