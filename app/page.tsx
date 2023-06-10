import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return <main className={kanit.className}></main>;
}
