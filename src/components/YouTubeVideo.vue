<template>
  <div class="text-center">
    <youtube
      :video-id="videoId"
      @ready="ready"
      @playing="playing"
    ></youtube>
  </div>
</template>
 
<script>
export default {
  name: "YouTubeVideo",
  data() {
    return {
      videoId: "",
    };
  },

  mounted() {
    this.getYouTubeVideo(process.env.VUE_APP_YOUTUBE_LINK);
  },

  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
      console.log(event);
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
    getYouTubeVideo(url) {
      this.videoId = this.$youtube.getIdFromURL(url)
    },
  },
};
</script>