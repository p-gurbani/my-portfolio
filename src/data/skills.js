import ui from "../images/skills/ui.png";
import backend from "../images/skills/backend.png";
import tools from "../images/skills/tools.png";

// frontend skill icons
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import js from "../images/skills/js.png";
import typescript from "../images/skills/typescript.png";
import reactjs from "../images/skills/reactjs.png";
import redux from "../images/skills/redux.svg";
import styledcomponents from "../images/skills/styled-components.svg";
import api from "../images/skills/api.png";

// backend skill icons
import nodejs from "../images/skills/node-js.png";
import express from "../images/skills/expressjs-icon.svg";
import mongodb from "../images/skills/mongodb.png";
import mongoose from "../images/skills/mongoose.png";
import passportjs from "../images/skills/passportjs.png";

// tools skill icons
import github from "../images/skills/github.png";
import gitlab from "../images/skills/gitlab.png";
import bitbucket from "../images/skills/bitbucket.png";
import jira from "../images/skills/jira.png";

const skills = [
  {
    type: "FRONTEND",
    icon: ui,
    data: [
      {
        title: "html",
        icon: html,
      },
      {
        title: "css",
        icon: css,
      },
      {
        title: "javascript",
        icon: js,
        keywords: ["js"],
      },
      {
        title: "typescript",
        icon: typescript,
        keywords: ["ts"],
      },
      {
        title: "react.js",
        icon: reactjs,
        keywords: ["reactjs"],
      },
      {
        title: "redux",
        icon: redux,
        invertIcon: true,
      },
      {
        title: "styled-components",
        icon: styledcomponents,
        keywords: ["styled components"],
        invertIcon: true, // invert icon in dark mode
      },
      {
        title: "API",
        icon: api,
        keywords: ["rest"],
      },
    ],
  },
  {
    type: "BACKEND",
    icon: backend,
    data: [
      {
        title: "node.js",
        icon: nodejs,
      },
      {
        title: "express.js",
        icon: express,
        invertIcon: true,
      },
      {
        title: "mongodb",
        icon: mongodb,
      },
      {
        title: "mongoose",
        icon: mongoose,
        invertIcon: true,
      },
      {
        title: "REST API",
        icon: api,
      },
      {
        title: "authentication",
        icon: passportjs,
      },
    ],
  },
  {
    type: "TOOLS",
    icon: tools,
    invertIcon: true,
    data: [
      {
        title: "github",
        icon: github,
        invertIcon: true,
      },
      {
        title: "gitlab",
        icon: gitlab,
      },
      {
        title: "bitbucket",
        icon: bitbucket,
      },
      {
        title: "jira",
        icon: jira,
      },
    ],
  },
];

export default skills;
