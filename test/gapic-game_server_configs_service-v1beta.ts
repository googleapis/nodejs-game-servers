// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const gameserverconfigsserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
function mockLongRunningGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: {} | null
) {
  return (request: {}) => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
describe('v1beta.GameServerConfigsServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient
        .servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port =
      gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.gameServerConfigsServiceStub, undefined);
    await client.initialize();
    assert(client.gameServerConfigsServiceStub);
  });
  it('has close method', () => {
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });
  describe('listGameServerConfigs', () => {
    it('invokes listGameServerConfigs without error', done => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listGameServerConfigs = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.listGameServerConfigs(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listGameServerConfigs with error', done => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listGameServerConfigs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.listGameServerConfigs(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getGameServerConfig', () => {
    it('invokes getGameServerConfig without error', done => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getGameServerConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getGameServerConfig(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getGameServerConfig with error', done => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getGameServerConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getGameServerConfig(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createGameServerConfig', () => {
    it('invokes createGameServerConfig without error', done => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.ICreateGameServerConfigRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createGameServerConfig = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .createGameServerConfig(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes createGameServerConfig with error', done => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.ICreateGameServerConfigRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createGameServerConfig = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .createGameServerConfig(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
  describe('deleteGameServerConfig', () => {
    it('invokes deleteGameServerConfig without error', done => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteGameServerConfig = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .deleteGameServerConfig(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes deleteGameServerConfig with error', done => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteGameServerConfig = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .deleteGameServerConfig(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
});
