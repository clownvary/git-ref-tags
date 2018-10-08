# git-ref-tags

> A lib to get tags and hash from remote git repository(github/gitlab)


## Install

> Need install git before you using this lib

```
$ npm install --save git-ref-tags
```

## Usage

```js
const gitRefTags = require('git-ref-tags');

const tags = gitRefTags('https://github.com/clownvary/git-ref-tags');
// tags like below
[
  { hash: '62123f682d00f40b6ebaf2dc591e25c00a9201fe',
    name: 'v0.1.0'
  },
  { hash: '8b3940bc0cce7e6c1a64af08edd8a75fedbdc3d1',
    name: 'v0.2.0'
  }
]
```

## API

### gitRefTags(url)

Returns a `Array[object]` with the Git tags and hash.

#### url

Type: `string`

Git repo URL.

## License

MIT ©