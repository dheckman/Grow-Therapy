global.fetch = jest.fn();

global.mockFetchResolvedResponse = <T,>(ok: boolean, responseData: T, status?: number) => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok,
    status,
    json: jest.fn().mockResolvedValueOnce(responseData)
  });
};

global.mockFetchRejectedResponse = (error: Error) => {
  (fetch as jest.Mock).mockRejectedValueOnce(error);
};
