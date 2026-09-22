# Channel / platform logos

Drop real logo files here (SVG or PNG with transparency, ~128px square or wider),
then reference them from `src/components/sections/ChannelsAndVOD.tsx`:

```ts
{ name: "SRF 1 HD", logoText: "SRF 1", logoBg: "bg-[#141414]", logoFg: "text-white",
  genre: "Généraliste", logoSrc: "/channels/srf1.svg" },
```

`logoSrc` is optional. When present the image is rendered inside the tile
(object-contain, padded); when absent the coloured `logoText` wordmark is used
as the fallback. `logoBg` still paints the tile background behind the image, so
pick a background that suits the logo (transparent-white logos need a dark tile).

Note: broadcaster and streaming-service logos are trademarks of their owners.
