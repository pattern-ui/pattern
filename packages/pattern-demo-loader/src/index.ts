// https://babel.dev/docs/en/babel-parser
import path from 'path';
import fs from 'fs';
import { parse } from '@babel/parser';
import { ImportDeclaration } from '@babel/types';
import { FlattenImport, ImportType } from './type';

const addRawCode = (source: string, imports: FlattenImport[]) => `
${source}

if (typeof Demo === 'function') {
  Demo.code = ${JSON.stringify(source)}
  Demo.imports = ${JSON.stringify(imports)}
}
  `;

const getFilename = (filename: string, exts = ['tsx', 'ts', 'js', 'jsx']) => {
  const ext = exts.find((it) => fs.existsSync(`${filename}.${it}`));
  if (ext) {
    return `${filename}.${ext}`;
  }
  throw new Error(`file not found: ${filename}`);
};

const getImportsData = (code: string, codePath: string) => {
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx'],
  });

  const pathObj = path.parse(codePath);

  return ast.program.body
    .filter((it) => it.type === 'ImportDeclaration')
    .map((it: any) => it.source.value)
    .filter((it) => it.startsWith('.'))
    .map<ImportType>((it) => {
      const importPath = getFilename(path.resolve(pathObj.dir, it));
      const importFileObj = path.parse(importPath);
      const importCode = fs.readFileSync(importPath).toString();
      return {
        raw: it,
        name: importFileObj.base,
        content: importCode,
        imports: getImportsData(importCode, importPath),
      };
    });
};

const flatImports = (imports: ImportType[]): FlattenImport[] =>
  imports.reduce<FlattenImport[]>((acc, current) => {
    const { imports: currentImports, ...rest } = current;
    acc.push(rest, ...flatImports(currentImports));
    return acc;
  }, []);

module.exports = function (source: string, map: string, meta) {
  this.cacheable();

  const imports = getImportsData(source, this.resourcePath);

  const flattenImports = flatImports(imports);

  this.callback(null, addRawCode(source, flattenImports), map, meta);
};
