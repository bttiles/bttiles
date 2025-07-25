// MapComponent.jsx
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current!,
      style: `https://api.maptiler.com/maps/streets/style.json?key=PriFgHyuJLxhkxz7Ffuf`,
      center: [67.1279106, 24.9718567],
      zoom: 15,
    });


    map.addControl(new maplibregl.NavigationControl());

    const el = document.createElement("div");
    el.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/2776/2776067.png')";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "100%";
    el.style.backgroundRepeat = "no-repeat";

    const popup = new maplibregl.Popup().setHTML(`
      <div style="color: black; font-weight: bold;">
        Alpha Crete
      </div>
    `);

    new maplibregl.Marker(el)
      .setLngLat([67.1279106, 24.9718567])
      .setPopup(popup)
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      style={{
        height: "500px",
        width: "95%",
        maxWidth: "1200px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
        margin: "auto",
        marginTop: "50px",
        border: "2px solid #333",
      }}
      ref={mapContainer}
    />
  );
};

export default MapComponent;
