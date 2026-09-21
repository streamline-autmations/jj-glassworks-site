import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next-dev/**", ".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
