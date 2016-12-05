import svelte from 'rollup-plugin-svelte';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeGlobals from 'rollup-plugin-node-globals';


export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        nodeGlobals(),
        nodeResolve({
            jsnext: true
        }),
        svelte()
    ],
    sourceMap: true
}
