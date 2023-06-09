export type brandData = {
  brand: string;
  model: string;
  network_technology: string;
  "2G_bands": string;
  "3G_bands": string;
  "4G_bands": string;
  network_speed: string;
  GPRS: string;
  EDGE: string;
  announced: string;
  status: string;
  dimentions: string;
  weight_g: string;
  weight_oz: string;
  SIM: string;
  display_type: string;
  display_resolution: string;
  display_size: string;
  OS: string;
  CPU: string;
  Chipset: string;
  GPU: string;
  memory_card: string;
  internal_memory: string;
  RAM: string;
  primary_camera: string;
  secondary_camera: string;
  loud_speaker: string;
  audio_jack: string;
  WLAN: string;
  bluetooth: string;
  GPS: string;
  NFC: string;
  radio: string;
  USB: string;
  sensors: string;
  battery: string;
  colors: string;
  approx_price_EUR: string;
  img_url: string;
  id: number;
};

export type StoreItems = {
  id: number;
  name: string;
  price: number;
  url: string;
  quantity: number;
};
