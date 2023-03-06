const { mkdirSync, writeFileSync } = require('fs')

const mainFolderName = process.argv[2]

const modelFolderName = 'model'
const sliceFolderName = 'slice'
const selectorsFolderName = 'selectors'
const typesFolderName = 'types'
const schemeFileName = `${mainFolderName}Scheme.ts`

const uiFolderName = 'ui'
const uiFileName = `${mainFolderName}.tsx`

const indexFileName = 'index.ts'

mkdirSync(mainFolderName)

mkdirSync(`${mainFolderName}/${modelFolderName}`)
mkdirSync(`${mainFolderName}/${modelFolderName}/${sliceFolderName}`)
mkdirSync(`${mainFolderName}/${modelFolderName}/${typesFolderName}`)
mkdirSync(`${mainFolderName}/${modelFolderName}/${selectorsFolderName}`)

writeFileSync(`${mainFolderName}/${modelFolderName}/${sliceFolderName}/${mainFolderName.toLowerCase()}Slice.ts`, '')
writeFileSync(`${mainFolderName}/${modelFolderName}/${typesFolderName}/${schemeFileName}`, '')

mkdirSync(`${mainFolderName}/${uiFolderName}`)
writeFileSync(`${mainFolderName}/${uiFolderName}/${uiFileName}`, '')

writeFileSync(`${mainFolderName}/${indexFileName}`, '')