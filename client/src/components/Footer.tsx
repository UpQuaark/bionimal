import { Link } from "wouter";
import { PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">Bionimal</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Biometric Identity for Animals.<br />
              API-first. Developer Ready.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/api">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    Documentation
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/api">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    API Reference
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    Changelog
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-base text-muted-foreground">
                  Blog (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    Careers
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    Privacy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    Terms
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    Data Processing
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-base text-muted-foreground hover:text-foreground cursor-pointer">
                    Cookie Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Bionimal, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
