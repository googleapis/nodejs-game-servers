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

function main(rollout) {
  // [START gameservices_v1beta_generated_GameServerDeploymentsService_PreviewGameServerDeploymentRollout_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The game server deployment rollout to be updated.
   *  Only fields specified in update_mask are updated.
   */
  // const rollout = {}
  /**
   *  Optional. Mask of fields to update. At least one path must be supplied in
   *  this field. For the `FieldMask` definition, see
   *  https:
   *  //developers.google.com/protocol-buffers
   *  // /docs/reference/google.protobuf#fieldmask
   */
  // const updateMask = {}
  /**
   *  Optional. The target timestamp to compute the preview. Defaults to the
   *  immediately after the proposed rollout completes.
   */
  // const previewTime = {}

  // Imports the Gaming library
  const {GameServerDeploymentsServiceClient} = require('@google-cloud/game-servers').v1beta;

  // Instantiates a client
  const gamingClient = new GameServerDeploymentsServiceClient();

  async function callPreviewGameServerDeploymentRollout() {
    // Construct request
    const request = {
      rollout,
    };

    // Run request
    const response = await gamingClient.previewGameServerDeploymentRollout(request);
    console.log(response);
  }

  callPreviewGameServerDeploymentRollout();
  // [END gameservices_v1beta_generated_GameServerDeploymentsService_PreviewGameServerDeploymentRollout_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
