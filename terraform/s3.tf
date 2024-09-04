resource "aws_s3_bucket" "portfolio_site" {
  bucket = var.site_domain
}

resource "aws_s3_bucket_public_access_block" "portfolio_site" {
  bucket = aws_s3_bucket.portfolio_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "portfolio_site" {
  bucket = aws_s3_bucket.portfolio_site.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_object" "src_files" {
  for_each = fileset("../src/", "*")

  bucket        = aws_s3_bucket.portfolio_site.id
  key           = each.value
  source        = "../src/${each.value}"
  cache_control = "no-cache"
  content_type  = "text/html"
  etag          = filemd5("../src/${each.value}")
}

resource "aws_s3_bucket_policy" "portfolio_site" {
  bucket = aws_s3_bucket.portfolio_site.id
  policy = data.aws_iam_policy_document.portfolio_site.json
}
