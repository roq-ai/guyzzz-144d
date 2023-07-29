const mapping: Record<string, string> = {
  clients: 'client',
  'notion-templates': 'notion_template',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
