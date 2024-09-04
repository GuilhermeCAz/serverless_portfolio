data "aws_iam_policy_document" "portfolio_site" {
  statement {
    sid = "PublicReadGetObject"

    effect = "Allow"

    principals {
      identifiers = ["*"]
      type        = "*"
    }

    actions = ["s3:GetObject"]

    resources = [
      aws_s3_bucket.portfolio_site.arn,
      "${aws_s3_bucket.portfolio_site.arn}/*",
    ]
  }
}
