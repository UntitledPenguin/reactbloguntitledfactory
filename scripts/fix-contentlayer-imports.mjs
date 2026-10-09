import { readdirSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'

const generatedDir = path.join(process.cwd(), '.contentlayer', 'generated')
const oldSyntax = " assert { type: 'json' }"
const newSyntax = " with { type: 'json' }"

function updateFile(filePath) {
  const source = readFileSync(filePath, 'utf8')
  if (!source.includes(oldSyntax)) return

  writeFileSync(filePath, source.replaceAll(oldSyntax, newSyntax))
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      walk(entryPath)
    } else if (entry.isFile() && entry.name.endsWith('.mjs')) {
      updateFile(entryPath)
    }
  }
}

walk(generatedDir)
console.log('Contentlayer JSON imports updated...')
