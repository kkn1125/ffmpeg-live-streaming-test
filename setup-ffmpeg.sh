#!/bin/bash
# VIDSOURCE="rtsp://127.0.0.1:5554"
# AUDIO_OPTS="-c:a aac -b:a 160000 -ac 2"
# VIDEO_OPTS="-s 854x480 -c:v libx264 -b:v 800000"
# OUTPUT_HLS="-hls_time 10 -hls_list_size 10 -start_number 1"
# ffmpeg -loglevel debug -y -i "$VIDSOURCE" $AUDIO_OPTS $VIDEO_OPTS -f hls $OUTPUT_HLS playlist.m3u8

# ffmpeg -loglevel debug v4l2-ctl -i rtsp://127.0.0.1:5554 -c:v libx264 -crf 23 -pix_fmt yuv420p -hls_time 2 -hls_list_size 5 -hls_delete_threshold 1 -hls_flags delete_segments -f hls playlist.m3u8

# ffmpeg -v verbose -i rtmp://127.0.0.1:5554 -c:v libx264 -c:a aac -ac 1 -strict -2 -crf 18 -profile:v baseline -maxrate 400k -bufsize 1835k -pix_fmt yuv420p -flags -global_header -hls_time 10 -hls_list_size 6 -hls_delete_threshold 1 -hls_flags delete_segments -start_number 1 playlist.m3u8

ffmpeg -i rtsp://127.0.0.1:554 \
-c:v libx264 -c:a aac -strict experimental \
-f hls -hls_time 10 -hls_list_size 0 -hls_flags delete_segments \
playlist.m3u8