import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import nodeResolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';


let plugins = [
    commonjs({
        namedExports: {
            'knuth-shuffle': [ 'knuthShuffle' ]
        }
    }),
    replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    nodeGlobals(),
    nodeResolve({
        jsnext: true
    }),
    svelte(),
    buble()
];

let isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
    plugins.push(uglify());
}

export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins,
    sourceMap: !isProduction
}
