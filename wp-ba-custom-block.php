<?php
/**
 * Plugin Name: WP BA Custom Block
 * Description: Create custom post blocks
 */

function wp_ba_custom_block_script_register() {
    wp_enqueue_script('wp-ba-custom-block',plugin_dir_url(__FILE__).'wp-ba-custom-block.js',array('wp-blocks','wp-i18n','wp-editor'),true);
    wp_enqueue_style( 'wp-ba-custom-block', plugin_dir_url(__FILE__) . 'css/style.css' );
}
add_action('enqueue_block_editor_assets','wp_ba_custom_block_script_register');
?>