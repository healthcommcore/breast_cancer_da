const url = "http://api.bcda.";
const hosts = {
  local: "dr809.local",
  dev: "hccdev.org",
  prod: "hccstaging.com"
}

export default (env) => {
  return url + (hosts[env]);
}
