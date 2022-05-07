function processChunk (source, map) {
  this.cacheable()

  if (source.includes('code,')) {
    const newSource = source.replace("code,", `code: ${JSON.stringify(source)},`);

    this.callback(null, newSource, map)
  }else{
    this.callback(null, source, map)
  }
}

module.exports = processChunk
