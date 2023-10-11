export function getYoutubeMovieId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

export function getEmbedLink(youtubeUrl: string) {
  const videoId = getYoutubeMovieId(youtubeUrl);
  const iframeMarkup =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
    videoId +
    '"></iframe>';
  return iframeMarkup;
}
