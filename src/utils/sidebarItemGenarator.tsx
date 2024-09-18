import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSideRoute =
  | {
      key: string;
      label: ReactNode;
      children?: TSideRoute[];
    }
  | undefined;
type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
const sidebarItemGenarator = (Item: TUserPath[], role: string) => {
  const sidebarRoute = Item.reduce((acc: TSideRoute[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }
    return acc;
  }, []);
  return sidebarRoute;
};

export default sidebarItemGenarator;
