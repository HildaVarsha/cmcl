import { BookCheck, Home, SatelliteIcon, User } from "lucide-react";

export const menuItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/users", label: "Users", icon: User },
  { href: "/stations", label: "Stations", icon: SatelliteIcon },
  { href: "/readings", label: "Readings", icon: BookCheck },
];
