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

function main(realm, updateMask) {
  // [START gameservices_v1_generated_RealmsService_PreviewRealmUpdate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The realm to be updated.
   *  Only fields specified in update_mask are updated.
   */
  // const realm = {}
  /**
   *  Required. The update mask applies to the resource. For the `FieldMask`
   *  definition, see
   *  https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  // const updateMask = {}
  /**
   *  Optional. The target timestamp to compute the preview.
   */
  // const previewTime = {}

  // Imports the Gaming library
  const {RealmsServiceClient} = require('@google-cloud/game-servers').v1;

  // Instantiates a client
  const gamingClient = new RealmsServiceClient();

  async function callPreviewRealmUpdate() {
    // Construct request
    const request = {
      realm,
      updateMask,
    };

    // Run request
    const response = await gamingClient.previewRealmUpdate(request);
    console.log(response);
  }

  callPreviewRealmUpdate();
  // [END gameservices_v1_generated_RealmsService_PreviewRealmUpdate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
