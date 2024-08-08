import { resolve } from 'path';

export default {
    base: "",
    build: {
        rollupOptions: {
            input: {
              main: resolve(__dirname, 'index.html'),
              about: resolve(__dirname, 'about.html'),
              collections: resolve(__dirname, 'collections.html')
            },
          },
    }
}