'use strict';

angular.module('chatApp')
  .value('messageFormatter', function(date, nick, message) {
    return '['+nick+']' + ' : ' + 
           message + '\n';
    
  });
