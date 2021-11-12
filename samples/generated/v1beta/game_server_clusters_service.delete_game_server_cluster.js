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

function main(name) {
  // [START gameservices_v1beta_generated_GameServerClustersService_DeleteGameServerCluster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the game server cluster to delete. Uses the form:
   *  `projects/{project}/locations/{location}/gameServerClusters/{cluster}`.
   */
  // const name = 'abc123'

  // Imports the Gaming library
  const {GameServerClustersServiceClient} =
    require('@google-cloud/game-servers').v1beta;

  // Instantiates a client
  const gamingClient = new GameServerClustersServiceClient();

  async function callDeleteGameServerCluster() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await gamingClient.deleteGameServerCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteGameServerCluster();
  // [END gameservices_v1beta_generated_GameServerClustersService_DeleteGameServerCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));