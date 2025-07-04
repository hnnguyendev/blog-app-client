export function convertToYouTubeEmbedLink(url: string): string {
  const videoId = extractYouTubeVideoId(url);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return '';
}

export function convertToVimeoEmbedLink(url: string): string {
  const videoId = extractVimeoVideoId(url);
  if (videoId) {
    return `https://player.vimeo.com/video/${videoId}`;
  }
  return '';
}

export const convertSpotifyToEmbedUrl = (spotifyUrl: string): string | null => {
  const embedUrls: { [key: string]: string } = {
    track: 'https://open.spotify.com/embed/track/',
    album: 'https://open.spotify.com/embed/album/',
    playlist: 'https://open.spotify.com/embed/playlist/',
    artist: 'https://open.spotify.com/embed/artist/',
    episode: 'https://open.spotify.com/embed/episode/'
  };

  const regex = /https:\/\/open\.spotify\.com\/(track|album|playlist|artist|episode)\/(.+)/;
  const match = spotifyUrl.match(regex);

  if (match) {
    const type = match[1];
    const id = match[2];
    return `${embedUrls[type]}${id}`;
  }

  return null; // Invalid Spotify URL
};

function extractYouTubeVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function extractVimeoVideoId(url: string): string | null {
  const regex = /vimeo\.com\/(?:.*\/)?(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export const isWebsiteUrl = (url: string): boolean => {
  const websiteRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return websiteRegex.test(url);
};

export const isYouTubeLink = (url: string): boolean => {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return youtubeRegex.test(url);
};

export const isVimeoLink = (url: string): boolean => {
  const vimeoRegex = /^(https?:\/\/)?(www\.)?(vimeo\.com|player\.vimeo\.com)\/.+$/;
  return vimeoRegex.test(url);
};

export const isSpotifyLink = (url: string): boolean => {
  const spotifyRegex = /https:\/\/open\.spotify\.com\/(track|album|playlist|artist|episode)\/(.+)/;
  return spotifyRegex.test(url);
};
