variable "aws_region" {
  type    = string
  default = "us-east-2"
}

variable "site_domain" {
  type        = string
  description = "The domain name to use for the static site"
}
