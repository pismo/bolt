
function updateUrl(matchUrl) {
  return `${matchUrl}/`.replace('//', '/');
}

const routerData = (match) => {
  const data = match;
  data.url = updateUrl(match.url);
  return data;
};

export default routerData;
