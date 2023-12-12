declare function mockFetchResolvedResponse<T>(ok: boolean, responseData: T, status?: number): void;

declare function mockFetchRejectedResponse(error: Error): void;
