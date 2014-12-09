/**
 * @module SessionService
 */

/**
 * Check session has seed number, if not set random seed.
 * @param session
 */
exports.checkSeedIfNotSet = function (session) {
  if (session.seed == undefined)
    session.seed = process.hrtime()[1];
};