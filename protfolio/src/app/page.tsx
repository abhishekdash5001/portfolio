import portfolio from "@/content/portfolio.json"
import Image from "next/image";

export default function Home() {
  return (
  <>
{JSON.stringify(portfolio)}
  Hello World
  </>
  );
}
