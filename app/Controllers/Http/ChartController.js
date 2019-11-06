"use strict";
const shell = require("shelljs");
const Config = use("Config");
const museumURL = Config.get("app.museum.url");
const axios = require("axios");
const Logger = use("Logger");
const Helpers = use("Helpers");
const fs = require("fs");
class ChartController {
  async store({ request, response }) {
    const uploadDir = Helpers.tmpPath("uploads");
    let files = request.file("charts");
    const errors = [];

    let move = files =>
      new Promise((resolve, reject) => {
        if (files._files) {
          files.moveAll(uploadDir);
        } else {
          files.move(uploadDir);
        }
        setTimeout(() => resolve(fs.readdirSync(uploadDir)), 300);
      });

    files = await move(files);

    for (let file of files) {
      const filePath = `${uploadDir}/${file}`;
      Logger.info(`Uploading chart ${file}`);
      const data = shell.exec(
        `curl -Ls --data-binary @${filePath} ${museumURL}/api/charts`
      );

      if (data.code !== 0 || JSON.parse(data.stdout)["error"]) {
        errors.push(file);
        Logger.error(`Chart ${file} uploaded failed`);
        continue;
      }
      Logger.info(`Chart ${file} uploaded successfully`);
    }

    shell.exec(`rm -rf ${uploadDir}`);

    if (errors.length) {
      return response.json({
        message: `Failed to upload (${errors.join(",")})`
      });
    }

    return response.json({
      message: "Upload successful"
    });
  }

  async index({ response }) {
    const endpoint = `${museumURL}/api/charts`;
    try {
      const { data } = await axios.get(endpoint);
      if (!(data instanceof Object)) return [];
      return Object.keys(data).map(key => ({
        ...data[key][0],
        versions: data[key].map(chart => chart.version)
      }));
    } catch (error) {
      Logger.error(error.message);
      return response.status(500).json({ message: error.message });
    }
  }

  async show({ params, request }) {
    const { version } = request.get();
    const endpoint = `${museumURL}/api/charts/${params.id}`;
    try {
      const { data } = await axios.get(endpoint);
      let chart = data.find(chart => chart.version === version);
      return {
        ...chart,
        versions: data.map(chart => chart.version)
      };
    } catch (error) {
      Logger.error(error);
      return { message: error.message };
    }
  }

  async destroy({ params, request }) {
    const { version } = request.get();
    const endpoint = `${museumURL}/api/charts/${params.id}/${version}`;
    try {
      const { data } = await axios.delete(endpoint);
      return data;
    } catch (error) {
      Logger.error(error.message);
      return { message: error.message };
    }
  }
}

module.exports = ChartController;
