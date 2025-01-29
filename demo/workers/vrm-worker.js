'use strict';

// import { VRMLoader } from "../../dist/aframe-vrm.module.js";

importScripts('../../dist/aframe-vrm.js');

onmessage = (e) => {
  console.log("Message received from main script");
  const data = e.data[0];
  const path = e.data[1];
  const moduleSpecs = e.data[2];
  new VRMLoader().parse(data, path, moduleSpecs).then((result) => {
    console.log("Posting message back to main script");
    postMessage(result);
  }, (error) => {
    console.error(error);
  });
};
