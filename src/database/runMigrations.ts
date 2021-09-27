import path from 'path';
import { readdir, readFile } from 'fs';
import { createConection } from './conection';

(async () => {
  const client = await createConection();
  const fileDatabaseDir = path.join(__dirname, 'migrations');

  console.log(new Date(), 'Start migrations 🔥');

  readdir(fileDatabaseDir, (err, files) => {
    if (err) {
      console.error(err);
    }

    files.forEach((file) => {
      readFile(path.join(fileDatabaseDir, file), async (err, content) => {
        if (err) {
          console.error(err);
        }

        const runMigrationQuery = content.toString();

        await client.query(runMigrationQuery);
      });
    });
    console.log(new Date(), 'Completed migrations 🆗');
  });
})();
