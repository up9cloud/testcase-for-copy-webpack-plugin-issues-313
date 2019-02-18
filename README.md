# testcase-for-copy-webpack-plugin-issues-313

```bash
npm i
rm -fr dist/ # cleanup if you wanna rebuild
npm run build
```

> copy-webpack-plugin v4.6.0 result

```console
$ tree dist/
dist/
├── lib-copy
│   ├── dir
│   │   └── file-in-dir
│   └── file
├── lib-ln
│   └── file
└── main.js

3 directories, 4 files
```

> Expectation

```console
$ tree dist
dist
├── lib-copy
│   ├── dir
│   │   └── file-in-dir
│   └── file
├── lib-ln
│   ├── dir
│   │   └── file-in-dir
│   └── file
└── main.js

4 directories, 5 files
```
