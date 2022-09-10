import { defineConfig } from 'tsup';

export function createTsupConfig({
  entry = ['src/index.ts'],
  external = [],
  noExternal = [],
  target = 'es2022',
  skipNodeModulesBundle = true,
  clean = true,
  shims = true,
  minify = false,
  splitting = false,
  keepNames = true,
  dts = true,
  sourcemap = true,
} = {}) {
  return defineConfig({
    entry,
    external,
    noExternal,
    platform: 'node',
    format: ['esm', 'cjs'],
    skipNodeModulesBundle,
    target,
    clean,
    shims,
    minify,
    splitting,
    keepNames,
    dts,
    sourcemap,
  });
}
