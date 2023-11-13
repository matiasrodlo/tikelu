<?php

// autoload_real_52.php generated by xrstf/composer-php52

class ComposerAutoloaderInit230761b13e90ac4387f5c7d1f9ae0cfe {
	private static $loader;

	public static function loadClassLoader($class) {
		if ('xrstf_Composer52_ClassLoader' === $class) {
			require dirname(__FILE__).'/ClassLoader52.php';
		}
	}

	/**
	 * @return xrstf_Composer52_ClassLoader
	 */
	public static function getLoader() {
		if (null !== self::$loader) {
			return self::$loader;
		}

		spl_autoload_register(array('ComposerAutoloaderInit230761b13e90ac4387f5c7d1f9ae0cfe', 'loadClassLoader'), true /*, true */);
		self::$loader = $loader = new xrstf_Composer52_ClassLoader();
		spl_autoload_unregister(array('ComposerAutoloaderInit230761b13e90ac4387f5c7d1f9ae0cfe', 'loadClassLoader'));

		$vendorDir = dirname(dirname(__FILE__));
		$baseDir   = dirname($vendorDir);
		$dir       = dirname(__FILE__);

		$map = require $dir.'/autoload_namespaces.php';
		foreach ($map as $namespace => $path) {
			$loader->add($namespace, $path);
		}

		$classMap = require $dir.'/autoload_classmap.php';
		if ($classMap) {
			$loader->addClassMap($classMap);
		}

		$loader->register(true);

		require $vendorDir . '/yoast/wp-helpscout/src/functions.php';
		require $baseDir . '/includes/ajax-functions.php';
		require $baseDir . '/includes/wpseo-local-functions.php';
		require $baseDir . '/deprecated/deprecated-functions.php';

		return $loader;
	}
}
