// Copyright 2020 Google LLC
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

import * as gax from 'google-gax';
import {APICallback, Callback, CallOptions, Descriptors, ClientOptions, LROperation} from 'google-gax';
import * as path from 'path';

import * as protosTypes from '../../protos/protos';
import * as gapicConfig from './game_server_configs_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  The Game Server Config configures the game servers in an Agones fleet.
 * @class
 * @memberof v1beta
 */
export class GameServerConfigsServiceClient {
  private _descriptors: Descriptors = {page: {}, stream: {}, longrunning: {}, batching: {}};
  private _innerApiCalls: {[name: string]: Function};
  private _pathTemplates: {[name: string]: gax.PathTemplate};
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  operationsClient: gax.OperationsClient;
  gameServerConfigsServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of GameServerConfigsServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof GameServerConfigsServiceClient;
    const servicePath = opts && opts.servicePath ?
        opts.servicePath :
        ((opts && opts.apiEndpoint) ? opts.apiEndpoint :
                                      staticMembers.servicePath);
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = (typeof window !== 'undefined');
    if (isBrowser){
      opts.fallback = true;
    }
    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    this._gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof GameServerConfigsServiceClient).scopes;
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(__dirname, '..', '..', 'protos', 'protos.json');
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback ?
        require("../../protos/protos.json") :
        nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      gameServerClusterPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}'
      ),
      gameServerConfigPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/{config}'
      ),
      gameServerDeploymentPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/gameServerDeployments/{deployment}'
      ),
      gameServerDeploymentRolloutPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout'
      ),
      realmPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/realms/{realm}'
      ),
    };

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    const protoFilesRoot = opts.fallback?
      /* eslint-disable @typescript-eslint/no-var-requires */
      this._gaxModule.protobuf.Root.fromJSON(require("../../protos/protos.json")) :
      this._gaxModule.protobuf.loadSync(nodejsProtoPath);

    this.operationsClient = this._gaxModule.lro({
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined
    }).operationsClient(opts);
    const createGameServerConfigResponse = protoFilesRoot.lookup(
      '.google.cloud.gaming.v1beta.GameServerConfig') as gax.protobuf.Type;
    const createGameServerConfigMetadata = protoFilesRoot.lookup(
      '.google.cloud.gaming.v1beta.OperationMetadata') as gax.protobuf.Type;
    const deleteGameServerConfigResponse = protoFilesRoot.lookup(
      '.google.cloud.gaming.v1beta.GameServerConfig') as gax.protobuf.Type;
    const deleteGameServerConfigMetadata = protoFilesRoot.lookup(
      '.google.cloud.gaming.v1beta.OperationMetadata') as gax.protobuf.Type;

    this._descriptors.longrunning = {
      createGameServerConfig: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        createGameServerConfigResponse.decode.bind(createGameServerConfigResponse),
        createGameServerConfigMetadata.decode.bind(createGameServerConfigMetadata)),
      deleteGameServerConfig: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deleteGameServerConfigResponse.decode.bind(deleteGameServerConfigResponse),
        deleteGameServerConfigMetadata.decode.bind(deleteGameServerConfigMetadata))
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.gaming.v1beta.GameServerConfigsService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.gameServerConfigsServiceStub) {
      return this.gameServerConfigsServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.gaming.v1beta.GameServerConfigsService.
    this.gameServerConfigsServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.gaming.v1beta.GameServerConfigsService') :
          /* eslint-disable @typescript-eslint/no-explicit-any */
          (this._protos as any).google.cloud.gaming.v1beta.GameServerConfigsService,
        this._opts) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const gameServerConfigsServiceStubMethods =
        ['listGameServerConfigs', 'getGameServerConfig', 'createGameServerConfig', 'deleteGameServerConfig'];

    for (const methodName of gameServerConfigsServiceStubMethods) {
      const innerCallPromise = this.gameServerConfigsServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const apiCall = this._gaxModule.createApiCall(
        innerCallPromise,
        this._defaults[methodName],
        this._descriptors.page[methodName] ||
            this._descriptors.stream[methodName] ||
            this._descriptors.longrunning[methodName]
      );

      this._innerApiCalls[methodName] = (
        argument: {},
        callOptions?: CallOptions,
        callback?: APICallback
      ) => {
        return apiCall(argument, callOptions, callback);
      };
    }

    return this.gameServerConfigsServiceStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'gameservices.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'gameservices.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  listGameServerConfigs(
      request: protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsResponse,
        protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest|undefined, {}|undefined
      ]>;
  listGameServerConfigs(
      request: protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsResponse,
          protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest|undefined,
          {}|undefined>): void;
/**
 * Lists Game Server Configs in a given project, Location, and Game Server
 * Deployment.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ListGameServerConfigsResponse]{@link google.cloud.gaming.v1beta.ListGameServerConfigsResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  listGameServerConfigs(
      request: protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsResponse,
          protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsResponse,
          protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsResponse,
        protosTypes.google.cloud.gaming.v1beta.IListGameServerConfigsRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this._innerApiCalls.listGameServerConfigs(request, options, callback);
  }
  getGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.gaming.v1beta.IGameServerConfig,
        protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest|undefined, {}|undefined
      ]>;
  getGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.gaming.v1beta.IGameServerConfig,
          protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest|undefined,
          {}|undefined>): void;
/**
 * Gets details of a single Game Server Config.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [GameServerConfig]{@link google.cloud.gaming.v1beta.GameServerConfig}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  getGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.gaming.v1beta.IGameServerConfig,
          protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.gaming.v1beta.IGameServerConfig,
          protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.gaming.v1beta.IGameServerConfig,
        protosTypes.google.cloud.gaming.v1beta.IGetGameServerConfigRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this._innerApiCalls.getGameServerConfig(request, options, callback);
  }

  createGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.ICreateGameServerConfigRequest,
      options?: gax.CallOptions):
      Promise<[
        LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
        protosTypes.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  createGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.ICreateGameServerConfigRequest,
      options: gax.CallOptions,
      callback: Callback<
          LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
          protosTypes.google.longrunning.IOperation|undefined,
          {}|undefined>): void;
/**
 * Creates a new Game Server Config in a given project, Location, and Game
 * Server Deployment. Game Server Configs are immutable, and are not applied
 * until referenced in the Game Server Deployment Rollout resource.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Operation]{@link google.longrunning.Operation}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  createGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.ICreateGameServerConfigRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
          protosTypes.google.longrunning.IOperation|undefined, {}|undefined>,
      callback?: Callback<
          LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
          protosTypes.google.longrunning.IOperation|undefined,
          {}|undefined>):
      Promise<[
        LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
        protosTypes.google.longrunning.IOperation|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this._innerApiCalls.createGameServerConfig(request, options, callback);
  }
  deleteGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest,
      options?: gax.CallOptions):
      Promise<[
        LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
        protosTypes.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  deleteGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest,
      options: gax.CallOptions,
      callback: Callback<
          LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
          protosTypes.google.longrunning.IOperation|undefined,
          {}|undefined>): void;
/**
 * Deletes a single Game Server Config. The deletion will fail if the Game
 * Server Config is referenced in a Game Server Deployment Rollout.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Operation]{@link google.longrunning.Operation}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  deleteGameServerConfig(
      request: protosTypes.google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
          protosTypes.google.longrunning.IOperation|undefined, {}|undefined>,
      callback?: Callback<
          LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
          protosTypes.google.longrunning.IOperation|undefined,
          {}|undefined>):
      Promise<[
        LROperation<protosTypes.google.cloud.gaming.v1beta.IGameServerConfig, protosTypes.google.cloud.gaming.v1beta.IOperationMetadata>,
        protosTypes.google.longrunning.IOperation|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this._innerApiCalls.deleteGameServerConfig(request, options, callback);
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified gameServerCluster resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} realm
   * @param {string} cluster
   * @returns {string} Resource name string.
   */
  gameServerClusterPath(project:string,location:string,realm:string,cluster:string) {
    return this._pathTemplates.gameServerClusterPathTemplate.render({
      project: project,
      location: location,
      realm: realm,
      cluster: cluster,
    });
  }

  /**
   * Parse the project from GameServerCluster resource.
   *
   * @param {string} gameServerClusterName
   *   A fully-qualified path representing GameServerCluster resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromGameServerClusterName(gameServerClusterName: string) {
    return this._pathTemplates.gameServerClusterPathTemplate.match(gameServerClusterName).project;
  }

  /**
   * Parse the location from GameServerCluster resource.
   *
   * @param {string} gameServerClusterName
   *   A fully-qualified path representing GameServerCluster resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromGameServerClusterName(gameServerClusterName: string) {
    return this._pathTemplates.gameServerClusterPathTemplate.match(gameServerClusterName).location;
  }

  /**
   * Parse the realm from GameServerCluster resource.
   *
   * @param {string} gameServerClusterName
   *   A fully-qualified path representing GameServerCluster resource.
   * @returns {string} A string representing the realm.
   */
  matchRealmFromGameServerClusterName(gameServerClusterName: string) {
    return this._pathTemplates.gameServerClusterPathTemplate.match(gameServerClusterName).realm;
  }

  /**
   * Parse the cluster from GameServerCluster resource.
   *
   * @param {string} gameServerClusterName
   *   A fully-qualified path representing GameServerCluster resource.
   * @returns {string} A string representing the cluster.
   */
  matchClusterFromGameServerClusterName(gameServerClusterName: string) {
    return this._pathTemplates.gameServerClusterPathTemplate.match(gameServerClusterName).cluster;
  }

  /**
   * Return a fully-qualified gameServerConfig resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} deployment
   * @param {string} config
   * @returns {string} Resource name string.
   */
  gameServerConfigPath(project:string,location:string,deployment:string,config:string) {
    return this._pathTemplates.gameServerConfigPathTemplate.render({
      project: project,
      location: location,
      deployment: deployment,
      config: config,
    });
  }

  /**
   * Parse the project from GameServerConfig resource.
   *
   * @param {string} gameServerConfigName
   *   A fully-qualified path representing GameServerConfig resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromGameServerConfigName(gameServerConfigName: string) {
    return this._pathTemplates.gameServerConfigPathTemplate.match(gameServerConfigName).project;
  }

  /**
   * Parse the location from GameServerConfig resource.
   *
   * @param {string} gameServerConfigName
   *   A fully-qualified path representing GameServerConfig resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromGameServerConfigName(gameServerConfigName: string) {
    return this._pathTemplates.gameServerConfigPathTemplate.match(gameServerConfigName).location;
  }

  /**
   * Parse the deployment from GameServerConfig resource.
   *
   * @param {string} gameServerConfigName
   *   A fully-qualified path representing GameServerConfig resource.
   * @returns {string} A string representing the deployment.
   */
  matchDeploymentFromGameServerConfigName(gameServerConfigName: string) {
    return this._pathTemplates.gameServerConfigPathTemplate.match(gameServerConfigName).deployment;
  }

  /**
   * Parse the config from GameServerConfig resource.
   *
   * @param {string} gameServerConfigName
   *   A fully-qualified path representing GameServerConfig resource.
   * @returns {string} A string representing the config.
   */
  matchConfigFromGameServerConfigName(gameServerConfigName: string) {
    return this._pathTemplates.gameServerConfigPathTemplate.match(gameServerConfigName).config;
  }

  /**
   * Return a fully-qualified gameServerDeployment resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} deployment
   * @returns {string} Resource name string.
   */
  gameServerDeploymentPath(project:string,location:string,deployment:string) {
    return this._pathTemplates.gameServerDeploymentPathTemplate.render({
      project: project,
      location: location,
      deployment: deployment,
    });
  }

  /**
   * Parse the project from GameServerDeployment resource.
   *
   * @param {string} gameServerDeploymentName
   *   A fully-qualified path representing GameServerDeployment resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromGameServerDeploymentName(gameServerDeploymentName: string) {
    return this._pathTemplates.gameServerDeploymentPathTemplate.match(gameServerDeploymentName).project;
  }

  /**
   * Parse the location from GameServerDeployment resource.
   *
   * @param {string} gameServerDeploymentName
   *   A fully-qualified path representing GameServerDeployment resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromGameServerDeploymentName(gameServerDeploymentName: string) {
    return this._pathTemplates.gameServerDeploymentPathTemplate.match(gameServerDeploymentName).location;
  }

  /**
   * Parse the deployment from GameServerDeployment resource.
   *
   * @param {string} gameServerDeploymentName
   *   A fully-qualified path representing GameServerDeployment resource.
   * @returns {string} A string representing the deployment.
   */
  matchDeploymentFromGameServerDeploymentName(gameServerDeploymentName: string) {
    return this._pathTemplates.gameServerDeploymentPathTemplate.match(gameServerDeploymentName).deployment;
  }

  /**
   * Return a fully-qualified gameServerDeploymentRollout resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} deployment
   * @returns {string} Resource name string.
   */
  gameServerDeploymentRolloutPath(project:string,location:string,deployment:string) {
    return this._pathTemplates.gameServerDeploymentRolloutPathTemplate.render({
      project: project,
      location: location,
      deployment: deployment,
    });
  }

  /**
   * Parse the project from GameServerDeploymentRollout resource.
   *
   * @param {string} gameServerDeploymentRolloutName
   *   A fully-qualified path representing GameServerDeploymentRollout resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromGameServerDeploymentRolloutName(gameServerDeploymentRolloutName: string) {
    return this._pathTemplates.gameServerDeploymentRolloutPathTemplate.match(gameServerDeploymentRolloutName).project;
  }

  /**
   * Parse the location from GameServerDeploymentRollout resource.
   *
   * @param {string} gameServerDeploymentRolloutName
   *   A fully-qualified path representing GameServerDeploymentRollout resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromGameServerDeploymentRolloutName(gameServerDeploymentRolloutName: string) {
    return this._pathTemplates.gameServerDeploymentRolloutPathTemplate.match(gameServerDeploymentRolloutName).location;
  }

  /**
   * Parse the deployment from GameServerDeploymentRollout resource.
   *
   * @param {string} gameServerDeploymentRolloutName
   *   A fully-qualified path representing GameServerDeploymentRollout resource.
   * @returns {string} A string representing the deployment.
   */
  matchDeploymentFromGameServerDeploymentRolloutName(gameServerDeploymentRolloutName: string) {
    return this._pathTemplates.gameServerDeploymentRolloutPathTemplate.match(gameServerDeploymentRolloutName).deployment;
  }

  /**
   * Return a fully-qualified realm resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} realm
   * @returns {string} Resource name string.
   */
  realmPath(project:string,location:string,realm:string) {
    return this._pathTemplates.realmPathTemplate.render({
      project: project,
      location: location,
      realm: realm,
    });
  }

  /**
   * Parse the project from Realm resource.
   *
   * @param {string} realmName
   *   A fully-qualified path representing Realm resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromRealmName(realmName: string) {
    return this._pathTemplates.realmPathTemplate.match(realmName).project;
  }

  /**
   * Parse the location from Realm resource.
   *
   * @param {string} realmName
   *   A fully-qualified path representing Realm resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromRealmName(realmName: string) {
    return this._pathTemplates.realmPathTemplate.match(realmName).location;
  }

  /**
   * Parse the realm from Realm resource.
   *
   * @param {string} realmName
   *   A fully-qualified path representing Realm resource.
   * @returns {string} A string representing the realm.
   */
  matchRealmFromRealmName(realmName: string) {
    return this._pathTemplates.realmPathTemplate.match(realmName).realm;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.gameServerConfigsServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
