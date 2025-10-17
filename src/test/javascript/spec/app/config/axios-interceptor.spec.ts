import axios from 'axios';
import sinon from 'sinon';

import setupAxiosInterceptors from 'app/config/axios-interceptor';

describe('Axios Interceptor', () => {
  describe('setupAxiosInterceptors', () => {
    let requestInterceptor: any;
    let responseInterceptor: any;
    let responseErrorInterceptor: any;
    const onUnauthenticated = sinon.spy();

    beforeEach(() => {
      // Reset spy
      onUnauthenticated.resetHistory();

      // Mock interceptors.use to capture the handlers
      sinon.stub(axios.interceptors.request, 'use').callsFake((fulfilled: any) => {
        requestInterceptor = fulfilled;
        return 0;
      });
      sinon.stub(axios.interceptors.response, 'use').callsFake((fulfilled: any, rejected: any) => {
        responseInterceptor = fulfilled;
        responseErrorInterceptor = rejected;
        return 0;
      });

      setupAxiosInterceptors(onUnauthenticated);
    });

    afterEach(() => {
      (axios.interceptors.request.use as any).restore();
      (axios.interceptors.response.use as any).restore();
    });

    it('onRequestSuccess is called on fulfilled request', () => {
      const config = requestInterceptor({ data: 'foo', url: '/test', headers: {} });
      expect(config).toMatchObject({
        data: 'foo',
      });
    });

    it('onResponseSuccess is called on fulfilled response', () => {
      expect(responseInterceptor({ data: 'foo' })).toEqual({ data: 'foo' });
    });

    it('onResponseError is called on rejected response with 403', async () => {
      const error = {
        response: {
          statusText: 'Forbidden',
          status: 403,
          data: { message: 'Access denied' },
        },
      };

      try {
        await responseErrorInterceptor(error);
      } catch (e) {
        // Expected to throw
      }

      expect(onUnauthenticated.calledOnce).toBe(true);
    });

    it('onResponseError is called on rejected response with 401', async () => {
      onUnauthenticated.resetHistory();
      const error = {
        response: {
          statusText: 'Unauthorized',
          status: 401,
          data: { message: 'Unauthorized' },
        },
      };

      try {
        await responseErrorInterceptor(error);
      } catch (e) {
        // Expected to throw
      }

      expect(onUnauthenticated.calledOnce).toBe(true);
    });
  });
});
