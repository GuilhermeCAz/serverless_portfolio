# Serverless Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)](https://nextjs.org/)
[![Terraform](https://img.shields.io/badge/Terraform-844FBA?logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Amazon S3](https://img.shields.io/badge/Amazon%20S3-569A31?logo=amazons3&logoColor=white)](https://aws.amazon.com/s3/)
[![AWS IAM](https://img.shields.io/badge/AWS%20IAM-DD344C?logo=amazoniam&logoColor=white)](https://aws.amazon.com/iam/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=white)](https://postcss.io/)
[![Prettier](https://img.shields.io/badge/Prettier-darkblue?logo=prettier)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint)](https://eslint.org/)

## About

This project is a portfolio website created using [Next.js](https://nextjs.org/). Its main purpose is to showcase my skills and projects, as if it were a resume. It uses Terraform to setup AWS resources (ACM, CloudFront, IAM, S3).

The DNS Hosting and the domain registration are done elsewhere due to AWS costs, but these two could easily be done exclusively using AWS Route 53. This means that the infrastructure is _not_ fully managed by Terraform, and there are some manual steps to be done.

You can find the website at [guilhermecaz.site](https://guilhermecaz.site).

## Usage

If you'd like to build a website based on this project, you can clone the repository, modify the Next.js files, build the project, and use terraform to deploy it to AWS.

### Clone the repository

```bash
git clone https://github.com/guilhermecaz/serverless_portfolio.git
```

### Install dependencies

```bash
cd serverless_portfolio
npm install
```

### Modify the files according to your needs

```bash
cd src/app
```

### Build the project

```bash
npm run build
```

### Deploy the project

```bash
cd terraform
terraform init
terraform apply
```

Terraform will then output the CloudFront domain and ACM validation records. These should be used on the domain registrar / DNS provider.
