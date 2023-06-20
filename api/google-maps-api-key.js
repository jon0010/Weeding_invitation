export default (_, res) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  res.status(200).json({ apiKey: googleMapsApiKey });
};
