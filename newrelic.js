'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['denver-school-finder'],
  /**
   * Your New Relic license key.
   */
  license_key: 'eb8bffb78f085b8d1935f2173ca3d275cf285f1b',
  logging: {
    level: 'warn'
  }
}
