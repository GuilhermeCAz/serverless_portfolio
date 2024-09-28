output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.cdn.domain_name
}


output "validation_records" {
  value = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  }
}
