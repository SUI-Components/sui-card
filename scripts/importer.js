var path = require('path');
var fs = require('fs');

module.exports = function (url, file, done) {
  if (url[0] === '.') {
    return done({file: url});
  } else {
    done({file: recursiveFind(url)});
  }
}

function recursiveFind(url) {
  const urlTree = url.split(path.sep);
  urlTree.pop();
  const folder = path.join(__dirname, '../node_modules', urlTree.join(path.sep));

  if (folder === path.join(path.sep + urlTree.join(path.sep))) {
    return '';
  }

  if (!fs.existsSync(folder)) {
    return recursiveFind(path.join('../', url));
  } else {
    return path.join('../node_modules', url);
  }
}
