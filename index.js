function mooncakeSays(message) {
  let mooncake = '(o.o aaaaaaaaa)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
