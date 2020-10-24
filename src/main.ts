import * as core from '@actions/core'
import {unlink} from 'fs'

async function run(): Promise<void> {
  try {
    const files: string[] = core.getInput('files').split(' ')

    core.debug(new Date().toTimeString())

    for await (const file of files) {
      core.debug(`remove ${file}`)

      unlink(file, error => {
        if (error) {
          throw error
        }
      })
    }

    core.debug(new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
