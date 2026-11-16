import type { Project } from "./types";

/*
  Single source of truth for the hero stack, the Work slider, case-study modals and footer links.
  Add a project: put images in public/projects/<slug>/ and add an entry here.
  hero: true -> appears in the rotating hero stack (keep it to 4).
  images[0] is the main shot; images[1] (if any) is the tilted detail shot on the Work card.
*/
export const projects: Project[] = [
  {
    "slug": "tak24",
    "focus": "center top",
    "hero": true,
    "tab": "Tak24",
    "name": "Tak24 & Takdata24",
    "title": "Automated Roof Measurement & Geospatial Processing Pipeline & SaaS",
    "tagline": "Roof geometry and measurements from nothing but an address.",
    "role": "Senior Geospatial Engineer · Python Backend, GIS, CV & ML",
    "domain": "Roofing · PropTech",
    "summary": "An automated roof takeoff platform that combines geospatial data and 3D analysis to generate roofing information from a property location. The pipeline converts geospatial source data into usable roof geometry and measurement outputs for reporting and pricing workflows. Its outputs (roof planes, measurements, slopes, roof lines, roof type and complexity) power both the Takdata24 and Tak24 applications.",
    "highlights": [
      "Roof plane segmentation and geometric feature extraction from LiDAR and point-cloud data.",
      "Automated ridge, hip, valley, eave and rake detection, with per-line lengths.",
      "Per-surface area, slope and orientation, plus roof type and complexity scoring.",
      "Spatial analysis pipeline feeding reporting and pricing in two production apps."
    ],
    "metrics": [
      {
        "value": "5",
        "label": "Roof line types detected automatically"
      },
      {
        "value": "2",
        "label": "Production apps built on the pipeline"
      },
      {
        "value": "0",
        "label": "Roofs climbed to get a measurement"
      }
    ],
    "stack": [
      "Python",
      "LiDAR",
      "GIS",
      "Geospatial Data",
      "Computer Vision",
      "Point Clouds"
    ],
    "images": [
      {
        "src": "/projects/tak24/6.webp",
        "caption": "3D inspection view: segmented roof planes and critical lines over aerial imagery."
      },
      {
        "src": "/projects/tak24/1.webp",
        "caption": "Takdata24: complete roof data, from geometry to a finished quote."
      },
      {
        "src": "/projects/tak24/4.webp",
        "caption": "Lead workspace: roof model with 36 critical lines (ridge, hip, valley, eave) and per-surface data."
      },
      {
        "src": "/projects/tak24/5.webp",
        "caption": "2D drawing set: projected plan dimensions, line totals and area per surface."
      },
      {
        "src": "/projects/tak24/2.webp",
        "caption": "Tak24: homeowners type an address, the roof is measured digitally."
      },
      {
        "src": "/projects/tak24/3.webp",
        "caption": "Tak Kalkulator: instant roof area and price estimate."
      }
    ]
  },
  {
    "slug": "raycasting",
    "hero": true,
    "tab": "Fish Ray Casting",
    "name": "Fish Visual Analysis",
    "title": "High-Performance 3D Ray Casting for Fish Visual Analysis System",
    "tagline": "Fast 3D ray casting to measure what a fish can actually see.",
    "role": "Computer Vision Engineer",
    "domain": "3D Sensing · Marine research",
    "summary": "A Python pipeline that turns raw 3D data (LiDAR-style point clouds and meshes in PLY) into clean, GIS-ready insights. The core feature is fast 3D ray casting and field-of-view analysis: sensor rays are simulated through the scene to measure visibility, coverage and occlusion. It is the same geometry you deal with in LiDAR mapping and inspection.",
    "highlights": [
      "Ingests dense reef habitat meshes and point clouds in PLY.",
      "Ray casting engine for field of view, visibility, coverage and occlusion.",
      "Fish point-of-view playback along tracked paths, with behaviour and habitat labels.",
      "Performance-tuned so analysis runs on full-size scenes, not just a sample tile."
    ],
    "metrics": [
      {
        "value": "PLY",
        "label": "Point clouds and meshes in"
      },
      {
        "value": "FOV",
        "label": "Visibility, coverage and occlusion out"
      },
      {
        "value": "GIS",
        "label": "Ready outputs for downstream analysis"
      }
    ],
    "stack": [
      "Python",
      "Computer Vision",
      "LiDAR",
      "GIS",
      "Ray Casting",
      "Performance Optimization"
    ],
    "images": [
      {
        "src": "/projects/raycasting/1.webp",
        "caption": "Fish POV playback: tracked path, field-of-view rays and habitat labels over the reef mesh."
      },
      {
        "src": "/projects/raycasting/2.webp",
        "caption": "Reef habitat mesh (PLY) inspected in CloudCompare before analysis."
      }
    ]
  },
  {
    "slug": "lidar-slam",
    "hero": true,
    "tab": "LiDAR SLAM",
    "name": "LiDAR SLAM Robot",
    "title": "LiDAR-Based Mobile Robot System with SLAM Integration",
    "tagline": "A real robot that maps, localizes and avoids obstacles.",
    "role": "Computer Vision Developer",
    "domain": "Robotics perception",
    "summary": "A real mobile robot equipped with LiDAR and IMU sensors for environment perception, obstacle detection, mapping and localization. The main focus was building a reliable sensor pipeline and validating how closely the generated point-cloud data and SLAM behaviour matched real-world robot operation.",
    "highlights": [
      "LiDAR + IMU sensor pipeline for perception and obstacle detection.",
      "SLAM integration for mapping and localization on ROS.",
      "Real-vs-simulated validation: test courses rebuilt in simulation and scans compared.",
      "Containerised with Docker so the stack runs the same on the robot and the desk."
    ],
    "metrics": [
      {
        "value": "2",
        "label": "Sensors fused: LiDAR + IMU"
      },
      {
        "value": "ROS",
        "label": "Mapping and localization nodes"
      },
      {
        "value": "Sim→Real",
        "label": "Point clouds validated against real runs"
      }
    ],
    "stack": [
      "LiDAR",
      "ROS / ROS2",
      "SLAM",
      "Python",
      "Point Clouds",
      "Docker"
    ],
    "images": [
      {
        "src": "/projects/lidar-slam/1.webp",
        "caption": "(a) The robot in the test maze, (b) the real course, (c) its simulated twin."
      },
      {
        "src": "/projects/lidar-slam/3.webp",
        "caption": "Real lab vs. simulation, with the matching LiDAR scans from each."
      },
      {
        "src": "/projects/lidar-slam/2.webp",
        "caption": "Top-down layout of the obstacle course used for validation."
      }
    ]
  },
  {
    "slug": "btc-strategy",
    "hero": true,
    "tab": "BTC Strategy",
    "name": "BTC Strategy Selector",
    "title": "Synthetic Data Generator for BTC Strategy Selection Simulation",
    "tagline": "Picks the best trading strategy every hour, then proves it in backtests.",
    "role": "Data Analyst · Algorithmic Trading",
    "domain": "Quant · Machine learning",
    "summary": "Supported a BTC trading project as a data analyst and algorithmic trading specialist by building a simulation that selects the best indicator or strategy each hour. It uses machine-learning features (1h / 3h / 7h win-rate trends), confidence and expected-value gating, and PySR symbolic regression scoring to rank signals, then backtests performance with PnL and win-rate reporting.",
    "highlights": [
      "Hourly strategy selection from rolling 1h / 3h / 7h win-rate trend features.",
      "Confidence and expected-value gating so weak signals are skipped, not traded.",
      "PySR symbolic regression to score and rank signals with readable formulas.",
      "Backtest reports with cumulative PnL, per-day results and risk metrics."
    ],
    "metrics": [
      {
        "value": "696",
        "label": "Signals scored in the backtest"
      },
      {
        "value": "428",
        "label": "Trades taken after gating"
      },
      {
        "value": "55.6%",
        "label": "Backtest win rate"
      }
    ],
    "stack": [
      "Python",
      "Machine Learning",
      "PySR",
      "Data Analysis",
      "Backtesting",
      "Algorithms"
    ],
    "images": [
      {
        "src": "/projects/btc-strategy/1.webp",
        "caption": "Cumulative PnL per strategy over a week of hourly selection."
      },
      {
        "src": "/projects/btc-strategy/2.webp",
        "caption": "Simulation report: per-day PnL, best and worst hours, summary and risk metrics."
      }
    ]
  },
  {
    "slug": "iot",
    "hero": false,
    "tab": "IoT Monitoring",
    "name": "IoT Device Monitoring",
    "title": "IoT Monitoring and Real-Time Device Management System",
    "tagline": "Real-time telemetry, alerts and control for connected devices.",
    "role": "IoT Backend Developer",
    "domain": "IoT · Cloud",
    "summary": "An IoT system for collecting, processing and monitoring real-time sensor data from connected devices. It covers device communication, telemetry streaming, backend APIs, alert handling and dashboard-ready data pipelines for reliable monitoring and control: the full flow from device connectivity and messaging to backend logic, cloud integration and production deployment.",
    "highlights": [
      "MQTT device messaging and real-time telemetry streaming.",
      "FastAPI backend for device management, control and alert handling.",
      "Dashboard-ready pipelines for temperature, humidity, pressure, air quality and power.",
      "Cloud integration and production deployment."
    ],
    "metrics": [
      {
        "value": "MQTT",
        "label": "Device messaging and telemetry"
      },
      {
        "value": "Live",
        "label": "Alerts and device control"
      },
      {
        "value": "API",
        "label": "FastAPI backend, cloud deployed"
      }
    ],
    "stack": [
      "IoT",
      "MQTT",
      "RTOS",
      "FastAPI",
      "Python",
      "Cloud"
    ],
    "images": [
      {
        "src": "/projects/iot/1.webp",
        "caption": "Monitoring dashboard: live sensor streams and device alerts."
      }
    ]
  }
];
