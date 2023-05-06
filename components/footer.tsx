import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>
        Made with{" "}
        <span role="img" aria-label="heart">
          &#10084;&#65039;
        </span>{" "}
        by &copy;{new Date().getFullYear()} <Link href="https://thaunze.me">Thaunze</Link>
      </p>
    </footer>
  );
};

export default Footer;
