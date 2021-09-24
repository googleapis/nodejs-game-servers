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

function main(parent) {
  // [START gaming_v1_generated_GameServerClustersService_ListGameServerClusters_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name, in the following form:
   *  "projects/{project}/locations/{location}/realms/{realm}".
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of items to return. If unspecified, the server
   *  will pick an appropriate default. The server may return fewer items than
   *  requested. A caller should only rely on response's
   *  [next_page_token][google.cloud.gaming.v1.ListGameServerClustersResponse.next_page_token] to
   *  determine if there are more GameServerClusters left to be queried.
   */
  // const pageSize = 1234
  /**
   *  Optional. The next_page_token value returned from a previous List request, if any.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The filter to apply to list results.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Specifies the ordering of results following syntax at
   *  https://cloud.google.com/apis/design/design_patterns#sorting_order.
   */
  // const orderBy = 'abc123'
  /**
   *  Optional. View for the returned GameServerCluster objects. When `FULL` is
   *  specified, the `cluster_state` field is also returned in the
   *  GameServerCluster object, which includes the state of the referenced
   *  Kubernetes cluster such as versions and provider info. The default/unset
   *  value is GAME_SERVER_CLUSTER_VIEW_UNSPECIFIED, same as BASIC, which does
   *  not return the `cluster_state` field.
   */
  // const view = ''

  // Imports the Gaming library
  const {GameServerClustersServiceClient} = require('@google-cloud/game-servers').v1;

  // Instantiates a client
  const gamingClient = new GameServerClustersServiceClient();

  async function listGameServerClusters() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await gamingClient.listGameServerClustersAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listGameServerClusters();
  // [END gaming_v1_generated_GameServerClustersService_ListGameServerClusters_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
