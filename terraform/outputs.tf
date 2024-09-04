output "nameservers" {
  value       = aws_route53_zone.main.name_servers
  description = "Nameservers to set in the hosting provider"
}
