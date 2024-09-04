resource "aws_acm_certificate" "cert" {
  provider          = aws.us_east_1
  domain_name       = var.site_domain
  validation_method = "DNS"

  subject_alternative_names = ["www.${var.site_domain}"]

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "cert_validation" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
