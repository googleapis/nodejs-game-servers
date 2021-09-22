// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, configId, gameServerConfig) {
  // [START gaming_create_game_server_config_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name. Uses the form:
   *  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the game server config resource to be created.
   */
  // const configId = 'abc123'
  /**
   *  Required. The game server config resource to be created.
   */
  // const gameServerConfig = ''

  // Imports the Gaming library
  const {GameServerConfigsServiceClient} = require('@google-cloud/game-servers').v1beta;

  // Instantiates a client
  const gamingClient = new GameServerConfigsServiceClient();

  async function createGameServerConfig() {
    // Construct request
    const request = {
      parent,
      configId,
      gameServerConfig,
    };

    // Run request
    const [operation] = await gamingClient.createGameServerConfig(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createGameServerConfig();
  // [END gaming_create_game_server_config_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
