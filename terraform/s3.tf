resource "aws_s3_bucket" "portfolio_site" {
  bucket = var.site_domain
}

resource "aws_s3_bucket_ownership_controls" "portfolio_site" {
  bucket = aws_s3_bucket.portfolio_site.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
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
    key = "404.html"
  }
}

resource "aws_s3_object" "src_files" {
  for_each = fileset("../out", "**/*")

  bucket = aws_s3_bucket.portfolio_site.id
  key    = each.value
  source = "../out/${each.value}"
  content_type = lookup(
    {
      "html" = "text/html",
      "css"  = "text/css",
      "js"   = "application/javascript",
      "jpg"  = "image/jpeg",
      "svg"  = "image/svg+xml",
      "pdf"  = "application/pdf",
      "txt"  = "text/plain",
      "ico"  = "image/x-icon",
    },
    split(".", each.value)[length(split(".", each.value)) - 1],
    "application/octet-stream"
  )
  etag = filemd5("../out/${each.value}")
}

resource "aws_s3_bucket_policy" "portfolio_site" {
  bucket = aws_s3_bucket.portfolio_site.id
  policy = data.aws_iam_policy_document.portfolio_site.json
}
