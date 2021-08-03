const url = "https://api.";
const hosts = {
  local: "consyderdecisiontool.dr809.test",
  dev: "consyderdecisiontool.hccdev.org",
  hccupdate: "consyderdecisiontool.hccupdate.org",
  prod: "consyderdecisiontool.org"
}

export default (env) => {
  return url + (hosts[env]);
}
