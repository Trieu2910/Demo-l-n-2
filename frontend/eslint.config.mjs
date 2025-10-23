import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // 👈 thêm dòng này
      "jsx-a11y/alt-text": "warn",                 // tùy chọn: chỉ cảnh báo
      "@next/next/no-img-element": "warn"          // tùy chọn: chỉ cảnh báo
    },
  },
];

export default eslintConfig;
