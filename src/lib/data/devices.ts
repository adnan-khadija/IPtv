export interface Device {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const devices: Device[] = [
  {
    id: "smart-tv",
    name: "Smart TV",
    icon: "Tv",
    description: "Samsung, LG, Sony & more",
  },
  {
    id: "firestick",
    name: "Amazon Firestick",
    icon: "Flame",
    description: "Fire TV Stick 4K & Cube",
  },
  {
    id: "android",
    name: "Android",
    icon: "Bot",
    description: "Phones, tablets & boxes",
  },
  {
    id: "ios",
    name: "iPhone & iPad",
    icon: "Smartphone",
    description: "iOS 12 and later",
  },
  {
    id: "pc",
    name: "PC & Mac",
    icon: "Monitor",
    description: "Windows, macOS & Linux",
  },
  {
    id: "mag",
    name: "MAG Box",
    icon: "Box",
    description: "MAG 254, 256, 322 & more",
  },
  {
    id: "roku",
    name: "Roku",
    icon: "Tv2",
    description: "All Roku devices",
  },
  {
    id: "nvidia",
    name: "NVIDIA Shield",
    icon: "Zap",
    description: "Shield TV & Pro",
  },
];
