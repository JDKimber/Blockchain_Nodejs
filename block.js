class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = dataa;
  }

  toString() {
    return `Block -
      Timestamp: ${this.timestamp}
      Last Hash: ${this.lastHash.substring(0, 10)}
      Hash: ${this.hash.substring(0, 10)}
      Data: ${this.data}`;
  }
}

module.exports = Block;
