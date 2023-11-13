<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'meyzjcmc_wp519' );

/** Database username */
define( 'DB_USER', 'meyzjcmc_wp519' );

/** Database password */
define( 'DB_PASSWORD', '3USp27US.)' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'd2bpdrjdkz7oeurzvdmnp3hn33c62ucois4ctrahudyjocvfuhq9poez7x8kubhv' );
define( 'SECURE_AUTH_KEY',  'qi8hrjr10jngalxktimgrsmfbxksafmli9bnnkqfqkn9tbmdgfjeq0szgy14blwa' );
define( 'LOGGED_IN_KEY',    'kklyjfq7wamgoelqolobmkhpmaeppwugif5gxvl8vkauxbwocpoai2m4oqsylu7z' );
define( 'NONCE_KEY',        'zew1fizzkudmbqigwxy3sarjsd0xn0dnicrk4qjxnxftfgfl37golsu3mliwszwk' );
define( 'AUTH_SALT',        's6uqzfd5uwbkguqmtdytn9zdcmucvg35r6iywzruv2laoyr15mj7h5uxswj57s2z' );
define( 'SECURE_AUTH_SALT', '1rbpcgoksbniknooorbnb4xyq1epnnos1nmrde0dal8ttbxs8im6k8nzufbz1wmz' );
define( 'LOGGED_IN_SALT',   'ud3c2cj9g0vcllnnudam3opeflf2iantlg5qe2lotg0vmcrkkevtlkt1gvlhnn4s' );
define( 'NONCE_SALT',       'xv2zj6ukayor8jn6pvr225oy8tx47jsveyxgjlglqvphjnw4cgbjvzd2rdizil8y' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpll_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
