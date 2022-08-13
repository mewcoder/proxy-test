const { readFileSync } = require("fs");
const { resolve } = require("path");

const configPath = "./proxy.confg.json";
/**
 * @desc 动态切换proxy target 无需重启
 *      修改proxy.config.json 的 target的值（routes中的key或者目标地址）
 */
let current = "";
function getRouter(ctx) {
  const jsonStr = readFileSync(resolve(__dirname, configPath), "utf-8");
  const proxyMap = JSON.parse(jsonStr);
  const { target, routes } = proxyMap;
  const res = routes[target] || target;
  if (current !== res) console.log(`switch-proxy-target: ${res}`);
  current = res;
  return res;
}

module.exports = {
  getRouter,
};
