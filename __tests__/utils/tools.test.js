import { delay, routeMinDelay } from '../../src/utils/tools';

describe('Delay must...', () => {
  test('...exist.', () => {
    expect(delay).toBeTruthy();
  });
});

describe('RouteMinDelay must...', () => {
  test('...exist.', () => {
    expect(routeMinDelay).toBeTruthy();
  });
});
