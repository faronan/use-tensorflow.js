import * as mobilenet from "@tensorflow-models/mobilenet";
import { MobileNet } from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

export const loadModel = async () => {
  tf.setBackend("cpu");
  const model: MobileNet = await mobilenet.load();

  return model;
};
