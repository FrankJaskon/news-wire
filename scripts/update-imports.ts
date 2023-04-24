import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const checkIfImportIsAbsolute = (value: string) => {
	const layers = ['pages', 'features', 'widgets', 'entities', 'shared']

	return layers.some(layer => value.startsWith(layer))
}

files.forEach(sourceFile => {
	const importDeclarations = sourceFile.getImportDeclarations()

	importDeclarations.forEach(importDeclaration => {
		const value = importDeclaration.getModuleSpecifierValue()
		if (checkIfImportIsAbsolute(value)) {
			importDeclaration.setModuleSpecifier('@/' + value)
		}
	})
})

project.save()