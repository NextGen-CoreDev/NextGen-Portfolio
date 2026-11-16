import type { Service } from "./types";

export const services: Service[] = [
  {
    "id": "lidar",
    "label": "Process LiDAR & point clouds",
    "kicker": "LiDAR & point clouds",
    "title": "Clean, classified point clouds, at real-world size.",
    "desc": "From raw scans to ground, buildings, vegetation and the features you actually need, without choking on billions of points.",
    "feats": [
      [
        "Classify & segment",
        "Ground, buildings, vegetation, roofs and custom classes, rule-based or learned."
      ],
      [
        "Register & compare",
        "Scan alignment, georeferencing and change detection between epochs."
      ],
      [
        "Extract & model",
        "DTM / DSM generation, feature extraction and point cloud to BIM."
      ]
    ],
    "tools": [
      "PDAL",
      "Open3D",
      "PCL",
      "LAS / LAZ",
      "E57",
      "PLY"
    ],
    "done": {
      "project": "tak24",
      "label": "Tak24: roof planes and roof lines from LiDAR"
    }
  },
  {
    "id": "recon",
    "label": "Reconstruct in 3D",
    "kicker": "3D reconstruction",
    "title": "Photos and scans in, a usable 3D model out.",
    "desc": "Photogrammetry, Gaussian splatting and NeRF pipelines, plus the unglamorous part: meshes that are clean and light enough to use.",
    "feats": [
      [
        "Photogrammetry",
        "COLMAP-based pipelines from drone or handheld imagery."
      ],
      [
        "Splats & NeRF",
        "Gaussian splatting and NeRF for photoreal capture and viewing."
      ],
      [
        "Mesh & twins",
        "Point cloud to mesh, cleanup, decimation and digital twins."
      ]
    ],
    "tools": [
      "COLMAP",
      "Nerfstudio",
      "Open3D",
      "Python"
    ],
    "done": {
      "project": "raycasting",
      "label": "Fish Visual Analysis: ray casting on a reef habitat mesh"
    }
  },
  {
    "id": "geoai",
    "label": "Add AI to aerial imagery",
    "kicker": "Geospatial AI",
    "title": "Detection and segmentation that respects coordinates.",
    "desc": "Models for satellite, aerial and drone imagery, wired into GIS automation and spatial pipelines so results land on the map correctly.",
    "feats": [
      [
        "Detect & segment",
        "Objects, buildings, roofs and land cover from overhead imagery."
      ],
      [
        "GIS automation",
        "Georeferencing, reprojection and spatial analysis without manual QGIS steps."
      ],
      [
        "Spatial pipelines",
        "PostGIS-backed workflows that scale from one tile to a country."
      ]
    ],
    "tools": [
      "PyTorch",
      "GDAL",
      "PostGIS",
      "QGIS",
      "Remote Sensing"
    ],
    "done": {
      "project": "tak24",
      "label": "Tak24: roofs measured from public geospatial data"
    }
  },
  {
    "id": "cv",
    "label": "Ship a vision model",
    "kicker": "Computer vision & deep learning",
    "title": "From training data to a deployed model.",
    "desc": "Detection, segmentation and tracking that are fast enough for production, not only accurate in a notebook.",
    "feats": [
      [
        "Detect, segment, track",
        "YOLO-class detectors, segmentation and multi-object tracking."
      ],
      [
        "Calibrate & fuse",
        "Camera calibration and LiDAR–camera fusion."
      ],
      [
        "Optimize inference",
        "Profiling, export and serving so latency fits the budget."
      ]
    ],
    "tools": [
      "PyTorch",
      "OpenCV",
      "YOLO",
      "FastAPI",
      "Docker"
    ],
    "done": {
      "section": "#experience",
      "label": "Rappi: production CV and inference optimization"
    }
  },
  {
    "id": "viewer",
    "label": "Build a 3D viewer or map",
    "kicker": "3D viewers & interactive maps",
    "title": "Web viewers that stay fast on big data.",
    "desc": "Point clouds, meshes and splats in the browser, and map dashboards that don’t fall over when the dataset gets real.",
    "feats": [
      [
        "Point cloud viewers",
        "Potree-style streaming for billions of points."
      ],
      [
        "Globes & maps",
        "CesiumJS and map dashboards over large geospatial layers."
      ],
      [
        "Custom 3D UI",
        "Three.js / WebGL scenes for inspection and playback."
      ]
    ],
    "tools": [
      "Three.js",
      "WebGL",
      "CesiumJS",
      "Potree"
    ],
    "done": {
      "project": "raycasting",
      "label": "Fish Visual Analysis: 3D POV playback viewer"
    }
  },
  {
    "id": "backend",
    "label": "Run heavy jobs in the cloud",
    "kicker": "AI backends",
    "title": "APIs and pipelines that keep running.",
    "desc": "Backends that run models and heavy 3D jobs reliably in the cloud, with queues, monitoring and sane failure modes.",
    "feats": [
      [
        "APIs",
        "FastAPI services for models, uploads and results."
      ],
      [
        "Pipelines",
        "Batch and streaming jobs, retries and observability."
      ],
      [
        "Deploy",
        "Dockerised, cloud-deployed, documented for your team."
      ]
    ],
    "tools": [
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "MQTT",
      "Cloud"
    ],
    "done": {
      "project": "iot",
      "label": "IoT Monitoring: real-time telemetry backend"
    }
  },
  {
    "id": "robotics",
    "label": "Give a robot perception",
    "kicker": "Robotics perception",
    "title": "ROS2 nodes for mapping, localization and 3D sensing.",
    "desc": "Sensor pipelines that behave the same on the robot as they do in simulation.",
    "feats": [
      [
        "SLAM",
        "Mapping and localization with LiDAR and IMU."
      ],
      [
        "Perception",
        "Obstacle detection and 3D sensing nodes."
      ],
      [
        "Sim-to-real",
        "Validate point clouds and behaviour against real runs."
      ]
    ],
    "tools": [
      "ROS2",
      "LiDAR",
      "IMU",
      "Python",
      "Docker"
    ],
    "done": {
      "project": "lidar-slam",
      "label": "LiDAR SLAM Robot: mapping & localization"
    }
  }
];
