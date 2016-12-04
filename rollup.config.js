import svelte from 'rollup-plugin-svelte';
import json from 'rollup-plugin-json';


export default {
    entry: 'src/codenames.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        json({
            exclude: 'node_modules/**'
        }),
        svelte()
    ],
    sourceMap: true
}
