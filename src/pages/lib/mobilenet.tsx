import { MobileNet } from "@tensorflow-models/mobilenet";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

export const loadMobilenetModel = async () => {
  tf.setBackend("webgl");
  const model: MobileNet = await mobilenet.load();

  return model;
};

export interface predictions {
  className: string;
  probability: number;
}
