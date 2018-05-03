import {CommonService} from '../services/common.service';

export const backendURL = {
  'issues': 'https://api.github.com/repos/angular/angular.js/issues',
  'repository': 'https://api.github.com/repos/angular/angular.js',
  'star': 'https://api.github.com/user/starred/angular/angular.js',
  'subscription': 'https://api.github.com/repos/angular/angular.js/subscription',
  'filteredResults': 'https://api.github.com/search/issues?q='
};

export const appHeaders = {
  'Authorization': 'Basic ',
  'ContentTypeJSON': 'application/json'
}

export const gitHubUser = {
  'username': 'laluali',
  'password': 'Cisco123$'
}

export function userLogin() {
  return gitHubUser.username + ':' + gitHubUser.password;
}
