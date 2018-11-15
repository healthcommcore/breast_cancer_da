const url = "http://api.bcda.";
const hosts = {
  local: "dr809.test",
  dev: "hccdev.org",
  prod: "hccstaging.com"
}

export default (env) => {
  return url + (hosts[env]);
}
