// rollup.config.js
// import fs from 'fs';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

// const html = require('@rollup/plugin-html');

// 导入package.json
import pkg from './package.json';

const isDev = process.env.NODE_ENV == 'development';

console.log('当前模式', process.env.NODE_ENV)

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            name: 'OttsUtils',
            sourcemap: false,
            format: 'umd',
        },
        {
            file: pkg.module,
            name: 'OttsUtils',
            sourcemap: false,
            format: 'esm'
        },
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        replace(),
        // All JSON files will be parsed by default,
        json(),
        resolve(),
        commonjs(),
        // Compile TypeScript files
        typescript({ useTsconfigDeclarationDir: true }),
        babel({
            babelHelpers: 'runtime',
            extensions: ['.js', '.ts'],
            exclude: 'node_modules/**' // only transpile our source code
        }),
        terser(),

        // 开发环境通过浏览器进行调试
        isDev && serve({
            // Multiple folders to serve from
            contentBase: ['dist', 'example/browser'],
            port: 7777
        }),
        // 热重载配合serve一起使用
        isDev && livereload('dist'),
    ],
}
