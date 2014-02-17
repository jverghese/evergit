'use strict';

/**
 * Get awesome things
 */
exports.notes = function(req, res) {
  res.json([
    {
      text : 'Implement npm module that monitors multiple repos.',
    }, {
      text : 'Implement connector for github and bitbucket.',
    }
  ]);
};
