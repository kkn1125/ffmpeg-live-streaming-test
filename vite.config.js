// vite.config.js
export default {
  // 기타 설정...
  build: {
    rollupOptions: {
      external: [
        // 'C:/kimson/Kim_Coding/project/ffmpeg/**/*.ts' 패턴의 파일을 외부화
        /\/ffmpeg\/.*\.ts$/,
      ],
    },
  },
};
