const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const audience = core.getInput('audience') || undefined;
    const idToken = await core.getIDToken(audience);

    core.setOutput('id_token', idToken);
    console.log('ID Token retrieved successfully');
  } catch (error) {
    core.setFailed(`Error retrieving ID token: ${error.message}`);
  }
}

run();

