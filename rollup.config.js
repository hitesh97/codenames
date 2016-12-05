import svelte from 'rollup-plugin-svelte';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeGlobals from 'rollup-plugin-node-globals';
import commonjs from 'rollup-plugin-commonjs';


export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        commonjs({
            namedExports: {
                'knuth-shuffle': [ 'knuthShuffle' ]
            }
        }),
        nodeGlobals(),
        nodeResolve({
            jsnext: true
        }),
        svelte()
    ],
    sourceMap: true
}
