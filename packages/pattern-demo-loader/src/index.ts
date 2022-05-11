import parseImports from 'parse-es6-imports';

function addRawCode(source: string) {
  return `${source}
if (typeof Demo === 'function') {
  Demo.code = ${JSON.stringify(source)}
}
  `;
}

module.exports = function (source: string, map: string, meta) {
  this.cacheable();

  console.log('The original file was here:', this.resourcePath);

  const imports = parseImports(source);

  this.callback(
    null,
    addRawCode(`${source}\n\nvar imports=${JSON.stringify(imports, null, 2)}`),
    map,
    meta
  );
};
