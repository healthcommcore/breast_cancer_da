const url = "https://api.";
const hosts = {
  local: "bcda.dr809.test",
  dev: "bcda.hccdev.org",
  hccupdate: "bcda.hccupdate.org",
  prod: "consyderdecisiontool.org"
}

export default (env) => {
  return url + (hosts[env]);
}
