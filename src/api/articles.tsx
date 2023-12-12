export const getArticles = async (date: string, country: string) => {
  const requestUrl = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/${country}/all-access/${date}`;
  try {
    const response = await fetch(requestUrl);
    const responseData = await response.json();
    if (response.ok) {
      return { articles: responseData.items[0].articles };
    } else {
      return {
        error: responseData.detail
      };
    }
  } catch (error) {
    return { error };
  }
};
