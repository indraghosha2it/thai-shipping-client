

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { ArrowUpRight, Globe2, Ship, PackageCheck } from "lucide-react";
// import countries110m from "world-atlas/countries-110m.json";
// import { feature } from "topojson-client";

// const ports = [
//   { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018 },
//   { name: "Singapore", country: "Singapore", lat: 1.2644, lng: 103.822 },
//   { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737 },
//   { name: "Rotterdam", country: "Netherlands", lat: 51.9244, lng: 4.4777 },
//   {
//     name: "Los Angeles",
//     country: "United States of America",
//     lat: 33.7405,
//     lng: -118.272,
//   },
//   { name: "Mumbai", country: "India", lat: 18.9388, lng: 72.8354 },
// ];

// const thailandOrigin = { lat: 13.7563, lng: 100.5018 };
// const defaultPort = ports.find((port) => port.name === "Los Angeles");

// function createRoute(port) {
//   if (!port || port.name === "Bangkok") return [];

//   return [
//     {
//       startLat: thailandOrigin.lat,
//       startLng: thailandOrigin.lng,
//       endLat: port.lat,
//       endLng: port.lng,
//     },
//   ];
// }

// export default function GlobalTradeSection() {
//   const globeContainer = useRef(null);
//   const globeRef = useRef(null);
//   const countriesRef = useRef([]);
//   const selectedPortRef = useRef(defaultPort);
//   const [selectedPort, setSelectedPort] = useState(defaultPort);

//   useEffect(() => {
//     let resizeObserver;
//     let isMounted = true;

//     async function createGlobe() {
//       const Globe = (await import("globe.gl")).default;

//       if (!isMounted || !globeContainer.current) return;

//       const countries = feature(
//         countries110m,
//         countries110m.objects.countries
//       ).features;

//       countriesRef.current = countries;

//       const globe = Globe()(globeContainer.current)
//         .width(globeContainer.current.clientWidth)
//         .height(globeContainer.current.clientHeight)
//         .backgroundColor("rgba(0,0,0,0)")
//         .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
//         .showAtmosphere(true)
//         .atmosphereColor("#E96C35")
//         .atmosphereAltitude(0.16)
//         .polygonsData(countries)
//         .polygonCapColor((country) => {
//           const countryName = country.properties.name;

//           if (countryName === "Thailand") {
//             return "rgba(34, 197, 94, 0.9)";
//           }

//           if (countryName === selectedPortRef.current?.country) {
//             return "rgba(233, 108, 53, 0.78)";
//           }

//           return "rgba(226, 222, 215, 0.12)";
//         })
//         .polygonSideColor(() => "rgba(233, 108, 53, 0.12)")
//         .polygonStrokeColor(() => "rgba(250, 248, 244, 0.45)")
//         .polygonAltitude((country) => {
//           const countryName = country.properties.name;

//           return countryName === "Thailand" ||
//             countryName === selectedPortRef.current?.country
//             ? 0.035
//             : 0.008;
//         })
//         .pointsData(ports)
//         .pointLat("lat")
//         .pointLng("lng")
//         .pointColor((port) =>
//           port.name === selectedPortRef.current?.name ? "#FFD2B8" : "#E96C35"
//         )
//         .pointAltitude(0.025)
//         .pointRadius((port) =>
//           port.name === selectedPortRef.current?.name ? 0.8 : 0.55
//         )
//         .pointLabel(
//           (port) =>
//             `<div style="font:600 12px sans-serif;color:#202624">
//               ${port.name} Port<br/>
//               <span style="font-weight:400;color:#777C77">${port.country}</span>
//             </div>`
//         )
//         .onPointClick((port) => {
//           selectedPortRef.current = port;
//           setSelectedPort(port);

//           globe.pointsData([...ports]);
//           globe.polygonsData([...countriesRef.current]);
//           globe.arcsData(createRoute(port));
//         })
//         .arcsData(createRoute(defaultPort))
//         .arcStartLat("startLat")
//         .arcStartLng("startLng")
//         .arcEndLat("endLat")
//         .arcEndLng("endLng")
//         .arcColor(() => "#F18A5C")
//         .arcAltitude(0.2)
//         .arcStroke(0.9)
//         .arcDashLength(0.45)
//         .arcDashGap(0.25)
//         .arcDashAnimateTime(1800);

//       globeRef.current = globe;

//       // Reapply polygons after their color rules are set.
//       globe.polygonsData([...countries]);

//       // Center the initial view on Bangkok, Thailand.
//       globe.pointOfView(
//         {
//           lat: thailandOrigin.lat,
//           lng: thailandOrigin.lng,
//           altitude: 1.8,
//         },
//         0
//       );

//       // Keep the globe centered on Thailand.
//       globe.controls().autoRotate = false;
//       globe.controls().enableZoom = false;

//       resizeObserver = new ResizeObserver(([entry]) => {
//         globe.width(entry.contentRect.width);
//         globe.height(entry.contentRect.height);
//       });

//       resizeObserver.observe(globeContainer.current);
//     }

//     createGlobe();

//     return () => {
//       isMounted = false;
//       resizeObserver?.disconnect();
//       globeRef.current?.pauseAnimation();
//       globeContainer.current?.replaceChildren();
//       globeRef.current = null;
//     };
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#FAF8F4] py-16 sm:py-20 lg:py-24">
//       <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#E96C35]/5 blur-3xl" />

//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
//           <div>
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-9 bg-[#E96C35]" />
//               <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E96C35]">
//                 Thailand • International Trade
//               </span>
//             </div>

//             <h2 className="max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-[#202624] sm:text-5xl lg:text-[54px]">
//               Connecting Thailand
//               <span className="block text-[#E96C35]">to Global Trade</span>
//             </h2>

//             <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#626862] sm:text-base">
//               Thailand plays an important role in international trade,
//               connecting businesses and markets through imports, exports,
//               logistics, and shipping. Explore Thailand&apos;s trade activities
//               and global shipping network.
//             </p>

//             <div className="my-8 h-px w-full max-w-xl bg-[#E5E1DA]" />

//             <div className="grid max-w-xl gap-5 sm:grid-cols-3">
//               <InfoItem
//                 icon={<Globe2 size={18} strokeWidth={1.7} />}
//                 title="Global Trade"
//                 text="Connecting Thai markets with the world."
//               />

//               <InfoItem
//                 icon={<Ship size={18} strokeWidth={1.7} />}
//                 title="Shipping"
//                 text="Air, sea, and land transportation."
//               />

//               <InfoItem
//                 icon={<PackageCheck size={18} strokeWidth={1.7} />}
//                 title="Import & Export"
//                 text="Discover Thailand's trade activities."
//               />
//             </div>
//           </div>

//           <div className="relative min-w-0">
//             <div className="relative h-[430px] overflow-hidden rounded-[28px] border border-[#E4E0D8] bg-[#151A19] sm:h-[500px]">
//               <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between">
//                 <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
//                   Trade Network
//                 </span>

//                 <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#F18A5C]">
//                   {selectedPort?.country ?? "Thailand"}
//                   <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
//                 </span>
//               </div>

//               <div ref={globeContainer} className="absolute inset-0" />

//               <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#151A19] via-[#151A19]/90 to-transparent px-6 pb-6 pt-16 sm:px-8">
//                 <div className="flex items-center justify-between gap-4">
//                   <div>
//                     <p className="text-sm font-semibold text-white">
//                       {selectedPort
//                         ? `${selectedPort.name} Port`
//                         : "From Thailand to the world"}
//                     </p>

//                     <p className="mt-1 text-xs text-white/60">
//                       {selectedPort
//                         ? `Bangkok, Thailand → ${selectedPort.name}, ${selectedPort.country}`
//                         : "Click a port to see its route from Bangkok"}
//                     </p>

//                     <p className="mt-2 text-[10px] text-white/45">
//                       Green marks Thailand • Click a pin to change the route
//                     </p>
//                   </div>

//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#F18A5C]">
//                     <ArrowUpRight size={17} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function InfoItem({ icon, title, text }) {
//   return (
//     <div className="group">
//       <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#E2DED7] bg-white text-[#E96C35] transition-colors duration-300 group-hover:border-[#E96C35]">
//         {icon}
//       </div>

//       <h3 className="text-sm font-semibold text-[#252A27]">{title}</h3>

//       <p className="mt-1.5 text-xs leading-5 text-[#777C77]">{text}</p>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Globe2, Ship, PackageCheck } from "lucide-react";
import countries110m from "world-atlas/countries-110m.json";
import { feature } from "topojson-client";

const ports = [
  { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018 },
  { name: "Laem Chabang", country: "Thailand", lat: 13.0957, lng: 100.8831 },
  { name: "Singapore", country: "Singapore", lat: 1.2644, lng: 103.822 },
  { name: "Port Klang", country: "Malaysia", lat: 3.0004, lng: 101.39 },
  { name: "Tanjung Pelepas", country: "Malaysia", lat: 1.362, lng: 103.547 },
  { name: "Jakarta", country: "Indonesia", lat: -6.104, lng: 106.88 },
  { name: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842 },
  {
    name: "Ho Chi Minh City",
    country: "Vietnam",
    lat: 10.8231,
    lng: 106.6297,
  },
  { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737 },
  { name: "Hong Kong", country: "China", lat: 22.308, lng: 114.169 },
  { name: "Kaohsiung", country: "Taiwan", lat: 22.6273, lng: 120.3014 },
  { name: "Yokohama", country: "Japan", lat: 35.4437, lng: 139.638 },
  { name: "Busan", country: "South Korea", lat: 35.1028, lng: 129.0403 },
  { name: "Mumbai", country: "India", lat: 18.9388, lng: 72.8354 },
  { name: "Colombo", country: "Sri Lanka", lat: 6.9271, lng: 79.8612 },
  {
    name: "Jebel Ali",
    country: "United Arab Emirates",
    lat: 24.9857,
    lng: 55.0272,
  },
  { name: "Rotterdam", country: "Netherlands", lat: 51.9244, lng: 4.4777 },
  { name: "Antwerp", country: "Belgium", lat: 51.264, lng: 4.399 },
  { name: "Hamburg", country: "Germany", lat: 53.5511, lng: 9.9937 },
  { name: "Felixstowe", country: "United Kingdom", lat: 51.954, lng: 1.351 },
  {
    name: "Los Angeles",
    country: "United States of America",
    lat: 33.7405,
    lng: -118.272,
  },
  {
    name: "New York",
    country: "United States of America",
    lat: 40.684,
    lng: -74.006,
  },
  { name: "Santos", country: "Brazil", lat: -23.9537, lng: -46.3336 },
  { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093 },
];

const thailandOrigin = {
  lat: 13.7563,
  lng: 100.5018,
};

function createRoutes(selectedPort) {
  const destinations = selectedPort
    ? [selectedPort]
    : ports.filter((port) => port.name !== "Bangkok");

  return destinations.map((port) => ({
    startLat: thailandOrigin.lat,
    startLng: thailandOrigin.lng,
    endLat: port.lat,
    endLng: port.lng,
  }));
}

export default function GlobalTradeSection() {
  const globeContainer = useRef(null);
  const globeRef = useRef(null);
  const countriesRef = useRef([]);
  const selectedPortRef = useRef(null);

  const [selectedPort, setSelectedPort] = useState(null);

  useEffect(() => {
    let resizeObserver;
    let isMounted = true;

    async function createGlobe() {
      const Globe = (await import("globe.gl")).default;

      if (!isMounted || !globeContainer.current) return;

      const countries = feature(
        countries110m,
        countries110m.objects.countries
      ).features;

      countriesRef.current = countries;

      const globe = Globe()(globeContainer.current)
        .width(globeContainer.current.clientWidth)
        .height(globeContainer.current.clientHeight)

        /* =========================
           GLOBE
        ========================= */

        .backgroundColor("rgba(0,0,0,0)")

        .globeImageUrl(
          "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        )

        .bumpImageUrl(
          "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
        )

        .showAtmosphere(true)
        .atmosphereColor("#E96C35")
        .atmosphereAltitude(0.16)

        /* =========================
           COUNTRIES
        ========================= */

        .polygonsData(countries)

        .polygonCapColor((country) => {
          const countryName = country.properties.name;

          if (countryName === "Thailand") {
            return "rgba(34, 197, 94, 0.9)";
          }

          if (countryName === selectedPortRef.current?.country) {
            return "rgba(233, 108, 53, 0.78)";
          }

          return "rgba(226, 222, 215, 0.12)";
        })

        .polygonSideColor(() => "rgba(233, 108, 53, 0.12)")

        .polygonStrokeColor(() => "rgba(250, 248, 244, 0.45)")

        .polygonAltitude((country) => {
          const countryName = country.properties.name;

          return countryName === "Thailand" ||
            countryName === selectedPortRef.current?.country
            ? 0.035
            : 0.008;
        })

        /* =========================
           PORTS
        ========================= */

        .pointsData(ports)

        .pointLat("lat")
        .pointLng("lng")

        .pointColor((port) =>
          port.name === selectedPortRef.current?.name
            ? "#FFD2B8"
            : "#E96C35"
        )

        .pointAltitude(0.025)

        .pointRadius((port) =>
          port.name === selectedPortRef.current?.name ? 0.8 : 0.55
        )

        /* =========================
           PORT TOOLTIP
        ========================= */

        .pointLabel(
          (port) =>
            `<div
              style="
                font-family:sans-serif;
                padding:7px 9px;
                border-radius:6px;
                background:#fff;
                border:1px solid #E5E1DA;
                box-shadow:0 6px 20px rgba(0,0,0,.12);
              "
            >
              <div
                style="
                  font-size:11px;
                  font-weight:600;
                  color:#202624;
                  margin-bottom:2px;
                "
              >
                ${port.name} Port
              </div>

              <div
                style="
                  font-size:9px;
                  color:#777C77;
                "
              >
                ${port.country}
              </div>
            </div>`
        )

        /* =========================
           PORT CLICK
        ========================= */

        .onPointClick((port) => {
          selectedPortRef.current = port;

          setSelectedPort(port);

          globe.pointsData([...ports]);

          globe.polygonsData([...countriesRef.current]);

          globe.arcsData(createRoutes(port));
        })

        /* =========================
           SHIPPING ROUTES
        ========================= */

        .arcsData(createRoutes(null))

        .arcStartLat("startLat")
        .arcStartLng("startLng")

        .arcEndLat("endLat")
        .arcEndLng("endLng")

        .arcColor(() => "#F18A5C")

        .arcAltitude(0.2)

        .arcStroke(0.7)

        .arcDashLength(0.45)

        .arcDashGap(0.25)

        .arcDashAnimateTime(1800);

      globeRef.current = globe;

      /* =========================
         INITIAL COUNTRY DATA
      ========================= */

      globe.polygonsData([...countries]);

      /* =========================
         INITIAL VIEW
      ========================= */

      globe.pointOfView(
        {
          lat: thailandOrigin.lat,
          lng: thailandOrigin.lng,
          altitude: 1.8,
        },
        0
      );

      /* =========================
         CONTROLS
      ========================= */

      globe.controls().autoRotate = true;

      globe.controls().autoRotateSpeed = 0.35;

      globe.controls().enableZoom = false;

      /* =========================
         RESPONSIVE GLOBE
      ========================= */

      resizeObserver = new ResizeObserver(([entry]) => {
        if (!globeRef.current) return;

        globe.width(entry.contentRect.width);

        globe.height(entry.contentRect.height);
      });

      resizeObserver.observe(globeContainer.current);
    }

    createGlobe();

    return () => {
      isMounted = false;

      resizeObserver?.disconnect();

      globeRef.current?.pauseAnimation();

      globeContainer.current?.replaceChildren();

      globeRef.current = null;
    };
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FAF8F4]
        py-12
        sm:py-16
        lg:py-20
        -mt-2
        sm:-mt-4
      "
    >
      {/* Background accent */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-[#E96C35]/5
          blur-3xl
        "
      />

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            items-center
            gap-8
            sm:gap-10
            lg:grid-cols-[1fr_0.95fr]
            lg:gap-20
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div>
            {/* Eyebrow */}

            <div
              className="
                mb-4
                flex
                items-center
                gap-2.5
                sm:mb-5
                sm:gap-3
              "
            >
              <span
                className="
                  h-px
                  w-7
                  bg-[#E96C35]
                  sm:w-9
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.20em]
                  text-[#E96C35]
                  sm:text-[11px]
                  sm:tracking-[0.22em]
                "
              >
                Thailand • International Trade
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-xl
                font-serif
                text-[32px]
                font-medium
                leading-[1.08]
                tracking-[-0.02em]
                text-[#073155]
                sm:text-5xl
                lg:text-[54px]
              "
            >
              Connecting Thailand
              <span className="block text-[#E96C35]">
                to Global Trade
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-xl
                text-[13px]
                leading-6
                text-[#626862]
                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              Thailand plays an important role in international
              trade, connecting businesses and markets through
              imports, exports, logistics, and shipping. Explore
              Thailand&apos;s trade activities and global shipping
              network.
            </p>

            {/* Divider */}

            <div
              className="
                my-6
                h-px
                w-full
                max-w-xl
                bg-[#E5E1DA]
                sm:my-8
              "
            />

            {/* =====================================
                THREE ITEMS
                ALWAYS SAME ROW ON MOBILE
            ===================================== */}

            <div
              className="
                grid
                grid-cols-3
                gap-2
                sm:max-w-xl
                sm:gap-5
              "
            >
              <InfoItem
                icon={
                  <Globe2
                    size={16}
                    strokeWidth={1.7}
                    className="sm:h-[18px] sm:w-[18px]"
                  />
                }
                title="Global Trade"
                text="Connecting Thai markets with the world."
              />

              <InfoItem
                icon={
                  <Ship
                    size={16}
                    strokeWidth={1.7}
                    className="sm:h-[18px] sm:w-[18px]"
                  />
                }
                title="Shipping"
                text="Air, sea, and land transportation."
              />

              <InfoItem
                icon={
                  <PackageCheck
                    size={16}
                    strokeWidth={1.7}
                    className="sm:h-[18px] sm:w-[18px]"
                  />
                }
                title="Import & Export"
                text="Discover Thailand's trade activities."
              />
            </div>
          </div>

          {/* =========================================
              RIGHT GLOBE
          ========================================= */}

          <div className="relative min-w-0">
            <div
              className="
                relative
                h-[320px]
                overflow-hidden
                rounded-[22px]
                border
                border-[#E4E0D8]
                bg-[#151A19]
                sm:h-[500px]
                sm:rounded-[28px]
              "
            >
              {/* Top label */}

              <div
                className="
                  absolute
                  left-4
                  right-4
                  top-4
                  z-10
                  flex
                  items-center
                  justify-between
                  sm:left-6
                  sm:right-6
                  sm:top-6
                "
              >
                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/65
                    sm:text-[10px]
                    sm:tracking-[0.2em]
                  "
                >
                  Trade Network
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#F18A5C]
                    sm:gap-2
                    sm:text-[10px]
                    sm:tracking-[0.15em]
                  "
                >
                  <span className="max-w-[80px] truncate sm:max-w-none">
                    {selectedPort
                      ? selectedPort.country
                      : "Thailand"}
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#E96C35]
                    "
                  />
                </span>
              </div>

              {/* Globe */}

              <div
                ref={globeContainer}
                className="absolute inset-0"
              />

              {/* Bottom information */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-10
                  bg-gradient-to-t
                  from-[#151A19]
                  via-[#151A19]/90
                  to-transparent
                  px-4
                  pb-4
                  pt-12
                  sm:px-8
                  sm:pb-6
                  sm:pt-16
                "
              >
                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-3
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-[12px]
                        font-semibold
                        text-white
                        sm:text-sm
                      "
                    >
                      {selectedPort
                        ? `${selectedPort.name} Port`
                        : "Thailand Trade Routes"}
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-[9px]
                        text-white/60
                        sm:text-xs
                      "
                    >
                      {selectedPort
                        ? `Bangkok, Thailand → ${selectedPort.name}, ${selectedPort.country}`
                        : "Bangkok routes to all featured ports"}
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[8px]
                        leading-4
                        text-white/45
                        sm:mt-2
                        sm:text-[10px]
                      "
                    >
                      Green marks Thailand • Click a pin to show
                      only that route
                    </p>
                  </div>

                  {/* Arrow */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   INFO ITEM
========================================= */

function InfoItem({ icon, title, text }) {
  return (
    <div className="group min-w-0">
      {/* Icon */}

      <div
        className="
          mb-2
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-[#E2DED7]
          bg-white
          text-[#E96C35]
          transition-colors
          duration-300
          group-hover:border-[#E96C35]
          sm:mb-3
          sm:h-10
          sm:w-10
        "
      >
        {icon}
      </div>

      {/* Title */}

      <h3
        className="
          truncate
          text-[10px]
          font-semibold
          leading-4
          text-[#252A27]
          sm:text-sm
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-1
          text-[8px]
          leading-[1.45]
          text-[#777C77]
          sm:mt-1.5
          sm:text-xs
          sm:leading-5
        "
      >
        {text}
      </p>
    </div>
  );
}