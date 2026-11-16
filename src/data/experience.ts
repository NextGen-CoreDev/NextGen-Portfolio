export type Job = {
  when: string;
  title: string;
  company: string;
  focus: string;
  summary?: string;
  bullets: string[];
  stack: string[];
  education?: boolean;
};

export const experience: Job[] = [
  {
    when: "Jan 2023 – Jan 2026",
    title: "Senior Software Engineer",
    company: "Rappi",
    focus: "Computer Vision & AI",
    summary: "AI-powered applications, computer vision solutions and scalable software systems.",
    bullets: [
      "Developed computer vision and deep learning solutions for image processing, object detection, segmentation and visual data analysis.",
      "Designed Python machine learning workflows with PyTorch and OpenCV.",
      "Owned model development, inference optimization and integration into production applications.",
      "Built backend APIs and automated processing pipelines for data-intensive applications.",
      "Contributed to architecture, performance optimization and cloud deployment workflows.",
    ],
    stack: ["Python", "PyTorch", "OpenCV", "YOLO", "FastAPI", "Docker", "PostgreSQL", "Cloud"],
  },
  {
    when: "Jul 2020 – Dec 2022",
    title: "Senior Software Engineer",
    company: "Blue Yonder",
    focus: "Geospatial AI & Data",
    summary: "Geospatial data processing, machine learning, data automation and scalable software.",
    bullets: [
      "Developed Python software to process, transform and analyze large geospatial datasets.",
      "GIS processing, spatial analysis, georeferencing and automated geospatial workflows.",
      "Implemented LiDAR and 3D point-cloud processing: filtering, registration, segmentation and feature extraction.",
      "Contributed to ML workflows for spatial and image-based datasets.",
      "Designed automated data pipelines and backend components, and optimized their performance.",
    ],
    stack: ["Python", "GIS", "LiDAR", "Open3D", "Point Clouds", "Machine Learning", "SQL"],
  },
  {
    when: "Jan 2018 – Jun 2020",
    title: "Software Engineer",
    company: "H1",
    focus: "CV & 3D Data",
    summary: "Remote role in Python development, computer vision, 3D data processing and application engineering.",
    bullets: [
      "Built components for image processing, computer vision and complex data transformation.",
      "Point-cloud manipulation, geometric analysis and 3D reconstruction workflows.",
      "Photogrammetry, reconstruction and visualization of spatial datasets.",
      "Interactive 3D viewers and data visualization with Three.js, WebGL and CesiumJS.",
    ],
    stack: ["Python", "OpenCV", "Photogrammetry", "3D Reconstruction", "Three.js", "WebGL", "CesiumJS"],
  },
  {
    when: "Oct 2015 – Dec 2017",
    title: "Software Engineer",
    company: "Teradata",
    focus: "Data Engineering & Backend",
    summary: "Enterprise application development, backend systems, data processing and performance.",
    bullets: [
      "Developed and maintained backend components for data-driven applications.",
      "Python data processing, automation, ETL and transformation workflows.",
      "Databases, SQL, data integration and application-level data management.",
      "Optimization and troubleshooting of applications handling complex datasets.",
    ],
    stack: ["Python", "SQL", "ETL", "Data Engineering", "APIs", "Architecture"],
  },
  {
    when: "2012 – 2015",
    title: "BCompSc, Computer Science",
    company: "Universidad Autónoma de Zacatecas",
    focus: "Education",
    bullets: [],
    stack: [],
    education: true,
  },
];

export const skills = [
  "Computer Vision", "Python", "LiDAR", "GIS", "Geospatial Data", "Image Processing", "Point Cloud to BIM",
  "Machine Learning", "Deep Learning", "Remote Sensing", "Three.js", "ROS", "PostGIS", "AI",
  "Back-End Development", "PyTorch", "OpenCV", "Photogrammetry", "Object Detection & Tracking",
];

export const tools = [
  "Python", "PyTorch", "OpenCV", "Open3D", "PCL", "PDAL", "GDAL", "PostGIS", "QGIS", "COLMAP",
  "Nerfstudio", "ROS2", "Three.js", "CesiumJS", "Potree", "FastAPI", "Docker", "YOLO",
];
