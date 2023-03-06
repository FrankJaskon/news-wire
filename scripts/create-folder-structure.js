const { mkdirSync, writeFileSync } = require('fs')

const dirName = process.argv[2]
const uiDirName = 'ui'

mkdirSync(dirName)
mkdirSync(`${dirName}/${uiDirName}`)

writeFileSync(`${dirName}/index.ts`, '')
writeFileSync(`${dirName}/${uiDirName}/${dirName}.tsx`, '')
writeFileSync(`${dirName}/${uiDirName}/${dirName}.module.scss`, '')
writeFileSync(`${dirName}/${uiDirName}/${dirName}.stories.tsx`, '')
writeFileSync(`${dirName}/${uiDirName}/${dirName}.test.tsx`, '')