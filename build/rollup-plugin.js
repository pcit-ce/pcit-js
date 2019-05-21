export default function tweakDefault() {
  return {
    renderChunk: function(source) {
      var lines = source.split('\n');
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var matches = /^(exports(?:\['default']|\.default)) = (.*);$/.exec(line);
        if (matches) {
          lines[i] = '\n/*insert*/\nmodule.exports = exports = ' + matches[2] + ';\n' +
            matches[1] + ' = exports;\n/*insert end*/';
        }

        matches = /^(  exports(?:\['default']|\.default)) = (.*);$/.exec(line);
        if (matches) {
          lines[i] = '\n/*insert*/\n  module.exports = exports = ' + matches[2] + ';\n' +
            matches[1] + ' = exports;\n/*insert end*/';
        }
      }
      return lines.join('\n');
    },
  };
}
