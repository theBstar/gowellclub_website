/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  basePath = `/${repo}`;
}

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "",
  },
  images: {
    loader: "imgix",
    path: `${process.env.NEXT_PUBLIC_BASE_PATH}/`,
  },
};

module.exports = nextConfig;
