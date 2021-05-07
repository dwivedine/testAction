import * as core from '@actions/core'
import * as idaction from '@dwivedine/oidcclientpublic'
//import * as idaction from '../../../oidcClientPublic/oidcClientPublic/lib/main'

async function run(): Promise<void> {
  try {
    const body = idaction.getIDToken(
      'ghactions',
      'HelloWorld123#',
      'https://ghactionsoidc.azurewebsites.net/connect/token/'
    )
    core.debug(`body is ${body}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
