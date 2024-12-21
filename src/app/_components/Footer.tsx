import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-row items-center justify-between gap-6 max-md:flex-col">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NEXT LEVEL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://github.com/donghun-k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
