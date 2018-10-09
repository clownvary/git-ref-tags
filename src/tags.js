const exec = require('child_process').execSync;

/**
 *
 * @param {string} repoUrl a repository url which you want to get tags
 */
function getTags(repoUrl) {
  const versionReg = /\^{}/;

  const stdout = exec(`git ls-remote --tags ${repoUrl}`).toString();
  let versions = stdout.split('\n');
  versions = versions.filter(v => !versionReg.test(v)).map((v) => {
    const index = v.indexOf('refs/tags/');
    if (index !== -1) {
      return {
        hash: v.slice(0,index -1),
        name: v.slice(index + 10)
      };
    }
    return null;
  });
  return versions.filter(v=> v);
}

module.exports = { getTags };

