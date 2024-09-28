resource "aws_acm_certificate" "cert" {
  provider          = aws.us_east_1
  domain_name       = var.site_domain
  validation_method = "DNS"

  subject_alternative_names = ["www.${var.site_domain}"]

  lifecycle {
    create_before_destroy = true
  }
}
