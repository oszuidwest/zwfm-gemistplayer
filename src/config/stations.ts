export interface StationConfig {
  slug: string;
  audioLoggerUrl: string;
  streamName: string; // Stream name for new API (e.g., "zuidwest", "rucphen")
  stationName: string;
  stationBluesky: string;
  stationColor: string;
  stationColorDark: string;
  openGraphImage: string;
  faviconUrl: string;
  logoUrl: string; // Square logo for media controls
}

export const stations: StationConfig[] = [
  {
    slug: "zwfm",
    audioLoggerUrl: "http://91.99.167.207:8080", // New audiologger backend
    streamName: "zuidwest",
    stationName: "ZuidWest FM",
    stationBluesky: "zuidwestfm.bsky.social",
    stationColor: "#e6007e",
    stationColorDark: "#b80065",
    openGraphImage:
      "https://cdn.zuidwestupdate.nl/NsUmF_oC7q3NnWIO89789QePS9Pfoimr_4HOZJNVq2I/rs:fill:1280:720:1/g:ce/aHR0cHM6Ly93d3cuenVpZHdlc3R1cGRhdGUubmwvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvc3R1ZGlvX3p3Zm1fcG9zdGVyLmpwZw.jpeg",
    faviconUrl:
      "https://cdn.zuidwestupdate.nl/wp-content/uploads/favicon-zwfm.png",
    logoUrl:
      "https://www.zuidwestupdate.nl/wp-content/uploads/2025/07/zwfm-logo-square.png",
  },
  {
    slug: "rucphen",
    audioLoggerUrl: "http://91.99.167.207:8080", // New audiologger backend
    streamName: "rucphen",
    stationName: "Rucphen RTV",
    stationBluesky: "rucphenfm.bsky.social",
    stationColor: "#003576",
    stationColorDark: "#002a5e",
    openGraphImage:
      "https://rucphenrtv.nl/wp-content/uploads/2021/07/20210717Studio.jpg",
    faviconUrl: "https://rucphenrtv.nl/favicon.ico",
    logoUrl: "https://www.zuidwestupdate.nl/wp-content/uploads/2025/07/rucphen-640.jpg",
  },
];

export function getStationConfig(slug: string): StationConfig | undefined {
  return stations.find((station) => station.slug === slug);
}
