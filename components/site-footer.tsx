import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 xl:py-8 sm:py-20 lg:px-8">
        <p className="mt-4 block text-center text-xs leading-8">
          &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
          reserved.
          <span className="mx-auto px-3">|</span> <span className="mr-1">Made with</span>
          <Icons.heart className="inline-flex text-xs h-4 w-4 mr-1 " />{"  "} by
          Aditya Chaturvedi
        </p>
      </div>
    </footer>
  )
}
