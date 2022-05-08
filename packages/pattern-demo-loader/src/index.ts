function processChunk(source: string, map: string) {
  this.cacheable();

  this.callback(
    null,
    `${source}
if (typeof Demo === 'function') {
  Demo.code = ${JSON.stringify(source)}
}
  `,
    map
  );
}

module.exports = processChunk;
