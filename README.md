# ffmpeg 스트리밍 송출 (브라우저 송출)

rtsp 스크리밍 프로토콜 사용

## ffmpeg 라이브 스트리밍

```bash
ffplay -f dshow -video_size 1280x720 -i video="LG Camera"
```

## 스트리밍 송출 및 m3u8 파일 생성

현재 기기 캠 및 마이크 장비 리스트 확인

```bash
ffmpeg -list_devices true -f dshow -i dummy
```

ffmpeg를 이용한 playlist.m3u8 생성

```bash
ffmpeg -re -f dshow -i video="LG Camera":audio="마이크(Voice Changer Virtual Audio Device (WDM))" -c:v libx264 -c:a aac -f hls -hls_time 10 -hls_list_size 0 ./dist/playlist.m3u8
```
