import React, { useState, useEffect } from "react";
import { Viewer, Entity } from "resium";
import { Cartesian3, Color } from "cesium";
import "./index.css";

function App() {
  const [lang, setLang] = useState("ar");
  const [showWelcome, setShowWelcome] = useState(true);

  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={lang === "ar" ? "rtl" : "ltr"}>
      {showWelcome ? (
        <div className="welcome-screen">
          <h1>{lang === "ar" ? "مرحبا بك في GEOVIA!" : "Welcome to GEOVIA!"}</h1>
          <p>{lang === "ar" ? "نظام إدارة المشاريع ثلاثي الأبعاد" : "3D Project Management System"}</p>
        </div>
      ) : (
        <div className="dashboard">
          <header>
            <h2>{lang === "ar" ? "لوحة التحكم" : "Dashboard"}</h2>
            <button onClick={toggleLang}>
              {lang === "ar" ? "English" : "العربية"}
            </button>
          </header>

          <div className="map-container">
            <Viewer full>
              <Entity
                name="Project 1"
                position={Cartesian3.fromDegrees(35.927, 31.951)}
                point={{ pixelSize: 10, color: Color.CYAN }}
              />
              <Entity
                name="Project 2"
                position={Cartesian3.fromDegrees(35.935, 31.955)}
                point={{ pixelSize: 10, color: Color.SILVER }}
              />
            </Viewer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;