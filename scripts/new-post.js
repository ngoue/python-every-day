#!/usr/bin/env node

const fs = require(`fs`)
const moment = require(`moment`)
const path = require(`path`)
const { exec } = require("child_process")

const EXIT_DIR_ERROR = 10
const EXIT_DIR_EXISTS = 20

const [, , title] = process.argv
const now = moment()
const date = now.format("YYYY-MM-DD")
const processedTitle = title.toLowerCase().replace(/\s/g, "-")
const postDir = `content/posts/${date}-${processedTitle}`
const postFilename = `index.md`
const postPath = path.join(postDir, postFilename)
const postStub = `
---
path: /${processedTitle}
date: ${now.toISOString()}
title: FIX TITLE :: ${processedTitle}
---

Write stuff about \`python\` here
`.trim()

// Create new directory in `content/posts`
if (!fs.existsSync(postDir)) {
  try {
    fs.mkdirSync(postDir)
  } catch (err) {
    console.error(`error creating ${postDir}`)
    process.exit(EXIT_DIR_ERROR)
  }
} else {
  console.error(`${postDir} already exists`)
  process.exit(EXIT_DIR_EXISTS)
}

// Stub out post
fs.writeFileSync(postPath, postStub)
exec(`code ${postPath}`)
