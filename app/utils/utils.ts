export const getRandomArrayIndex = (array:any[]) => {
  const min = 0;
  const max = array?.length - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min ?? 0;
}
export const getVotedMovie = (data: any[]) => {
  if (!data?.length) return;
  // let a= []
  const a = data?.reduce((accumulator, current) => {
    let temp =
      accumulator?.vote_count > current?.vote_count ? accumulator : current;
    return temp;
  });
  // convereted to single array
  return [a];
};

export const simplifyWatchProviders = (data: any) => {
  let US_RENT: any = data?.US?.rent?.length > 0 ? data?.US?.rent : [];
  let US_BUY: any = data?.US?.buy?.length > 0 ? data?.US?.buy : [];
  let IN_RENT: any = data?.IN?.rent?.length > 0 ? data?.IN?.rent : [];
  let IN_BUY: any = data?.IN?.buy?.length > 0 ? data?.IN?.buy : [];
  const children = IN_BUY.concat(IN_RENT);

  const unique: any[] = children.filter(
    (v:any, i:any, a:any) =>
      a?.findIndex((v2:any) => v2?.provider_name === v?.provider_name) === i
  );
  return unique?.slice(0, 9);
};
export const objToQueryString = (obj: any) => {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs?.push(
      // encodeURIComponent(key) + "=" + decodeURI(obj?.[key])?.replace(/ /g, "+")
      encodeURIComponent(key) + "=" + decodeURI(obj?.[key])?.replace(/ /g, "%20")
    );
  }
  return keyValuePairs.join("&");
};
export const checkImageURL = (url: string | null) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};
