import {Config, CognitoIdentityCredentials, DynamoDB} from 'aws-sdk'
import {CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserAttribute} from 'amazon-cognito-identity-js'


export default class CognitoAuth {

  constructor() {
    this.userSession = null;
    this.userPool = new CognitoUserPool({
    });
    Config.region = 'eu-central-1';
    Config.credentials = new CognitoIdentityCredentials({
    })
  }

  isAuthenticated(cb) {
    let cognitoUser = this.getCurrentUser();

    if (cognitoUser !== null) {
      cognitoUser.getSession((err, session) => {
        if (err) {
          return cb(err, false)
        }
        return cb(session, true)
      })
    } else {
      cb(null, false)
    }
  }

  signIn(username, password, callback) {
    let authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password
    });
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool
    });
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        let logins = {};
        logins['cognito-idp.' + 'eu-central-1' + '.amazonaws.com/' + 'eu-central-'] = result.getIdToken().getJwtToken();

        Config.credentials = new CognitoIdentityCredentials({
          IdentityPoolId: 'eu-central-',
          Logins: logins
        });
        this.onChange(true);
        callback(null, logins);
      },
      onFailure: (err) => {
        callback(err)
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        callback()
      }
    })
  }

  forceChangePassword(username, oldPassword, newPassword, callback) {
    let authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: oldPassword
    });
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool
    });
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        let logins = {};
        logins['cognito-idp.' + 'eu-central-1' + '.amazonaws.com/' + 'eu-central-'] = result.getIdToken().getJwtToken();
        console.log(logins['cognito-idp.' + 'eu-central-1' + '.amazonaws.com/' + 'eu-central-']);
        Config.credentials = new CognitoIdentityCredentials({
          IdentityPoolId: 'eu-central-',
          Logins: logins
        });
        this.onChange(true);
        callback(null, result)
      },
      onFailure: (err) => {
        callback(err)
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        cognitoUser.completeNewPasswordChallenge(newPassword, null, {
          onSuccess: (result) => {
            let logins = {};
            logins['cognito-idp.' + 'eu-central-1' + '.amazonaws.com/' + 'eu-central-'] = result.getIdToken().getJwtToken();

            Config.credentials = new CognitoIdentityCredentials({
              Logins: logins
            });
            this.onChange(true);
            callback(null, result)
          },
          onFailure: (err) => {
            callback(err)
          }
        })
      }
    })
  }

  logout() {
    this.getCurrentUser().signOut();
    this.onChange(false)
  }

  getIdToken(cb) {
    if (this.userPool.getCurrentUser() === null) {
      return cb(null, null)
    }
    this.userPool.getCurrentUser().getSession((err, session) => {
      if (err) return cb(err);
      if (session.isValid()) {
        return cb(null, session.getIdToken().getJwtToken())
      }
      cb(Error('Session is invalid'))
    })
  }

  getCurrentUser() {
    return this.userPool.getCurrentUser()
  }

  init() {
  }

  // very primitive change listener
  onChange() {
  }

}

CognitoAuth.install = function (Vue) {
  Object.defineProperty(Vue.prototype, '$cognitoAuth', {
    get() {
      return this.$root._cognitoAuth
    }
  });

  Vue.mixin({
    beforeCreate() {
      if (this.$options.cognitoAuth) {
        this._cognitoAuth = this.$options.cognitoAuth;
        this._cognitoAuth.init(this)
      }
    }
  })
};
