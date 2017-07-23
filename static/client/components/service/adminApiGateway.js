import apigClientFactory from 'aws-api-gateway-client'

export default class AdminApiGateway {

  constructor() {
    this.config = {
      invokeUrl: '',
      service: 'execute-api',
      region: 'eu-central-1'
    };
    this.apigClient = apigClientFactory.newClient(this.config)
  }

  callApi(params, pathTemplate, method, additionalParams, body, success, error) {
    this.apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
      .then(function (result) {
        success(result.data)
      }).catch(function (result) {
      error(result)
    })
  }

  init() {
  }

  // very primitive change listener
  onChange() {
  }

}

AdminApiGateway.install = function (Vue) {
  Object.defineProperty(Vue.prototype, '$adminApiGateway', {
    get() {
      return this.$root._adminApiGateway
    }
  });

  Vue.mixin({
    beforeCreate() {
      if (this.$options.adminApiGateway) {
        this._adminApiGateway = this.$options.adminApiGateway;
        this._adminApiGateway.init(this)
      }
    }
  })
};
