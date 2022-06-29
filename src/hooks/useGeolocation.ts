import { useState, useEffect } from "react";

export default function useGeolocation<T extends Record<string, any>>(options: T) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const successHandler: PositionCallback = (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    const errorHandler: PositionErrorCallback = (e) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
    const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}
