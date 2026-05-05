const ADMIN_AUTHORITIES = ["ROLE_LIBRARIAN"];

export const isAdminAuthority = (authority?: string) => {
  return ADMIN_AUTHORITIES.includes(authority?.toUpperCase() ?? "");
};
