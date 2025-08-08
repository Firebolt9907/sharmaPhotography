import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route("photos", "routes/photos.tsx"),
    route("paintings", "routes/paintings.tsx"),
] satisfies RouteConfig;