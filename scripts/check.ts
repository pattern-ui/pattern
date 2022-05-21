import execa from 'execa';

const check = async () => {
  const lintWrite = execa('npm', ['run', 'lint:write']);
  lintWrite.stdout.pipe(process.stdout);
  await lintWrite;

  const prettierWrite = execa('npm', ['run', 'prettier:write']);
  prettierWrite.stdout.pipe(process.stdout);
  await prettierWrite;

  const test = execa('npm', ['run', 'test']);
  test.stdout.pipe(process.stdout);
  await test;

  const buildDocs = execa('npm', ['run', 'docs:build']);
  buildDocs.stdout.pipe(process.stdout);
  await buildDocs;
};

check();
