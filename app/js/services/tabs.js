'use strict';

/**
 * @ngdoc function
 * @name cnodejs.services:TabsService
 * @description
 * # TabsService
 * Tabs Service of the cnodejs app
 */

angular.module('cnodejs.services')
.factory('Tabs', function() {
  return [
    {
      value: 'all',
      label: '最新'
    },
    {
      value: 'good',
      label: '精华'
    },
    {
      value: 'share',
      label: '分享'
    },
    {
      value: 'ask',
      label: '问答'
    },
    {
      value: 'coder',
      label: '码农'
    },
    {
      value: 'shoot',
      label: '摄影'
    },
    {
      value: 'bike',
      label: '单车'
    },
    {
      value: 'love',
      label: '爱情'
    },
    {
      value: 'talk',
      label: '聊聊'
    }
  ];
});
