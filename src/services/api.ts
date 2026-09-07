/**
 * Backend-ready API abstraction layer.
 * In a production environment with a live server, replace simulated delays
 * with standard `fetch` or `axios` calls to your endpoints.
 */

export const simulateDelay = (ms: number = 800) => new Promise((resolve) => setTimeout(resolve, ms));

export function generateReferenceId(prefix: string = 'SLR'): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${year}-${random}`;
}
